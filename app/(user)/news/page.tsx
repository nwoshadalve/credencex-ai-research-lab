import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import NewsPageContent from '@/components/news/news-page-content';
import { NewsType } from '@/config/home/news';
import { createPageMetadata } from '@/lib/seo';
import Loader from '@/components/common/loader';

type NewsPageProps = {
  searchParams?: { type?: string };
};

export const metadata: Metadata = createPageMetadata({
  title: 'News & Updates',
  description:
    'Read the latest announcements, events, awards, and research updates from CredenceX AI Research Lab.',
  path: '/news',
});

export default function NewsPage({ searchParams }: NewsPageProps) {
  const type = (searchParams?.type || 'all') as NewsType | 'all';

  return (
    <main>
      <PageHero content={pageHeroContent.news} />
      <Suspense
        fallback={
          <div className="py-20">
            <Loader variant="section" label="Loading news..." />
          </div>
        }
      >
        <NewsPageContent newsType={type} />
      </Suspense>
    </main>
  );
}
