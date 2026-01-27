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
    title: "Multimodal Vision–Language Foundation Models",
    description:
      "Building multimodal models that fuse medical imaging with text and structured signals for tasks like VQA, report-aware prediction, and cross-modal reasoning bridging vision transformers with LLM-style intelligence.",
    icon: Brain,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Explainable Medical Image Intelligence",
    description:
      "Developing robust AI pipelines for histopathology, cervical cytology, oral/laryngeal disease imaging, glaucoma screening, and clinical classification/segmentation focused on early detection and practical workflow fit.",
    icon: Shield,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 3,
    title: "Trustworthy & Calibrated AI",
    description:
      "Designing transparent and verifiable AI with explainability (e.g., saliency/attention analysis), uncertainty awareness, and reliability testing, so predictions are interpretable, auditable, and safer to use.",
    icon: Sparkles,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Efficient Hybrid Transformers for Edge Deployment",
    description:
      "Creating lightweight CNN–Transformer hybrids and optimization-driven architectures for real-time inference enabling deployment in resource-constrained settings (web tools, mobile apps, and edge-ready pipelines).",
    icon: Zap,
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 5,
    title: "Clinical Decision Support & Human-in-the-Loop AI",
    description:
      "Building decision-support systems that combine multimodal evidence, risk-aware outputs, and interpretable explanations for helping clinicians and researchers validate model reasoning and act with confidence.",
    icon: Target,
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Robust Learning Under Domain Shift",
    description:
      "Improving generalization across hospitals, scanners, and datasets using rigorous validation, strong augmentation, transfer learning, and reproducibility-focused protocols for reducing brittleness in real-world deployment.",
    icon: Lock,
    gradient: "from-teal-500/20 to-cyan-500/20"
  }
];

