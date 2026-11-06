import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, BookOpen, GraduationCap, Crosshair, Star, Braces, X } from 'lucide-react';
import { manifest, getToolSummary } from '@/lib/data';
import { FEATURED_TOOLS, SITE } from '@/data/registry';
import { GUIDES } from '@/data/guides';
import { useRecentTools } from '@/hooks/useFavorites';
import { useDeviceOS } from '@/hooks/useDeviceOS';
import { CategoryIcon } from '@/components/CategoryIcon';
import { Seo } from '@/components/Seo';
import { websiteLd, itemListLd } from '@/lib/structured-data';
import { openSearch } from '@/lib/events';
import { Button } from '@/components/ui/button';

const fmt = (n: number) => n.toLocaleString('en-US');

const SUGGESTIONS = ['nmap -sV', 'reverse shell', 'subdomain', 'hashcat -m 1000', 'kubectl exec', 'tcpdump port 53'];

export function Dashboard() {
  const { recent, clearRecent } = useRecentTools();
  const { os, isMobile } = useDeviceOS();
  const recentTools = recent.map((r) => getToolSummary(r.tool)).filter((t): t is NonNullable<typeof t> => !!t);
  const featured = FEATURED_TOOLS.map((s) => manifest.tools[s]);
  const shortcut = os === 'mac' || os === 'ios' ? '⌘K' : 'Ctrl K';

  return (
    <div className="space-y-16 animate-fade-in">
      <Seo
        description={SITE.description}
        path="/"
        jsonLd={[
          websiteLd(),
          itemListLd(
            'Categories',
            manifest.categories.map((c) => ({ name: c.name, path: `/category/${c.id}` })),
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_110%_-20%,hsl(var(--primary)/0.14),transparent_60%),radial-gradient(40rem_24rem_at_-10%_120%,hsl(var(--accent)/0.12),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
        />
        <div className="relative max-w-3xl">
          <p className="eyebrow mb-4 text-primary">Cybersecurity command reference</p>
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Every command you need,
            <br className="hidden sm:block" /> <span className="gradient-text">explained</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {fmt(manifest.totals.commands)} copy-ready commands across {manifest.totals.tools} tools — from nmap and ffuf to Volatility and kubectl — each with a plain-English explanation.
          </p>

          <button
            type="button"
            onClick={() => openSearch()}
            className="group mt-8 flex h-14 w-full max-w-xl items-center gap-3 rounded-2xl border border-border bg-background/80 px-5 text-left shadow-sm backdrop-blur transition-[border-color,box-shadow] hover:border-primary/50 hover:shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.45)]"
          >
            <Search className="h-5 w-5 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
            <span className="flex-1 text-[15px] text-muted-foreground">Search a tool, flag or task…</span>
            {!isMobile && <kbd className="kbd h-6 px-2 text-[11px]">{shortcut}</kbd>}
          </button>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-muted-foreground">Try</span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => openSearch(s)}
                className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <dl className="relative mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            { label: 'Commands', value: fmt(manifest.totals.commands) },
            { label: 'Tools', value: fmt(manifest.totals.tools) },
            { label: 'Categories', value: fmt(manifest.totals.categories) },
            { label: 'Guides', value: fmt(GUIDES.length) },
          ].map((s) => (
            <div key={s.label} className="bg-card/90 px-5 py-4">
              <dt className="text-xs text-muted-foreground">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Continue */}
      {recentTools.length > 0 && (
        <section aria-labelledby="recent-h">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="recent-h" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <Clock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              Pick up where you left off
            </h2>
            <button type="button" onClick={clearRecent} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              <X className="h-3.5 w-3.5" aria-hidden="true" /> Clear
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
            {recentTools.map((t) => (
              <Link key={t.slug} to={`/tool/${t.category}/${t.slug}`} className="surface-interactive w-56 shrink-0 p-4">
                <p className="font-mono font-medium">{t.name}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{t.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      <section aria-labelledby="categories-h">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 id="categories-h" className="text-2xl font-semibold tracking-tight">Browse by category</h2>
            <p className="mt-1 text-sm text-muted-foreground">Organised the way an engagement unfolds — from recon to reporting.</p>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {manifest.categories.map((c) => (
            <li key={c.id}>
              <Link to={`/category/${c.id}`} className="surface-interactive group flex h-full flex-col p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <CategoryIcon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{c.name}</h3>
                  <ArrowRight className="ml-auto h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{c.description}</p>
                <p className="mt-4 font-mono text-xs tabular-nums text-muted-foreground">
                  {c.toolCount} tools · {fmt(c.commandCount)} commands
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Guides */}
      {GUIDES.length > 0 && (
        <section aria-labelledby="guides-h">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 id="guides-h" className="text-2xl font-semibold tracking-tight">Guides</h2>
              <p className="mt-1 text-sm text-muted-foreground">Step-by-step workflows that string the tools together.</p>
            </div>
            <Link to="/guides" className="flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline">
              All guides <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-3 md:grid-cols-3">
            {GUIDES.slice(0, 3).map((g) => (
              <li key={g.slug}>
                <Link to={`/guide/${g.slug}`} className="surface-interactive flex h-full flex-col p-5">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" /> {g.level} · {g.minutes} min
                  </span>
                  <h3 className="mt-2 font-semibold leading-snug">{g.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">{g.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Popular */}
      <section aria-labelledby="popular-h">
        <h2 id="popular-h" className="mb-6 text-2xl font-semibold tracking-tight">Popular tools</h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((t) => (
            <li key={t.slug}>
              <Link to={`/tool/${t.category}/${t.slug}`} className="surface-interactive block h-full p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-medium">{t.name}</span>
                  <span className="font-mono text-[11px] tabular-nums text-muted-foreground">{t.commandCount}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{t.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Features */}
      <section aria-labelledby="features-h" className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <h2 id="features-h" className="sr-only">
          What you can do here
        </h2>
        {[
          { icon: Crosshair, title: 'Set your target once', body: 'Enter an IP or hostname in the header and every example address updates to match.' },
          { icon: Star, title: 'Save favourites', body: 'Star the commands you reach for most. They stay in your browser — no account needed.' },
          { icon: GraduationCap, title: 'Practise', body: 'Turn the reference into flashcards and test your recall command by command.', to: '/practice' },
          { icon: Braces, title: 'Open data', body: 'Every page is also available as JSON and Markdown for scripts and AI agents.', to: '/developers' },
        ].map((f) => {
          const inner = (
            <>
              <f.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{f.body}</p>
            </>
          );
          return f.to ? (
            <Link key={f.title} to={f.to} className="surface-interactive block p-5">
              {inner}
            </Link>
          ) : (
            <div key={f.title} className="surface p-5">
              {inner}
            </div>
          );
        })}
      </section>

      <section className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-muted/30 p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-semibold">Missing a tool or spotted a mistake?</h2>
          <p className="mt-1 text-sm text-muted-foreground">The whole reference is open source. Contributions are welcome.</p>
        </div>
        <Button asChild variant="outline" className="rounded-lg">
          <Link to="/contribute">How to contribute</Link>
        </Button>
      </section>
    </div>
  );
}
