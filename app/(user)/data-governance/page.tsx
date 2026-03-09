import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { dataGovernanceConfig } from '@/config/legal/data-governance';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Governance | CredenceX AI Research Lab',
  description: 'How CredenceX handles, stores, and uses data in research — including commitments to data minimization, security, and responsible use.',
};

export default function DataGovernancePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.dataGovernance} />
      <GovernanceContent config={dataGovernanceConfig} />
    </main>
  );
}
