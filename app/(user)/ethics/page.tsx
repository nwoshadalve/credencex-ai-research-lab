import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { ethicsConfig } from '@/config/legal/governance-pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ethics Standards | CredenceX AI Research Lab',
  description: 'The standards and principles that govern how CredenceX conducts, evaluates, and communicates its research.',
};

export default function EthicsPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.ethics} />
      <GovernanceContent config={ethicsConfig} />
    </main>
  );
}
