import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import NewsSection from '@/components/news/news-section';
import { NewsType } from '@/config/home/news';

type NewsPageProps = {
  searchParams?: { type?: string };
};

export default function NewsPage({ searchParams }: NewsPageProps) {
  const type = (searchParams?.type || 'all') as NewsType | 'all';

  return (
    <main>
      <PageHero content={pageHeroContent.news} />
      <NewsSection newsType={type} />
    </main>
  );
}
