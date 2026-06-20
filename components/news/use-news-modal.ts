'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { News, getNewsBySlug, getNewsSlug } from '@/config/home/news';

type NewsModalBasePath = '/' | '/news';

export function useNewsModal(basePath: NewsModalBasePath) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  useEffect(() => {
    const slug = searchParams.get('article');
    if (!slug) {
      setSelectedNews(null);
      return;
    }
    setSelectedNews(getNewsBySlug(slug) ?? null);
  }, [searchParams]);

  const openNews = useCallback(
    (news: News) => {
      setSelectedNews(news);
      const params = new URLSearchParams(searchParams.toString());
      params.set('article', getNewsSlug(news));
      router.replace(`${basePath}?${params.toString()}`, { scroll: false });
    },
    [router, basePath, searchParams]
  );

  const closeNews = useCallback(() => {
    setSelectedNews(null);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('article');
    const query = params.toString();
    router.replace(query ? `${basePath}?${query}` : basePath, { scroll: false });
  }, [router, basePath, searchParams]);

  return { selectedNews, openNews, closeNews };
}
