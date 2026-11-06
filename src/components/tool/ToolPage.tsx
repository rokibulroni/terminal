import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Search, X, ExternalLink, BookOpen, FileText, Braces, ListTree, ChevronLeft, ChevronRight, RotateCw, AlertTriangle, Bot } from 'lucide-react';
import { useTool, getCategory, getToolSummary, getAdjacentTools, getRelatedTools } from '@/lib/data';
import { useRecentTools } from '@/hooks/useFavorites';
import { CommandCard } from './CommandCard';
import { InstallPanel } from './InstallPanel';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';
import { breadcrumbLd, techArticleLd } from '@/lib/structured-data';
import { skillName, toolApiPath, toolMarkdownPath } from '@/data/routes';
import { GUIDES } from '@/data/guides';
import NotFound from '@/pages/NotFound';
import { cn } from '@/lib/utils';
import type { Command } from '@/data/types';

const sectionId = (name: string) => `section-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

/** Route wrapper: keys the page by tool so all state resets on navigation. */
export function ToolPage() {
  const { category = '', tool = '' } = useParams();
  const summary = getToolSummary(tool);
  if (!summary || summary.category !== category) return <NotFound what="tool" />;
  return <ToolPageInner key={`${category}/${tool}`} category={category} slug={tool} />;
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '');
  useEffect(() => {
    if (!ids.length || typeof IntersectionObserver === 'undefined') return;
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        const first = ids.find((id) => visible.has(id));
        if (first) setActive(first);
      },
      { rootMargin: '-80px 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return [active, setActive] as const;
}

function ToolPageInner({ category, slug }: { category: string; slug: string }) {
  const summary = getToolSummary(slug)!;
  const cat = getCategory(category)!;
  const { data: tool, isLoading, isError, refetch } = useTool(category, slug);
  const { addRecent } = useRecentTools();
  const { hash } = useLocation();
  const [query, setQuery] = useState('');
  const [highlightId, setHighlightId] = useState<number | null>(null);

  useEffect(() => {
    addRecent(category, slug);
  }, [addRecent, category, slug]);

  const groups = useMemo(() => {
    if (!tool) return [] as { name: string; id: string; commands: Command[] }[];
    const q = query.trim().toLowerCase();
    const map = new Map<string, Command[]>();
    for (const c of tool.commands) {
      if (q && !`${c.command}\n${c.explanation}\n${c.category}`.toLowerCase().includes(q)) continue;
      if (!map.has(c.category)) map.set(c.category, []);
      map.get(c.category)!.push(c);
    }
    // Keep the order sections first appear in (authored learning order).
    return [...map.entries()].map(([name, commands]) => ({ name, id: sectionId(name), commands }));
  }, [tool, query]);

  const sectionIds = useMemo(() => groups.map((g) => g.id), [groups]);
  const [activeSection, setActiveSection] = useScrollSpy(sectionIds);
  const matchCount = groups.reduce((n, g) => n + g.commands.length, 0);

  // Deep links: #cmd-12 or #section-name, once data has rendered.
  useEffect(() => {
    if (!tool || !hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    const m = /^cmd-(\d+)$/.exec(id);
    if (m) {
      setHighlightId(Number(m[1]));
      const t = setTimeout(() => setHighlightId(null), 2400);
      return () => clearTimeout(t);
    }
  }, [tool, hash]);

  const { prev, next } = getAdjacentTools(slug);
  const related = getRelatedTools(slug);
  const guides = GUIDES.filter((g) => g.steps.some((s) => s.tool === slug));
  const path = `/tool/${category}/${slug}`;

  const jumpTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const seoDescription = `${summary.name}: ${summary.description} ${summary.commandCount} copy-ready commands with explanations${
    summary.sections.length ? ` covering ${summary.sections.slice(0, 4).join(', ').toLowerCase()}` : ''
  }.`;

  return (
    <div className="animate-fade-in">
      <Seo
        title={`${summary.name} commands & cheat sheet`}
        description={seoDescription}
        path={path}
        type="article"
        markdown={toolMarkdownPath(category, slug)}
        json={toolApiPath(category, slug)}
        jsonLd={[
          techArticleLd({
            headline: `${summary.name} command reference`,
            description: summary.description,
            path,
            dateModified: summary.lastmod,
            keywords: [summary.name, ...summary.tags, cat.name],
            about: { name: summary.name, url: summary.homepage },
            sections: summary.sections,
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: cat.name, path: `/category/${cat.id}` },
            { name: summary.name, path },
          ]),
        ]}
      />

      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: cat.name, path: `/category/${cat.id}` }, { name: summary.name }]} />

      {/* Header */}
      <header className="mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">{summary.name}</h1>
          <span className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 font-mono text-xs tabular-nums text-muted-foreground">
            {summary.commandCount} commands
          </span>
        </div>
        <p className="max-w-3xl text-[15px] leading-7 text-muted-foreground">{summary.description}</p>
        {summary.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
            {summary.tags.map((t) => (
              <li key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {t}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2 pt-1">
          {summary.docs && (
            <Button asChild variant="outline" size="sm" className="rounded-lg">
              <a href={summary.docs} target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" /> Official docs
                <ExternalLink className="ml-1.5 h-3 w-3 opacity-60" aria-hidden="true" />
              </a>
            </Button>
          )}
          {summary.homepage && summary.homepage !== summary.docs && (
            <Button asChild variant="outline" size="sm" className="rounded-lg">
              <a href={summary.homepage} target="_blank" rel="noopener noreferrer">
                Project site <ExternalLink className="ml-1.5 h-3 w-3 opacity-60" aria-hidden="true" />
              </a>
            </Button>
          )}
          <Button asChild variant="ghost" size="sm" className="rounded-lg text-muted-foreground">
            <a href={toolMarkdownPath(category, slug)} title="This page as Markdown">
              <FileText className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" /> Markdown
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-lg text-muted-foreground">
            <a href={toolApiPath(category, slug)} title="This page as JSON">
              <Braces className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" /> JSON
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="rounded-lg text-muted-foreground">
            <Link to="/agents#skills" title={`Use ${summary.name} in Claude Code, Codex or Cursor via the ${skillName(category)} skill or MCP`}>
              <Bot className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" /> Use with AI agents
            </Link>
          </Button>
        </div>
      </header>

      {summary.install && Object.keys(summary.install).length > 0 && <InstallPanel install={summary.install} name={summary.name} />}

      <div className="flex items-start gap-10">
        <div className="min-w-0 flex-1">
          {/* Toolbar */}
          <div className="sticky top-14 z-20 -mx-4 mb-6 border-b border-border/60 bg-background/90 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:mx-0 lg:rounded-b-xl lg:px-0">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Filter ${summary.commandCount} ${summary.name} commands…`}
                  aria-label={`Filter ${summary.name} commands`}
                  className="h-10 w-full rounded-lg border border-input bg-muted/40 pl-9 pr-9 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                  <button type="button" onClick={() => setQuery('')} aria-label="Clear filter" className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              {groups.length > 1 && (
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="h-10 shrink-0 rounded-lg lg:hidden" aria-label="Jump to section">
                      <ListTree className="h-4 w-4 sm:mr-2" aria-hidden="true" />
                      <span className="hidden sm:inline">Sections</span>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="max-h-[80vh]">
                    <DrawerHeader className="text-left">
                      <DrawerTitle>On this page</DrawerTitle>
                      <DrawerDescription>{groups.length} sections</DrawerDescription>
                    </DrawerHeader>
                    <nav className="custom-scrollbar overflow-y-auto px-4 pb-8" aria-label="Sections">
                      {groups.map((g) => (
                        <DrawerClose asChild key={g.id}>
                          <button
                            type="button"
                            onClick={() => setTimeout(() => jumpTo(g.id), 250)}
                            className={cn(
                              'flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm',
                              activeSection === g.id ? 'bg-primary/10 font-medium text-primary' : 'hover:bg-muted',
                            )}
                          >
                            <span className="truncate pr-4">{g.name}</span>
                            <span className="font-mono text-xs tabular-nums text-muted-foreground">{g.commands.length}</span>
                          </button>
                        </DrawerClose>
                      ))}
                    </nav>
                  </DrawerContent>
                </Drawer>
              )}
            </div>
            {query && tool && (
              <p className="mt-2 text-xs text-muted-foreground" role="status">
                {matchCount} of {tool.commands.length} commands match
              </p>
            )}
          </div>

          {/* Content */}
          {isLoading && (
            <div className="space-y-4" aria-busy="true" aria-label="Loading commands">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="space-y-3 rounded-xl border border-border p-5">
                  <Skeleton className="h-11 w-full rounded-lg" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-2/5" />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <EmptyState
              icon={AlertTriangle}
              tone="error"
              title="Couldn’t load the commands"
              description="Check your connection and try again."
              action={
                <Button onClick={() => refetch()}>
                  <RotateCw className="mr-2 h-4 w-4" aria-hidden="true" /> Retry
                </Button>
              }
            />
          )}

          {tool && groups.length === 0 && (
            <EmptyState
              icon={Search}
              title={`No commands match “${query}”`}
              description="Try a shorter term or a flag name."
              action={
                <Button variant="outline" onClick={() => setQuery('')}>
                  Clear filter
                </Button>
              }
            />
          )}

          {tool && (
            <div className="space-y-12">
              {groups.map((g) => (
                <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-32 space-y-4">
                  <h2 id={`${g.id}-h`} className="flex items-baseline gap-3 border-b border-border pb-2 text-lg font-semibold tracking-tight">
                    {g.name}
                    <span className="font-mono text-xs font-normal tabular-nums text-muted-foreground">{g.commands.length}</span>
                  </h2>
                  <div className="space-y-3">
                    {g.commands.map((c) => (
                      <CommandCard key={c.id} command={c} toolName={slug} toolDisplayName={summary.name} category={category} highlighted={highlightId === c.id} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* Discovery */}
          <div className="mt-16 space-y-10">
            {guides.length > 0 && (
              <section aria-labelledby="guides-h">
                <h2 id="guides-h" className="mb-4 text-lg font-semibold tracking-tight">Used in these guides</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {guides.map((g) => (
                    <Link key={g.slug} to={`/guide/${g.slug}`} className="surface-interactive block p-4">
                      <p className="font-medium">{g.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{g.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {related.length > 0 && (
              <section aria-labelledby="related-h">
                <h2 id="related-h" className="mb-4 text-lg font-semibold tracking-tight">Related tools</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/tool/${r.category}/${r.slug}`} className="surface-interactive block p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono font-medium">{r.name}</span>
                        <span className="font-mono text-[11px] tabular-nums text-muted-foreground">{r.commandCount}</span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{r.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <nav aria-label="More tools in this category" className="grid gap-3 sm:grid-cols-2">
              {prev ? (
                <Link to={`/tool/${prev.category}/${prev.slug}`} className="surface-interactive group flex items-center gap-3 p-4">
                  <ChevronLeft className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-muted-foreground">Previous in {cat.name}</span>
                    <span className="font-mono font-medium">{prev.name}</span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={`/tool/${next.category}/${next.slug}`} className="surface-interactive group flex items-center justify-end gap-3 p-4 text-right">
                  <span>
                    <span className="block text-xs text-muted-foreground">Next in {cat.name}</span>
                    <span className="font-mono font-medium">{next.name}</span>
                  </span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              )}
            </nav>
          </div>
        </div>

        {/* Desktop table of contents */}
        {groups.length > 1 && (
          <aside className="sticky top-20 hidden w-56 shrink-0 lg:block" aria-label="On this page">
            <p className="eyebrow mb-3 px-2">On this page</p>
            <nav className="custom-scrollbar max-h-[calc(100vh-8rem)] overflow-y-auto pb-6">
              <ul className="space-y-0.5 border-l border-border">
                {groups.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#${g.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        jumpTo(g.id);
                        window.history.replaceState(null, '', `#${g.id}`);
                      }}
                      aria-current={activeSection === g.id ? 'location' : undefined}
                      className={cn(
                        '-ml-px flex items-center justify-between gap-2 border-l-2 py-1.5 pl-3 pr-2 text-[13px] transition-colors',
                        activeSection === g.id ? 'border-primary font-medium text-primary' : 'border-transparent text-muted-foreground hover:text-foreground',
                      )}
                    >
                      <span className="truncate">{g.name}</span>
                      <span className="font-mono text-[10px] tabular-nums opacity-70">{g.commands.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>
    </div>
  );
}
