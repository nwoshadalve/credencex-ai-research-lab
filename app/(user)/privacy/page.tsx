import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import PrivacyContent from '@/components/legal/privacy-content';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'Learn how CredenceX AI Research Lab collects, uses, stores, and protects personal information across its website and communications.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.privacy} />
      <PrivacyContent />
    </main>
  );
}
