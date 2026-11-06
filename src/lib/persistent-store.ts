import { useSyncExternalStore } from 'react';

/**
 * A tiny localStorage-backed store shared by every component that uses it.
 * Safe during prerendering (returns the fallback) and when storage is
 * unavailable; stays in sync across tabs.
 */
export function createPersistentStore<T>(key: string, fallback: T, validate: (v: unknown) => v is T) {
  let cache: T | undefined;
  const listeners = new Set<() => void>();

  const read = (): T => {
    if (cache !== undefined) return cache;
    if (typeof window === 'undefined') return fallback;
    try {
      const raw = localStorage.getItem(key);
      const parsed: unknown = raw ? JSON.parse(raw) : fallback;
      cache = validate(parsed) ? parsed : fallback;
    } catch {
      cache = fallback;
    }
    return cache;
  };

  const write = (next: T) => {
    cache = next;
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      /* quota exceeded or storage disabled — keep in memory */
    }
    listeners.forEach((l) => l());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) {
        cache = undefined;
        listener();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener('storage', onStorage);
    };
  };

  const useStore = () => useSyncExternalStore(subscribe, read, () => fallback);

  return { read, write, useStore };
}
