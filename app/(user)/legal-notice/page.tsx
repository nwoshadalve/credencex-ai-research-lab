import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { legalNoticeConfig } from '@/config/legal/governance-pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Institutional Status & Legal Notice | CredenceX AI Research Lab',
  description: 'Clarification of CredenceX institutional status and important notices for visitors, collaborators, and users of our research outputs.',
};

export default function LegalNoticePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.legalNotice} />
      <GovernanceContent config={legalNoticeConfig} />
    </main>
  );
}
