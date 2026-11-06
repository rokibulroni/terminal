import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Search } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { manifest } from '@/lib/data';
import { FEATURED_TOOLS } from '@/data/registry';

export default function NotFound({ what = 'page' }: { what?: string }) {
  const location = useLocation();
  // The prerendered 404.html is served for every unknown URL, so render the
  // generic version first and personalise after hydration (identical markup).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const pathname = mounted ? location.pathname : '';
  if (!mounted) what = 'page';
  const guess = pathname.split('/').filter(Boolean).pop()?.toLowerCase();
  const suggestion = guess ? Object.values(manifest.tools).find((t) => t.slug.toLowerCase() === guess || t.name.toLowerCase() === guess) : undefined;

  return (
    <div className="mx-auto max-w-xl py-12 text-center sm:py-20">
      <Seo title="Page not found" description="The page you were looking for doesn’t exist." path={location.pathname} noindex />
      <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
        <Compass className="h-7 w-7" aria-hidden="true" />
      </span>
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">This {what} doesn’t exist</h1>
      <p className="mt-3 text-muted-foreground">
        {pathname ? <code className="rounded bg-muted px-1.5 py-0.5 text-sm">{pathname}</code> : 'That address'} isn’t part of the reference. It may have moved or been renamed.
      </p>

      {suggestion && (
        <p className="mt-6 text-sm">
          Did you mean{' '}
          <Link className="font-mono font-medium text-primary hover:underline" to={`/tool/${suggestion.category}/${suggestion.slug}`}>
            {suggestion.name}
          </Link>
          ?
        </p>
      )}

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Button asChild>
          <Link to="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to={guess ? `/?q=${encodeURIComponent(guess)}` : '/'}>
            <Search className="mr-2 h-4 w-4" aria-hidden="true" />
            {guess ? `Search “${guess.length > 20 ? guess.slice(0, 20) + '…' : guess}”` : 'Search'}
          </Link>
        </Button>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <h2 className="eyebrow mb-4">Popular tools</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {FEATURED_TOOLS.slice(0, 8).map((s) => {
            const t = manifest.tools[s];
            return (
              <Link key={s} to={`/tool/${t.category}/${t.slug}`} className="rounded-lg border border-border px-3 py-1.5 font-mono text-sm transition-colors hover:border-primary/40 hover:text-primary">
                {t.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
