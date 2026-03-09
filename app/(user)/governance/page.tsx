import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { governanceConfig } from '@/config/legal/governance';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Governance & Leadership',
  description:
    'Explore the governance structure, decision-making principles, leadership roles, and accountability framework that guide CredenceX AI Research Lab.',
  path: '/governance',
});

export default function GovernancePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.governance} />
      <GovernanceContent config={governanceConfig} />
    </main>
  );
}
