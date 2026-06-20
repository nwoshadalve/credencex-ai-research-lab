import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/hero";
import ResearchAreaSection from "@/components/home/research-area/research-area";
import SectionLoader from "@/components/common/section-loader";
import {
  createPageMetadata,
  createWebsiteStructuredData,
} from "@/lib/seo";

const NewsSection = dynamic(() => import("@/components/home/news/news"), {
  loading: () => <SectionLoader cards={4} maxWidth="5xl" />,
});

const ProjectsSection = dynamic(() => import("@/components/home/projects/projects"), {
  loading: () => <SectionLoader cards={4} maxWidth="5xl" minHeight="min-h-[600px]" />,
});

const Publications = dynamic(() => import("@/components/home/publications/publications"), {
  loading: () => <SectionLoader cards={6} maxWidth="7xl" minHeight="min-h-[720px]" />,
});

const Subscription = dynamic(() => import("@/components/home/subscription/subscription"), {
  loading: () => <SectionLoader cards={1} maxWidth="5xl" minHeight="min-h-[400px]" />,
});

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
        <Suspense fallback={null}>
          <NewsSection />
        </Suspense>
        <ProjectsSection />
        <Publications />
        <Subscription />
      </main>
    </>
  );
}
