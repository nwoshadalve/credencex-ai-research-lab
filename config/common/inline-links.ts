/**
 * Inline link patterns used by the renderText utility.
 *
 * Any text string rendered through `renderText()` that contains a `match`
 * phrase will have that phrase automatically replaced with a Next.js router
 * link pointing to the corresponding `href`.
 *
 * Add new entries here whenever you need auto-linked phrases in any page.
 */
export interface InlineLinkPattern {
  /** The plain-text phrase to look for (case-sensitive). */
  match: string;
  /** The internal route or external URL to link to. */
  href: string;
}

export const inlineLinkPatterns: InlineLinkPattern[] = [
  // Legal
  { match: 'Privacy Policy',                        href: '/privacy' },
  { match: 'Terms & Conditions',                    href: '/terms' },
  { match: 'Institutional Status & Legal Notice',   href: '/legal-notice' },

  // Governance pages
  { match: 'Advisory Board page',                   href: '/advisory-board' },
  { match: 'Advisory Board',                        href: '/advisory-board' },
  { match: 'Data Governance page',                  href: '/data-governance' },
  { match: 'Ethics Standards',                      href: '/ethics' },
  { match: 'Open Research & Publication Policy',    href: '/open-research' },
  { match: 'Governance & Leadership',               href: '/governance' },

  // Contact
  { match: 'Contact page',                          href: '/contact' },
  { match: 'Contact Page',                          href: '/contact' },
];
