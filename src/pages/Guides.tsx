import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { GUIDES } from '@/data/guides';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PageHeader } from '@/components/common/PageHeader';
import { breadcrumbLd, itemListLd } from '@/lib/structured-data';
import { cn } from '@/lib/utils';

const LEVEL_STYLE = {
  Beginner: 'bg-success/10 text-success',
  Intermediate: 'bg-warning/15 text-warning',
  Advanced: 'bg-destructive/10 text-destructive',
} as const;

export function GuidesPage() {
  return (
    <div className="animate-fade-in">
      <Seo
        title="Guides"
        description="Step-by-step security workflows — reconnaissance, web enumeration, privilege escalation checks, incident triage and more — with the exact commands for each step."
        path="/guides"
        jsonLd={[
          breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }]),
          itemListLd('Guides', GUIDES.map((g) => ({ name: g.title, path: `/guide/${g.slug}` }))),
        ]}
      />
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Guides' }]} />
      <PageHeader
        eyebrow="Guides"
        title="Workflows, step by step"
        description="Each guide strings several tools together into a complete task, with copy-ready commands and links to the full reference for every tool."
      />
      <ul className="grid gap-4 md:grid-cols-2">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <Link to={`/guide/${g.slug}`} className="surface-interactive group flex h-full flex-col p-6">
              <div className="flex items-center gap-2 text-xs">
                <span className={cn('rounded-full px-2 py-0.5 font-medium', LEVEL_STYLE[g.level])}>{g.level}</span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {g.minutes} min · {g.steps.length} steps
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold leading-snug">{g.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{g.description}</p>
              <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
