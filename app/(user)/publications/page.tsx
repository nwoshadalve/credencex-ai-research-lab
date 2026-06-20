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

export async function generateMetadata({
  searchParams,
}: PublicationsPageProps): Promise<Metadata> {
  const sp = await Promise.resolve(searchParams);
  const type = sp?.type;

  if (type === 'conference') {
    return createPageMetadata({
      title: 'Conference Publications',
      description:
        'Browse CredenceX conference papers on trustworthy AI, medical imaging, clinical decision support, and related high-stakes research.',
      path: '/publications?type=conference',
      keywords: ['conference papers', 'AI conference publications', 'medical imaging research papers'],
    });
  }

  if (type === 'journal') {
    return createPageMetadata({
      title: 'Journal Publications',
      description:
        'Browse CredenceX journal articles on trustworthy AI, medical imaging, clinical decision support, and deployment-aware healthcare research.',
      path: '/publications?type=journal',
      keywords: ['journal articles', 'AI journal publications', 'healthcare AI research'],
    });
  }

  return createPageMetadata({
    title: 'Publications',
    description:
      'Browse CredenceX research publications, including journal articles and conference papers across trustworthy AI, medical imaging, and decision support.',
    path: '/publications',
    keywords: ['research publications', 'AI papers', 'medical imaging publications'],
  });
}

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
        subtitle: "Conference research across the full publication pipeline"
      };
    } else if (typeParam === 'journal') {
      return {
        ...baseContent,
        badge: { text: "Journal Articles" },
        title: "Journal Publications",
        subtitle: "Journal research across the full publication pipeline"
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
