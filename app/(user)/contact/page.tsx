import { Metadata } from 'next';
import Hero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import ContactSection from '@/components/contact/contact-section';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with CredenceX AI Research Lab for research collaborations, advisory inquiries, partnerships, or career opportunities.',
  path: '/contact',
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
