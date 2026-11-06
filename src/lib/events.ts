/** Open the global search palette from anywhere (handled in Header). */
export const OPEN_SEARCH_EVENT = 'terminal:open-search';

export function openSearch(query = '') {
  window.dispatchEvent(new CustomEvent(OPEN_SEARCH_EVENT, { detail: { query } }));
}
