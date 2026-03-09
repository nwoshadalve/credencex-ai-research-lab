import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { governanceConfig } from '@/config/legal/governance-pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Governance & Leadership | CredenceX AI Research Lab',
  description: 'An overview of the governance structure, decision-making principles, and leadership framework that guide CredenceX as an independent research initiative.',
};

export default function GovernancePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.governance} />
      <GovernanceContent config={governanceConfig} />
    </main>
  );
}
