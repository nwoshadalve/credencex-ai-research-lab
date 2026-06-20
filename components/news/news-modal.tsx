'use client';

import { News } from '@/config/home/news';
import Modal from '@/components/common/modal';
import NewsArticleContent from '@/components/news/news-article-content';

interface NewsModalProps {
  news: News | null;
  onClose: () => void;
}

export default function NewsModal({ news, onClose }: NewsModalProps) {
  return (
    <Modal
      isOpen={!!news}
      onClose={onClose}
      title="News article"
      labelledBy="news-modal-title"
      maxWidth="3xl"
    >
      <div id="news-modal-title">
        {news && <NewsArticleContent news={news} headingLevel="h2" />}
      </div>
    </Modal>
  );
}
