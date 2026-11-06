import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun, Terminal, Search, Star, Palette, Crosshair, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CommandPalette } from '@/components/search/CommandPalette';
import { useFavorites } from '@/hooks/useFavorites';
import { useGlobalIP } from '@/hooks/useGlobalIP';
import { useDeviceOS } from '@/hooks/useDeviceOS';
import { useTheme, COLOR_THEMES } from '@/lib/theme';
import { isValidTarget } from '@/lib/target';
import { cn } from '@/lib/utils';
import { OPEN_SEARCH_EVENT } from '@/lib/events';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const isTypingTarget = (el: EventTarget | null) => {
  const t = el as HTMLElement | null;
  return !!t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName));
};

function TargetPopover() {
  const { globalIP, setGlobalIP, clearGlobalIP } = useGlobalIP();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(globalIP);
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setValue(globalIP);
      setError('');
    }
  }, [open, globalIP]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValidTarget(value)) {
      setError('Enter an IPv4/IPv6 address or a hostname.');
      return;
    }
    setGlobalIP(value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn('h-9 w-9 rounded-lg', globalIP && 'bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary')}
          aria-label={globalIP ? `Target set to ${globalIP}. Change target` : 'Set target host'}
          title={globalIP ? `Target: ${globalIP}` : 'Set target host'}
        >
          <Crosshair className="h-[18px] w-[18px]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 rounded-xl" align="end">
        <form onSubmit={submit} className="space-y-3" noValidate>
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">Target host</h2>
            <p className="text-xs leading-5 text-muted-foreground">
              Shown in place of example addresses and <code className="text-[11px]">&lt;ip&gt;</code>-style placeholders in every command. Stored only in this browser.
            </p>
          </div>
          <div className="flex gap-2">
            <Input
              id="global-ip"
              aria-label="Target IP or hostname"
              aria-invalid={!!error}
              aria-describedby={error ? 'global-ip-error' : undefined}
              placeholder="10.10.11.5 or target.htb"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError('');
              }}
              className="h-9 font-mono text-sm"
              autoComplete="off"
              spellCheck={false}
              autoFocus
            />
            <Button type="submit" size="sm" className="h-9">
              Save
            </Button>
          </div>
          {error && (
            <p id="global-ip-error" role="alert" className="text-xs text-destructive">
              {error}
            </p>
          )}
          {globalIP && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-full text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={() => {
                clearGlobalIP();
                setOpen(false);
              }}
            >
              Clear target
            </Button>
          )}
        </form>
      </PopoverContent>
    </Popover>
  );
}

export function Header({ onMenuClick, isMenuOpen }: HeaderProps) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { count: favoritesCount } = useFavorites();
  const { os } = useDeviceOS();
  const { mode, color, toggleMode, setColor } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Support /?q=term (the WebSite SearchAction target).
  useEffect(() => {
    const q = new URLSearchParams(location.search).get('q');
    if (q) {
      setInitialQuery(q);
      setPaletteOpen(true);
      navigate({ pathname: location.pathname, hash: location.hash }, { replace: true });
    }
  }, [location.search, location.pathname, location.hash, navigate]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setInitialQuery('');
        setPaletteOpen((v) => !v);
        return;
      }
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey && !isTypingTarget(e.target)) {
        e.preventDefault();
        setInitialQuery('');
        setPaletteOpen(true);
      }
    };
    const onOpen = (e: Event) => {
      setInitialQuery((e as CustomEvent<{ query?: string }>).detail?.query ?? '');
      setPaletteOpen(true);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener(OPEN_SEARCH_EVENT, onOpen);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_SEARCH_EVENT, onOpen);
    };
  }, []);

  const isMac = os === 'mac' || os === 'ios';

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 h-14 w-full border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-200',
          scrolled ? 'border-border bg-background/85 shadow-[0_1px_12px_-6px_hsl(var(--foreground)/0.15)]' : 'border-transparent bg-background/70',
        )}
      >
        <div className="flex h-full items-center gap-2 px-3 sm:gap-3 sm:px-4 lg:px-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="h-9 w-9 shrink-0 rounded-lg lg:hidden"
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link to="/" className="group flex shrink-0 items-center gap-2.5 rounded-lg pr-1" aria-label="Terminal — home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:border-primary/50">
              <Terminal className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span className="hidden font-mono text-[15px] font-semibold tracking-tight sm:inline">Terminal</span>
          </Link>

          <button
            type="button"
            onClick={() => {
              setInitialQuery('');
              setPaletteOpen(true);
            }}
            className={cn(
              'group mx-auto flex h-9 min-w-0 flex-1 items-center gap-2.5 rounded-lg border border-border/70 bg-muted/40 px-3 text-left sm:max-w-md',
              'transition-colors hover:border-primary/40 hover:bg-muted/70',
            )}
            aria-label="Search tools and commands"
            aria-keyshortcuts={isMac ? 'Meta+K' : 'Control+K'}
          >
            <Search className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" aria-hidden="true" />
            <span className="flex-1 truncate text-sm text-muted-foreground">Search tools & commands…</span>
            <span className="hidden items-center gap-1 md:flex" aria-hidden="true">
              <kbd className="kbd">{isMac ? '⌘' : 'Ctrl'}</kbd>
              <kbd className="kbd">K</kbd>
            </span>
          </button>

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
            <Button asChild variant="ghost" size="icon" className="relative h-9 w-9 rounded-lg">
              <Link to="/favorites" aria-label={`Favorites (${favoritesCount})`} title="Favorites">
                <Star className={cn('h-[18px] w-[18px]', favoritesCount > 0 && 'fill-warning text-warning')} />
                {favoritesCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold tabular-nums text-primary-foreground">
                    {favoritesCount > 99 ? '99+' : favoritesCount}
                  </span>
                )}
              </Link>
            </Button>

            <TargetPopover />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden h-9 w-9 rounded-lg sm:inline-flex" aria-label="Accent colour" title="Accent colour">
                  <Palette className="h-[18px] w-[18px]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 rounded-xl">
                <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">Accent colour</DropdownMenuLabel>
                {COLOR_THEMES.map((t) => (
                  <DropdownMenuItem key={t.id} onSelect={() => setColor(t.id)} className="cursor-pointer gap-3 rounded-lg">
                    <span className="h-3.5 w-3.5 rounded-full ring-1 ring-inset ring-black/10" style={{ background: t.swatch }} aria-hidden="true" />
                    {t.name}
                    {color === t.id && <Check className="ml-auto h-4 w-4 text-primary" aria-label="selected" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMode}
              className="h-9 w-9 rounded-lg"
              aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={mode === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <Sun className="h-[18px] w-[18px] hidden dark:block" />
              <Moon className="h-[18px] w-[18px] dark:hidden" />
            </Button>
          </div>
        </div>
      </header>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} initialQuery={initialQuery} />
    </>
  );
}
