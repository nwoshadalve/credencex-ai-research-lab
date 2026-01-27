import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import LookingForSection from '@/components/careers/looking-for/looking-for-section';
import JobListings from '@/components/careers/jobs/job-listings';
import CultureSection from '@/components/careers/culture/culture-section';
import ApplicationProcess from '@/components/careers/application/application-process';

export const metadata = {
  title: 'Careers - CredenceX AI Research Lab',
  description: 'Join our world-class team of researchers and engineers working on cutting-edge AI technology. Explore career opportunities at CredenceX.',
};

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
