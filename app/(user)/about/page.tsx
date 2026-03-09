import type { Metadata } from 'next';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import MissionVision from '@/components/about/mission-vision/mission-vision';
import HowWeWork from '@/components/about/how-we-work/how-we-work';
import ResearchArea from '@/components/about/research-area/research-area';
import Philosophy from '@/components/about/philosophy/philosophy';
import CoreValues from '@/components/about/values/values';
import EthicsCulture from '@/components/about/ethics-culture/ethics-culture';
import JoinResearchCommunity from '@/components/about/join-community/join-community';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn about CredenceX AI Research Lab, including our mission, research philosophy, governance commitments, and approach to trustworthy AI in high-stakes domains.',
  path: '/about',
  keywords: [
    'about CredenceX',
    'AI research lab mission',
    'trustworthy AI research',
    'medical imaging AI lab',
  ],
});

export default function AboutPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.about} />
      <MissionVision />
      <ResearchArea />
      <HowWeWork />
      <Philosophy />
      <CoreValues />
      <EthicsCulture />
      <JoinResearchCommunity />
    </main>
  );
}
