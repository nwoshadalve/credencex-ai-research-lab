import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import AdvisoryBoardContent from '@/components/legal/advisory-board-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advisory Board | CredenceX AI Research Lab',
  description: 'Our advisory board brings together expertise across AI research, clinical practice, and responsible technology development.',
};

export default function AdvisoryBoardPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.advisoryBoard} />
      <AdvisoryBoardContent />
    </main>
  );
}
