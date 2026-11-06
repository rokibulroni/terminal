/**
 * Server entry used only by scripts/prerender.ts at build time.
 * Renders a route to static HTML and reports its head tags and data.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { dehydrate } from '@tanstack/react-query';
import { AppProviders, AppRoutes } from './App';
import { createQueryClient } from '@/lib/query-client';
import { HeadCollector, HeadContext } from '@/lib/head';
import { renderHeadTags } from '@/lib/head-tags';
import { toolQueryKey } from '@/lib/data';
import type { Tool } from '@/data/types';

export interface RenderResult {
  html: string;
  head: string;
  state: string | null;
  noindex: boolean;
}

export function render(url: string, data: { tool?: Tool } = {}): RenderResult {
  const client = createQueryClient();
  if (data.tool) client.setQueryData(toolQueryKey(data.tool.category, data.tool.slug), data.tool);

  const head = new HeadCollector();
  const html = renderToString(
    <HeadContext.Provider value={head}>
      <StaticRouter location={url}>
        <AppProviders client={client}>
          <AppRoutes />
        </AppProviders>
      </StaticRouter>
    </HeadContext.Provider>,
  );

  const dehydrated = dehydrate(client);
  return {
    html,
    head: head.props ? renderHeadTags(head.props) : '',
    state: dehydrated.queries.length ? JSON.stringify(dehydrated) : null,
    noindex: !!head.props?.noindex,
  };
}
