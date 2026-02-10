import { LucideIcon, Brain, Shield, Sparkles, Zap, Target, Lock } from 'lucide-react';

export interface ResearchArea {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Vision + Language for Healthcare",
    description:
      "Link images, reports, and clinical data to power smarter image understanding and decision support.",
    icon: Brain,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Explainable Imaging AI",
    description:
      "Make predictions easier to understand—with outputs designed for real clinical workflows.",
    icon: Shield,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 3,
    title: "Trustworthy & Risk-Aware AI",
    description:
      "Safer AI through reliability testing, uncertainty estimates, and auditable explanations.",
    icon: Sparkles,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Efficient AI at the Edge",
    description:
      "Lightweight models built for real-time use on mobile, web, and resource-limited devices.",
    icon: Zap,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    title: "Human-in-the-Loop Decision Support",
    description:
      "Risk-aware outputs and clear evidence—so clinicians stay in control of the final call.",
    icon: Target,
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Robust Across Sites & Scanners",
    description:
      "Built to generalize across hospitals, devices, and populations—reducing real-world failure.",
    icon: Lock,
    gradient: "from-teal-500/20 to-cyan-500/20"
  }
];


