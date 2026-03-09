import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { openResearchConfig } from '@/config/legal/open-research';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Open Research & Publication Policy',
  description:
    'Learn how CredenceX shares publications, methods, code, and supporting research materials while balancing openness with privacy, safety, and responsible communication.',
  path: '/open-research',
});

export default function OpenResearchPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.openResearch} />
      <GovernanceContent config={openResearchConfig} />
    </main>
  );
}
