import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { legalNoticeConfig } from '@/config/legal/legal-notice';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Institutional Status & Legal Notice',
  description:
    'Review CredenceX institutional status, legal disclaimers, permitted use guidance, and related notices for visitors, collaborators, and users of our research outputs.',
  path: '/legal-notice',
});

export default function LegalNoticePage() {
  return (
    <main>
      <PageHero content={pageHeroContent.legalNotice} />
      <GovernanceContent config={legalNoticeConfig} category="legal" />
    </main>
  );
}
