import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { PanelLeftOpen } from 'lucide-react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';

const DESKTOP_NAV_KEY = 'terminal-sidebar';

export function Layout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const { pathname } = useLocation();

  // Restore the desktop sidebar preference after hydration.
  useEffect(() => {
    try {
      if (localStorage.getItem(DESKTOP_NAV_KEY) === 'collapsed') setDesktopOpen(false);
    } catch {
      /* ignore */
    }
  }, []);

  // Close the mobile drawer on navigation.
  useEffect(() => setMobileOpen(false), [pathname]);

  const setDesktop = useCallback((open: boolean) => {
    setDesktopOpen(open);
    try {
      localStorage.setItem(DESKTOP_NAV_KEY, open ? 'open' : 'collapsed');
    } catch {
      /* ignore */
    }
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-clip bg-background">
      <a
        href="#main"
        className="fixed left-3 top-3 z-[60] -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Header onMenuClick={() => setMobileOpen((v) => !v)} isMenuOpen={mobileOpen} />
      <Sidebar isOpen={mobileOpen} onClose={closeMobile} isDesktopOpen={desktopOpen} onCollapseDesktop={() => setDesktop(false)} />

      {!desktopOpen && (
        <button
          type="button"
          onClick={() => setDesktop(true)}
          className="fixed bottom-5 left-5 z-40 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-colors hover:border-primary/40 hover:text-primary lg:flex"
          aria-label="Show sidebar"
          title="Show sidebar"
        >
          <PanelLeftOpen className="h-4 w-4" />
        </button>
      )}

      <div className={cn('flex flex-1 flex-col transition-[margin] duration-300', desktopOpen ? 'lg:ml-64' : 'lg:ml-0')}>
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
