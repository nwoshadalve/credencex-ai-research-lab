import { Target, Eye, LucideIcon } from 'lucide-react';

export interface SectionContent {
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}

export interface MissionVisionContent {
  mission: SectionContent;
  vision: SectionContent;
}

export const missionVisionContent: MissionVisionContent = {
  mission: {
    badge: "Our Mission",
    title: "Advancing trustworthy AI for real-world impact",
    description: "Our mission is to advance artificial intelligence that is technically rigorous and socially responsible, especially in settings where errors can meaningfully affect human well-being. We aim to build AI systems that are reliable in diverse real-world conditions, transparent in their reasoning signals, and designed to support accountable decision-making.",
    highlights: [
      "Develop models and evaluation frameworks that prioritize robustness, calibration, and reliability in real-world environments",
      "Design interpretable and auditable pipelines that support clinical and high-stakes workflows",
      "Build tools that integrate uncertainty and risk-aware outputs, helping users know when to trust results and when to be cautious",
      "Strengthen the quality of AI research through clear reporting, reproducible artifacts, and responsible dissemination",
      "Support a collaborative research culture that values mentorship, inclusion, and interdisciplinary work"
    ],
    icon: Target
  },
  vision: {
    badge: "Our Vision",
    title: "Human-centered AI that earns trust",
    description: "We envision AI systems that assist, not replace, human expertise, particularly in high-stakes domains such as healthcare. Our long-term goal is to contribute methods, standards, and practical systems that improve trustworthiness, reduce real-world failure, and support equitable outcomes across populations and clinical contexts.",
    highlights: [
      "Human oversight: AI should support accountable human decision-making, not displace it",
      "Transparency: outputs should be explainable, auditable, and appropriately documented",
      "Safety and reliability: models must be evaluated beyond single test sets, including stress tests and distribution shifts",
      "Public benefit: research should advance scientific understanding and practical value with responsible communication"
    ],
    icon: Eye
  }
};
