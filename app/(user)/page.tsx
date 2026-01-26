import HeroSection from "@/components/home/hero";
import NewsSection from "@/components/home/news/news";
import ProjectsSection from "@/components/home/projects/projects";
import Publications from "@/components/home/publications/publications";
import ResearchAreaSection from "@/components/home/research-area/research-area";
import Subscription from "@/components/home/subscription/subscription";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ResearchAreaSection />
      <NewsSection />
      <ProjectsSection />
      <Publications />
      <Subscription />  
    </main>
  );
}
