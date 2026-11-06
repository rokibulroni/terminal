/**
 * Data pipeline: validates data/tools/** against the schema and the
 * registry, then generates every derived artifact:
 *
 *   src/data/generated/manifest.json      bundled into the app
 *   public/api/v1/manifest.json           public read-only API
 *   public/api/v1/tools/<cat>/<slug>.json full tool data
 *   public/api/v1/tools/<cat>/<slug>.md   markdown alternate (for agents)
 *   public/api/v1/search-index.json       compact client search index
 *   public/sitemap.xml, public/llms.txt, public/llms-full.txt
 *
 * Usage: node scripts/build-data.ts [--check]
 *   --check  validate only, write nothing (exit 1 on errors)
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';
import { CATEGORIES, SITE, FEATURED_TOOLS, REDIRECTS } from '../src/data/registry.ts';
import { GUIDES } from '../src/data/guides.ts';
import { GLOSSARY } from '../src/data/glossary.ts';
import { STATIC_ROUTES, toolPath, categoryPath, guidePath, toolApiPath, toolMarkdownPath } from '../src/data/routes.ts';
import type { Manifest, SearchIndex, Tool, ToolSource, ToolSummary } from '../src/data/types.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = join(ROOT, 'data/tools');
const CHECK_ONLY = process.argv.includes('--check');

const errors: string[] = [];
const warnings: string[] = [];

// ───────────────────────────── Schema ─────────────────────────────
const nonEmpty = z.string().trim().min(1);
const CommandSchema = z
  .object({
    id: z.number().int().positive(),
    category: nonEmpty,
    command: nonEmpty,
    example: nonEmpty,
    explanation: nonEmpty,
  })
  .strict();

const InstallSchema = z
  .object({
    apt: z.string(), dnf: z.string(), pacman: z.string(), brew: z.string(), pip: z.string(),
    pipx: z.string(), go: z.string(), cargo: z.string(), npm: z.string(), docker: z.string(),
    windows: z.string(), other: z.string(),
  })
  .partial()
  .strict();

const ToolSchema = z
  .object({
    tool: nonEmpty,
    name: nonEmpty.optional(),
    description: nonEmpty,
    tags: z.array(nonEmpty).optional(),
    homepage: z.string().url().optional(),
    docs: z.string().url().optional(),
    install: InstallSchema.optional(),
    related: z.array(nonEmpty).optional(),
    aliases: z.array(nonEmpty).optional(),
    platforms: z.array(nonEmpty).optional(),
    total_commands: z.number().int().nonnegative(),
    commands: z.array(CommandSchema).min(1),
  })
  .strict();

// ───────────────────────────── Load ─────────────────────────────
const tools = new Map<string, Tool>(); // slug -> tool

for (const category of readdirSync(DATA_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort()) {
  const dir = join(DATA_DIR, category);
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
    const slug = file.slice(0, -5);
    const rel = `data/tools/${category}/${file}`;
    let raw: unknown;
    try {
      raw = JSON.parse(readFileSync(join(dir, file), 'utf8'));
    } catch (e) {
      errors.push(`${rel}: invalid JSON — ${(e as Error).message}`);
      continue;
    }
    const parsed = ToolSchema.safeParse(raw);
    if (!parsed.success) {
      for (const issue of parsed.error.issues.slice(0, 5)) {
        errors.push(`${rel}: ${issue.path.join('.') || '(root)'} — ${issue.message}`);
      }
      continue;
    }
    const src = parsed.data as ToolSource;
    if (tools.has(slug)) {
      errors.push(`${rel}: slug "${slug}" is already used by ${tools.get(slug)!.category}/${slug}`);
      continue;
    }
    if (src.total_commands !== src.commands.length) {
      errors.push(`${rel}: total_commands is ${src.total_commands} but there are ${src.commands.length} commands`);
    }
    const ids = new Set<number>();
    const seen = new Map<string, number>();
    for (const c of src.commands) {
      if (ids.has(c.id)) errors.push(`${rel}: duplicate command id ${c.id}`);
      ids.add(c.id);
      const key = c.command.trim();
      if (seen.has(key)) warnings.push(`${rel}: command "${key.slice(0, 50)}" appears twice (ids ${seen.get(key)} and ${c.id})`);
      seen.set(key, c.id);
    }
    tools.set(slug, {
      ...src,
      slug,
      category,
      name: src.name ?? src.tool,
      url: SITE.url + toolPath(category, slug),
    });
  }
}

// ─────────────────────── Registry cross-checks ───────────────────────
const categoryIds = new Set(CATEGORIES.map((c) => c.id));
const listed = new Set<string>();
for (const cat of CATEGORIES) {
  for (const group of cat.groups) {
    for (const slug of group.tools) {
      if (!tools.has(slug)) errors.push(`registry: category "${cat.id}" lists unknown tool "${slug}"`);
      listed.add(slug);
    }
  }
}
for (const tool of tools.values()) {
  if (!categoryIds.has(tool.category)) errors.push(`data/tools/${tool.category}: directory is not a registered category`);
  if (!listed.has(tool.slug)) errors.push(`registry: tool "${tool.category}/${tool.slug}" exists but is not listed in any group`);
  const inOwnCategory = CATEGORIES.find((c) => c.id === tool.category)?.groups.some((g) => g.tools.includes(tool.slug));
  if (!inOwnCategory) errors.push(`registry: tool "${tool.slug}" is not listed in its own category "${tool.category}"`);
  for (const r of tool.related ?? []) {
    if (!tools.has(r)) errors.push(`data/tools/${tool.category}/${tool.slug}.json: related tool "${r}" does not exist`);
    if (r === tool.slug) errors.push(`data/tools/${tool.category}/${tool.slug}.json: related lists itself`);
  }
}
for (const slug of FEATURED_TOOLS) if (!tools.has(slug)) errors.push(`registry: featured tool "${slug}" does not exist`);
const guideSlugs = new Set<string>();
for (const g of GUIDES) {
  if (guideSlugs.has(g.slug)) errors.push(`guides: duplicate slug "${g.slug}"`);
  guideSlugs.add(g.slug);
  for (const s of g.steps) if (s.tool && !tools.has(s.tool)) errors.push(`guides/${g.slug}: step "${s.title}" references unknown tool "${s.tool}"`);
}
const termSlugs = new Set(GLOSSARY.map((t) => t.slug));
for (const t of GLOSSARY) {
  for (const s of t.tools ?? []) if (!tools.has(s)) errors.push(`glossary/${t.slug}: unknown tool "${s}"`);
  for (const s of t.see ?? []) if (!termSlugs.has(s)) errors.push(`glossary/${t.slug}: unknown term "${s}"`);
}

// ───────────────────────────── Report ─────────────────────────────
const commandTotal = [...tools.values()].reduce((n, t) => n + t.commands.length, 0);
if (warnings.length && process.env.DATA_VERBOSE) for (const w of warnings) console.warn(`  warn  ${w}`);
console.log(
  `data: ${CATEGORIES.length} categories, ${tools.size} tools, ${commandTotal} commands, ${GUIDES.length} guides, ${GLOSSARY.length} terms` +
    (warnings.length ? ` (${warnings.length} warnings; DATA_VERBOSE=1 to list)` : ''),
);
if (errors.length) {
  for (const e of errors) console.error(`  error ${e}`);
  console.error(`data: ${errors.length} error(s)`);
  process.exit(1);
}
if (CHECK_ONLY) process.exit(0);

// ───────────────────────────── lastmod ─────────────────────────────
const lastmod = new Map<string, string>();
try {
  const log = execSync('git log --format=%cs --name-only -- data/tools', { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  let date = '';
  for (const line of log.split('\n')) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(line)) date = line;
    else if (line.startsWith('data/tools/') && !lastmod.has(line)) lastmod.set(line, date);
  }
} catch {
  /* not a git checkout — omit lastmod */
}
const today = new Date().toISOString().slice(0, 10);
const toolLastmod = (t: Tool) => lastmod.get(`data/tools/${t.category}/${t.slug}.json`) ?? today;

// ───────────────────────────── Manifest ─────────────────────────────
const summaries: Record<string, ToolSummary> = {};
for (const t of tools.values()) {
  const sections: string[] = [];
  for (const c of t.commands) if (!sections.includes(c.category)) sections.push(c.category);
  summaries[t.slug] = {
    slug: t.slug,
    name: t.name,
    category: t.category,
    description: t.description,
    tags: t.tags ?? [],
    commandCount: t.commands.length,
    sections,
    related: t.related ?? [],
    ...(t.homepage && { homepage: t.homepage }),
    ...(t.docs && { docs: t.docs }),
    ...(t.install && { install: t.install }),
    ...(t.platforms && { platforms: t.platforms }),
    lastmod: toolLastmod(t),
  };
}

const manifest: Manifest = {
  version: 1,
  generatedAt: new Date().toISOString(),
  totals: { categories: CATEGORIES.length, tools: tools.size, commands: commandTotal },
  categories: CATEGORIES.map((c) => {
    const slugs = new Set(c.groups.flatMap((g) => g.tools));
    return {
      id: c.id,
      name: c.name,
      icon: c.icon,
      description: c.description,
      intro: c.intro,
      groups: c.groups.map((g) => ({ name: g.name, tools: [...g.tools] })),
      toolCount: slugs.size,
      commandCount: [...slugs].reduce((n, s) => n + (tools.get(s)?.commands.length ?? 0), 0),
    };
  }),
  tools: summaries,
};

// ───────────────────────────── Writers ─────────────────────────────
const write = (rel: string, content: string) => {
  const abs = join(ROOT, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content);
};
const json = (v: unknown) => JSON.stringify(v);

if (existsSync(join(ROOT, 'public/api/v1'))) rmSync(join(ROOT, 'public/api/v1'), { recursive: true });

write('src/data/generated/manifest.json', json(manifest));
write('public/api/v1/manifest.json', JSON.stringify(manifest, null, 2));

const toMarkdown = (t: Tool) => {
  const lines = [
    `# ${t.name}`,
    '',
    `> ${t.description}`,
    '',
    `- Category: ${manifest.categories.find((c) => c.id === t.category)?.name ?? t.category}`,
    `- Commands: ${t.commands.length}`,
    `- Page: ${t.url}`,
  ];
  if (t.homepage) lines.push(`- Homepage: ${t.homepage}`);
  if (t.docs) lines.push(`- Documentation: ${t.docs}`);
  if (t.tags?.length) lines.push(`- Tags: ${t.tags.join(', ')}`);
  if (t.install && Object.keys(t.install).length) {
    lines.push('', '## Install', '');
    for (const [k, v] of Object.entries(t.install)) lines.push(`- ${k}: \`${v}\``);
  }
  let section = '';
  for (const c of t.commands) {
    if (c.category !== section) {
      section = c.category;
      lines.push('', `## ${section}`, '');
    }
    lines.push(`### ${c.command.split('\n')[0].slice(0, 120)}`, '', '```bash', c.command, '```', '');
    if (c.example && c.example !== c.command) lines.push('Example:', '', '```bash', c.example, '```', '');
    lines.push(c.explanation, '');
  }
  if (t.related?.length) {
    lines.push('## Related tools', '');
    for (const r of t.related) {
      const rt = tools.get(r)!;
      lines.push(`- [${rt.name}](${SITE.url + toolPath(rt.category, rt.slug)})`);
    }
  }
  return lines.join('\n') + '\n';
};

for (const t of tools.values()) {
  const { url, ...rest } = t;
  write(
    `public${toolApiPath(t.category, t.slug)}`,
    JSON.stringify({ ...rest, url, markdown: SITE.url + toolMarkdownPath(t.category, t.slug) }),
  );
  write(`public${toolMarkdownPath(t.category, t.slug)}`, toMarkdown(t));
}

// Search index
const toolList = [...tools.values()];
const index: SearchIndex = {
  version: 1,
  tools: toolList.map((t) => [t.slug, t.category, t.name, t.description, (t.tags ?? []).concat(t.aliases ?? []).join(' ')]),
  commands: toolList.flatMap((t, i) =>
    t.commands.map((c) => [i, c.id, c.command, c.explanation, c.category] as [number, number, string, string, string]),
  ),
};
write('public/api/v1/search-index.json', json(index));

// Sitemap
const urls: { loc: string; lastmod: string; changefreq: string; priority: number }[] = [];
for (const r of STATIC_ROUTES.filter((r) => r.index)) urls.push({ loc: r.path, lastmod: today, changefreq: r.changefreq, priority: r.priority });
for (const c of manifest.categories) {
  const dates = c.groups.flatMap((g) => g.tools).map((s) => summaries[s].lastmod ?? today).sort();
  urls.push({ loc: categoryPath(c.id), lastmod: dates.at(-1) ?? today, changefreq: 'weekly', priority: 0.8 });
}
for (const t of toolList) urls.push({ loc: toolPath(t.category, t.slug), lastmod: toolLastmod(t), changefreq: 'monthly', priority: 0.7 });
for (const g of GUIDES) urls.push({ loc: guidePath(g.slug), lastmod: g.updated, changefreq: 'monthly', priority: 0.7 });
write(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((u) => `  <url><loc>${SITE.url}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority.toFixed(1)}</priority></url>`)
      .join('\n') +
    '\n</urlset>\n',
);

// llms.txt (https://llmstxt.org)
const llms = [
  `# ${SITE.name}`,
  '',
  `> ${SITE.description}`,
  '',
  `${SITE.name} is a free, open-source (MIT) reference of ${commandTotal.toLocaleString('en-US')} terminal commands across ${tools.size} tools and ${CATEGORIES.length} categories. Every command has a copy-ready form, an example and a plain-English explanation. Content is intended for learning, administration and authorised security testing.`,
  '',
  'Machine-readable access (no key required, read-only, CORS enabled):',
  '',
  `- [Manifest](${SITE.url}/api/v1/manifest.json): every category and tool with summaries and counts`,
  `- [Search index](${SITE.url}/api/v1/search-index.json): compact index of all tools and commands`,
  `- Tool data: \`${SITE.url}/api/v1/tools/{category}/{slug}.json\` (JSON) or \`.md\` (Markdown)`,
  `- [OpenAPI description](${SITE.url}/api/openapi.json)`,
  `- [Full text for LLMs](${SITE.url}/llms-full.txt)`,
  '',
  '## Guides',
  '',
  ...GUIDES.map((g) => `- [${g.title}](${SITE.url}${guidePath(g.slug)}): ${g.description}`),
  ...(GUIDES.length ? [] : ['- (none yet)']),
  '',
  ...manifest.categories.flatMap((c) => [
    `## ${c.name}`,
    '',
    c.description,
    '',
    ...[...new Set(c.groups.flatMap((g) => g.tools))].map((s) => {
      const t = summaries[s];
      return `- [${t.name}](${SITE.url}${toolMarkdownPath(t.category, t.slug)}): ${t.description} (${t.commandCount} commands)`;
    }),
    '',
  ]),
  '## Optional',
  '',
  `- [Glossary](${SITE.url}/glossary): definitions of security and networking terms`,
  `- [Developers](${SITE.url}/developers): API documentation`,
  `- [Source code](${SITE.repo})`,
  '',
].join('\n');
write('public/llms.txt', llms);

const llmsFull = [
  `# ${SITE.name} — full reference`,
  '',
  `> ${SITE.description}`,
  '',
  `Generated ${today}. ${tools.size} tools, ${commandTotal} commands. Source: ${SITE.url}`,
  '',
  ...toolList.map((t) => toMarkdown(t).replace(/^# /, '# Tool: ')),
].join('\n');
write('public/llms-full.txt', llmsFull);

// Cloudflare Pages redirects (static block + legacy data URLs)
const redirects = [
  '# Generated by scripts/build-data.ts — do not edit by hand.',
  ...REDIRECTS.map((r) => `${r.from} ${r.to} 301`),
  '/jsons/:category/:tool /api/v1/tools/:category/:tool 301',
  '/home / 301',
  '/categories / 301',
  '/api /developers 302',
  '',
].join('\n');
write('public/_redirects', redirects);

console.log(`data: wrote manifest, ${tools.size} tool files (+markdown), search index, sitemap (${urls.length} urls), llms.txt`);
