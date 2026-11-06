import { useCallback } from 'react';
import { createPersistentStore } from '@/lib/persistent-store';

export interface FavoriteCommand {
  /** `${category}-${toolSlug}-${commandId}` */
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

const MAX_RECENT = 8;

const isFavoriteRecord = (v: unknown): v is FavoriteCommand => {
  const f = v as FavoriteCommand;
  return !!f && typeof f.id === 'string' && typeof f.command === 'string' && typeof f.toolName === 'string' && typeof f.category === 'string';
};
const isFavoriteList = (v: unknown): v is FavoriteCommand[] => Array.isArray(v) && v.every(isFavoriteRecord);
const isRecentList = (v: unknown): v is RecentTool[] =>
  Array.isArray(v) && v.every((r) => r && typeof r.category === 'string' && typeof r.tool === 'string');

const EMPTY_FAVORITES: FavoriteCommand[] = [];
const EMPTY_RECENT: RecentTool[] = [];

const favoritesStore = createPersistentStore('terminal-favorites', EMPTY_FAVORITES, isFavoriteList);
const recentStore = createPersistentStore('terminal-recent', EMPTY_RECENT, isRecentList);

export function useFavorites() {
  const favorites = favoritesStore.useStore();

  const addFavorite = useCallback((command: Omit<FavoriteCommand, 'addedAt'>) => {
    const prev = favoritesStore.read();
    if (prev.some((f) => f.id === command.id)) return;
    favoritesStore.write([...prev, { ...command, addedAt: Date.now() }]);
  }, []);

  const removeFavorite = useCallback((id: string) => {
    favoritesStore.write(favoritesStore.read().filter((f) => f.id !== id));
  }, []);

  const toggleFavorite = useCallback((command: Omit<FavoriteCommand, 'addedAt'>) => {
    const prev = favoritesStore.read();
    if (prev.some((f) => f.id === command.id)) favoritesStore.write(prev.filter((f) => f.id !== command.id));
    else favoritesStore.write([...prev, { ...command, addedAt: Date.now() }]);
  }, []);

  const isFavorite = useCallback((id: string) => favorites.some((f) => f.id === id), [favorites]);

  /** Merge favorites from an exported file. Returns how many were added. */
  const importFavorites = useCallback((data: unknown): number => {
    const list = Array.isArray(data) ? data.filter(isFavoriteRecord) : [];
    const prev = favoritesStore.read();
    const ids = new Set(prev.map((f) => f.id));
    const added = list.filter((f) => !ids.has(f.id)).map((f) => ({ ...f, addedAt: typeof f.addedAt === 'number' ? f.addedAt : Date.now() }));
    if (added.length) favoritesStore.write([...prev, ...added]);
    return added.length;
  }, []);

  const clearFavorites = useCallback(() => favoritesStore.write([]), []);

  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite, importFavorites, clearFavorites, count: favorites.length };
}

export function useRecentTools() {
  const recent = recentStore.useStore();

  const addRecent = useCallback((category: string, tool: string) => {
    const prev = recentStore.read();
    if (prev[0]?.category === category && prev[0]?.tool === tool) return;
    const filtered = prev.filter((r) => !(r.category === category && r.tool === tool));
    recentStore.write([{ category, tool, visitedAt: Date.now() }, ...filtered].slice(0, MAX_RECENT));
  }, []);

  const clearRecent = useCallback(() => recentStore.write([]), []);

  return { recent, addRecent, clearRecent };
}
