import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  name: string;
  path?: string;
}

/** Visible breadcrumb trail. Pair with breadcrumbLd() for structured data. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.name}-${i}`} className="flex min-w-0 items-center gap-1">
              {c.path && !last ? (
                <Link to={c.path} className="truncate rounded transition-colors hover:text-foreground">
                  {c.name}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className="truncate font-medium text-foreground">
                  {c.name}
                </span>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
