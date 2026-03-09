import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import AdvisoryBoardContent from '@/components/legal/advisory-board-content';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Advisory Board',
  description:
    'Meet the CredenceX Advisory Board and learn how independent guidance strengthens scientific quality, ethical rigor, and strategic relevance.',
  path: '/advisory-board',
});

export default function AdvisoryBoardPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.advisoryBoard} />
      <AdvisoryBoardContent />
    </main>
  );
}
