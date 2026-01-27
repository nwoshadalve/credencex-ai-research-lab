import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import TermsContent from '@/components/legal/terms-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | CredenceX AI Research Lab',
  description: 'Read the Terms of Service for CredenceX AI Research Lab. Understand your rights and obligations when using our website and services.',
};

export default function TermsPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.terms} />
      <TermsContent />
    </main>
  );
}
