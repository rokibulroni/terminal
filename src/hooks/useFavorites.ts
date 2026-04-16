import { useCallback, useSyncExternalStore } from 'react';

export interface FavoriteCommand {
  id: string;
  toolName: string;
  toolDisplayName?: string;
  category: string;
  command: string;
  explanation: string;
  addedAt: number;
}

export interface RecentTool {
  category: string;
  tool: string;
  visitedAt: number;
}

const FAVORITES_KEY = 'terminal-favorites';
const RECENT_KEY = 'terminal-recent';
const MAX_RECENT = 8;

// ─────────────────────────────────────────────────────────────
// Favorites Store (shared across all hook instances)
// ─────────────────────────────────────────────────────────────
let favoritesCache: FavoriteCommand[] | null = null;
const favoritesListeners = new Set<() => void>();

function getFavorites(): FavoriteCommand[] {
  if (favoritesCache !== null) return favoritesCache;
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    favoritesCache = stored ? JSON.parse(stored) : [];
  } catch {
    favoritesCache = [];
  }
  return favoritesCache!;
}

function setFavorites(next: FavoriteCommand[]) {
  favoritesCache = next;
  if (typeof window !== 'undefined') {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  }
  favoritesListeners.forEach((l) => l());
}

function subscribeFavorites(listener: () => void) {
  favoritesListeners.add(listener);
  return () => {
    favoritesListeners.delete(listener);
  };
}

function getSnapshotFavorites(): FavoriteCommand[] {
  return getFavorites();
}

function getServerSnapshotFavorites(): FavoriteCommand[] {
  return [];
}

export function useFavorites() {
  const favorites = useSyncExternalStore(
    subscribeFavorites,
    getSnapshotFavorites,
    getServerSnapshotFavorites
  );

  const addFavorite = useCallback((command: Omit<FavoriteCommand, 'addedAt'>) => {
    const prev = getFavorites();
    if (prev.some((f) => f.id === command.id)) return;
    setFavorites([...prev, { ...command, addedAt: Date.now() }]);
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites(getFavorites().filter((f) => f.id !== id));
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.some((f) => f.id === id),
    [favorites]
  );

  const toggleFavorite = useCallback((command: Omit<FavoriteCommand, 'addedAt'>) => {
    const prev = getFavorites();
    const exists = prev.some((f) => f.id === command.id);
    if (exists) {
      setFavorites(prev.filter((f) => f.id !== command.id));
    } else {
      setFavorites([...prev, { ...command, addedAt: Date.now() }]);
    }
  }, []);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    count: favorites.length,
  };
}

// ─────────────────────────────────────────────────────────────
// Recent Tools Store
// ─────────────────────────────────────────────────────────────
let recentCache: RecentTool[] | null = null;
const recentListeners = new Set<() => void>();

function getRecent(): RecentTool[] {
  if (recentCache !== null) return recentCache;
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(RECENT_KEY);
    recentCache = stored ? JSON.parse(stored) : [];
  } catch {
    recentCache = [];
  }
  return recentCache!;
}

function setRecent(next: RecentTool[]) {
  recentCache = next;
  if (typeof window !== 'undefined') {
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  }
  recentListeners.forEach((l) => l());
}

function subscribeRecent(listener: () => void) {
  recentListeners.add(listener);
  return () => {
    recentListeners.delete(listener);
  };
}

function getSnapshotRecent(): RecentTool[] {
  return getRecent();
}

function getServerSnapshotRecent(): RecentTool[] {
  return [];
}

export function useRecentTools() {
  const recent = useSyncExternalStore(
    subscribeRecent,
    getSnapshotRecent,
    getServerSnapshotRecent
  );

  const addRecent = useCallback((category: string, tool: string) => {
    const prev = getRecent();
    const filtered = prev.filter((r) => !(r.category === category && r.tool === tool));
    const next = [{ category, tool, visitedAt: Date.now() }, ...filtered].slice(0, MAX_RECENT);
    setRecent(next);
  }, []);

  return { recent, addRecent };
}

