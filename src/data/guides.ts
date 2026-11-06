/**
 * Workflow guides: curated, ordered walkthroughs that link into tool pages.
 * Dependency-free so build scripts can import it.
 */

export interface GuideStep {
  title: string;
  body: string;
  /** Tool slug this step uses (links to its page). */
  tool?: string;
  /** Copy-ready commands for this step. */
  commands?: { command: string; note?: string }[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  minutes: number;
  tags: string[];
  /** Plain-language framing shown before the steps. */
  intro: string;
  prerequisites?: string[];
  steps: GuideStep[];
  /** Closing advice. */
  outro?: string;
  updated: string;
}

export const GUIDES: Guide[] = [];
