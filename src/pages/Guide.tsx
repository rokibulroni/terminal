import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, Copy, Check, ArrowRight, Info } from 'lucide-react';
import { GUIDES } from '@/data/guides';
import { manifest } from '@/lib/data';
import { useGlobalIP } from '@/hooks/useGlobalIP';
import { withTarget } from '@/lib/target';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { breadcrumbLd, howToLd } from '@/lib/structured-data';
import NotFound from '@/pages/NotFound';
import { toast } from 'sonner';

function CopyLine({ command, note }: { command: string; note?: string }) {
  const { globalIP } = useGlobalIP();
  const [copied, setCopied] = useState(false);
  const text = withTarget(command, globalIP);
  return (
    <li className="space-y-1">
      <div className="flex items-start gap-2 rounded-lg border border-border/70 bg-[hsl(var(--command-bg))] py-1 pl-3.5 pr-1">
        <pre className="min-w-0 flex-1 whitespace-pre-wrap break-words py-1.5 font-mono text-[13px] leading-6">
          <code>{text}</code>
        </pre>
        <button
          type="button"
          aria-label="Copy command"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(text);
              setCopied(true);
              toast.success('Command copied', { duration: 1400 });
              setTimeout(() => setCopied(false), 1400);
            } catch {
              toast.error('Couldn’t copy');
            }
          }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      {note && <p className="pl-1 text-xs leading-5 text-muted-foreground">{note}</p>}
    </li>
  );
}

export function GuidePage() {
  const { slug } = useParams();
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) return <NotFound what="guide" />;
  const path = `/guide/${guide.slug}`;
  const tools = [...new Set(guide.steps.map((s) => s.tool).filter((t): t is string => !!t))].map((t) => manifest.tools[t]);
  const others = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <article className="animate-fade-in">
      <Seo
        title={guide.title}
        description={guide.description}
        path={path}
        type="article"
        jsonLd={[
          howToLd({
            name: guide.title,
            description: guide.description,
            path,
            minutes: guide.minutes,
            steps: guide.steps.map((s) => ({ name: s.title, text: s.body })),
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/guides' },
            { name: guide.title, path },
          ]),
        ]}
      />
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }, { name: guide.title }]} />

      <div className="grid gap-10 lg:grid-cols-[1fr_15rem]">
        <div className="min-w-0 max-w-3xl">
          <header className="mb-8 space-y-4">
            <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">{guide.level}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {guide.minutes} min
              </span>
              <span>Updated {guide.updated}</span>
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{guide.title}</h1>
            <p className="text-lg leading-8 text-muted-foreground">{guide.intro}</p>
          </header>

          {guide.prerequisites && guide.prerequisites.length > 0 && (
            <aside className="mb-10 rounded-xl border border-border bg-muted/30 p-5" aria-label="Before you start">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Info className="h-4 w-4 text-primary" aria-hidden="true" /> Before you start
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
                {guide.prerequisites.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </aside>
          )}

          <ol className="space-y-10">
            {guide.steps.map((step, i) => {
              const tool = step.tool ? manifest.tools[step.tool] : undefined;
              return (
                <li key={step.title} id={`step-${i + 1}`} className="scroll-mt-24">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-sm font-semibold text-primary" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1 space-y-3">
                      <h2 className="pt-0.5 text-lg font-semibold tracking-tight">{step.title}</h2>
                      <p className="text-[15px] leading-7 text-muted-foreground">{step.body}</p>
                      {step.commands && step.commands.length > 0 && (
                        <ul className="space-y-2.5">
                          {step.commands.map((c) => (
                            <CopyLine key={c.command} command={c.command} note={c.note} />
                          ))}
                        </ul>
                      )}
                      {tool && (
                        <Link to={`/tool/${tool.category}/${tool.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                          All {tool.commandCount} {tool.name} commands <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {guide.outro && <p className="mt-12 border-t border-border pt-8 text-[15px] leading-7 text-muted-foreground">{guide.outro}</p>}
        </div>

        <aside className="space-y-8 lg:sticky lg:top-20 lg:self-start" aria-label="Guide details">
          <nav aria-label="Steps" className="hidden lg:block">
            <p className="eyebrow mb-3">Steps</p>
            <ol className="space-y-1.5 text-sm">
              {guide.steps.map((s, i) => (
                <li key={s.title}>
                  <a href={`#step-${i + 1}`} className="flex gap-2 text-muted-foreground hover:text-foreground">
                    <span className="font-mono text-xs tabular-nums opacity-70">{i + 1}.</span>
                    <span className="line-clamp-1">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          {tools.length > 0 && (
            <div>
              <p className="eyebrow mb-3">Tools used</p>
              <ul className="flex flex-wrap gap-1.5">
                {tools.map((t) => (
                  <li key={t.slug}>
                    <Link to={`/tool/${t.category}/${t.slug}`} className="block rounded-md border border-border px-2 py-1 font-mono text-xs hover:border-primary/40 hover:text-primary">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {others.length > 0 && (
        <section aria-labelledby="more-guides" className="mt-16 border-t border-border pt-10">
          <h2 id="more-guides" className="mb-4 text-lg font-semibold tracking-tight">More guides</h2>
          <ul className="grid gap-3 md:grid-cols-3">
            {others.map((g) => (
              <li key={g.slug}>
                <Link to={`/guide/${g.slug}`} className="surface-interactive block h-full p-4">
                  <p className="font-medium leading-snug">{g.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{g.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
