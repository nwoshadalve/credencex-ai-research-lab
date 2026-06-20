import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import TermsContent from '@/components/legal/terms-content';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Use',
  description:
    'Read the terms of use for the CredenceX AI Research Lab website, including permitted use, disclaimers, and limitations of liability.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.terms} />
      <TermsContent />
    </main>
  );
}
