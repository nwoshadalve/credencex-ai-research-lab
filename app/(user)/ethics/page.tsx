import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { ethicsConfig } from '@/config/legal/ethics';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Ethics Standards',
  description:
    'Review the ethics standards that guide how CredenceX conducts, evaluates, and communicates research in high-stakes AI domains.',
  path: '/ethics',
});

export default function EthicsPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.ethics} />
      <GovernanceContent config={ethicsConfig} />
    </main>
  );
}
