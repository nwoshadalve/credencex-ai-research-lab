import type { Metadata } from "next";
import HeroSection from "@/components/home/hero";
import NewsSection from "@/components/home/news/news";
import ProjectsSection from "@/components/home/projects/projects";
import Publications from "@/components/home/publications/publications";
import ResearchAreaSection from "@/components/home/research-area/research-area";
import Subscription from "@/components/home/subscription/subscription";
import {
  createPageMetadata,
  createWebsiteStructuredData,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Trustworthy AI Research for Medical Imaging",
  description:
    "CredenceX AI Research Lab advances trustworthy, explainable, and deployment-aware AI for medical imaging, clinical decision support, and risk-aware use in high-stakes healthcare environments.",
  path: "/",
  keywords: [
    "trustworthy AI",
    "medical imaging AI",
    "clinical decision support",
    "explainable AI",
    "healthcare AI research",
    "deployment-aware AI",
  ],
});

export default function Home() {
  const websiteStructuredData = createWebsiteStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <main>
        <HeroSection />
        <ResearchAreaSection />
        <NewsSection />
        <ProjectsSection />
        <Publications />
        <Subscription />
      </main>
    </>
  );
}
