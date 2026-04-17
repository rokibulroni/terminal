import { useState, useEffect, useMemo, useCallback } from 'react';
import Fuse from 'fuse.js';
import { CATEGORY_TOOLS } from './useCategoryTools';

export interface SearchResult {
  type: 'tool' | 'command';
  category: string;
  tool: string;
  command?: string;
  explanation?: string;
  commandId?: number;
  score: number;
}

interface ToolSearchItem {
  type: 'tool';
  category: string;
  tool: string;
}

interface CommandSearchItem {
  type: 'command';
  category: string;
  tool: string;
  command: string;
  explanation: string;
  commandId: number;
}

type SearchItem = ToolSearchItem | CommandSearchItem;

export function useGlobalSearch() {
  const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Build search index from tools
  useEffect(() => {
    const buildIndex = async () => {
      const items: SearchItem[] = [];
      
      // Add all tools to index
      for (const [category, groups] of Object.entries(CATEGORY_TOOLS)) {
        for (const group of groups) {
          for (const tool of group.tools) {
            items.push({
              type: 'tool',
              category,
              tool,
            });

            // Try to fetch and add commands
            try {
              const response = await fetch(`/jsons/${category}/${tool}.json`);
              if (response.ok) {
                const data = await response.json();
                if (data.commands) {
                  for (const cmd of data.commands) {
                    items.push({
                      type: 'command',
                      category,
                      tool,
                      command: cmd.command,
                      explanation: cmd.explanation,
                      commandId: cmd.id,
                    });
                  }
                }
              }
            } catch (e) {
              // Tool JSON not available yet, skip commands
            }
          }
        }
      }

      setSearchIndex(items);
      setIsLoading(false);
    };

    buildIndex();
  }, []);

  // Create Fuse instance
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: [
        { name: 'tool', weight: 2 },
        { name: 'command', weight: 1.5 },
        { name: 'explanation', weight: 1 },
        { name: 'category', weight: 0.5 },
      ],
      threshold: 0.4,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }, [searchIndex]);

  const search = useCallback((query: string): SearchResult[] => {
    if (!query || query.length < 2) return [];
    
    const results = fuse.search(query, { limit: 15 });
    
    return results.map(result => ({
      ...result.item,
      score: result.score || 0,
    }));
  }, [fuse]);

  return {
    search,
    isLoading,
    indexSize: searchIndex.length,
  };
}
