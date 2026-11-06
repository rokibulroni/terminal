import { useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { useSearchIndex } from '@/lib/data';

export interface ToolResult {
  type: 'tool';
  slug: string;
  category: string;
  name: string;
  description: string;
  score: number;
}

export interface CommandResult {
  type: 'command';
  slug: string;
  category: string;
  name: string;
  commandId: number;
  command: string;
  explanation: string;
  section: string;
  score: number;
}

export type SearchResult = ToolResult | CommandResult;

interface ToolItem { slug: string; category: string; name: string; description: string; tags: string }
interface CommandItem { slug: string; category: string; name: string; commandId: number; command: string; explanation: string; section: string }

/**
 * Fuzzy search over every tool and command. The index is fetched lazily the
 * first time `enabled` is true and cached for the session.
 */
export function useGlobalSearch(enabled = true) {
  const { data, isLoading, isError, refetch } = useSearchIndex(enabled);

  const engines = useMemo(() => {
    if (!data) return null;
    const tools: ToolItem[] = data.tools.map(([slug, category, name, description, tags]) => ({ slug, category, name, description, tags }));
    const commands: CommandItem[] = data.commands.map(([ti, commandId, command, explanation, section]) => ({
      slug: tools[ti].slug,
      category: tools[ti].category,
      name: tools[ti].name,
      commandId,
      command,
      explanation,
      section,
    }));
    return {
      tools: new Fuse(tools, {
        keys: [
          { name: 'slug', weight: 3 },
          { name: 'name', weight: 3 },
          { name: 'tags', weight: 1.5 },
          { name: 'description', weight: 1 },
        ],
        threshold: 0.3,
        includeScore: true,
        ignoreLocation: true,
      }),
      commands: new Fuse(commands, {
        keys: [
          { name: 'command', weight: 2 },
          { name: 'name', weight: 1.2 },
          { name: 'section', weight: 0.8 },
          { name: 'explanation', weight: 1 },
        ],
        threshold: 0.32,
        includeScore: true,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
      size: tools.length + commands.length,
    };
  }, [data]);

  const search = useCallback(
    (query: string, limits = { tools: 5, commands: 25 }): SearchResult[] => {
      const q = query.trim();
      if (!engines || q.length < 2) return [];
      const tools: SearchResult[] = engines.tools
        .search(q, { limit: limits.tools })
        .map((r) => ({ type: 'tool', ...r.item, score: r.score ?? 0 }));
      const commands: SearchResult[] = engines.commands
        .search(q, { limit: limits.commands })
        .map((r) => ({ type: 'command', ...r.item, score: r.score ?? 0 }));
      return [...tools, ...commands];
    },
    [engines],
  );

  return { search, isLoading: enabled && isLoading, isError, retry: refetch, indexSize: engines?.size ?? 0 };
}
