/**
 * renderText / useRenderText – reusable inline-link renderer
 *
 * Converts a plain string into a React node, replacing any configured
 * phrases with Next.js <Link> elements.
 *
 * Two variants:
 *
 *  renderText(text, patterns?)
 *    Plain function. Uses all supplied patterns unconditionally.
 *    Safe to call outside React components (e.g. in server components).
 *
 *  useRenderText(patterns?)
 *    React hook. Returns a renderText function that automatically skips
 *    any pattern whose href matches the current page pathname, so a phrase
 *    like "Privacy Policy" is never linked when you are already on /privacy.
 *
 * Usage
 * -----
 * // In a 'use client' component – preferred, handles current-page skipping:
 * const renderText = useRenderText();
 * <p>{renderText('See our Privacy Policy for details.')}</p>
 *
 * // Anywhere else – no current-page awareness:
 * <p>{renderText('See our Privacy Policy for details.')}</p>
 */

import React, { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  inlineLinkPatterns,
  InlineLinkPattern,
} from '@/config/common/inline-links';

// ---------------------------------------------------------------------------
// Core helper – applies a pre-filtered list of patterns to a string
// ---------------------------------------------------------------------------

function applyPatterns(
  text: string,
  patterns: InlineLinkPattern[],
): React.ReactNode {
  let parts: (string | React.ReactElement)[] = [text];

  patterns.forEach(({ match, href }) => {
    const next: (string | React.ReactElement)[] = [];

    parts.forEach((part, partIdx) => {
      if (typeof part !== 'string') {
        next.push(part);
        return;
      }

      const segments = part.split(match);

      segments.forEach((seg, segIdx) => {
        if (seg) next.push(seg);

        if (segIdx < segments.length - 1) {
          next.push(
            <Link
              key={`${match}-${partIdx}-${segIdx}`}
              href={href}
              className="underline underline-offset-2 transition-colors text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {match}
            </Link>
          );
        }
      });
    });

    parts = next;
  });

  return <>{parts}</>;
}

// ---------------------------------------------------------------------------
// renderText – plain function, no current-page awareness
// ---------------------------------------------------------------------------

export function renderText(
  text: string,
  patterns: InlineLinkPattern[] = inlineLinkPatterns,
): React.ReactNode {
  return applyPatterns(text, patterns);
}

// ---------------------------------------------------------------------------
// useRenderText – hook, automatically skips links for the current page
// ---------------------------------------------------------------------------

/**
 * Returns a memoised renderText function that filters out any pattern
 * whose href exactly matches the current pathname (with or without a
 * trailing slash), so matched phrases are rendered as plain text instead
 * of self-referential links.
 *
 * @param patterns  Override the default pattern list if needed.
 */
export function useRenderText(
  patterns: InlineLinkPattern[] = inlineLinkPatterns,
) {
  const pathname = usePathname();

  const render = useCallback(
    (text: string): React.ReactNode => {
      // Normalise pathname: strip trailing slash, keep leading slash
      const currentPath = pathname.replace(/\/$/, '') || '/';

      const active = patterns.filter(({ href }) => {
        // Normalise the pattern href the same way
        const normalised = href.replace(/\/$/, '') || '/';
        return normalised !== currentPath;
      });

      return applyPatterns(text, active);
    },
    [pathname, patterns],
  );

  return render;
}
