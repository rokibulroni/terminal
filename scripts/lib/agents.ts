/**
 * Agent-facing outputs: guide/glossary Markdown and Agent Skills
 * (https://agentskills.io) — a master "router" skill plus one skill per
 * category, each with per-tool reference files loaded on demand.
 */
import type { Guide } from '../../src/data/guides.ts';
import type { GlossaryTerm } from '../../src/data/glossary.ts';
import type { Manifest, Tool } from '../../src/data/types.ts';
import { guidePath, toolMarkdownPath, MASTER_SKILL, MCP_PATH, skillName } from '../../src/data/routes.ts';

interface Site {
  name: string;
  url: string;
  repo: string;
}

export interface SkillFile {
  /** Path relative to the skill folder, e.g. "SKILL.md" or "tools/nmap.md". */
  path: string;
  content: string;
}

export interface Skill {
  name: string;
  title: string;
  description: string;
  category?: string;
  toolCount: number;
  commandCount: number;
  files: SkillFile[];
}

export const SKILL_NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
export const SKILL_DESCRIPTION_MAX = 1024;

const clip = (s: string, max: number) => (s.length <= max ? s : s.slice(0, max - 1).replace(/[\s,;]+\S*$/, '') + '…');
const frontmatter = (name: string, description: string) =>
  ['---', `name: ${name}`, `description: ${JSON.stringify(description)}`, 'license: MIT', '---', ''].join('\n');

const SAFETY =
  'Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.';

const PLACEHOLDERS =
  'Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.';

// ───────────────────────────── Guides & glossary ─────────────────────────────
export function guideToMarkdown(g: Guide, site: Site, tools: Map<string, Tool>) {
  const lines = [
    `# ${g.title}`,
    '',
    `> ${g.description}`,
    '',
    `- Level: ${g.level}`,
    `- Time: ~${g.minutes} minutes`,
    `- Tags: ${g.tags.join(', ')}`,
    `- Page: ${site.url}${guidePath(g.slug)}`,
    `- Updated: ${g.updated}`,
    '',
    g.intro,
    '',
  ];
  if (g.prerequisites?.length) lines.push('## Prerequisites', '', ...g.prerequisites.map((p) => `- ${p}`), '');
  g.steps.forEach((s, i) => {
    lines.push(`## ${i + 1}. ${s.title}`, '', s.body, '');
    const t = s.tool ? tools.get(s.tool) : undefined;
    if (t) lines.push(`Tool: [${t.name}](${site.url}${toolMarkdownPath(t.category, t.slug)})`, '');
    for (const c of s.commands ?? []) {
      lines.push('```bash', c.command, '```', '');
      if (c.note) lines.push(c.note, '');
    }
  });
  if (g.outro) lines.push('## Wrap-up', '', g.outro, '');
  return lines.join('\n');
}

export function glossaryToMarkdown(terms: GlossaryTerm[], site: Site, tools: Map<string, Tool>) {
  const bySlug = new Map(terms.map((t) => [t.slug, t]));
  const lines = [`# ${site.name} glossary`, '', `Definitions of security and networking terms used across ${site.url}.`, ''];
  for (const t of [...terms].sort((a, b) => a.term.localeCompare(b.term))) {
    lines.push(`## ${t.term}`, '', t.definition, '');
    const ts = (t.tools ?? []).map((s) => tools.get(s)).filter((x): x is Tool => !!x);
    if (ts.length) lines.push(`Tools: ${ts.map((x) => `[${x.name}](${site.url}${toolMarkdownPath(x.category, x.slug)})`).join(', ')}`, '');
    const see = (t.see ?? []).map((s) => bySlug.get(s)?.term).filter(Boolean);
    if (see.length) lines.push(`See also: ${see.join(', ')}`, '');
  }
  return lines.join('\n');
}

// ───────────────────────────── Skills ─────────────────────────────
export function buildSkills(opts: {
  site: Site;
  manifest: Manifest;
  tools: Map<string, Tool>;
  guides: Guide[];
  glossary: GlossaryTerm[];
  toMarkdown: (t: Tool) => string;
}): Skill[] {
  const { site, manifest, tools, guides, glossary, toMarkdown } = opts;
  const skills: Skill[] = [];

  for (const c of manifest.categories) {
    const name = skillName(c.id);
    const slugs = [...new Set(c.groups.flatMap((g) => g.tools))];
    const catTools = slugs.map((s) => tools.get(s)!).filter(Boolean);
    const toolNames = catTools.map((t) => t.name).join(', ');
    const description = clip(
      `Copy-ready ${c.name} command reference (${c.description.replace(/\.$/, '')}) covering ${toolNames}. ` +
        `Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a ${c.name.toLowerCase()} task from the terminal.`,
      SKILL_DESCRIPTION_MAX,
    );
    const body = [
      frontmatter(name, description),
      `# ${c.name} commands`,
      '',
      c.intro,
      '',
      '## How to use this skill',
      '',
      '1. Pick the tool from the index below that fits the user’s task.',
      '2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.',
      `3. ${PLACEHOLDERS}`,
      '4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.',
      `5. ${SAFETY}`,
      '',
      `If a tool you need isn’t listed here, the \`${MASTER_SKILL}\` skill lists every category, or fetch \`${site.url}/api/v1/manifest.json\`.`,
      '',
      '## Tool index',
      '',
    ];
    for (const g of c.groups) {
      body.push(`### ${g.name}`, '');
      for (const s of g.tools) {
        const t = tools.get(s);
        if (!t) continue;
        const sections = [...new Set(t.commands.map((x) => x.category))];
        const shown = sections.slice(0, 8).join(', ') + (sections.length > 8 ? `, +${sections.length - 8} more` : '');
        body.push(`- **${t.name}** — ${t.description} [\`tools/${t.slug}.md\`](tools/${t.slug}.md), ${t.commands.length} commands. Sections: ${shown}.`);
      }
      body.push('');
    }
    body.push(
      '## Fresh data',
      '',
      `This skill was generated from ${site.url}${'/category/' + c.id}. For the latest version of a tool, fetch \`${site.url}/api/v1/tools/${c.id}/<slug>.md\`, or connect the MCP server at \`${site.url}${MCP_PATH}\`.`,
      '',
    );
    skills.push({
      name,
      title: `${c.name} commands`,
      description,
      category: c.id,
      toolCount: catTools.length,
      commandCount: c.commandCount,
      files: [{ path: 'SKILL.md', content: body.join('\n') }, ...catTools.map((t) => ({ path: `tools/${t.slug}.md`, content: toMarkdown(t) }))],
    });
  }

  // Master router skill.
  const description = clip(
    `Router for the ${site.name} command reference: ${manifest.totals.commands.toLocaleString('en-US')} copy-ready terminal commands across ${manifest.totals.tools} security, networking, forensics, cloud and Linux tools, plus step-by-step guides and a glossary. ` +
      'Use when the user asks how to run a command-line tool or perform a pentest, recon, forensics or sysadmin task and no more specific terminal-hub-* skill applies, or to look up a security term.',
    SKILL_DESCRIPTION_MAX,
  );
  const master = [
    frontmatter(MASTER_SKILL, description),
    `# ${site.name} command reference`,
    '',
    `${site.name} (${site.url}) is a free, MIT-licensed reference of ${manifest.totals.commands.toLocaleString('en-US')} commands across ${manifest.totals.tools} tools. Every command has a copy-ready form, an example and a plain-English explanation.`,
    '',
    '## How to use this skill',
    '',
    `1. Find the category for the user’s task below. If the matching \`${MASTER_SKILL}-<category>\` skill is installed, use it.`,
    `2. Otherwise fetch the tool’s Markdown directly: \`${site.url}/api/v1/tools/<category>/<slug>.md\` (the tool list below gives both values).`,
    '3. For a guided, multi-step workflow, read the matching file in `reference/guides/`.',
    '4. For definitions, read `reference/glossary.md`.',
    `5. ${PLACEHOLDERS}`,
    `6. ${SAFETY}`,
    '',
    `A remote MCP server with search is also available at \`${site.url}${MCP_PATH}\` (tools: search_commands, get_tool, list_categories, list_tools, list_guides, get_guide, define_term).`,
    '',
    '## Categories',
    '',
    '| Category | Skill | Covers |',
    '| --- | --- | --- |',
    ...manifest.categories.map((c) => `| ${c.name} | \`${skillName(c.id)}\` | ${c.description} |`),
    '',
    '## Tools by category',
    '',
    'Format: `category/slug` — name: summary',
    '',
  ];
  for (const c of manifest.categories) {
    master.push(`### ${c.name}`, '');
    for (const s of new Set(c.groups.flatMap((g) => g.tools))) {
      const t = manifest.tools[s];
      if (t) master.push(`- \`${t.category}/${t.slug}\` — ${t.name}: ${t.description}`);
    }
    master.push('');
  }
  master.push('## Guides', '', ...guides.map((g) => `- [${g.title}](reference/guides/${g.slug}.md) — ${g.description} (${g.level}, ~${g.minutes} min)`), '');
  skills.push({
    name: MASTER_SKILL,
    title: `${site.name} (all categories)`,
    description,
    toolCount: manifest.totals.tools,
    commandCount: manifest.totals.commands,
    files: [
      { path: 'SKILL.md', content: master.join('\n') },
      { path: 'reference/glossary.md', content: glossaryToMarkdown(glossary, site, tools) },
      ...guides.map((g) => ({ path: `reference/guides/${g.slug}.md`, content: guideToMarkdown(g, site, tools) })),
    ],
  });
  return skills;
}

/** Problems that would make a skill unusable in agent clients. */
export function validateSkills(skills: Skill[]): string[] {
  const errs: string[] = [];
  const names = new Set<string>();
  for (const s of skills) {
    if (names.has(s.name)) errs.push(`skills: duplicate name "${s.name}"`);
    names.add(s.name);
    if (!SKILL_NAME_RE.test(s.name) || s.name.length > 64) errs.push(`skills: invalid name "${s.name}" (lowercase letters, digits and hyphens, ≤64 chars)`);
    if (!s.description || s.description.length > SKILL_DESCRIPTION_MAX) errs.push(`skills/${s.name}: description must be 1–${SKILL_DESCRIPTION_MAX} chars (is ${s.description.length})`);
    if (/[<>]/.test(s.description)) errs.push(`skills/${s.name}: description must not contain angle brackets`);
    if (!s.files.some((f) => f.path === 'SKILL.md')) errs.push(`skills/${s.name}: missing SKILL.md`);
    for (const f of s.files) if (f.path.includes('..') || f.path.startsWith('/')) errs.push(`skills/${s.name}: unsafe path "${f.path}"`);
  }
  return errs;
}

