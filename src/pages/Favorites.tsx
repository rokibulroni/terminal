import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Trash2, Copy, ArrowRight, Download, Upload, Terminal } from 'lucide-react';
import { useFavorites, type FavoriteCommand } from '@/hooks/useFavorites';
import { useGlobalIP } from '@/hooks/useGlobalIP';
import { withTarget } from '@/lib/target';
import { getToolSummary, getCategory } from '@/lib/data';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/common/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function FavoritesPage() {
  const { favorites, removeFavorite, importFavorites, clearFavorites } = useFavorites();
  const { globalIP } = useGlobalIP();
  const [confirmClear, setConfirmClear] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Command copied');
    } catch {
      toast.error('Couldn’t copy');
    }
  };

  const exportFile = () => {
    const blob = new Blob([JSON.stringify(favorites, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `terminal-favorites-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importFile = async (file: File) => {
    try {
      const added = importFavorites(JSON.parse(await file.text()));
      toast.success(added ? `Imported ${added} favorite${added === 1 ? '' : 's'}` : 'Nothing new to import');
    } catch {
      toast.error('That file isn’t a valid favorites export.');
    }
  };

  const groups = new Map<string, { category: string; tool: string; name: string; items: FavoriteCommand[] }>();
  for (const f of [...favorites].sort((a, b) => b.addedAt - a.addedAt)) {
    const key = `${f.category}/${f.toolName}`;
    if (!groups.has(key)) {
      const summary = getToolSummary(f.toolName);
      groups.set(key, {
        category: summary?.category ?? f.category,
        tool: f.toolName,
        name: summary?.name ?? f.toolDisplayName ?? f.toolName,
        items: [],
      });
    }
    groups.get(key)!.items.push(f);
  }

  return (
    <div className="animate-fade-in">
      <Seo title="Favorites" description="Your saved commands, stored privately in this browser." path="/favorites" noindex />
      <PageHeader
        eyebrow="Saved in this browser"
        title="Favorites"
        description={
          favorites.length
            ? `${favorites.length} saved command${favorites.length === 1 ? '' : 's'}. Favorites never leave your device — export them to move between browsers.`
            : 'Star any command to keep it here. Favorites never leave your device.'
        }
        actions={
          <>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) importFile(f);
                e.target.value = '';
              }}
            />
            <Button variant="outline" size="sm" className="rounded-lg" onClick={() => fileRef.current?.click()}>
              <Upload className="mr-1.5 h-4 w-4" aria-hidden="true" /> Import
            </Button>
            {favorites.length > 0 && (
              <Button variant="outline" size="sm" className="rounded-lg" onClick={exportFile}>
                <Download className="mr-1.5 h-4 w-4" aria-hidden="true" /> Export
              </Button>
            )}
          </>
        }
      />

      {favorites.length === 0 ? (
        <EmptyState
          icon={Star}
          title="No favorites yet"
          description="Tap the star on any command card to save it here for quick access."
          action={
            <Button asChild>
              <Link to="/">
                <Terminal className="mr-2 h-4 w-4" aria-hidden="true" /> Browse tools
              </Link>
            </Button>
          }
        />
      ) : (
        <div className="space-y-6">
          {[...groups.entries()].map(([key, g]) => (
            <section key={key} aria-labelledby={`fav-${key}`} className="surface overflow-hidden">
              <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/30 px-4 py-3 sm:px-5">
                <div className="flex min-w-0 items-center gap-2">
                  <h2 id={`fav-${key}`} className="truncate font-mono font-semibold">
                    {g.name}
                  </h2>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">{getCategory(g.category)?.name ?? g.category}</span>
                </div>
                <Link to={`/tool/${g.category}/${g.tool}`} className="flex shrink-0 items-center gap-1 text-sm text-primary hover:underline">
                  Open <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <ul className="divide-y divide-border">
                {g.items.map((f) => {
                  const cmd = withTarget(f.command, globalIP);
                  const anchor = f.id.split('-').pop();
                  return (
                    <li key={f.id} className="flex items-start gap-3 px-4 py-3.5 sm:px-5">
                      <div className="min-w-0 flex-1">
                        <Link to={`/tool/${g.category}/${g.tool}#cmd-${anchor}`} className="block">
                          <code className="block whitespace-pre-wrap break-words text-[13px] leading-6 text-primary">{cmd}</code>
                        </Link>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{f.explanation}</p>
                      </div>
                      <div className="flex shrink-0 gap-0.5">
                        <button type="button" onClick={() => copy(cmd)} aria-label="Copy command" title="Copy" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground">
                          <Copy className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            removeFavorite(f.id);
                            toast('Removed from favorites');
                          }}
                          aria-label="Remove from favorites"
                          title="Remove"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <div className="flex justify-end">
            {confirmClear ? (
              <div className="flex items-center gap-2 text-sm" role="alert">
                <span className="text-muted-foreground">Remove all {favorites.length} favorites?</span>
                <Button size="sm" variant="ghost" onClick={() => setConfirmClear(false)}>
                  Cancel
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    clearFavorites();
                    setConfirmClear(false);
                  }}
                >
                  Remove all
                </Button>
              </div>
            ) : (
              <Button size="sm" variant="ghost" className="text-muted-foreground" onClick={() => setConfirmClear(true)}>
                Clear all
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
