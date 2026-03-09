import type { Metadata } from "next";
import PageHero from "@/components/common/hero";
import { pageHeroContent } from "@/config/common/page-hero";
import PapersSection from "@/components/publications/papers-section";
import { createPageMetadata } from "@/lib/seo";

type FilterType = 'all' | 'conference' | 'journal';

type PublicationsPageProps = {
  searchParams?: Promise<{ type?: string }> | { type?: string };
};

const allowedFilters = new Set<FilterType>(['all', 'conference', 'journal']);

export const metadata: Metadata = createPageMetadata({
  title: "Publications",
  description:
    "Browse CredenceX research publications, including journal articles and conference papers across trustworthy AI, medical imaging, and decision support.",
  path: "/publications",
});

export default async function PublicationsPage({ searchParams }: PublicationsPageProps) {
  const sp = await Promise.resolve(searchParams);
  const rawType = sp?.type;
  const typeParam =
    typeof rawType === 'string' && allowedFilters.has(rawType as FilterType)
      ? (rawType as FilterType)
      : null;
  
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
      <PapersSection typeParam={typeParam} />
    </main>
  );
}
