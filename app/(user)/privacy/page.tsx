import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import PrivacyContent from '@/components/legal/privacy-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CredenceX AI Research Lab',
  description: 'Learn how CredenceX AI Research Lab collects, uses, and protects your personal information. Our commitment to data privacy and security.',
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.privacy} />
      <PrivacyContent />
    </main>
  );
}
