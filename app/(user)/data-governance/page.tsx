import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { dataGovernanceConfig } from '@/config/legal/data-governance';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Data Governance',
  description:
    'Understand CredenceX data governance, including data classification tiers, retention workflows, access approval, privacy safeguards, and incident response.',
  path: '/data-governance',
  keywords: [
    'data governance',
    'research data policy',
    'health data governance',
    'data classification',
  ],
});

export default function DataGovernancePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.dataGovernance} />
      <GovernanceContent config={dataGovernanceConfig} />
    </main>
  );
}
