import { useCallback, useSyncExternalStore } from 'react';

/**
 * The user's target host, persisted in localStorage (it was a cookie before;
 * the old cookie is migrated once and then removed so it is never sent to
 * the server).
 */
const KEY = 'terminal-global-ip';

let cache: string | null = null;
const listeners = new Set<() => void>();

function load(): string {
  if (cache !== null) return cache;
  if (typeof window === 'undefined') return '';
  let value = '';
  try {
    value = localStorage.getItem(KEY) ?? '';
    const legacy = document.cookie.split('; ').find((c) => c.startsWith(`${KEY}=`));
    if (legacy) {
      if (!value) value = decodeURIComponent(legacy.slice(KEY.length + 1));
      document.cookie = `${KEY}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      if (value) localStorage.setItem(KEY, value);
    }
  } catch {
    /* storage unavailable */
  }
  cache = value;
  return value;
}

function save(next: string) {
  cache = next;
  try {
    if (next) localStorage.setItem(KEY, next);
    else localStorage.removeItem(KEY);
  } catch {
    /* storage unavailable — keep in memory for this visit */
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = e.newValue ?? '';
      listener();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

export function useGlobalIP() {
  const globalIP = useSyncExternalStore(subscribe, load, () => '');
  const setGlobalIP = useCallback((ip: string) => save(ip.trim()), []);
  const clearGlobalIP = useCallback(() => save(''), []);
  return { globalIP, setGlobalIP, clearGlobalIP };
}
