import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { GLOSSARY } from '@/data/glossary';
import { manifest } from '@/lib/data';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PageHeader } from '@/components/common/PageHeader';
import { breadcrumbLd, definedTermSetLd } from '@/lib/structured-data';

export function GlossaryPage() {
  const [q, setQ] = useState('');
  const terms = useMemo(() => [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term)), []);
  const filtered = q.trim() ? terms.filter((t) => `${t.term} ${t.definition}`.toLowerCase().includes(q.trim().toLowerCase())) : terms;
  const letters = [...new Set(terms.map((t) => t.term[0].toUpperCase()))];
  const byTerm = new Map(GLOSSARY.map((t) => [t.slug, t]));

  return (
    <div className="animate-fade-in">
      <Seo
        title="Security glossary"
        description={`Plain-English definitions of ${GLOSSARY.length} security, networking and forensics terms used across the command reference.`}
        path="/glossary"
        jsonLd={[breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Glossary', path: '/glossary' }]), definedTermSetLd(GLOSSARY)]}
      />
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Glossary' }]} />
      <PageHeader eyebrow="Glossary" title="Security terms, explained" description="The vocabulary behind the commands — short definitions with links to the tools that use them." />

      <div className="sticky top-14 z-10 -mx-4 mb-8 space-y-3 border-b border-border/60 bg-background/90 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={`Filter ${GLOSSARY.length} terms…`}
            aria-label="Filter glossary"
            className="h-10 w-full rounded-lg border border-input bg-muted/40 pl-9 pr-3 text-sm outline-none focus:border-primary/50 focus:bg-background"
          />
        </div>
        {!q && (
          <nav aria-label="Jump to letter" className="flex flex-wrap gap-1">
            {letters.map((l) => (
              <a key={l} href={`#letter-${l}`} className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground" role="status">
          No terms match “{q}”.
        </p>
      ) : (
        <dl className="max-w-3xl divide-y divide-border">
          {filtered.map((t, i) => {
            const letter = t.term[0].toUpperCase();
            const firstOfLetter = !q && (i === 0 || filtered[i - 1].term[0].toUpperCase() !== letter);
            return (
              <div key={t.slug} id={t.slug} className="scroll-mt-40 py-5">
                {firstOfLetter && <span id={`letter-${letter}`} className="block scroll-mt-40" />}
                <dt className="text-base font-semibold">
                  <a href={`#${t.slug}`} className="hover:text-primary">
                    {t.term}
                  </a>
                </dt>
                <dd className="mt-1.5 space-y-2">
                  <p className="text-[15px] leading-7 text-muted-foreground">{t.definition}</p>
                  {(t.tools?.length || t.see?.length) && (
                    <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                      {t.tools?.map((s) => {
                        const tool = manifest.tools[s];
                        return tool ? (
                          <Link key={s} to={`/tool/${tool.category}/${tool.slug}`} className="font-mono text-primary hover:underline">
                            {tool.name}
                          </Link>
                        ) : null;
                      })}
                      {t.see?.map((s) => (
                        <a key={s} href={`#${s}`} className="text-muted-foreground hover:text-foreground">
                          see {byTerm.get(s)?.term}
                        </a>
                      ))}
                    </p>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      )}
    </div>
  );
}
