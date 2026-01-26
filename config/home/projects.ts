import { LucideIcon, Bot, Shield, Brain, Database, Sparkles, Lock, Network, Cpu, Eye, Server, CheckCircle, Clock, Calendar } from 'lucide-react';

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
    title: "Sentinel AI Guardian",
    description: "An advanced AI-powered threat detection system that monitors network traffic in real-time, identifying potential security breaches before they occur using deep learning algorithms.",
    area: "Risk-Aware Security",
    status: "completed",
    icon: Shield,
    gradient: "from-blue-500/20 to-cyan-500/20",
    featured: true,
    technologies: ["PyTorch", "TensorFlow", "Python", "Kubernetes"],
    year: "2025",
    projectLink: "https://google.com"
  },
  {
    id: 2,
    title: "MultiModal Vision Pro",
    description: "Next-generation multimodal AI system integrating vision, language, and audio processing for comprehensive content understanding and generation across multiple domains.",
    area: "Multimodal Foundation Models",
    status: "in-progress",
    icon: Eye,
    gradient: "from-purple-500/20 to-pink-500/20",
    featured: true,
    technologies: ["GPT-4", "CLIP", "Whisper", "React"],
    year: "2025",
    projectLink: "#"
  },
  {
    id: 3,
    title: "SafeGuard LLM Framework",
    description: "A comprehensive safety-first framework for deploying large language models with built-in ethical guardrails, bias detection, and content filtering mechanisms.",
    area: "Safety-First LLM Workflows",
    status: "completed",
    icon: Lock,
    gradient: "from-green-500/20 to-emerald-500/20",
    featured: true,
    technologies: ["LangChain", "OpenAI", "FastAPI", "Redis"],
    year: "2024",
    projectLink: "#"
  },
  {
    id: 4,
    title: "Neural Decision Engine",
    description: "Intelligent decision support system leveraging reinforcement learning and scenario analysis to provide data-driven insights for complex business decisions.",
    area: "Decision Support Intelligence",
    status: "in-progress",
    icon: Brain,
    gradient: "from-indigo-500/20 to-blue-500/20",
    featured: true,
    technologies: ["Ray", "PyTorch", "PostgreSQL", "Docker"],
    year: "2025",
    projectLink: "#"
  },
  {
    id: 5,
    title: "EarlyWarn Predictive Analytics",
    description: "Machine learning platform for predictive maintenance and anomaly detection, providing early warning signals for critical infrastructure and systems.",
    area: "Early Warning Systems",
    status: "completed",
    icon: Cpu,
    gradient: "from-orange-500/20 to-red-500/20",
    featured: true,
    technologies: ["Scikit-learn", "Apache Kafka", "InfluxDB", "Grafana"],
    year: "2024",
    projectLink: "#"
  },
  {
    id: 6,
    title: "TrustChain Verification",
    description: "Blockchain-based verification system ensuring transparency and accountability in AI decision-making processes with immutable audit trails.",
    area: "Trustworthy AI Systems",
    status: "completed",
    icon: Network,
    gradient: "from-teal-500/20 to-cyan-500/20",
    featured: true,
    technologies: ["Ethereum", "Solidity", "Web3.js", "IPFS"],
    year: "2024",
    projectLink: "#"
  },
  {
    id: 7,
    title: "Quantum Threat Analyzer",
    description: "Advanced quantum-resistant cryptography analyzer preparing systems for post-quantum security challenges and identifying vulnerabilities.",
    area: "Risk-Aware Security",
    status: "planned",
    icon: Server,
    gradient: "from-violet-500/20 to-purple-500/20",
    featured: false,
    technologies: ["Qiskit", "Python", "C++"],
    year: "2026",
    projectLink: "#"
  },
  {
    id: 8,
    title: "Federated Learning Platform",
    description: "Privacy-preserving machine learning platform enabling collaborative model training across distributed datasets without data sharing.",
    area: "Trustworthy AI Systems",
    status: "in-progress",
    icon: Database,
    gradient: "from-pink-500/20 to-rose-500/20",
    featured: false,
    technologies: ["TensorFlow Federated", "gRPC", "MongoDB"],
    year: "2025",
    projectLink: "#"
  },
  {
    id: 9,
    title: "AutoML Optimizer",
    description: "Automated machine learning pipeline that optimizes model architecture, hyperparameters, and feature engineering for various use cases.",
    area: "Decision Support Intelligence",
    status: "planned",
    icon: Sparkles,
    gradient: "from-amber-500/20 to-orange-500/20",
    featured: false,
    technologies: ["AutoKeras", "Optuna", "MLflow"],
    year: "2026",
    projectLink: "#"
  },
  {
    id: 10,
    title: "Conversational AI Assistant",
    description: "Context-aware conversational AI system with advanced natural language understanding and generation capabilities for enterprise applications.",
    area: "Multimodal Foundation Models",
    status: "in-progress",
    icon: Bot,
    gradient: "from-sky-500/20 to-blue-500/20",
    featured: false,
    technologies: ["Transformers", "Rasa", "FastAPI", "React"],
    year: "2025",
    projectLink: "#"
  },
  {
    id: 11,
    title: "Adaptive Learning Pathways",
    description: "AI-driven personalized education system that adapts content delivery based on individual learning patterns and cognitive styles.",
    area: "Multimodal Foundation Models",
    status: "in-progress",
    icon: Brain,
    gradient: "from-cyan-500/20 to-teal-500/20",
    featured: false,
    technologies: ["TensorFlow", "Neo4j", "Vue.js", "Flask"],
    year: "2025",
    projectLink: "#"
  },
  {
    id: 12,
    title: "CyberWatch Pro",
    description: "Real-time cybersecurity monitoring and incident response platform powered by AI to detect and neutralize threats automatically.",
    area: "Risk-Aware Security",
    status: "completed",
    icon: Shield,
    gradient: "from-red-500/20 to-pink-500/20",
    featured: false,
    technologies: ["Elastic Stack", "Python", "Splunk", "AWS"],
    year: "2024",
    projectLink: "#"
  },
  {
    id: 13,
    title: "Ethical AI Validator",
    description: "Comprehensive testing and validation framework ensuring AI models meet ethical standards, fairness criteria, and regulatory compliance.",
    area: "Safety-First LLM Workflows",
    status: "in-progress",
    icon: Lock,
    gradient: "from-emerald-500/20 to-green-500/20",
    featured: false,
    technologies: ["Fairlearn", "AIF360", "Python", "Jupyter"],
    year: "2025",
    projectLink: "#"
  },
  {
    id: 14,
    title: "Climate Risk Forecaster",
    description: "Advanced climate modeling and risk assessment platform using machine learning to predict environmental changes and their impact.",
    area: "Early Warning Systems",
    status: "in-progress",
    icon: Cpu,
    gradient: "from-lime-500/20 to-green-500/20",
    featured: false,
    technologies: ["XGBoost", "Pandas", "Matplotlib", "Azure"],
    year: "2025",
    projectLink: "#"
  },
  {
    id: 15,
    title: "Smart Contract Auditor",
    description: "AI-powered smart contract analysis tool that identifies vulnerabilities, gas optimization opportunities, and security risks.",
    area: "Trustworthy AI Systems",
    status: "planned",
    icon: Network,
    gradient: "from-blue-500/20 to-indigo-500/20",
    featured: false,
    technologies: ["Solidity", "Mythril", "Slither", "Python"],
    year: "2026",
    projectLink: "#"
  },
  {
    id: 16,
    title: "Healthcare Diagnostic AI",
    description: "Medical imaging analysis system using deep learning to assist healthcare professionals in early disease detection and diagnosis.",
    area: "Multimodal Foundation Models",
    status: "completed",
    icon: Eye,
    gradient: "from-fuchsia-500/20 to-purple-500/20",
    featured: false,
    technologies: ["PyTorch", "MONAI", "DICOM", "FastAPI"],
    year: "2024",
    projectLink: "#"
  },
  {
    id: 17,
    title: "Supply Chain Optimizer",
    description: "AI-driven supply chain management system optimizing inventory, logistics, and demand forecasting across global operations.",
    area: "Decision Support Intelligence",
    status: "completed",
    icon: Database,
    gradient: "from-violet-500/20 to-indigo-500/20",
    featured: false,
    technologies: ["Prophet", "Scikit-learn", "PostgreSQL", "Tableau"],
    year: "2024",
    projectLink: "#"
  },
  {
    id: 18,
    title: "Voice Biometric Security",
    description: "Advanced voice recognition and authentication system using neural networks for secure identity verification.",
    area: "Risk-Aware Security",
    status: "in-progress",
    icon: Server,
    gradient: "from-rose-500/20 to-red-500/20",
    featured: false,
    technologies: ["Kaldi", "PyTorch Audio", "WebRTC", "Redis"],
    year: "2025",
    projectLink: "#"
  },
  {
    id: 19,
    title: "Fraud Detection Engine",
    description: "Real-time fraud detection system using ensemble machine learning models to identify suspicious transactions and patterns.",
    area: "Early Warning Systems",
    status: "completed",
    icon: Shield,
    gradient: "from-orange-500/20 to-amber-500/20",
    featured: false,
    technologies: ["LightGBM", "Apache Spark", "Kafka", "Cassandra"],
    year: "2024",
    projectLink: "#"
  },
  {
    id: 20,
    title: "Explainable AI Dashboard",
    description: "Interactive visualization platform providing interpretable explanations for AI model decisions using SHAP and LIME techniques.",
    area: "Trustworthy AI Systems",
    status: "planned",
    icon: Sparkles,
    gradient: "from-yellow-500/20 to-orange-500/20",
    featured: false,
    technologies: ["SHAP", "LIME", "D3.js", "Flask"],
    year: "2026",
    projectLink: "#"
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
