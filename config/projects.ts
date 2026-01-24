import { LucideIcon, Bot, Shield, Brain, Database, Sparkles, Lock, Network, Cpu, Eye, Server } from 'lucide-react';

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
}

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
    year: "2025"
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
    year: "2025"
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
    year: "2024"
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
    year: "2025"
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
    year: "2024"
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
    year: "2024"
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
    year: "2026"
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
    year: "2025"
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
    year: "2026"
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
    year: "2025"
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
