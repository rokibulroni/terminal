import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, Terminal, Search, Star, Command, Palette, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useFavorites } from '@/hooks/useFavorites';
import { useGlobalIP } from '@/hooks/useGlobalIP';
import { useDeviceOS } from '@/hooks/useDeviceOS';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CommandPalette } from '@/components/search/CommandPalette';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

type ColorTheme = 'harvest' | 'crimson' | 'forest';

const THEMES: { id: ColorTheme; name: string; color: string }[] = [
  { id: 'harvest', name: 'Harvest', color: 'bg-orange-500' },
  { id: 'crimson', name: 'Crimson', color: 'bg-red-500' },
  { id: 'forest', name: 'Forest', color: 'bg-green-500' },
];

export function Header({ onMenuClick, isSidebarOpen }: HeaderProps) {
  const [isDark, setIsDark] = useState(true);
  const [colorTheme, setColorTheme] = useState<ColorTheme>('harvest');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { count: favoritesCount } = useFavorites();
  const { globalIP, setGlobalIP, clearGlobalIP } = useGlobalIP();
  const [ipInput, setIpInput] = useState(globalIP);
  const [isIpPopoverOpen, setIsIpPopoverOpen] = useState(false);
  const { os } = useDeviceOS();

  useEffect(() => {
    setIpInput(globalIP);
  }, [globalIP]);

  // Track last scroll position for direction detection
  const lastScrollY = useState(0);

  useEffect(() => {
    // Load saved preferences
    const savedMode = localStorage.getItem('terminal-mode');
    const savedColorTheme = localStorage.getItem('terminal-color-theme') as ColorTheme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldBeDark = savedMode ? savedMode === 'dark' : prefersDark;
    const theme = savedColorTheme || 'harvest';

    setIsDark(shouldBeDark);
    setColorTheme(theme);

    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Track scroll for header shadow and visibility
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Update shadow state
      setIsScrolled(currentScroll > 10);

      // Determine visibility
      // Always show at the very top or if scrolling up
      // Hide if scrolling down and we're not at the top
      if (currentScroll < 10) {
        setIsVisible(true);
      } else {
        // Show if scrolling up, hide if scrolling down
        setIsVisible(currentScroll < lastScroll);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
        return;
      }

      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ... (Toggle/Theme functions remain same)

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('terminal-mode', newIsDark ? 'dark' : 'light');

    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const changeColorTheme = (theme: ColorTheme) => {
    setColorTheme(theme);
    localStorage.setItem('terminal-color-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  const currentTheme = THEMES.find(t => t.id === colorTheme);

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "border-border bg-background/95 backdrop-blur-xl shadow-md"
          : "border-border/50 bg-background/80 backdrop-blur-md",
        !isVisible && "-translate-y-full"
      )}>
        <div className="flex h-16 items-center px-2 sm:px-4 lg:px-6 gap-2 sm:gap-4">
          {/* Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="shrink-0 lg:hidden hover:bg-primary/10"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            <div className="relative p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <Terminal className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 rounded-xl blur-lg bg-primary/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-mono font-bold text-lg text-foreground leading-none">
                Terminal
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                Command Hub
              </span>
            </div>
          </Link>

          {/* Search Button */}
          <button
            onClick={() => setCommandPaletteOpen(true)}
            className={cn(
              "flex-1 max-w-md mx-auto flex items-center justify-center sm:justify-start gap-2 sm:gap-3 p-2 sm:px-4 sm:py-2.5 rounded-xl",
              "bg-muted/30 border border-border/50 hover:border-primary/40 hover:bg-muted/50",
              "transition-all duration-200 group shadow-sm hover:shadow-md"
            )}
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            <span className="text-sm text-muted-foreground flex-1 text-left hidden sm:inline">
              Search commands...
            </span>
            <div className="hidden md:flex items-center gap-1 bg-background/80 px-2 py-1 rounded-md border border-border/50">
              {os === 'mac' || os === 'ios' || os === 'unknown' ? (
                <Command className="h-3 w-3 text-muted-foreground" />
              ) : (
                <span className="text-[10px] font-medium text-muted-foreground">Ctrl</span>
              )}
              <span className="text-[10px] font-medium text-muted-foreground">K</span>
            </div>
          </button>

          {/* Right Actions */}
          <div className="flex items-center gap-0.5 sm:gap-2 shrink-0">
            {/* Favorites */}
            <Link to="/favorites">
              <Button
                variant="ghost"
                size="icon"
                className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl hover:bg-primary/10 transition-colors"
              >
                <Star className={cn(
                  "h-4 w-4 sm:h-5 sm:w-5 transition-colors",
                  favoritesCount > 0 ? "text-warning" : "text-muted-foreground"
                )} />
                {favoritesCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full bg-primary text-[10px] font-bold flex items-center justify-center text-primary-foreground shadow-sm">
                    {favoritesCount > 99 ? '99+' : favoritesCount}
                  </span>
                )}
              </Button>
            </Link>

            <Separator orientation="vertical" className="h-6 bg-border/50 hidden sm:block" />

            {/* Global IP Settings */}
            <Popover open={isIpPopoverOpen} onOpenChange={setIsIpPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-primary/10 transition-colors",
                    globalIP && "bg-primary/10 text-primary"
                  )}
                >
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Set Global IP</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Global IP Configuration</h4>
                    <p className="text-sm text-muted-foreground">
                      Set a global IP to automatically replace IPs in all commands across the platform.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Input
                        id="global-ip"
                        placeholder="e.g. 192.168.1.1"
                        value={ipInput}
                        onChange={(e) => setIpInput(e.target.value)}
                        className="col-span-2 h-8"
                      />
                      <Button 
                        size="sm" 
                        onClick={() => {
                          if (ipInput.trim()) {
                            setGlobalIP(ipInput.trim());
                            setIsIpPopoverOpen(false);
                          }
                        }}
                      >
                        Save
                      </Button>
                    </div>
                    {globalIP && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full h-8 mt-2 text-destructive hover:bg-destructive/10"
                        onClick={() => {
                          clearGlobalIP();
                          setIsIpPopoverOpen(false);
                        }}
                      >
                        Clear Global IP
                      </Button>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Color Theme Picker */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-primary/10 transition-colors"
                >
                  <div className="relative">
                    <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                    <div className={cn(
                      "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background",
                      currentTheme?.color
                    )} />
                  </div>
                  <span className="sr-only">Change theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="text-xs text-muted-foreground">Color Theme</DropdownMenuLabel>
                {THEMES.map((theme) => (
                  <DropdownMenuItem
                    key={theme.id}
                    onClick={() => changeColorTheme(theme.id)}
                    className={cn(
                      "cursor-pointer flex items-center gap-3",
                      colorTheme === theme.id && "bg-accent"
                    )}
                  >
                    <div className={cn("h-4 w-4 rounded-full", theme.color)} />
                    <span>{theme.name}</span>
                    {colorTheme === theme.id && (
                      <span className="ml-auto text-xs text-primary">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground">Mode</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={toggleDarkMode}
                  className="cursor-pointer flex items-center gap-3"
                >
                  {isDark ? (
                    <>
                      <Sun className="h-4 w-4 text-warning" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 text-primary" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark/Light Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-xl hover:bg-primary/10 transition-colors"
            >
              {isDark ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-warning transition-transform hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-transform hover:-rotate-12" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Command Palette */}
      <CommandPalette
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
      />
    </>
  );
}
