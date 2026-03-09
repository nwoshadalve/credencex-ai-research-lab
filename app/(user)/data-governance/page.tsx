import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { dataGovernanceConfig } from '@/config/legal/data-governance';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Data Governance',
  description:
    'Understand how CredenceX manages research and operational data, including privacy protection, secure handling, responsible reuse, and access controls.',
  path: '/data-governance',
});

export default function DataGovernancePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.dataGovernance} />
      <GovernanceContent config={dataGovernanceConfig} />
    </main>
  );
}
