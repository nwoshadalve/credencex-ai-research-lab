import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import GovernanceContent from '@/components/legal/governance-content';
import { ethicsConfig } from '@/config/legal/ethics';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Ethics Standards',
  description:
    'Review CredenceX ethics standards for research integrity, human subjects protections, responsible communication, and reporting channels for ethics concerns.',
  path: '/ethics',
  keywords: [
    'research ethics',
    'AI ethics standards',
    'research integrity',
    'IRB partner institutions',
  ],
});

export default function EthicsPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.ethics} />
      <GovernanceContent config={ethicsConfig} />
    </main>
  );
}
