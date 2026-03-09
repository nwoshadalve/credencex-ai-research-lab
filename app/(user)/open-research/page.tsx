import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { openResearchConfig } from '@/config/legal/governance-pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Research & Publication Policy | CredenceX AI Research Lab',
  description: 'Our approach to publishing findings, sharing research artifacts, and communicating the scope, limitations, and uncertainty of our work.',
};

export default function OpenResearchPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.openResearch} />
      <GovernanceContent config={openResearchConfig} />
    </main>
  );
}
