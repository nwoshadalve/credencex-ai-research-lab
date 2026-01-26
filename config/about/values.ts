import { Heart, Shield, Users, Lightbulb, LucideIcon } from 'lucide-react';

export interface CoreValue {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export interface CoreValuesContent {
  badge: string;
  title: string;
  description: string;
  values: CoreValue[];
}

export const coreValuesContent: CoreValuesContent = {
  badge: "Core Values",
  title: "The Values That Define Us",
  description: "Our core values are the foundation of everything we do at SentinelX AI Research Lab. They guide our decisions, shape our culture, and define how we approach every challenge and opportunity.",
  values: [
    {
      id: "integrity",
      icon: Shield,
      title: "Integrity & Transparency",
      description: "We operate with unwavering honesty and openness in all our research, communications, and collaborations. Transparency is not just a principle—it's our commitment to building trust with the communities we serve.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "innovation",
      icon: Lightbulb,
      title: "Innovation & Excellence",
      description: "We relentlessly pursue breakthrough innovations while maintaining the highest standards of quality and rigor. Excellence is our benchmark, and innovation is the path we take to achieve it.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "responsibility",
      icon: Heart,
      title: "Social Responsibility",
      description: "We recognize our responsibility to society and ensure that our AI technologies are developed and deployed ethically, with careful consideration of their impact on individuals and communities worldwide.",
      gradient: "from-rose-500/20 to-orange-500/20"
    },
    {
      id: "collaboration",
      icon: Users,
      title: "Collaboration & Inclusivity",
      description: "We believe diverse perspectives drive better solutions. We foster an inclusive environment where every voice matters and collaboration across disciplines, backgrounds, and borders is celebrated.",
      gradient: "from-emerald-500/20 to-teal-500/20"
    }
  ]
};
