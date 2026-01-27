import { LucideIcon } from 'lucide-react';

export interface PhilosophyItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhatDrivesItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PhilosophyContent {
  badge: string;
  title: string;
  subtitle: string;
  philosophy: {
    title: string;
    content: string[];
  };
  whatDrivesUs: {
    title: string;
    content: string[];
  };
}

export const philosophyContent: PhilosophyContent = {
  badge: "Our Philosophy",
  title: "The Principles That Guide Us",
  subtitle: "Building Tomorrow's AI with Today's Ethics",
  philosophy: {
    title: "Our Philosophy",
    content: [
      "At CredenceX AI Research Lab, we believe that artificial intelligence should be a force for good—developed with transparency, accountability, and a deep respect for human values. Our philosophy is rooted in the conviction that technology must serve humanity, not the other way around.",
      "We are committed to creating AI systems that not only push technological boundaries but also uphold the highest ethical standards. Every line of code we write, every model we train, and every system we deploy is guided by our unwavering commitment to responsible innovation.",
      "Human-centered design is at the core of everything we do. We place people at the heart of our research, ensuring that AI systems enhance human capabilities rather than replace them. Our approach is collaborative, inclusive, and focused on building solutions that truly make a difference in people's lives.",
      "We believe in the power of open collaboration and knowledge sharing. By working with diverse communities, institutions, and researchers worldwide, we foster an environment where innovation thrives and breakthrough discoveries become possible. Our commitment to continuous learning ensures we stay at the forefront of AI research while remaining adaptable to the evolving needs of society."
    ]
  },
  whatDrivesUs: {
    title: "What Drives Us",
    content: [
      "Our passion is fueled by the immense potential of artificial intelligence to solve humanity's most pressing challenges. From advancing healthcare and strengthening security to creating more efficient and sustainable systems, we are driven by the opportunity to make a meaningful impact on the world.",
      "Boundless curiosity propels us forward. We are researchers, innovators, and dreamers who are never satisfied with the status quo. This insatiable desire to explore uncharted territories in AI, to ask difficult questions, and to push the boundaries of what's possible is what gets us out of bed every morning.",
      "We are motivated by excellence in all its forms—from the rigor of our research methodologies to the quality of our implementations. We don't just aim to publish papers or build products; we strive to set new standards for what AI research can achieve and how it can benefit society.",
      "Building community is more than a goal; it's a calling. We are passionate about mentoring the next generation of AI researchers, fostering diversity in the field, and creating an ecosystem where talented individuals from all backgrounds can contribute to the future of artificial intelligence."
    ]
  }
};
