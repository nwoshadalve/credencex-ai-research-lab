import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import AdvisoryBoardContent from '@/components/legal/advisory-board-content';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Advisory Board',
  description:
    'Meet the CredenceX Advisory Board members and learn how independent scientific, ethical, and strategic guidance strengthens research quality and accountability.',
  path: '/advisory-board',
  keywords: [
    'advisory board',
    'research advisors',
    'AI ethics advisors',
    'CredenceX governance',
  ],
});

export default function AdvisoryBoardPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.advisoryBoard} />
      <AdvisoryBoardContent />
    </main>
  );
}
