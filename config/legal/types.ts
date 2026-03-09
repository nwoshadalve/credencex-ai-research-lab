/**
 * Shared structural types for all legal document configs.
 * Import these in any legal config (privacy-policy.ts, terms-conditions.ts, etc.)
 * and in the corresponding renderer components.
 */

export type DocBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'bullets';   items: string[] }
  | { type: 'closing';   text: string };

export interface DocSubsection {
  title: string;
  blocks: DocBlock[];
}

export interface DocSection {
  title: string;
  blocks: DocBlock[];
  subsections?: DocSubsection[];
}
