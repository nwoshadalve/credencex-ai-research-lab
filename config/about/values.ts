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
  description: "The principles that shape our decisions and outputs.",
  values: [
    {
      id: "integrity",
      icon: Shield,
      title: "Integrity & Transparency",
      description: "We prioritize accurate reporting, clear documentation, and honest communication of limitations. We report assumptions, uncertainty, and failure modes—not only headline metrics. We disclose relevant competing interests and funding relationships when applicable.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "rigor",
      icon: Lightbulb,
      title: "Scientific Rigor & Excellence",
      description: "We aim for strong methodology, careful evaluation, and reproducible pipelines where feasible. We emphasize robust validation, ablations, and stress testing where appropriate. We treat deployment readiness as an evidence-based claim, not a marketing statement.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "responsibility",
      icon: Heart,
      title: "Social Responsibility",
      description: "We design with safety, fairness, and misuse risk in mind—particularly in high-stakes domains. We evaluate model behavior across subgroups when feasible and relevant. We avoid overstated claims about clinical readiness without sufficient evidence.",
      gradient: "from-rose-500/20 to-orange-500/20"
    },
    {
      id: "collaboration",
      icon: Users,
      title: "Collaboration & Inclusivity",
      description: "We believe better science emerges from diverse perspectives and open, respectful collaboration. We support mentorship and capacity building for emerging researchers. We welcome interdisciplinary partnerships that improve real-world relevance and impact.",
      gradient: "from-emerald-500/20 to-teal-500/20"
    }
  ]
};
