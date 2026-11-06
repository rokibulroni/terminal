/** Glossary of terms used across the reference. Dependency-free. */

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  /** Related tool slugs. */
  tools?: string[];
  /** Related term slugs. */
  see?: string[];
}

export const GLOSSARY: GlossaryTerm[] = [];
