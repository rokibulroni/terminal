import { useState, useEffect } from 'react';
import { Tool } from '@/types/tool';

interface UseToolDataReturn {
  tool: Tool | null;
  loading: boolean;
  error: string | null;
}

export function useToolData(category: string, toolName: string): UseToolDataReturn {
  const [tool, setTool] = useState<Tool | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category || !toolName) {
      setLoading(false);
      return;
    }

    const fetchTool = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/jsons/${category}/${toolName}.json`);
        
        if (!response.ok) {
          throw new Error(`Tool not found: ${toolName}`);
        }

        const data: Tool = await response.json();
        setTool(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load tool');
        setTool(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTool();
  }, [category, toolName]);

  return { tool, loading, error };
}
