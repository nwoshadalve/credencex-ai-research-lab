import { LucideIcon, FileText, BookOpen, Award, Clock, CheckCircle2, Send } from 'lucide-react';

export type PublicationType = 'conference' | 'journal';
export type PublicationStatus = 'accepted' | 'in-review' | 'submitted' | 'published';

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string; // Journal or Conference name
  type: PublicationType;
  status: PublicationStatus;
  date: string;
  description: string;
  paperLink?: string;
  featured: boolean;
  doi?: string;
}

export const publications: Publication[] = [
  // =========================
  // Peer-Reviewed Journals (Published / In-Press)
  // =========================
  {
    id: 1,
    title: "Vision-audio multimodal object recognition using hybrid and tensor fusion techniques",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque", "et al."],
    venue: "Information Fusion (Elsevier)",
    type: "journal",
    status: "published",
    date: "Feb 2026",
    description:
      "Audio–visual multimodal object recognition with hybrid + tensor fusion strategies designed for robust real-world performance.",
    paperLink: "https://doi.org/10.1016/j.inffus.2025.103667",
    featured: true
  },
  {
    id: 2,
    title:
      "Hierarchical Swin Transformer Ensemble with Explainable AI for Robust and Decentralized Breast Cancer Diagnosis",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque", "et al."],
    venue: "Bioengineering (MDPI)",
    type: "journal",
    status: "published",
    date: "Jun 2025",
    description:
      "Federation-ready Swin-Transformer ensemble with post-hoc explainability for robust breast cancer diagnosis.",
    paperLink: "https://doi.org/10.3390/bioengineering12060651",
    featured: true
  },
  {
    id: 3,
    title:
      "ViX-MangoEFormer: An Enhanced Vision Transformer–EfficientFormer and Stacking Ensemble Approach for Mango Leaf Disease Recognition with Explainable Artificial Intelligence",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque", "et al."],
    venue: "Computers (MDPI)",
    type: "journal",
    status: "published",
    date: "May 2025",
    description:
      "ViT–EfficientFormer hybrid with stacking ensemble and XAI for accurate mango leaf disease recognition.",
    paperLink: "https://doi.org/10.3390/computers14050171",
    featured: false
  },
  {
    id: 4,
    title: "A Novel MaxViT Model for Accelerated and Precise Soybean Leaf and Seed Disease Identification",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque", "et al."],
    venue: "Computers (MDPI)",
    type: "journal",
    status: "published",
    date: "May 2025",
    description:
      "MaxViT-based diagnostic pipeline for soybean leaf/seed diseases emphasizing efficiency and interpretability.",
    paperLink: "https://doi.org/10.3390/computers14050197",
    featured: false
  },
  {
    id: 5,
    title:
      "Advancing Early Leukemia Diagnostics: A Comprehensive Study Incorporating Image Processing and Transfer Learning",
    authors: ["Rezaul Haque", "Md. Redwan Ahmed", "et al."],
    venue: "BioMedInformatics (MDPI)",
    type: "journal",
    status: "published",
    date: "Apr 2024",
    description:
      "Image-processing + transfer-learning driven leukemia diagnostics with strong comparative evaluation.",
    paperLink: "https://doi.org/10.3390/biomedinformatics4020054",
    featured: false
  },
  {
    id: 6,
    title:
      "LMVT: A hybrid vision transformer with attention mechanisms for efficient and explainable lung cancer diagnosis",
    authors: ["Rezaul Haque", "Md. Redwan Ahmed", "et al."],
    venue: "Informatics in Medicine Unlocked (Elsevier)",
    type: "journal",
    status: "published",
    date: "2025",
    description:
      "Hybrid ViT with attention and XAI for efficient and explainable lung cancer diagnosis (deployment-oriented).",
    paperLink: "https://doi.org/10.1016/j.imu.2025.101669",
    featured: true
  },
  {
    id: 7,
    title: "Explainable Transformer Framework for Fast Cotton Leaf Diagnostics and Fabric Defect Detection",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque", "et al."],
    venue: "iScience (Cell Press / Elsevier)",
    type: "journal",
    status: "published",
    date: "Dec 2025",
    description:
      "Explainable transformer framework spanning agriculture (cotton leaf) and textile inspection (fabric defect) with practical interpretability.",
    paperLink: "https://doi.org/10.1016/j.isci.2025.114411",
    featured: true
  },
  {
    id: 8,
    title: "Explainable deep stacking ensemble model for accurate and transparent brain tumor diagnosis",
    authors: ["Rezaul Haque", "et al."],
    venue: "Computers in Biology and Medicine (Elsevier)",
    type: "journal",
    status: "published",
    date: "Jun 2025",
    description:
      "Explainable deep stacking ensemble for brain tumor diagnosis with transparency-focused reporting.",
    paperLink: "https://doi.org/10.1016/j.compbiomed.2025.110166",
    featured: true
  },
  {
    id: 9,
    title:
      "Accelerated and accurate cervical cancer diagnosis using a novel stacking ensemble method with explainable AI",
    authors: ["Rezaul Haque", "et al."],
    venue: "Informatics in Medicine Unlocked (Elsevier)",
    type: "journal",
    status: "published",
    date: "2025",
    description:
      "Stacking ensemble + explainability for reliable cervical cancer diagnosis using Pap smear imaging.",
    paperLink: "https://doi.org/10.1016/j.imu.2025.101657",
    featured: true
  },
  {
    id: 10,
    title: "Data-driven Solution to Identify Sentiments from Online Drug Reviews",
    authors: ["Rezaul Haque", "et al."],
    venue: "Computers (MDPI)",
    type: "journal",
    status: "published",
    date: "Apr 2023",
    description:
      "NLP pipeline for sentiment identification from large-scale online drug reviews with rigorous evaluation.",
    paperLink: "https://doi.org/10.3390/computers12040087",
    featured: false
  },
  {
    id: 11,
    title: "Multi-class sentiment classification on Bengali social media comments using machine learning",
    authors: ["Rezaul Haque", "et al."],
    venue: "International Journal of Cognitive Computing in Engineering (Elsevier/KeAi)",
    type: "journal",
    status: "published",
    date: "Jun 2023",
    description:
      "Multi-class Bangla sentiment classification with ML baselines and a deployment-oriented web app.",
    paperLink: "https://doi.org/10.1016/j.ijcce.2023.01.001",
    featured: false
  },
  {
    id: 12,
    title: "A Comparative Analysis on Suicidal Ideation Detection Using NLP, Machine, and Deep Learning",
    authors: ["Rezaul Haque", "et al."],
    venue: "Technologies (MDPI)",
    type: "journal",
    status: "published",
    date: "Apr 2022",
    description:
      "Benchmarking ML/DL NLP approaches for suicidal ideation detection on social media signals.",
    paperLink: "https://doi.org/10.3390/technologies10030057",
    featured: false
  },
  {
    id: 13,
    title: "Ensemble Transformer with Post-hoc Explanations for Depression Emotion and Severity Detection",
    authors: ["Rezaul Haque", "Md. Redwan Ahmed", "et al."],
    venue: "iScience (Cell Press / Elsevier) — In Press (Journal Pre-proof)",
    type: "journal",
    status: "published",
    date: "Jan 2026",
    description:
      "DepTformer-XAI-SV: ensemble transformers for depression emotion/severity detection with LIME explanations and a web app.",
    paperLink: "https://doi.org/10.1016/j.isci.2025.114605",
    featured: true
  },

  // =========================
  // Peer-Reviewed Journals (Accepted / Under Review / Submitted)
  // =========================
  {
    id: 14,
    title:
      "Hallucination-Resistant Tri-Modal Information Fusion with a Multi-Granularity Text-Aware Multimodal LLM",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Information Fusion",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Tri-modal fusion with multi-granularity alignment for hallucination-resistant multimodal LLM decision-making.",
    paperLink: "#",
    featured: true
  },
  {
    id: 15,
    title:
      "Adaptive Distribution-Aware Hybrid Transformer with Multi-Scale Tokenization for Robust Medical Image Analysis",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Medical Image Analysis",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Distribution-aware hybrid transformer design to improve robustness under clinical domain shift.",
    paperLink: "#",
    featured: false
  },
  {
    id: 16,
    title:
      "Multi-Stage Deep Learning Pipeline for Gallbladder Disease Classification: Comparative Analysis of Baseline Models, Semi-Supervised Learning Integration, and Novel Self-Supervised Foundation Model Fusion",
    authors: ["Md. Redwan Ahmed"],
    venue: "Medical Image Analysis",
    type: "journal",
    status: "submitted",
    date: "2025",
    description:
      "A multi-stage pipeline combining baseline comparisons, SSL, and foundation-model fusion for gallbladder disease classification.",
    paperLink: "#",
    featured: false
  },
  {
    id: 17,
    title: "Semi-Supervised Learning for Calibrated and Label-Efficient Retinal Disease Identification",
    authors: ["Md. Redwan Ahmed"],
    venue: "Knowledge-Based Systems",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Semi-supervised, calibration-aware retinal disease identification under limited-label regimes.",
    paperLink: "#",
    featured: false
  },
  {
    id: 18,
    title: "Communication-Aware Federated Self-Supervised Learning for Intelligent IoT Intrusion Detection System",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Knowledge-Based Systems",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Communication-aware federated SSL framework for scalable IoT intrusion detection under bandwidth constraints.",
    paperLink: "#",
    featured: false
  },
  {
    id: 19,
    title:
      "Aspect-Aware Multimodal Sentiment Analysis of E-Commerce Reviews via Contrastive Graph Fusion for Business Intelligence",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Information Sciences",
    type: "journal",
    status: "submitted",
    date: "2025",
    description:
      "Contrastive graph fusion for aspect-aware multimodal sentiment slopes in e-commerce business intelligence.",
    paperLink: "#",
    featured: false
  },
  {
    id: 20,
    title:
      "Efficient and Robust Transformer-Based Facial Screening for Explainable Autism Spectrum Disorder Identification",
    authors: ["Md. Redwan Ahmed"],
    venue: "Array",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Efficiency-driven transformer facial screening pipeline with explainability for ASD identification.",
    paperLink: "#",
    featured: false
  },
  {
    id: 21,
    title:
      "LightVTD: Lightweight Explainable Vision Transformer with Multi-Path Token Fusion for Drowsiness Detection",
    authors: ["Rezaul Haque", "Md. Redwan Ahmed"],
    venue: "Scientific Reports (Nature Portfolio)",
    type: "journal",
    status: "accepted",
    date: "2025",
    description:
      "Lightweight explainable ViT with multi-path token fusion for early drowsiness detection in safety-critical scenarios.",
    paperLink: "#",
    featured: true
  },
  {
    id: 22,
    title: "Facial Emotion Recognition Using Deep Learning to Identify Problems Related to Mental Health",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Scientific Reports (Nature Portfolio)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Deep learning facial emotion recognition aimed at mental health screening signals with robust evaluation.",
    paperLink: "#",
    featured: false
  },
  {
    id: 23,
    title:
      "MaizeFormerX: An Explainable and Lightweight Vision Transformer with Dual-Scale Architecture for Early Detection of Maize Leaf Disease",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Scientific Reports (Nature Portfolio)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Explainable, lightweight dual-scale ViT architecture for maize leaf disease identification under field-like conditions.",
    paperLink: "#",
    featured: false
  },
  {
    id: 24,
    title:
      "Goldenhar Syndrome Detection with OD-Mamba Backbone for Explainable Rare Craniofacial Disorder Diagnosis",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Scientific Reports (Nature Portfolio)",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "OD-Mamba backbone for explainable rare craniofacial disorder diagnosis (Goldenhar syndrome).",
    paperLink: "#",
    featured: false
  },
  {
    id: 25,
    title:
      "Fin-TweetX: Multimodal Fusion for Stock Price Movement Prediction via Twitter Sentiment and Technical Indicators",
    authors: ["Rezaul Haque"],
    venue: "Applied Soft Computing",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Multimodal fusion of social sentiment and technical indicators for stock movement prediction under noise/drift.",
    paperLink: "#",
    featured: false
  },
  {
    id: 26,
    title:
      "C²-SHMN: Causally-Conditioned Spiking Hyper-Meta Networks for Low-Power Event Sensing and Inertial Fusion",
    authors: ["Rezaul Haque"],
    venue: "Access",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Causality-conditioned spiking hyper-meta networks for low-power sensing and inertial/event fusion.",
    paperLink: "#",
    featured: false
  },
  {
    id: 27,
    title:
      "Explainable Token-Fusion Transformer for Early Drowsiness State Recognition in Safety-Critical Systems",
    authors: ["Rezaul Haque"],
    venue: "Array",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Token-fusion transformer for early drowsiness state recognition with explainability and safety-critical constraints.",
    paperLink: "#",
    featured: false
  },
  {
    id: 28,
    title: "Explainable AI-Driven Hybrid Deep Learning Framework for Accurate Skin Cancer Diagnosis",
    authors: ["Rezaul Haque"],
    venue: "Digital Health",
    type: "journal",
    status: "in-review",
    date: "2025",
    description:
      "Hybrid deep learning skin cancer diagnosis framework emphasizing explainability and clinically aligned reporting.",
    paperLink: "#",
    featured: false
  },

  // =========================
  // Conference Papers (Selected / Presented)
  // =========================
  {
    id: 29,
    title: "Efficient Web-Based Automated Poultry Disease Detection Using Transfer Learning Models",
    authors: ["Md. Redwan Ahmed"],
    venue: "INCIP 2025",
    type: "conference",
    status: "published",
    date: "2025",
    description: "Web-based poultry disease detection using transfer learning for real-time screening.",
    paperLink: "#",
    featured: false
  },
  {
    id: 30,
    title: "Towards Automated Detection of Tomato Leaf Diseases",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "ICEEICT 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Automated tomato leaf disease detection with robust augmentation and baseline benchmarking.",
    paperLink: "#",
    featured: false
  },
  {
    id: 31,
    title: "Web Application-Based Enhanced Esophageal Disease Diagnosis in Low-Resource Settings",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "BECITHCON 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Deployment-oriented esophageal disease diagnosis via a web application for low-resource settings.",
    paperLink: "#",
    featured: false
  },
  {
    id: 32,
    title: "Robust Phishing URL Classification Using FastText Character Embeddings and Hybrid Deep Learning",
    authors: ["Md. Redwan Ahmed"],
    venue: "RAAICON 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Robust phishing URL classification using FastText character embeddings and hybrid deep learning.",
    paperLink: "#",
    featured: false
  },
  {
    id: 33,
    title: "Hybrid Vision Transformer Model for Accurate Prostate Cancer Classification in MRI Images",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "ECCE 2025",
    type: "conference",
    status: "published",
    date: "2025",
    description: "Hybrid ViT-based prostate cancer MRI classification with efficiency and interpretability direction.",
    paperLink: "#",
    featured: false
  },
  {
    id: 34,
    title: "Transforming Leukemia Classification: A Comprehensive Study on Deep Learning Models for Enhanced Diagnostic Accuracy",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "PEEIACON 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Comparative leukemia classification study across deep learning baselines and practical evaluation.",
    paperLink: "#",
    featured: false
  },
  {
    id: 35,
    title: "Parasitology Unveiled: Revolutionizing Microorganism Classification Through Deep Learning",
    authors: ["Md. Redwan Ahmed"],
    venue: "ICEEICT 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Deep learning pipeline for microorganism classification with deployment-aware considerations.",
    paperLink: "#",
    featured: false
  },
  {
    id: 36,
    title: "Transformer-Based Ensemble Model for Binary and Multiclass Oral Cancer Segmentation",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "ECCE 2025",
    type: "conference",
    status: "published",
    date: "2025",
    description: "Transformer-based ensemble for oral cancer segmentation (binary + multiclass settings).",
    paperLink: "#",
    featured: false
  },
  {
    id: 37,
    title: "Ensemble-Based Explainable Approach for Rare Medicinal Plant Recognition and Conservation",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "ICINT 2025",
    type: "conference",
    status: "published",
    date: "2025",
    description: "Explainable ensemble pipeline for rare medicinal plant recognition supporting conservation use-cases.",
    paperLink: "#",
    featured: false
  },
  {
    id: 38,
    title: "Monkeypox Lesion Classification: A Transfer Learning Approach for Early Diagnosis and Intervention",
    authors: ["Md. Redwan Ahmed"],
    venue: "IC3I 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Transfer learning pipeline for monkeypox lesion classification with early-intervention focus.",
    paperLink: "#",
    featured: false
  },
  {
    id: 39,
    title: "Improving Drug Review Categorization Using Sentiment Analysis and Machine Learning",
    authors: ["Rezaul Haque"],
    venue: "ICDSNS 2023",
    type: "conference",
    status: "published",
    date: "2023",
    description: "Drug review categorization via sentiment analysis and classical/deep learning baselines.",
    paperLink: "#",
    featured: false
  },
  {
    id: 40,
    title: "Classroom Activity Classification with Deep Learning",
    authors: ["Rezaul Haque"],
    venue: "ICICACS 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Deep learning-based classroom activity classification with practical deployment orientation.",
    paperLink: "#",
    featured: false
  },
  {
    id: 41,
    title: "Addressing Misinformation in Bengali Media: A Hybrid Deep Learning Solution",
    authors: ["Rezaul Haque"],
    venue: "ICCIT 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Hybrid deep learning approach for Bangla misinformation recognition and evaluation.",
    paperLink: "#",
    featured: false
  },
  {
    id: 42,
    title: "Bengali Emotion Classification Using Hybrid Deep Neural Network",
    authors: ["Rezaul Haque"],
    venue: "AIKIIE 2023",
    type: "conference",
    status: "published",
    date: "2023",
    description: "Hybrid deep neural network for Bengali emotion classification under real-world noise patterns.",
    paperLink: "#",
    featured: false
  },
  {
    id: 43,
    title: "Deep Learning-Based Left Ventricular Ejection Fraction Estimation from Echocardiographic Videos",
    authors: ["Rezaul Haque"],
    venue: "EASCT 2023",
    type: "conference",
    status: "published",
    date: "2023",
    description: "Echocardiographic video modeling for LVEF estimation using deep learning.",
    paperLink: "#",
    featured: false
  },
  {
    id: 44,
    title: "Scientific Article Classification: Harnessing Hybrid Deep Learning Models for Knowledge Discovery",
    authors: ["Rezaul Haque"],
    venue: "AIKIIE 2023",
    type: "conference",
    status: "published",
    date: "2023",
    description: "Hybrid deep learning for scientific article classification and knowledge discovery workflows.",
    paperLink: "#",
    featured: false
  },
  {
    id: 45,
    title: "A transfer learning-based computer-aided lung cancer detection system in smart healthcare",
    authors: ["Rezaul Haque"],
    venue: "SCS 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Transfer learning-based lung cancer detection system targeting smart healthcare deployment.",
    paperLink: "#",
    featured: false
  },
  {
    id: 46,
    title: "Data-Centric Approach for Leather Quality Control Using Advanced Vision Transformer Models",
    authors: ["Rezaul Haque"],
    venue: "INCIP 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Vision Transformer-based leather quality control with data-centric processing and inspection focus.",
    paperLink: "#",
    featured: false
  },
  {
    id: 47,
    title: "Deep Learning for Multi Labeled Cyberbully Detection: Enhancing Online Safety",
    authors: ["Rezaul Haque"],
    venue: "ICDSNS 2023",
    type: "conference",
    status: "published",
    date: "2023",
    description: "Multi-label cyberbully detection using deep learning and robust text preprocessing.",
    paperLink: "#",
    featured: false
  },
  {
    id: 48,
    title: "Alzheimer Disease Classification Using Deep Neural Network",
    authors: ["Rezaul Haque"],
    venue: "UPCON 2023",
    type: "conference",
    status: "published",
    date: "2023",
    description: "Deep neural network-based Alzheimer disease classification with baseline comparisons.",
    paperLink: "#",
    featured: false
  },
  {
    id: 49,
    title: "A Novel Machine Learning Approach for Fast and Efficient Detection of Mango Leaf Diseases",
    authors: ["Rezaul Haque"],
    venue: "ICMI 2024",
    type: "conference",
    status: "published",
    date: "2024",
    description: "Fast mango leaf disease detection using ML baselines with deployment-friendly design choices.",
    paperLink: "#",
    featured: false
  },

  // =========================
  // Conferences Under Review
  // =========================
  {
    id: 50,
    title: "BASFL-IDS: Bandwidth-Aware Federated Self-Supervised Learning for IoT Intrusion Detection",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Conference (Under Review)",
    type: "conference",
    status: "in-review",
    date: "2025",
    description: "Bandwidth-aware federated SSL for scalable IoT IDS under communication constraints.",
    paperLink: "#",
    featured: false
  },
  {
    id: 51,
    title: "Multi-Level Domain Adaptation with Prompts, Adapters, and Sparse Experts for Intraoral Imaging",
    authors: ["Md. Redwan Ahmed", "Rezaul Haque"],
    venue: "Conference (Under Review)",
    type: "conference",
    status: "in-review",
    date: "2025",
    description: "Prompt/adaptor/sparse-expert based domain adaptation for robust intraoral imaging performance.",
    paperLink: "#",
    featured: false
  },
  {
    id: 52,
    title: "Explainable Transformer-Based Models for Land Use and Land Cover Classification",
    authors: ["Md. Redwan Ahmed"],
    venue: "Conference (Under Review)",
    type: "conference",
    status: "in-review",
    date: "2025",
    description: "Explainable transformer pipelines for land use/land cover classification with trustworthiness reporting.",
    paperLink: "#",
    featured: false
  },
  {
    id: 53,
    title: "Capturing Cross-Product Dependencies with a Hybrid Transformer for Supply Chain Demand Forecasting",
    authors: ["Md. Redwan Ahmed"],
    venue: "Conference (Under Review)",
    type: "conference",
    status: "in-review",
    date: "2025",
    description: "Hybrid transformer for demand forecasting with explicit modeling of cross-product dependencies.",
    paperLink: "#",
    featured: false
  }
];


// Helper function to get featured publications
export function getFeaturedPublications(): Publication[] {
  return publications.filter(pub => pub.featured);
}

// Helper function to get publications by status
export function getPublicationsByStatus(status: PublicationStatus): Publication[] {
  return publications.filter(pub => pub.status === status);
}

// Helper function to get publications by type
export function getPublicationsByType(type: PublicationType): Publication[] {
  return publications.filter(pub => pub.type === type);
}

// Status configuration with icons and colors
export const statusConfig: Record<PublicationStatus, { icon: LucideIcon; label: string; color: string }> = {
  published: {
    icon: CheckCircle2,
    label: 'Published',
    color: 'text-green-600 dark:text-green-400'
  },
  accepted: {
    icon: Award,
    label: 'Accepted',
    color: 'text-blue-600 dark:text-blue-400'
  },
  'in-review': {
    icon: Clock,
    label: 'In Review',
    color: 'text-yellow-600 dark:text-yellow-400'
  },
  submitted: {
    icon: Send,
    label: 'Submitted',
    color: 'text-purple-600 dark:text-purple-400'
  }
};

// Type configuration with icons
export const typeConfig: Record<PublicationType, { icon: LucideIcon; label: string }> = {
  conference: {
    icon: FileText,
    label: 'Conference'
  },
  journal: {
    icon: BookOpen,
    label: 'Journal'
  }
};
