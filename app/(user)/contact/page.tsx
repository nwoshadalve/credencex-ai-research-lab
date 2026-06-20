import { Metadata } from 'next';
import Hero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import ContactSection from '@/components/contact/contact-section';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact CredenceX AI Research Lab for research collaborations, ethics inquiries, media requests, careers, privacy requests, and legal matters.',
  path: '/contact',
  keywords: [
    'contact CredenceX',
    'research collaboration inquiry',
    'AI research partnership',
  ],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <Hero content={pageHeroContent.contact} />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
