'use client';

import { useSearchParams } from 'next/navigation';
import PageHero from "@/components/common/hero";
import { pageHeroContent } from "@/config/common/page-hero";
import ProjectsSection from "@/components/projects/projects-section";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type');
  
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
      <ProjectsSection />
    </main>
  );
}
