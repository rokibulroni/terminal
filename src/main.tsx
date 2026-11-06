import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from '@tanstack/react-query';
import { AppProviders, AppRoutes } from './App';
import { createQueryClient, DEHYDRATED_STATE_ID } from '@/lib/query-client';
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import './index.css';

const client = createQueryClient();

// Prerendered pages embed the data they were rendered with, so hydration
// produces identical markup without waiting for a network request.
const stateEl = document.getElementById(DEHYDRATED_STATE_ID);
if (stateEl?.textContent) {
  try {
    hydrate(client, JSON.parse(stateEl.textContent));
  } catch {
    /* fall back to fetching */
  }
}

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppProviders client={client}>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  </StrictMode>
);

const root = document.getElementById('root')!;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
