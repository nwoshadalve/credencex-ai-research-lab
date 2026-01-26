import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import MissionVision from '@/components/about/mission-vision/mission-vision';
import ResearchArea from '@/components/about/research-area/research-area';
import Philosophy from '@/components/about/philosophy/philosophy';

import CoreValues from '@/components/about/values/values';
import JoinResearchCommunity from '@/components/about/join-community/join-community';

export default function AboutPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.about} />
      <MissionVision />
      <ResearchArea />
      <Philosophy />
      <CoreValues />
      <JoinResearchCommunity />
    </main>
  );
}
