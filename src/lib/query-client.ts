import { QueryClient } from '@tanstack/react-query';

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60_000,
        refetchOnWindowFocus: false,
      },
    },
  });
}

/** Id of the inline JSON block the prerenderer writes the query cache into. */
export const DEHYDRATED_STATE_ID = '__TERMINAL_STATE__';
