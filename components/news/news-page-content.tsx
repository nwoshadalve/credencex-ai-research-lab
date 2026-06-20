'use client';

import NewsSection from '@/components/news/news-section';
import NewsModal from '@/components/news/news-modal';
import { useNewsModal } from '@/components/news/use-news-modal';
import { NewsType } from '@/config/home/news';

interface NewsPageContentProps {
  newsType: NewsType | 'all';
}

export default function NewsPageContent({ newsType }: NewsPageContentProps) {
  const { selectedNews, openNews, closeNews } = useNewsModal('/news');

  return (
    <>
      <NewsSection newsType={newsType} onOpenNews={openNews} />
      <NewsModal news={selectedNews} onClose={closeNews} />
    </>
  );
}
