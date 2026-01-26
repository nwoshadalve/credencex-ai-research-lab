'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import NewsSection from '@/components/news/news-section';
import { NewsType } from '@/config/home/news';

function NewsPageContent() {
  const searchParams = useSearchParams();
  const type = (searchParams.get('type') || 'all') as NewsType | 'all';

  return (
    <>
      <PageHero content={pageHeroContent.news} />
      <NewsSection newsType={type} />
    </>
  );
}

export default function NewsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsPageContent />
    </Suspense>
  );
}
