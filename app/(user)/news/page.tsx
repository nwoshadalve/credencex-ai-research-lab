import type { Metadata } from 'next';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import NewsSection from '@/components/news/news-section';
import { NewsType } from '@/config/home/news';
import { createPageMetadata } from '@/lib/seo';

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
      <NewsSection newsType={type} />
    </main>
  );
}
