/** Shared data types for the build scripts and the app. Types only. */

export interface Command {
  id: number;
  /** Section heading within the tool page (e.g. "Host Discovery"). */
  category: string;
  command: string;
  example: string;
  explanation: string;
}

export interface InstallMethods {
  apt?: string;
  dnf?: string;
  pacman?: string;
  brew?: string;
  pip?: string;
  pipx?: string;
  go?: string;
  cargo?: string;
  npm?: string;
  docker?: string;
  windows?: string;
  other?: string;
}

/** Shape of a source file in data/tools/<category>/<slug>.json */
export interface ToolSource {
  tool: string;
  name?: string;
  description: string;
  tags?: string[];
  homepage?: string;
  docs?: string;
  install?: InstallMethods;
  related?: string[];
  aliases?: string[];
  platforms?: string[];
  total_commands: number;
  commands: Command[];
}

/** A tool as served by the API / loaded by the tool page. */
export interface Tool extends ToolSource {
  slug: string;
  category: string;
  name: string;
  url: string;
}

/** Lightweight tool summary bundled into the app via the manifest. */
export interface ToolSummary {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  commandCount: number;
  sections: string[];
  related: string[];
  homepage?: string;
  docs?: string;
  install?: InstallMethods;
  platforms?: string[];
  lastmod?: string;
}

export interface ManifestGroup {
  name: string;
  tools: string[];
}

export interface ManifestCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  intro: string;
  groups: ManifestGroup[];
  toolCount: number;
  commandCount: number;
}

export interface Manifest {
  version: 1;
  generatedAt: string;
  totals: { categories: number; tools: number; commands: number };
  categories: ManifestCategory[];
  tools: Record<string, ToolSummary>;
}

/** Compact search index: arrays keep the payload small. */
export interface SearchIndex {
  version: 1;
  /** [slug, category, name, description, tags joined by space] */
  tools: [string, string, string, string, string][];
  /** [toolIndex, commandId, command, explanation, section] */
  commands: [number, number, string, string, string][];
}
