import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { legalNoticeConfig } from '@/config/legal/legal-notice';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Institutional Status & Legal Notice',
  description:
    'Review CredenceX institutional status as CredenceX Ai Research Lab LLC, legal disclaimers, AI/Ai naming guidance, and important notices for visitors and collaborators.',
  path: '/legal-notice',
  keywords: [
    'legal notice',
    'institutional status',
    'CredenceX LLC',
    'research lab legal identity',
  ],
});

export default function LegalNoticePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.legalNotice} />
      <GovernanceContent config={legalNoticeConfig} category="legal" />
    </main>
  );
}
