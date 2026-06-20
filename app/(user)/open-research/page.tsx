import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { openResearchConfig } from '@/config/legal/open-research';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Open Research & Publication Policy',
  description:
    'Learn how CredenceX defines open research in practice, including code availability tiers, reproducibility expectations, and preprint policy.',
  path: '/open-research',
  keywords: [
    'open research policy',
    'reproducible AI research',
    'preprint policy',
    'research code sharing',
  ],
});

export default function OpenResearchPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.openResearch} />
      <GovernanceContent config={openResearchConfig} />
    </main>
  );
}
