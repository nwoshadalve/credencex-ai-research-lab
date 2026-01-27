import { LucideIcon, Bot, Shield, Brain, Database, Sparkles, Network, Eye, Server, CheckCircle, Clock, Calendar, Target } from 'lucide-react';

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
    status: "in-progress",
    icon: Brain,
    gradient: "from-purple-500/20 to-pink-500/20",
    featured: true,
    technologies: ["PyTorch", "Python", "Flask", "Docker"],
    year: "2025",
    projectLink: "https://github.com/rezaul-h/DepTformer-XAI-SV"
  },
  {
    id: 2,
    title: "LMVT (Lung MobileViT) Explainable Lung Cancer Diagnosis",
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
    title: "Multimodal Information Fusion (Audio–Visual Recognition)",
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
    title: "CottonVerse, Multi-Model XAI Web App",
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
    title: "SoyScan, Interpretable Soybean Disease Classification",
    description:
      "MaxViT-based soybean leaf/seed disease classification web app with Grad-CAM heatmaps, probability visualization, and a clean UI for practical screening workflows.",
    area: "Clinical Decision Support & Human-in-the-Loop AI",
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
    title: "Leather Defect Detection (YOLO + Flask)",
    description:
      "A deployment-oriented defect detection demo using Ultralytics YOLO weights with a Flask UI—built for fast visual inspection and practical usage.",
    area: "Efficient Hybrid Transformers for Edge Deployment",
    status: "completed",
    icon: Eye,
    gradient: "from-teal-500/20 to-cyan-500/20",
    featured: true,
    technologies: ["Ultralytics", "YOLO", "Flask", "OpenCV"],
    year: "2024",
    projectLink: "https://github.com/rezaul-h/Leather-Defect-Detection"
  },
  {
    id: 7,
    title: "Colonoscopy Polyps Detection (Notebook Pipeline)",
    description:
      "Notebook-based experimentation workflow for colonoscopy polyp detection with preprocessing and baseline modeling experiments.",
    area: "Explainable Medical Image Intelligence",
    status: "completed",
    icon: Eye,
    gradient: "from-green-500/20 to-emerald-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "OpenCV", "VGG16"],
    year: "2022",
    projectLink: "https://github.com/rezaul-h/Colonoscopy-Polyps-Detection"
  },
  {
    id: 8,
    title: "Oral Cancer Detection (Notebook Study)",
    description:
      "A compact notebook-based workflow for oral cancer detection experiments—useful for quick prototyping and baseline comparisons.",
    area: "Explainable Medical Image Intelligence",
    status: "completed",
    icon: Eye,
    gradient: "from-purple-500/20 to-pink-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "OpenCV"],
    year: "2024",
    projectLink: "https://github.com/redrik278/Oral-Cancer-detection"
  },
  {
    id: 9,
    title: "Tomato Leaf Disease Detection",
    description:
      "Plant disease classification experiments for tomato leaves—supporting agricultural screening and field-ready model exploration.",
    area: "Robust Learning Under Domain Shift",
    status: "completed",
    icon: Eye,
    gradient: "from-lime-500/20 to-green-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "Computer Vision"],
    year: "2023",
    projectLink: "https://github.com/redrik278/Tomato-Leaf-Disease-Detection"
  },
  {
    id: 10,
    title: "Alzheimer’s Disease Detection",
    description:
      "A notebook-based Alzheimer’s disease detection project for rapid experimentation and model benchmarking on medical imaging data.",
    area: "Explainable Medical Image Intelligence",
    status: "completed",
    icon: Brain,
    gradient: "from-violet-500/20 to-purple-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "Deep Learning"],
    year: "2023",
    projectLink: "https://github.com/redrik278/Alzheimer-s-Disease-Detection"
  },
  {
    id: 11,
    title: "Breast Cancer Detection",
    description:
      "Breast cancer detection experiments in a lightweight notebook workflow, designed for fast prototyping and baseline evaluation.",
    area: "Explainable Medical Image Intelligence",
    status: "completed",
    icon: Eye,
    gradient: "from-pink-500/20 to-rose-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "Deep Learning"],
    year: "2023",
    projectLink: "https://github.com/redrik278/Breast-Cancer-detection"
  },
  {
    id: 12,
    title: "Brain Tumor Classification",
    description:
      "Brain tumor classification baseline experiments, emphasizing preprocessing and model comparison in a reproducible notebook setup.",
    area: "Explainable Medical Image Intelligence",
    status: "completed",
    icon: Eye,
    gradient: "from-blue-500/20 to-cyan-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "Computer Vision"],
    year: "2023",
    projectLink: "https://github.com/rezaul-h/brain-tumor-classification"
  },
  {
    id: 13,
    title: "Suicide Ideation Detection with NLP",
    description:
      "NLP pipeline for suicide ideation detection including preprocessing, classical ML baselines, and deep learning notebooks with analysis/visualization support.",
    area: "Trustworthy & Calibrated AI",
    status: "completed",
    icon: Shield,
    gradient: "from-green-500/20 to-emerald-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "NLP", "Deep Learning"],
    year: "2023",
    projectLink: "https://github.com/rezaul-h/Suicide-Ideation-Detection-with-NLP"
  },
  {
    id: 14,
    title: "Bangla Multi-Class Sentiment Analysis",
    description:
      "Bangla sentiment classification notebooks with preprocessing, visualization, and multi-class modeling experiments.",
    area: "Trustworthy & Calibrated AI",
    status: "completed",
    icon: Bot,
    gradient: "from-sky-500/20 to-blue-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "NLP", "Scikit-learn"],
    year: "2023",
    projectLink: "https://github.com/rezaul-h/Multi-class-sentiment-analysis-on-bangali-language-"
  },
  {
    id: 15,
    title: "Fake News Classification",
    description:
      "A notebook-driven fake news classification project for experimenting with text features and learning-based classifiers.",
    area: "Trustworthy & Calibrated AI",
    status: "completed",
    icon: Shield,
    gradient: "from-amber-500/20 to-orange-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "NLP"],
    year: "2023",
    projectLink: "https://github.com/redrik278/Fake-News-Classify"
  },
  {
    id: 16,
    title: "Image Captioning on COCO",
    description:
      "Vision–language captioning notebooks exploring CNN backbones (e.g., Inception/ResNet/VGG) with LSTM/BiLSTM decoders on COCO-style workflows.",
    area: "Multimodal Vision–Language Foundation Models",
    status: "completed",
    icon: Sparkles,
    gradient: "from-cyan-500/20 to-teal-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "InceptionV3", "LSTM"],
    year: "2023",
    projectLink: "https://github.com/rezaul-h/Image-captioning-on-COCO-dataset"
  },
  {
    id: 17,
    title: "Hybrid Recommender System",
    description:
      "Hybrid recommendation experiments (including ALS + content/collaborative signals) with notebooks for preprocessing and multiple dataset scales.",
    area: "Clinical Decision Support & Human-in-the-Loop AI",
    status: "completed",
    icon: Target,
    gradient: "from-indigo-500/20 to-blue-500/20",
    featured: false,
    technologies: ["Python", "Jupyter", "Recommender Systems", "ALS"],
    year: "2022",
    projectLink: "https://github.com/rezaul-h/Hybrid-Reccomender-System"
  },
  {
    id: 18,
    title: "Skillomy E-learning Web App",
    description:
      "A Python-based e-learning web application project (full-stack structure) designed to support content delivery and interactive learning workflows.",
    area: "Clinical Decision Support & Human-in-the-Loop AI",
    status: "completed",
    icon: Database,
    gradient: "from-violet-500/20 to-indigo-500/20",
    featured: false,
    technologies: ["Python", "Web App", "HTML/CSS", "JavaScript"],
    year: "2022",
    projectLink: "https://github.com/rezaul-h/Skillomy_Elearning_Webapp"
  },
  {
    id: 19,
    title: "OpenCV Lab Notebook Series",
    description:
      "Hands-on OpenCV notebooks covering geometric transforms, histograms/intensity transforms, and spatial filtering—useful for imaging pipeline foundations.",
    area: "Efficient Hybrid Transformers for Edge Deployment",
    status: "completed",
    icon: Eye,
    gradient: "from-orange-500/20 to-red-500/20",
    featured: false,
    technologies: ["Python", "OpenCV", "Jupyter", "Image Processing"],
    year: "2023",
    projectLink: "https://github.com/redrik278/OpenCV"
  },
  {
    id: 20,
    title: "Transformers Playground (Hugging Face)",
    description:
      "A lightweight repo for experimenting with transformer-based NLP workflows (e.g., sentiment tasks) using Hugging Face-style setups.",
    area: "Multimodal Vision–Language Foundation Models",
    status: "in-progress",
    icon: Bot,
    gradient: "from-blue-500/20 to-cyan-500/20",
    featured: false,
    technologies: ["Transformers", "Hugging Face", "Python", "NLP"],
    year: "2024",
    projectLink: "https://github.com/redrik278/Transformers"
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
