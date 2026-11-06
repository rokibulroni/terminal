import { useCallback, useDeferredValue, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Terminal, CornerDownLeft, Loader2, X, Clock, BookOpen, GraduationCap, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useGlobalSearch, type SearchResult } from '@/hooks/useGlobalSearch';
import { useRecentTools } from '@/hooks/useFavorites';
import { manifest } from '@/lib/data';
import { cn } from '@/lib/utils';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialQuery?: string;
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Highlight each query word without building a regex from raw input. */
function Highlight({ text, query }: { text: string; query: string }) {
  const words = query.trim().split(/\s+/).filter((w) => w.length >= 2);
  if (!words.length || !text) return <>{text}</>;
  const re = new RegExp(`(${words.map(escapeRegExp).join('|')})`, 'ig');
  const parts = text.split(re);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="rounded-sm bg-primary/20 px-0.5 text-inherit">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

interface Item {
  key: string;
  href: string;
  render: ReactNode;
}

export function CommandPalette({ open, onOpenChange, initialQuery = '' }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const deferredQuery = useDeferredValue(query);
  const { search, isLoading, isError, retry } = useGlobalSearch(open);
  const { recent } = useRecentTools();
  const navigate = useNavigate();
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setQuery(initialQuery);
      setSelected(0);
    }
  }, [open, initialQuery]);

  const results = useMemo(() => search(deferredQuery), [search, deferredQuery]);
  const tools = results.filter((r): r is Extract<SearchResult, { type: 'tool' }> => r.type === 'tool');
  const commands = results.filter((r): r is Extract<SearchResult, { type: 'command' }> => r.type === 'command');
  const hasQuery = deferredQuery.trim().length >= 2;

  const sections = useMemo(() => {
    const out: { title: string; items: Item[] }[] = [];
    if (!hasQuery) {
      const recentItems = recent
        .map((r) => manifest.tools[r.tool])
        .filter(Boolean)
        .slice(0, 5)
        .map((t) => ({
          key: `recent-${t.slug}`,
          href: `/tool/${t.category}/${t.slug}`,
          render: (
            <>
              <Clock className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="font-mono text-sm font-medium">{t.name}</span>
              <span className="truncate text-xs text-muted-foreground">{t.description}</span>
            </>
          ),
        }));
      if (recentItems.length) out.push({ title: 'Recently viewed', items: recentItems });
      out.push({
        title: 'Jump to',
        items: [
          { key: 'go-guides', href: '/guides', icon: BookOpen, label: 'Guides', hint: 'Step-by-step workflows' },
          { key: 'go-practice', href: '/practice', icon: GraduationCap, label: 'Practice', hint: 'Test yourself on real commands' },
          ...manifest.categories.slice(0, 4).map((c) => ({ key: `go-${c.id}`, href: `/category/${c.id}`, icon: Terminal, label: c.name, hint: c.description })),
        ].map(({ key, href, icon: Icon, label, hint }) => ({
          key,
          href,
          render: (
            <>
              <Icon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="text-sm font-medium">{label}</span>
              <span className="truncate text-xs text-muted-foreground">{hint}</span>
            </>
          ),
        })),
      });
      return out;
    }
    if (tools.length)
      out.push({
        title: 'Tools',
        items: tools.map((r) => ({
          key: `tool-${r.slug}`,
          href: `/tool/${r.category}/${r.slug}`,
          render: (
            <>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-sm font-medium">
                  <Highlight text={r.name} query={deferredQuery} />
                </span>
                <span className="block truncate text-xs text-muted-foreground">{r.description}</span>
              </span>
            </>
          ),
        })),
      });
    if (commands.length)
      out.push({
        title: 'Commands',
        items: commands.map((r) => ({
          key: `cmd-${r.slug}-${r.commandId}`,
          href: `/tool/${r.category}/${r.slug}#cmd-${r.commandId}`,
          render: (
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-mono font-medium text-foreground/80">{r.name}</span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{r.section}</span>
              </span>
              <code className="mt-0.5 block truncate text-[13px] text-primary">
                <Highlight text={r.command} query={deferredQuery} />
              </code>
              <span className="mt-0.5 block truncate text-xs text-muted-foreground">{r.explanation.split('\n')[0]}</span>
            </span>
          ),
        })),
      });
    return out;
  }, [hasQuery, recent, tools, commands, deferredQuery]);

  const flat = useMemo(() => sections.flatMap((s) => s.items), [sections]);

  useEffect(() => setSelected(0), [deferredQuery]);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${selected}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [selected]);

  const go = useCallback(
    (href: string) => {
      onOpenChange(false);
      navigate(href);
    },
    [navigate, onOpenChange],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!flat.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected((i) => (i + 1) % flat.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected((i) => (i - 1 + flat.length) % flat.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = flat[selected];
      if (item) go(item.href);
    }
  };

  let index = -1;
  const activeId = flat[selected] ? `palette-opt-${selected}` : undefined;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-[12vh] max-w-2xl translate-y-0 gap-0 overflow-hidden rounded-2xl border-border bg-popover p-0 shadow-2xl sm:top-[14vh] [&>button]:hidden">
        <VisuallyHidden>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>Search {manifest.totals.tools} tools and {manifest.totals.commands.toLocaleString('en-US')} commands. Use arrow keys to move and Enter to open.</DialogDescription>
        </VisuallyHidden>

        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search tools, commands, flags…"
            className="h-14 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            role="combobox"
            aria-expanded={flat.length > 0}
            aria-controls="palette-results"
            aria-activedescendant={activeId}
            aria-autocomplete="list"
            aria-label="Search"
            spellCheck={false}
            autoComplete="off"
          />
          {query ? (
            <button type="button" onClick={() => setQuery('')} className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Clear search">
              <X className="h-4 w-4" />
            </button>
          ) : null}
          <button type="button" onClick={() => onOpenChange(false)} className="kbd hidden h-6 sm:inline-flex" aria-label="Close search">
            Esc
          </button>
        </div>

        <div ref={listRef} id="palette-results" role="listbox" aria-label="Search results" className="custom-scrollbar max-h-[min(60vh,480px)] overflow-y-auto overscroll-contain p-2">
          {hasQuery && isLoading && (
            <div className="flex items-center justify-center gap-2 py-12 text-sm text-muted-foreground" role="status">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Loading the search index…
            </div>
          )}
          {hasQuery && isError && (
            <div className="flex flex-col items-center gap-3 py-12 text-sm text-muted-foreground" role="alert">
              <AlertCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
              Couldn’t load the search index.
              <button type="button" onClick={() => retry()} className="font-medium text-primary hover:underline">
                Try again
              </button>
            </div>
          )}
          {hasQuery && !isLoading && !isError && flat.length === 0 && (
            <div className="py-12 text-center" role="status">
              <p className="text-sm font-medium">No matches for “{deferredQuery}”</p>
              <p className="mt-1 text-xs text-muted-foreground">Try a tool name (nmap), a flag (-sV) or a task (subdomain).</p>
            </div>
          )}

          {sections.map((section) => (
            <div key={section.title} role="group" aria-label={section.title} className="mb-1">
              <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{section.title}</p>
              {section.items.map((item) => {
                index += 1;
                const i = index;
                const active = i === selected;
                return (
                  <a
                    key={item.key}
                    id={`palette-opt-${i}`}
                    data-index={i}
                    role="option"
                    aria-selected={active}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.href);
                    }}
                    onMouseMove={() => selected !== i && setSelected(i)}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-left outline-none',
                      active ? 'bg-primary/10' : 'hover:bg-muted/60',
                    )}
                  >
                    {item.render}
                    {active && <CornerDownLeft className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-4 border-t border-border bg-muted/30 px-4 py-2.5 text-[11px] text-muted-foreground sm:flex">
          <span className="flex items-center gap-1.5"><kbd className="kbd">↑</kbd><kbd className="kbd">↓</kbd> navigate</span>
          <span className="flex items-center gap-1.5"><kbd className="kbd">↵</kbd> open</span>
          <span className="flex items-center gap-1.5"><kbd className="kbd">esc</kbd> close</span>
          <span className="ml-auto">{manifest.totals.commands.toLocaleString('en-US')} commands indexed</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
