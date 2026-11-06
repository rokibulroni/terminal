import { useCallback, useSyncExternalStore } from 'react';

/**
 * Theme state lives on <html>: the `dark` class and `data-theme` attribute.
 * An inline script in index.html applies the saved choice before first
 * paint (no flash); this module keeps React in sync with it.
 */

export type ColorTheme = 'harvest' | 'crimson' | 'forest';
export type Mode = 'light' | 'dark';

export const COLOR_THEMES: { id: ColorTheme; name: string; swatch: string }[] = [
  { id: 'harvest', name: 'Harvest', swatch: 'hsl(25 85% 50%)' },
  { id: 'crimson', name: 'Crimson', swatch: 'hsl(0 72% 50%)' },
  { id: 'forest', name: 'Forest', swatch: 'hsl(140 60% 38%)' },
];

const MODE_KEY = 'terminal-mode';
const COLOR_KEY = 'terminal-color-theme';

interface ThemeState { mode: Mode; color: ColorTheme }

const SERVER_STATE: ThemeState = { mode: 'light', color: 'harvest' };
let state: ThemeState | null = null;
const listeners = new Set<() => void>();

function read(): ThemeState {
  if (typeof document === 'undefined') return SERVER_STATE;
  const el = document.documentElement;
  const color = (el.getAttribute('data-theme') as ColorTheme) || 'harvest';
  return { mode: el.classList.contains('dark') ? 'dark' : 'light', color };
}

function emit() {
  state = read();
  listeners.forEach((l) => l());
}

function safeSet(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* storage unavailable (private mode) — theme still applies for this visit */
  }
}

function apply(mode: Mode, color: ColorTheme) {
  const el = document.documentElement;
  el.classList.toggle('dark', mode === 'dark');
  el.setAttribute('data-theme', color);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', mode === 'dark' ? '#18120e' : '#faf7f2');
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1 && typeof window !== 'undefined') {
    // Follow the OS while the user hasn't chosen explicitly.
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onOs = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem(MODE_KEY); } catch { /* ignore */ }
      if (!saved) apply(mq.matches ? 'dark' : 'light', read().color);
    };
    // Keep tabs in sync.
    const onStorage = (e: StorageEvent) => {
      if (e.key === MODE_KEY || e.key === COLOR_KEY) {
        const mode = (e.key === MODE_KEY ? e.newValue : null) as Mode | null;
        const color = (e.key === COLOR_KEY ? e.newValue : null) as ColorTheme | null;
        apply(mode ?? read().mode, color ?? read().color);
      }
    };
    mq.addEventListener('change', onOs);
    window.addEventListener('storage', onStorage);
    cleanup = () => {
      mq.removeEventListener('change', onOs);
      window.removeEventListener('storage', onStorage);
    };
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) cleanup?.();
  };
}
let cleanup: (() => void) | undefined;

export function useTheme() {
  const current = useSyncExternalStore(
    subscribe,
    () => (state ??= read()),
    () => SERVER_STATE,
  );
  const setMode = useCallback((mode: Mode) => {
    safeSet(MODE_KEY, mode);
    apply(mode, read().color);
  }, []);
  const toggleMode = useCallback(() => setMode(read().mode === 'dark' ? 'light' : 'dark'), [setMode]);
  const setColor = useCallback((color: ColorTheme) => {
    safeSet(COLOR_KEY, color);
    apply(read().mode, color);
  }, []);
  return { ...current, setMode, toggleMode, setColor };
}
