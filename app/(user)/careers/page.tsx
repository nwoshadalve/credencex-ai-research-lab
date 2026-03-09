import type { Metadata } from 'next';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import LookingForSection from '@/components/careers/looking-for/looking-for-section';
import JobListings from '@/components/careers/jobs/job-listings';
import CultureSection from '@/components/careers/culture/culture-section';
import ApplicationProcess from '@/components/careers/application/application-process';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Careers',
  description:
    'Explore career opportunities at CredenceX AI Research Lab and join researchers and engineers working on trustworthy AI for high-stakes applications.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <PageHero content={pageHeroContent.careers} />
      <LookingForSection />
      <JobListings />
      <CultureSection />
      <ApplicationProcess />
    </main>
  );
}
