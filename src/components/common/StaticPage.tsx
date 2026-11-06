import type { ReactNode } from 'react';
import { Seo, type SeoProps } from '@/components/Seo';
import { Breadcrumbs } from './Breadcrumbs';
import { breadcrumbLd } from '@/lib/structured-data';

/** Layout for long-form pages (about, legal, help). */
export function StaticPage({
  seo,
  eyebrow,
  title,
  lead,
  updated,
  children,
}: {
  seo: Omit<SeoProps, 'jsonLd'> & { title: string };
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <article className="animate-fade-in">
      <Seo {...seo} jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: seo.title, path: seo.path }])} />
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: seo.title }]} />
      <header className="mb-10 max-w-3xl space-y-3">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {lead && <p className="text-lg leading-8 text-muted-foreground">{lead}</p>}
        {updated && <p className="text-xs text-muted-foreground">Last updated {updated}</p>}
      </header>
      <div className="prose-page">{children}</div>
    </article>
  );
}
