import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { governanceConfig } from '@/config/legal/governance';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Governance & Leadership',
  description:
    'Explore CredenceX governance as a California LLC, including leadership structure, COI disclosure workflow, decision-making principles, and accountability practices.',
  path: '/governance',
  keywords: [
    'research governance',
    'conflict of interest policy',
    'AI lab leadership',
    'research accountability',
  ],
});

export default function GovernancePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.governance} />
      <GovernanceContent config={governanceConfig} />
    </main>
  );
}
