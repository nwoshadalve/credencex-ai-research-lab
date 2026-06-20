'use client';

import { useState, useEffect, useRef, type RefObject } from 'react';

interface UseIncrementalLoadOptions {
  totalItems: number;
  pageSize: number;
  resetKey: string;
}

interface UseIncrementalLoadResult {
  visibleCount: number;
  sentinelRef: RefObject<HTMLDivElement | null>;
  hasMore: boolean;
}

export function useIncrementalLoad({
  totalItems,
  pageSize,
  resetKey,
}: UseIncrementalLoadOptions): UseIncrementalLoadResult {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < totalItems;

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [resetKey, pageSize]);

  useEffect(() => {
    setVisibleCount((current) => {
      if (totalItems === 0) return pageSize;
      return Math.min(current, totalItems);
    });
  }, [totalItems, pageSize]);

  // Reconnect after each batch so a sentinel that stays in view keeps loading.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore || totalItems === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + pageSize, totalItems));
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, resetKey, totalItems, pageSize, visibleCount]);

  return { visibleCount, sentinelRef, hasMore };
}
