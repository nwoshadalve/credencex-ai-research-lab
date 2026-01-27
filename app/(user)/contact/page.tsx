import { Metadata } from 'next';
import Hero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import ContactSection from '@/components/contact/contact-section';

export const metadata: Metadata = {
  title: 'Contact - CredenceX AI Research Lab',
  description: 'Get in touch with CredenceX AI Research Lab. Contact us for research collaborations, partnerships, or career opportunities.',
};

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
