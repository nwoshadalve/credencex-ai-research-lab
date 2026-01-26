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
    title: "Multimodal Foundation Models",
    description: "Developing next-generation AI models that seamlessly integrate vision, language, and audio to understand and generate content across multiple modalities with unprecedented accuracy.",
    icon: Brain,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Safety-First LLM Workflows",
    description: "Engineering robust AI systems with built-in safety mechanisms, ensuring reliable, ethical, and secure language model deployments for real-world applications.",
    icon: Shield,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 3,
    title: "Trustworthy AI Systems",
    description: "Creating transparent, explainable, and accountable AI frameworks that build trust through verifiable decision-making processes and ethical guardrails.",
    icon: Sparkles,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Early Warning Systems",
    description: "Leveraging advanced machine learning for predictive analytics and anomaly detection to identify potential risks and threats before they materialize.",
    icon: Zap,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    title: "Decision Support Intelligence",
    description: "Building intelligent systems that augment human decision-making with data-driven insights, scenario analysis, and risk assessment capabilities.",
    icon: Target,
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Risk-Aware Security",
    description: "Designing adaptive security frameworks that continuously assess, predict, and mitigate cyber threats using AI-powered threat intelligence and behavioral analysis.",
    icon: Lock,
    gradient: "from-teal-500/20 to-cyan-500/20"
  }
];
