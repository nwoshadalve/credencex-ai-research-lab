import { LucideIcon, Shield, Brain, Sparkles, Network, Eye, Server, CheckCircle, Clock, Calendar, Target } from 'lucide-react';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface Project {
  id: number;
  title: string;
  description: string;
  area: string;
  status: ProjectStatus;
  icon: LucideIcon;
  gradient: string;
  featured: boolean;
  technologies?: string[];
  year?: string;
  projectLink?: string;
}

// Status configuration
export const statusConfig = {
  completed: {
    label: 'Completed',
    icon: CheckCircle,
    color: 'text-green-600 dark:text-green-400'
  },
  'in-progress': {
    label: 'In Progress',
    icon: Clock,
    color: 'text-blue-600 dark:text-blue-400'
  },
  planned: {
    label: 'Planned',
    icon: Calendar,
    color: 'text-purple-600 dark:text-purple-400'
  }
};

// Research area configuration
export const areaConfig: Record<string, { color: string; bgColor: string }> = {
  'Risk-Aware Security': {
    color: 'text-blue-700 dark:text-blue-300',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30'
  },
  'Multimodal Foundation Models': {
    color: 'text-purple-700 dark:text-purple-300',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30'
  },
  'Safety-First LLM Workflows': {
    color: 'text-green-700 dark:text-green-300',
    bgColor: 'bg-green-100 dark:bg-green-900/30'
  },
  'Decision Support Intelligence': {
    color: 'text-indigo-700 dark:text-indigo-300',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30'
  },
  'Early Warning Systems': {
    color: 'text-orange-700 dark:text-orange-300',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30'
  },
  'Trustworthy AI Systems': {
    color: 'text-teal-700 dark:text-teal-300',
    bgColor: 'bg-teal-100 dark:bg-teal-900/30'
  }
};

export const projects: Project[] = [
  {
    id: 1,
    title: "DepTformer-XAI-SV",
    description:
      "A reproducible, explainable transformer pipeline for depression emotion/severity experiments, including ablations, XAI faithfulness checks, and a minimal Flask demo (research use only).",
    area: "Trustworthy & Calibrated AI",
    status: "completed",
    icon: Brain,
    gradient: "from-purple-500/20 to-pink-500/20",
    featured: true,
    technologies: ["PyTorch", "Python", "Flask", "Docker"],
    year: "2025",
    projectLink: "https://github.com/rezaul-h/DepTformer-XAI-SV"
  },
  {
    id: 2,
    title: "Explainable Lung Cancer Diagnosis",
    description:
      "Lightweight hybrid CNN–Transformer (MobileViT + attention + texture cues) for efficient and explainable lung cancer diagnosis on CT/histopathology with Grad-CAM and robust evaluation support.",
    area: "Explainable Medical Image Intelligence",
    status: "completed",
    icon: Eye,
    gradient: "from-fuchsia-500/20 to-purple-500/20",
    featured: true,
    technologies: ["PyTorch", "MobileViT", "CBAM", "Grad-CAM"],
    year: "2025",
    projectLink: "https://github.com/rezaul-h/LMVT"
  },
  {
    id: 3,
    title: "Multimodal Information Fusion",
    description:
      "A modular pipeline for audio-visual object recognition using hybrid, tensor, and FiLM-style fusion with flexible feature extraction and noise-robust training options.",
    area: "Multimodal Vision–Language Foundation Models",
    status: "completed",
    icon: Network,
    gradient: "from-blue-500/20 to-cyan-500/20",
    featured: true,
    technologies: ["Python", "FiLM Fusion", "Xception", "xLSTM"],
    year: "2025",
    projectLink: "https://github.com/rezaul-h/multimodal-fusion"
  },
  {
    id: 4,
    title: "CottonVerse",
    description:
      "Flask-based web application for cotton leaf disease, fabric stain defect detection, and fabric composition classification with probability charts and Grad-CAM explanations.",
    area: "Efficient Hybrid Transformers for Edge Deployment",
    status: "completed",
    icon: Server,
    gradient: "from-orange-500/20 to-red-500/20",
    featured: true,
    technologies: ["Flask", "PyTorch", "timm", "pytorch-grad-cam"],
    year: "2025",
    projectLink: "https://github.com/rezaul-h/CottonVerse"
  },
  {
    id: 5,
    title: "SoyScan",
    description:
      "MaxViT-based soybean leaf/seed disease classification web app with Grad-CAM heatmaps, probability visualization, and a clean UI for practical screening workflows.",
    area: "Decision Support & Human-in-the-Loop AI",
    status: "completed",
    icon: Target,
    gradient: "from-indigo-500/20 to-blue-500/20",
    featured: true,
    technologies: ["MaxViT", "Flask", "PyTorch", "Grad-CAM"],
    year: "2025",
    projectLink: "https://github.com/rezaul-h/SoybeanApp"
  },
    {
    id: 6,
    title: "Calibrated Multimodal Radiology Copilot",
    description:
      "A risk-aware clinical decision support pipeline that fuses medical images with radiology notes and structured signals to produce calibrated predictions, uncertainty flags, and evidence-grounded outputs for safer triage and reporting assistance.",
    area: "Clinical Decision Support & Human-in-the-Loop AI",
    status: "in-progress",
    icon: Brain,
    gradient: "from-blue-500/20 to-cyan-500/20",
    featured: true,
    technologies: ["PyTorch", "Transformers", "LLM Workflows", "Uncertainty Calibration"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 7,
    title: "Cross-Hospital Generalization",
    description:
      "A standardized evaluation suite to measure and improve model performance across hospitals, scanners, and patient subgroups—supporting domain-shift testing, fairness slices, and reproducible reporting for deployment-ready medical AI.",
    area: "Robust Learning Under Domain Shift",
    status: "in-progress",
    icon: Network,
    gradient: "from-teal-500/20 to-cyan-500/20",
    featured: true,
    technologies: ["Python", "PyTorch", "Benchmarking", "Fairness & Robustness"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 8,
    title: "Safe-to-Use Gatekeeper",
    description:
      "A safety layer that detects uncertain, out-of-distribution, or artifact-corrupted cases and defers them for human review. Includes coverage–risk analysis, abstention policies, and audit-friendly logs for high-stakes clinical deployment.",
    area: "Trustworthy & Calibrated AI",
    status: "in-progress",
    icon: Shield,
    gradient: "from-purple-500/20 to-pink-500/20",
    featured: true,
    technologies: ["PyTorch", "OOD Detection", "Selective Prediction", "Calibration"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 9,
    title: "Clinically Meaningful Explainability Suite",
    description:
      "A clinician-oriented explainability toolkit that goes beyond heatmaps—providing concept-based explanations, counterfactual evidence, faithfulness checks, and concise explanation report cards to support transparent and auditable medical AI.",
    area: "Explainable Medical Image Intelligence",
    status: "in-progress",
    icon: Eye,
    gradient: "from-green-500/20 to-emerald-500/20",
    featured: true,
    technologies: ["Grad-CAM", "Attention Analysis", "Concept Explanations", "Faithfulness Metrics"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 10,
    title: "Evidence-Grounded LLM Assistant",
    description:
      "A safety-first LLM workflow that drafts structured clinical summaries using only verified evidence (model outputs, metadata, and approved templates). Includes confidence-aware refusal, traceable citations, and guardrails for responsible use.",
    area: "Vision + Language for Healthcare",
    status: "in-progress",
    icon: Sparkles,
    gradient: "from-indigo-500/20 to-blue-500/20",
    featured: true,
    technologies: ["LLM Workflows", "RAG", "Structured Reporting", "Safety Guardrails"],
    year: "2026",
    projectLink: ""
  },
    {
    id: 11,
    title: "Federated Medical Foundation Model",
    description:
      "A privacy-preserving foundation model trained across institutions without centralizing patient data. Focuses on federated optimization, calibration under client shift, and robust performance across sites and scanners.",
    area: "Trustworthy & Calibrated AI",
    status: "planned",
    icon: Target,
    gradient: "from-teal-500/20 to-cyan-500/20",
    featured: true,
    technologies: ["PyTorch", "Federated Learning", "Differential Privacy", "Secure Aggregation"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 12,
    title: "Longitudinal Disease Progression Forecasting",
    description:
      "Risk forecasting from serial scans to predict progression and time-to-event outcomes (e.g., glaucoma progression). Produces calibrated risk curves, uncertainty, and clinician-friendly timelines for follow-up planning.",
    area: "Clinical Decision Support & Human-in-the-Loop AI",
    status: "planned",
    icon: Target,
    gradient: "from-indigo-500/20 to-blue-500/20",
    featured: true,
    technologies: ["Transformers", "Time-Series Modeling", "Survival Analysis", "Uncertainty Estimation"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 13,
    title: "Artifact & Quality-Aware Imaging AI",
    description:
      "A quality-control layer that detects motion blur, low contrast, compression, and device artifacts before inference. Routes low-quality cases for re-capture or robust enhancement to reduce silent failures in practice.",
    area: "Robust Learning Under Domain Shift",
    status: "planned",
    icon: Shield,
    gradient: "from-orange-500/20 to-red-500/20",
    featured: false,
    technologies: ["Python", "Quality Assessment", "Robust Training", "Image Restoration"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 14,
    title: "Fairness Dashboard for Subgroup Reliability",
    description:
      "A monitoring and evaluation dashboard that reports performance, calibration, and failure modes across age/sex/site/device subgroups. Includes bias discovery, shift alerts, and standardized reporting for responsible deployment.",
    area: "Trustworthy & Calibrated AI",
    status: "planned",
    icon: Network,
    gradient: "from-purple-500/20 to-pink-500/20",
    featured: false,
    technologies: ["Python", "Model Monitoring", "Calibration", "Fairness Metrics"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 15,
    title: "Self-Supervised Low-Label Medical Imaging",
    description:
      "A self-supervised learning pipeline (contrastive/masked modeling) for data-efficient medical imaging. Targets strong transfer across modalities with minimal labels and robust generalization under dataset shift.",
    area: "Vision + Language for Healthcare",
    status: "planned",
    icon: Brain,
    gradient: "from-blue-500/20 to-cyan-500/20",
    featured: false,
    technologies: ["Self-Supervised Learning", "ViT/MAE", "PyTorch", "Transfer Learning"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 16,
    title: "Causal Counterfactual Explanations",
    description:
      "Counterfactual and concept-based explanations designed for clinical reasoning—testing what minimal, plausible image changes would alter predictions while tracking faithfulness and safety constraints.",
    area: "Explainable Medical Image Intelligence",
    status: "planned",
    icon: Sparkles,
    gradient: "from-green-500/20 to-emerald-500/20",
    featured: false,
    technologies: ["Concept Bottlenecks", "Counterfactuals", "Faithfulness Metrics", "XAI Evaluation"],
    year: "2026",
    projectLink: ""
  },
  {
    id: 17,
    title: "Edge-Optimized Ultrasound Screening",
    description:
      "A lightweight, real-time ultrasound screening pipeline optimized for low-resource clinics. Focuses on efficient architectures, quantization, and a simple operator-facing interface with uncertainty-aware alerts.",
    area: "Efficient AI at the Edge",
    status: "planned",
    icon: Shield,
    gradient: "from-orange-500/20 to-red-500/20",
    featured: false,
    technologies: ["Quantization", "ONNX", "Mobile Deployment", "Efficient Transformers"],
    year: "2026",
    projectLink: ""
  }

];


// Get only featured projects
export const getFeaturedProjects = () => projects.filter(project => project.featured);

// Get projects by status
export const getProjectsByStatus = (status: ProjectStatus) => 
  projects.filter(project => project.status === status);

// Get projects by area
export const getProjectsByArea = (area: string) => 
  projects.filter(project => project.area === area);
