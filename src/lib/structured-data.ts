import { SITE } from '@/data/registry';

/** schema.org builders. Keep claims factual — only describe what is on the page. */

const abs = (path: string) => SITE.url + path;

export const publisher = {
  '@type': 'Person',
  '@id': `${SITE.url}/#author`,
  name: SITE.author.name,
  url: SITE.author.url,
  sameAs: [SITE.author.github, SITE.author.linkedin],
};

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: 'Terminal Command Hub',
    url: SITE.url + '/',
    description: SITE.description,
    inLanguage: 'en',
    publisher,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function itemListLd(name: string, items: { name: string; path: string; description?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
  };
}

export function techArticleLd(opts: {
  headline: string;
  description: string;
  path: string;
  dateModified?: string;
  keywords?: string[];
  about?: { name: string; url?: string };
  sections?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.path),
    mainEntityOfPage: abs(opts.path),
    inLanguage: 'en',
    isAccessibleForFree: true,
    license: 'https://opensource.org/licenses/MIT',
    author: publisher,
    publisher,
    ...(opts.dateModified && { dateModified: opts.dateModified }),
    ...(opts.keywords?.length && { keywords: opts.keywords.join(', ') }),
    ...(opts.about && {
      about: { '@type': 'SoftwareApplication', name: opts.about.name, applicationCategory: 'SecurityApplication', ...(opts.about.url && { url: opts.about.url }) },
    }),
    ...(opts.sections?.length && { articleSection: opts.sections }),
  };
}

export function howToLd(opts: { name: string; description: string; path: string; minutes: number; steps: { name: string; text: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    totalTime: `PT${opts.minutes}M`,
    step: opts.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text, url: `${abs(opts.path)}#step-${i + 1}` })),
  };
}

export function definedTermSetLd(terms: { term: string; slug: string; definition: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${SITE.url}/glossary`,
    name: `${SITE.name} glossary`,
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      url: `${SITE.url}/glossary#${t.slug}`,
      inDefinedTermSet: `${SITE.url}/glossary`,
    })),
  };
}
