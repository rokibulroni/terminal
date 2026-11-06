import { SITE } from '@/data/registry';

export interface SeoProps {
  /** Page title without the site suffix. Omit for the home page. */
  title?: string;
  description: string;
  /** Canonical path, e.g. /tool/network/nmap */
  path: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: object | object[];
  image?: string;
  /** Path to a Markdown alternate of this page (for agents). */
  markdown?: string;
  /** Path to a JSON alternate of this page (for agents). */
  json?: string;
}

export interface HeadTag {
  tag: 'title' | 'meta' | 'link' | 'script';
  attrs: Record<string, string>;
  content?: string;
}

export function buildHeadTags(p: SeoProps): HeadTag[] {
  const title = p.title ? `${p.title} · ${SITE.name}` : SITE.title;
  const url = SITE.url + (p.path === '/' ? '/' : p.path.replace(/\/$/, ''));
  const image = SITE.url + (p.image ?? SITE.ogImage);
  const description = p.description.length > 300 ? p.description.slice(0, 297).trimEnd() + '…' : p.description;
  const tags: HeadTag[] = [
    { tag: 'title', attrs: {}, content: title },
    { tag: 'meta', attrs: { name: 'description', content: description } },
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
    { tag: 'meta', attrs: { name: 'robots', content: p.noindex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
    { tag: 'meta', attrs: { property: 'og:type', content: p.type ?? 'website' } },
    { tag: 'meta', attrs: { property: 'og:title', content: title } },
    { tag: 'meta', attrs: { property: 'og:description', content: description } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ];
  if (p.markdown) tags.push({ tag: 'link', attrs: { rel: 'alternate', type: 'text/markdown', href: SITE.url + p.markdown } });
  if (p.json) tags.push({ tag: 'link', attrs: { rel: 'alternate', type: 'application/json', href: SITE.url + p.json } });
  const ld = p.jsonLd ? (Array.isArray(p.jsonLd) ? p.jsonLd : [p.jsonLd]) : [];
  if (ld.length) {
    tags.push({
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      content: JSON.stringify(ld.length === 1 ? ld[0] : { '@context': 'https://schema.org', '@graph': ld }).replace(/</g, '\\u003c'),
    });
  }
  return tags;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Serialise head tags for the prerenderer. */
export function renderHeadTags(p: SeoProps): string {
  return buildHeadTags(p)
    .map(({ tag, attrs, content }) => {
      const a = Object.entries(attrs).map(([k, v]) => ` ${k}="${esc(v)}"`).join('');
      if (tag === 'title') return `<title data-seo>${esc(content ?? '')}</title>`;
      if (tag === 'script') return `<script data-seo${a}>${content}</script>`;
      return `<${tag} data-seo${a}>`;
    })
    .join('\n    ');
}


