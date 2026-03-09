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
      "Link images, reports, and clinical context to support multimodal understanding and decision support.",
    icon: Brain,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Explainable Imaging AI",
    description:
      "Design explanations and evidence signals that align with clinical interpretation and workflow constraints.",
    icon: Shield,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 3,
    title: "Trustworthy & Risk-Aware AI",
    description:
      "Advance reliability testing, uncertainty-aware outputs, calibration, and auditable decision support.",
    icon: Sparkles,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Efficient AI at the Edge",
    description:
      "Build lightweight models for real-time use on web, mobile, and resource-limited devices.",
    icon: Zap,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    title: "Human-in-the-Loop Decision Support",
    description:
      "Develop decision pipelines that preserve clinician control and communicate risk transparently.",
    icon: Target,
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Robust Across Sites & Scanners",
    description:
      "Focus on cross-hospital generalization to reduce performance degradation in real-world settings.",
    icon: Lock,
    gradient: "from-teal-500/20 to-cyan-500/20"
  }
];


