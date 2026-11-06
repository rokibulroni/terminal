import { createContext } from 'react';
import type { SeoProps } from './head-tags';

/** Collects the SEO props of the rendered page during prerendering. */
export class HeadCollector {
  props: SeoProps | null = null;
}
export const HeadContext = createContext<HeadCollector | null>(null);
