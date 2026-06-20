import { LucideIcon, Shield, Brain, Sparkles, Network, Eye, Server, CheckCircle, Clock, Calendar, Target } from 'lucide-react';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface Project {
  id: number;
  title: string;
  problemModality: string;
  coreMethod: string;
  evaluationEmphasis: string;
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
    problemModality: "Depression emotion and severity classification from multimodal patient signals.",
    coreMethod: "Reproducible explainable transformer pipeline with systematic ablations and a minimal Flask demo.",
    evaluationEmphasis: "XAI faithfulness checks and reproducibility benchmarks (research use only).",
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
    problemModality: "Lung cancer diagnosis from CT scans and histopathology images.",
    coreMethod: "Lightweight hybrid CNN–Transformer (MobileViT + CBAM attention + texture cues).",
    evaluationEmphasis: "Grad-CAM explainability and robust cross-modality evaluation.",
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
    problemModality: "Audio-visual object recognition from paired sound and image inputs.",
    coreMethod: "Modular pipeline with hybrid, tensor, and FiLM-style fusion and flexible feature extraction.",
    evaluationEmphasis: "Noise-robust training and fusion-strategy ablations.",
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
    problemModality: "Cotton leaf disease, fabric stain defects, and fabric composition from field and lab images.",
    coreMethod: "Flask web application with efficient hybrid transformers and Grad-CAM overlays.",
    evaluationEmphasis: "Probability calibration charts and visual explanation quality.",
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
    problemModality: "Soybean leaf and seed disease classification from field-captured images.",
    coreMethod: "MaxViT-based classifier with Grad-CAM heatmaps in a screening-oriented web app.",
    evaluationEmphasis: "Probability visualization and practical workflow validation.",
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
    problemModality: "Clinical triage and reporting from medical images, radiology notes, and structured signals.",
    coreMethod: "Risk-aware multimodal fusion pipeline with LLM-assisted structured outputs.",
    evaluationEmphasis: "Uncertainty calibration and evidence-grounded output validation.",
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
    problemModality: "Medical AI reliability across hospitals, scanners, and patient subgroups.",
    coreMethod: "Standardized cross-site evaluation suite with domain-shift testing protocols.",
    evaluationEmphasis: "Fairness slices and reproducible robustness reporting.",
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
    problemModality: "High-stakes clinical cases with uncertainty, out-of-distribution inputs, or artifact corruption.",
    coreMethod: "Safety layer with abstention policies, selective prediction, and human-review deferral.",
    evaluationEmphasis: "Coverage–risk analysis and calibration under abstention.",
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
    problemModality: "Clinician-facing explanation needs for medical image predictions.",
    coreMethod: "Concept-based explanations, counterfactual evidence, and faithfulness checks.",
    evaluationEmphasis: "Explanation report cards and faithfulness metrics beyond heatmaps.",
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
    problemModality: "Structured clinical summary drafting from verified model outputs, metadata, and templates.",
    coreMethod: "Safety-first LLM workflow with RAG and approved reporting templates.",
    evaluationEmphasis: "Confidence-aware refusal and traceable citation audits.",
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
    problemModality: "Cross-institution medical imaging without centralizing patient data.",
    coreMethod: "Federated optimization with secure aggregation and differential privacy.",
    evaluationEmphasis: "Calibration under client shift and cross-site robustness.",
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
    problemModality: "Disease progression and time-to-event outcomes from serial medical scans.",
    coreMethod: "Transformer-based temporal risk modeling with survival analysis.",
    evaluationEmphasis: "Calibrated risk curves and uncertainty-aware follow-up timelines.",
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
    problemModality: "Degraded medical images with motion blur, low contrast, compression, or device artifacts.",
    coreMethod: "Pre-inference quality-control layer with routing and robust enhancement.",
    evaluationEmphasis: "Silent-failure reduction and robustness under degraded inputs.",
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
    problemModality: "Model reliability across age, sex, site, and device subgroups.",
    coreMethod: "Monitoring dashboard with standardized subgroup performance reporting.",
    evaluationEmphasis: "Calibration, bias discovery, and shift alerts.",
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
    problemModality: "Data-efficient learning across medical imaging modalities with minimal labels.",
    coreMethod: "Contrastive and masked self-supervised pretraining (ViT/MAE).",
    evaluationEmphasis: "Transfer robustness and generalization under dataset shift.",
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
    problemModality: "Clinical reasoning support for medical image predictions.",
    coreMethod: "Counterfactual and concept-based explanations with safety constraints.",
    evaluationEmphasis: "Faithfulness metrics and clinical plausibility checks.",
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
    problemModality: "Real-time ultrasound screening in low-resource clinic settings.",
    coreMethod: "Quantized efficient transformers with an operator-facing interface.",
    evaluationEmphasis: "Uncertainty-aware alerts and edge deployment validation.",
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
