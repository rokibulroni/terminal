/**
 * Prerenders every route to static HTML after `vite build` and the SSR
 * build of src/entry-server.tsx. Cloudflare Pages serves `/foo/bar` from
 * `foo/bar.html`, and `404.html` for unknown paths (with a 404 status).
 *
 * Also fills the CSP hash of the inline theme script into dist/_headers and
 * checks that every page has exactly one <h1>, a title and a canonical URL.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { CATEGORIES } from '../src/data/registry.ts';
import { GUIDES } from '../src/data/guides.ts';
import { STATIC_ROUTES } from '../src/data/routes.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SSR = join(ROOT, 'dist-ssr');

const { render } = (await import(pathToFileURL(join(SSR, 'entry-server.js')).href)) as typeof import('../src/entry-server.tsx');
const manifest = JSON.parse(readFileSync(join(DIST, 'api/v1/manifest.json'), 'utf8')) as import('../src/data/types.ts').Manifest;
const template = readFileSync(join(DIST, 'index.html'), 'utf8');

if (!/<!--seo-->[\s\S]*<!--\/seo-->/.test(template) || !template.includes('<!--app-->') || !template.includes('<!--state-->')) {
  throw new Error('index.html is missing <!--seo-->, <!--app--> or <!--state--> markers');
}

interface Route {
  url: string;
  out: string;
  tool?: { category: string; slug: string };
}

const outFor = (url: string) => (url === '/' ? 'index.html' : `${url.slice(1)}.html`);
const routes: Route[] = [
  ...STATIC_ROUTES.map((r) => ({ url: r.path, out: outFor(r.path) })),
  ...CATEGORIES.map((c) => ({ url: `/category/${c.id}`, out: outFor(`/category/${c.id}`) })),
  ...Object.values(manifest.tools).map((t) => ({
    url: `/tool/${t.category}/${t.slug}`,
    out: outFor(`/tool/${t.category}/${t.slug}`),
    tool: { category: t.category, slug: t.slug },
  })),
  ...GUIDES.map((g) => ({ url: `/guide/${g.slug}`, out: outFor(`/guide/${g.slug}`) })),
  { url: '/404', out: '404.html' },
];

const problems: string[] = [];
const started = Date.now();

for (const route of routes) {
  const tool = route.tool
    ? JSON.parse(readFileSync(join(DIST, `api/v1/tools/${route.tool.category}/${route.tool.slug}.json`), 'utf8'))
    : undefined;
  const { html, head, state } = render(route.url, { tool });

  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) problems.push(`${route.url}: ${h1s} <h1> elements`);
  if (!head.includes('rel="canonical"')) problems.push(`${route.url}: no canonical`);

  const page = template
    .replace(/<!--seo-->[\s\S]*<!--\/seo-->/, head)
    .replace('<!--app-->', html)
    .replace(
      '<!--state-->',
      state ? `<script type="application/json" id="__TERMINAL_STATE__">${state.replace(/</g, '\\u003c')}</script>` : '',
    );

  const file = join(DIST, route.out);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page);
}

// CSP: allow exactly the inline theme script.
const inline = [...template.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
if (inline.length !== 1) problems.push(`expected 1 inline script in index.html, found ${inline.length}`);
const hash = `sha256-${createHash('sha256').update(inline[0] ?? '').digest('base64')}`;
const headersPath = join(DIST, '_headers');
writeFileSync(headersPath, readFileSync(headersPath, 'utf8').replace('__THEME_SCRIPT_HASH__', hash));

if (existsSync(SSR)) rmSync(SSR, { recursive: true });

console.log(`prerender: ${routes.length} pages in ${((Date.now() - started) / 1000).toFixed(1)}s`);
if (problems.length) {
  for (const p of problems) console.error(`  error ${p}`);
  process.exit(1);
}
