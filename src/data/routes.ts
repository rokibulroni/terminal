/** Static (non-data) routes. Shared by the sitemap generator and prerenderer. */

export interface StaticRoute {
  path: string;
  /** Include in sitemap.xml and allow indexing. */
  index: boolean;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export const STATIC_ROUTES: StaticRoute[] = [
  { path: '/', index: true, priority: 1.0, changefreq: 'weekly' },
  { path: '/guides', index: true, priority: 0.8, changefreq: 'weekly' },
  { path: '/glossary', index: true, priority: 0.6, changefreq: 'monthly' },
  { path: '/practice', index: true, priority: 0.6, changefreq: 'monthly' },
  { path: '/developers', index: true, priority: 0.5, changefreq: 'monthly' },
  { path: '/how-to-use', index: true, priority: 0.5, changefreq: 'monthly' },
  { path: '/about', index: true, priority: 0.4, changefreq: 'yearly' },
  { path: '/contribute', index: true, priority: 0.4, changefreq: 'yearly' },
  { path: '/contact', index: true, priority: 0.3, changefreq: 'yearly' },
  { path: '/disclaimer', index: true, priority: 0.2, changefreq: 'yearly' },
  { path: '/privacy', index: true, priority: 0.2, changefreq: 'yearly' },
  { path: '/terms', index: true, priority: 0.2, changefreq: 'yearly' },
  { path: '/license', index: true, priority: 0.2, changefreq: 'yearly' },
  { path: '/favorites', index: false, priority: 0, changefreq: 'yearly' },
];

export const toolPath = (category: string, slug: string) => `/tool/${category}/${slug}`;
export const categoryPath = (id: string) => `/category/${id}`;
export const guidePath = (slug: string) => `/guide/${slug}`;
export const toolApiPath = (category: string, slug: string) => `/api/v1/tools/${category}/${slug}.json`;
export const toolMarkdownPath = (category: string, slug: string) => `/api/v1/tools/${category}/${slug}.md`;
