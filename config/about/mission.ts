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
    title: "Advancing AI for a Better Tomorrow",
    description: "At SentinelX AI Research Lab, we are dedicated to pushing the boundaries of artificial intelligence while maintaining the highest standards of ethics, transparency, and social responsibility. Our mission is to create AI systems that are not only powerful and innovative but also safe, fair, and aligned with human values.",
    highlights: [
      "Pioneer groundbreaking AI technologies that solve complex real-world problems",
      "Develop robust, reliable, and secure AI systems with safety at the core",
      "Build a diverse, inclusive research community and foster global collaboration",
      "Make AI technologies accessible and beneficial to everyone",
      "Maintain the highest standards of scientific rigor and academic excellence",
      "Transform research into real-world solutions for critical challenges"
    ],
    icon: Target
  },
  vision: {
    badge: "Our Vision",
    title: "Shaping the Future of Intelligent Systems",
    description: "We envision a future where artificial intelligence seamlessly integrates with human society, augmenting our capabilities while respecting our values. Our vision is to be the global leader in trustworthy AI research, setting new standards for innovation, safety, and ethical development in the field of artificial intelligence.",
    highlights: [
      "Establish AI as a trusted partner in solving humanity's greatest challenges",
      "Create transparent and interpretable AI systems that people can understand",
      "Lead the global conversation on responsible AI development and deployment",
      "Bridge the gap between cutting-edge research and practical applications",
      "Cultivate the next generation of AI researchers and innovators",
      "Build AI systems that enhance human potential and well-being"
    ],
    icon: Eye
  }
};
