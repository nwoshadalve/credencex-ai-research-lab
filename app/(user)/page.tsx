import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects/projects";
import ResearchAreaSection from "@/components/home/research-area/research-area";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ResearchAreaSection />
      <ProjectsSection />
    </main>
  );
}
