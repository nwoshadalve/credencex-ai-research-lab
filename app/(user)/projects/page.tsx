import PageHero from "@/components/common/hero";
import { pageHeroContent } from "@/config/common/page-hero";
import ProjectsSection from "@/components/projects/projects-section";

type FilterType = 'all' | 'active' | 'completed' | 'planned';

type ProjectsPageProps = {
  searchParams?: { type?: string };
};

const allowedFilters = new Set<FilterType>(['all', 'active', 'completed', 'planned']);

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
