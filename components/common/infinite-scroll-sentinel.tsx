'use client';

import type { RefObject } from 'react';

interface InfiniteScrollSentinelProps {
  sentinelRef: RefObject<HTMLDivElement | null>;
  hasMore: boolean;
  visibleCount: number;
  totalCount: number;
  itemLabel?: string;
}

export default function InfiniteScrollSentinel({
  sentinelRef,
  hasMore,
  visibleCount,
  totalCount,
  itemLabel = 'items',
}: InfiniteScrollSentinelProps) {
  if (totalCount === 0) return null;

  return (
    <div className="mt-12 flex flex-col items-center">
      {/* Invisible target for the intersection observer */}
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />

      {!hasMore && visibleCount >= totalCount && (
        <p className="text-sm text-gray-600 dark:text-gray-400 pt-4">
          Showing all{' '}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">{totalCount}</span>{' '}
          {totalCount === 1 ? itemLabel.replace(/s$/, '') : itemLabel}
        </p>
      )}
    </div>
  );
}
