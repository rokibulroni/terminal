import { useCallback, useSyncExternalStore } from 'react';

const GLOBAL_IP_KEY = 'terminal-global-ip';

// Cookie expiry in days
const COOKIE_DAYS = 30;

let globalIPCache: string | null = null;
const listeners = new Set<() => void>();

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getGlobalIPValue(): string {
  if (globalIPCache !== null) return globalIPCache;
  const stored = getCookie(GLOBAL_IP_KEY);
  globalIPCache = stored || '';
  return globalIPCache;
}

function setGlobalIPValue(next: string) {
  globalIPCache = next;
  setCookie(GLOBAL_IP_KEY, next, next ? COOKIE_DAYS : -1);
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): string {
  return getGlobalIPValue();
}

function getServerSnapshot(): string {
  return '';
}

export function useGlobalIP() {
  const globalIP = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setGlobalIP = useCallback((ip: string) => {
    setGlobalIPValue(ip);
  }, []);

  const clearGlobalIP = useCallback(() => {
    setGlobalIPValue('');
  }, []);

  return { globalIP, setGlobalIP, clearGlobalIP };
}
