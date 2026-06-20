import type { Metadata } from "next";
import PageHero from "@/components/common/hero";
import { pageHeroContent } from "@/config/common/page-hero";
import ProjectsSection from "@/components/projects/projects-section";
import { createPageMetadata } from "@/lib/seo";

type FilterType = 'all' | 'active' | 'completed' | 'planned';

type ProjectsPageProps = {
  searchParams?: { type?: string };
};

const allowedFilters = new Set<FilterType>(['all', 'active', 'completed', 'planned']);

export async function generateMetadata({
  searchParams,
}: ProjectsPageProps): Promise<Metadata> {
  const sp = await Promise.resolve(searchParams);
  const type = sp?.type;

  if (type === 'active') {
    return createPageMetadata({
      title: 'Active Projects',
      description:
        'Explore active CredenceX AI research projects in medical imaging, clinical decision support, and deployment-aware intelligent systems.',
      path: '/projects?type=active',
      keywords: ['active AI projects', 'medical imaging research projects'],
    });
  }

  if (type === 'completed') {
    return createPageMetadata({
      title: 'Completed Projects',
      description:
        'Review completed CredenceX research projects across trustworthy AI, medical imaging, and high-stakes healthcare applications.',
      path: '/projects?type=completed',
      keywords: ['completed AI projects', 'healthcare AI research outcomes'],
    });
  }

  if (type === 'planned') {
    return createPageMetadata({
      title: 'Planned Projects',
      description:
        'See planned CredenceX research initiatives in trustworthy AI, medical imaging, and responsible deployment-focused systems.',
      path: '/projects?type=planned',
      keywords: ['planned AI research', 'upcoming research projects'],
    });
  }

  return createPageMetadata({
    title: 'Projects',
    description:
      'Explore active, completed, and planned CredenceX AI research projects focused on trustworthy, explainable, and deployment-aware systems.',
    path: '/projects',
    keywords: ['AI research projects', 'medical imaging projects', 'healthcare AI systems'],
  });
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const sp = await Promise.resolve(searchParams);
  const rawType = sp?.type;
  const typeParam =
    typeof rawType === 'string' && allowedFilters.has(rawType as FilterType)
      ? (rawType as FilterType)
      : null;
  
  // Update hero content based on type parameter
  const getHeroContent = () => {
    const baseContent = { ...pageHeroContent.allProjects };
    
    if (typeParam === 'active') {
      return {
        ...baseContent,
        badge: { text: "Active Projects" },
        title: "Currently In Development",
        subtitle: "Cutting-Edge AI Systems Being Built Today"
      };
    } else if (typeParam === 'completed') {
      return {
        ...baseContent,
        badge: { text: "Completed Projects" },
        title: "Successfully Delivered Solutions",
        subtitle: "Proven AI Systems Making Real-World Impact"
      };
    } else if (typeParam === 'planned') {
      return {
        ...baseContent,
        badge: { text: "Planned Projects" },
        title: "Future Innovations",
        subtitle: "Next-Generation AI Solutions in the Pipeline"
      };
    }
    
    return baseContent;
  };

  return (
    <main>
      <PageHero content={getHeroContent()} />
      <ProjectsSection typeParam={typeParam} />
    </main>
  );
}
