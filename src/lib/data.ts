/**
 * App data layer.
 *
 * - The manifest (categories, tool summaries, counts) is generated at build
 *   time and bundled, so navigation, the dashboard and category pages render
 *   instantly and during prerendering without any network request.
 * - Full tool data and the search index are fetched on demand through React
 *   Query, which dedupes and caches them for the session. Prerendered pages
 *   ship their tool data inline, so hydration needs no fetch either.
 */
import { useQuery, type QueryClient } from '@tanstack/react-query';
import manifestJson from '@/data/generated/manifest.json';
import type { Manifest, ManifestCategory, SearchIndex, Tool, ToolSummary } from '@/data/types';
import { toolApiPath } from '@/data/routes';

export const manifest = manifestJson as unknown as Manifest;

const categoryById = new Map(manifest.categories.map((c) => [c.id, c]));

export function getCategory(id: string | undefined): ManifestCategory | undefined {
  return id ? categoryById.get(id) : undefined;
}

export function getToolSummary(slug: string | undefined): ToolSummary | undefined {
  return slug ? manifest.tools[slug] : undefined;
}

export function toolHref(slug: string): string {
  const t = manifest.tools[slug];
  return t ? `/tool/${t.category}/${t.slug}` : '/';
}

/** All tools in a category in display order (cross-listings included, de-duplicated). */
export function getCategoryTools(id: string): ToolSummary[] {
  const cat = categoryById.get(id);
  if (!cat) return [];
  const seen = new Set<string>();
  const out: ToolSummary[] = [];
  for (const g of cat.groups) {
    for (const s of g.tools) {
      if (seen.has(s)) continue;
      seen.add(s);
      const t = manifest.tools[s];
      if (t) out.push(t);
    }
  }
  return out;
}

/** Previous/next tool within the tool's canonical category. */
export function getAdjacentTools(slug: string): { prev?: ToolSummary; next?: ToolSummary } {
  const t = manifest.tools[slug];
  if (!t) return {};
  const list = getCategoryTools(t.category);
  const i = list.findIndex((x) => x.slug === slug);
  return { prev: i > 0 ? list[i - 1] : undefined, next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined };
}

/** Tools that list this tool as related, plus its own related list, de-duplicated. */
export function getRelatedTools(slug: string, limit = 6): ToolSummary[] {
  const t = manifest.tools[slug];
  if (!t) return [];
  const out: ToolSummary[] = [];
  const add = (s: string) => {
    const r = manifest.tools[s];
    if (r && r.slug !== slug && !out.includes(r)) out.push(r);
  };
  t.related.forEach(add);
  for (const other of Object.values(manifest.tools)) if (other.related.includes(slug)) add(other.slug);
  // Fall back to group siblings so every page links somewhere useful.
  if (out.length < 3) {
    const group = getCategory(t.category)?.groups.find((g) => g.tools.includes(slug));
    group?.tools.forEach(add);
  }
  return out.slice(0, limit);
}

// ───────────────────────────── Queries ─────────────────────────────

export class NotFoundError extends Error {}

export const toolQueryKey = (category: string, slug: string) => ['tool', category, slug] as const;
export const searchIndexQueryKey = ['search-index'] as const;

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (res.status === 404) throw new NotFoundError(url);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return (await res.json()) as T;
}

export function fetchTool(category: string, slug: string): Promise<Tool> {
  return fetchJson<Tool>(toolApiPath(category, slug));
}

export function useTool(category: string | undefined, slug: string | undefined) {
  const known = !!category && !!slug && manifest.tools[slug]?.category === category;
  return useQuery({
    queryKey: toolQueryKey(category ?? '', slug ?? ''),
    queryFn: () => fetchTool(category!, slug!),
    enabled: known,
    staleTime: Infinity,
    retry: (count, err) => !(err instanceof NotFoundError) && count < 2,
  });
}

export function prefetchTool(client: QueryClient, category: string, slug: string) {
  return client.prefetchQuery({ queryKey: toolQueryKey(category, slug), queryFn: () => fetchTool(category, slug), staleTime: Infinity });
}

export function useSearchIndex(enabled = true) {
  return useQuery({
    queryKey: searchIndexQueryKey,
    queryFn: () => fetchJson<SearchIndex>('/api/v1/search-index.json'),
    enabled,
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
