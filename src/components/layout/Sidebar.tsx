import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, Star, BookOpen, GraduationCap, BookA, PanelLeftClose } from 'lucide-react';
import { cn } from '@/lib/utils';
import { manifest } from '@/lib/data';
import { useFavorites } from '@/hooks/useFavorites';
import { CategoryIcon } from '@/components/CategoryIcon';
import type { ManifestCategory } from '@/data/types';

interface SidebarProps {
  /** Mobile drawer state */
  isOpen: boolean;
  onClose: () => void;
  /** Desktop visibility */
  isDesktopOpen: boolean;
  onCollapseDesktop: () => void;
}

const PRIMARY_LINKS = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/guides', label: 'Guides', icon: BookOpen },
  { to: '/practice', label: 'Practice', icon: GraduationCap },
  { to: '/glossary', label: 'Glossary', icon: BookA },
];

/** Parse /category/:id and /tool/:category/:slug from the path (Sidebar lives outside <Routes>). */
function useActiveLocation() {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'category') return { pathname, category: parts[1], tool: undefined };
  if (parts[0] === 'tool') return { pathname, category: parts[1], tool: parts[2] };
  return { pathname, category: undefined, tool: undefined };
}

function CategoryItem({
  category,
  activeCategory,
  activeTool,
  onNavigate,
}: {
  category: ManifestCategory;
  activeCategory?: string;
  activeTool?: string;
  onNavigate: () => void;
}) {
  const isActive = activeCategory === category.id;
  const [expanded, setExpanded] = useState(isActive);
  const panelId = `nav-cat-${category.id}`;

  useEffect(() => {
    if (isActive) setExpanded(true);
  }, [isActive]);

  return (
    <li>
      <div
        className={cn(
          'group flex items-center rounded-lg text-sm transition-colors',
          isActive ? 'bg-sidebar-accent text-sidebar-primary' : 'text-sidebar-foreground/85 hover:bg-sidebar-accent/70',
        )}
      >
        <Link
          to={`/category/${category.id}`}
          onClick={onNavigate}
          aria-current={isActive && !activeTool ? 'page' : undefined}
          className="flex min-w-0 flex-1 items-center gap-2.5 rounded-l-lg py-2 pl-3 font-medium"
        >
          <CategoryIcon name={category.icon} className="h-4 w-4 shrink-0 opacity-80" />
          <span className="truncate">{category.name}</span>
          <span className="ml-auto font-mono text-[11px] tabular-nums text-muted-foreground">{category.toolCount}</span>
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${category.name} tools`}
          className="mr-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
        >
          <ChevronRight className={cn('h-3.5 w-3.5 transition-transform duration-200', expanded && 'rotate-90')} />
        </button>
      </div>

      {expanded && (
        <div id={panelId} className="ml-[1.15rem] mt-1 space-y-2 border-l border-sidebar-border pb-2 pl-3 animate-fade-in">
          {category.groups.map((group) => (
            <div key={group.name}>
              <p className="px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{group.name}</p>
              <ul>
                {group.tools.map((slug) => {
                  const tool = manifest.tools[slug];
                  if (!tool) return null;
                  const active = activeTool === slug && activeCategory === tool.category;
                  return (
                    <li key={slug}>
                      <Link
                        to={`/tool/${tool.category}/${slug}`}
                        onClick={onNavigate}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          '-ml-px block truncate border-l-2 py-1 pl-[9px] pr-2 font-mono text-[13px] transition-colors',
                          active
                            ? 'border-primary font-medium text-primary'
                            : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground',
                        )}
                      >
                        {tool.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}

export function Sidebar({ isOpen, onClose, isDesktopOpen, onCollapseDesktop }: SidebarProps) {
  const { pathname, category, tool } = useActiveLocation();
  const { count: favoritesCount } = useFavorites();
  const panelRef = useRef<HTMLElement>(null);

  // Mobile drawer: close on Escape, move focus into the panel when opened.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus({ preventScroll: true });
    const prevOverflow = document.body.style.overflow;
    if (window.matchMedia('(max-width: 1023px)').matches) document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  const linkClass = (active: boolean) =>
    cn(
      'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
      active ? 'bg-sidebar-accent text-sidebar-primary' : 'text-sidebar-foreground/85 hover:bg-sidebar-accent/70',
    );

  return (
    <>
      {/* Mobile overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-0 top-14 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <aside
        ref={panelRef}
        id="site-nav"
        aria-label="Site navigation"
        className={cn(
          'fixed left-0 top-14 z-40 h-[calc(100dvh-3.5rem)] w-72 border-r border-sidebar-border bg-sidebar/95 backdrop-blur-xl lg:w-64',
          'transition-[transform,visibility] duration-300 ease-out-expo',
          isOpen ? 'visible translate-x-0' : 'invisible -translate-x-full',
          isDesktopOpen ? 'lg:visible lg:translate-x-0' : 'lg:invisible lg:-translate-x-full',
        )}
      >
        <nav className="custom-scrollbar h-full overflow-y-auto overscroll-contain px-3 pb-10 pt-3">
          <ul className="space-y-0.5">
            {PRIMARY_LINKS.map(({ to, label, icon: Icon }) => {
              const active = to === '/' ? pathname === '/' : pathname.startsWith(to) || (to === '/guides' && pathname.startsWith('/guide/'));
              return (
                <li key={to}>
                  <Link to={to} onClick={onClose} className={linkClass(active)} aria-current={active ? 'page' : undefined}>
                    <Icon className="h-4 w-4 opacity-80" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="/favorites" onClick={onClose} className={linkClass(pathname === '/favorites')} aria-current={pathname === '/favorites' ? 'page' : undefined}>
                <Star className="h-4 w-4 opacity-80" aria-hidden="true" />
                Favorites
                {favoritesCount > 0 && (
                  <span className="ml-auto rounded-full bg-warning/15 px-1.5 py-0.5 font-mono text-[11px] tabular-nums text-warning">
                    {favoritesCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <div className="mb-2 mt-6 flex items-center justify-between px-3">
            <h2 className="eyebrow">Categories</h2>
            <button
              type="button"
              onClick={onCollapseDesktop}
              className="hidden h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-foreground lg:flex"
              aria-label="Hide sidebar"
              title="Hide sidebar"
            >
              <PanelLeftClose className="h-4 w-4" />
            </button>
          </div>
          <ul className="space-y-0.5">
            {manifest.categories.map((c) => (
              <CategoryItem key={c.id} category={c} activeCategory={category} activeTool={tool} onNavigate={onClose} />
            ))}
          </ul>

          <p className="mt-8 px-3 font-mono text-[11px] leading-5 text-muted-foreground">
            {manifest.totals.tools} tools · {manifest.totals.commands.toLocaleString('en-US')} commands
          </p>
        </nav>
      </aside>
    </>
  );
}
