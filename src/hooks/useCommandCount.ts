import { useState, useEffect } from 'react';
import { CATEGORY_TOOLS } from './useCategoryTools';

interface CommandCountData {
  totalCommands: number;
  loading: boolean;
}

// Cache for command counts to avoid refetching
const commandCountCache: Record<string, number> = {};

export function useCommandCount(): CommandCountData {
  const [totalCommands, setTotalCommands] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommandCounts() {
      let total = 0;
      const fetchPromises: Promise<void>[] = [];

      for (const [category, groups] of Object.entries(CATEGORY_TOOLS)) {
        for (const group of groups) {
          for (const tool of group.tools) {
            const cacheKey = `${category}/${tool}`;
            
            if (commandCountCache[cacheKey] !== undefined) {
              total += commandCountCache[cacheKey];
            } else {
              fetchPromises.push(
                fetch(`/jsons/${category}/${tool}.json`)
                  .then(res => res.json())
                  .then(data => {
                    const count = data.commands?.length || 0;
                    commandCountCache[cacheKey] = count;
                    return count;
                  })
                  .catch(() => {
                    commandCountCache[cacheKey] = 0;
                    return 0;
                  })
                  .then(count => {
                    total += count;
                  })
              );
            }
          }
        }
      }

      await Promise.all(fetchPromises);
      setTotalCommands(total);
      setLoading(false);
    }

    fetchCommandCounts();
  }, []);

  return { totalCommands, loading };
}

