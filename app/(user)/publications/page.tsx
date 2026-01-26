'use client';

import { useSearchParams } from 'next/navigation';
import PageHero from "@/components/common/hero";
import { pageHeroContent } from "@/config/common/page-hero";
import PapersSection from "@/components/publications/papers-section";

export default function PublicationsPage() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  
  // Update hero content based on type parameter
  const getHeroContent = () => {
    const baseContent = { ...pageHeroContent.researchPaper };
    
    if (typeParam === 'conference') {
      return {
        ...baseContent,
        badge: { text: "Conference Papers" },
        title: "Conference Publications",
        subtitle: "Cutting-Edge Research Presented at Leading AI Conferences"
      };
    } else if (typeParam === 'journal') {
      return {
        ...baseContent,
        badge: { text: "Journal Articles" },
        title: "Journal Publications",
        subtitle: "Peer-Reviewed Research in Prestigious Academic Journals"
      };
    }
    
    return baseContent;
  };

  return (
    <main>
      <PageHero content={getHeroContent()} />
      <PapersSection />
    </main>
  );
}
