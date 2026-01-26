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
  {
    id: 1,
    title: "Neural Architecture Search for Efficient Edge AI Deployment",
    authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. Aisha Patel"],
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2025",
    type: "conference",
    status: "published",
    date: "June 2025",
    description: "This paper presents a novel approach to automated neural architecture search specifically optimized for edge devices with limited computational resources. Our method achieves a remarkable 40% reduction in inference latency while maintaining model accuracy comparable to state-of-the-art architectures.",
    paperLink: "https://arxiv.org/abs/2506.12345",
    featured: true
  },
  {
    id: 2,
    title: "Adversarial Robustness in Large Language Models: A Comprehensive Survey",
    authors: ["Dr. James Liu", "Dr. Emily Watson", "Prof. David Kim"],
    venue: "Journal of Artificial Intelligence Research (JAIR)",
    type: "journal",
    status: "published",
    date: "March 2026",
    description: "This comprehensive survey examines the landscape of adversarial attacks and defense mechanisms specifically tailored for large language models. We systematically categorize existing attack vectors including prompt injection, jailbreaking, and model extraction techniques.",
    paperLink: "https://arxiv.org/abs/2603.45678",
    featured: true
  },
  {
    id: 3,
    title: "Federated Learning with Differential Privacy for Healthcare Applications",
    authors: ["Dr. Maria Garcia", "Prof. Robert Johnson", "Dr. Wei Zhang"],
    venue: "International Conference on Machine Learning (ICML) 2025",
    type: "conference",
    status: "published",
    date: "July 2025",
    description: "We present a privacy-preserving federated learning framework designed specifically for sensitive healthcare data that ensures HIPAA compliance while maintaining clinical utility. Our approach integrates differential privacy mechanisms with federated optimization.",
    paperLink: "https://arxiv.org/abs/2507.23456",
    featured: true
  },
  {
    id: 4,
    title: "Quantum-Inspired Optimization Algorithms for Deep Neural Networks",
    authors: ["Dr. Alexandra Novak", "Prof. Thomas Anderson"],
    venue: "Nature Machine Intelligence",
    type: "journal",
    status: "in-review",
    date: "January 2026",
    description: "This work introduces novel optimization techniques inspired by principles from quantum computing, specifically quantum annealing and variational quantum algorithms. Our quantum-inspired optimizer demonstrates 25% faster convergence rates on large-scale vision tasks.",
    paperLink: "https://arxiv.org/abs/2601.78912",
    featured: false
  },
  {
    id: 5,
    title: "Real-Time Multi-Modal Emotion Recognition Using Transformer Networks",
    authors: ["Dr. Kevin Park", "Dr. Sophia Martinez", "Prof. Linda Brown"],
    venue: "Annual Conference on Neural Information Processing Systems (NeurIPS) 2025",
    type: "conference",
    status: "published",
    date: "December 2025",
    description: "We propose a unified transformer-based architecture for real-time emotion recognition that seamlessly integrates audio, video, and text modalities. Our model employs cross-modal attention mechanisms to capture subtle emotional cues across different input streams.",
    paperLink: "https://arxiv.org/abs/2512.34567",
    featured: false
  },
  {
    id: 6,
    title: "Explainable AI for Financial Fraud Detection: A Practical Framework",
    authors: ["Dr. Rachel Green", "Prof. Andrew White"],
    venue: "ACM Transactions on Intelligent Systems and Technology",
    type: "journal",
    status: "published",
    date: "August 2025",
    description: "This paper presents a comprehensive framework for building interpretable machine learning models specifically designed for financial fraud detection systems. Our approach combines gradient-boosted decision trees with SHAP-based explanations.",
    paperLink: "https://arxiv.org/abs/2508.45678",
    featured: false
  },
  {
    id: 7,
    title: "Self-Supervised Learning for Medical Image Segmentation",
    authors: ["Dr. Nina Sharma", "Dr. Carlos Mendez", "Prof. Jennifer Lee"],
    venue: "Medical Image Computing and Computer Assisted Intervention (MICCAI) 2025",
    type: "conference",
    status: "published",
    date: "October 2025",
    description: "We introduce a self-supervised learning paradigm that dramatically reduces annotation requirements for medical image segmentation tasks by up to 80%. Our method leverages contrastive learning and geometric transformations.",
    paperLink: "https://arxiv.org/abs/2510.56789",
    featured: false
  },
  {
    id: 8,
    title: "Graph Neural Networks for Social Network Analysis and Recommendation",
    authors: ["Prof. Daniel Thompson", "Dr. Lisa Wang"],
    venue: "IEEE Transactions on Knowledge and Data Engineering",
    type: "journal",
    status: "accepted",
    date: "February 2026",
    description: "This research develops advanced graph neural network architectures specifically designed for large-scale social network analysis and personalized recommendation systems. Our novel message-passing scheme efficiently captures multi-hop relationships.",
    paperLink: "https://arxiv.org/abs/2602.13456",
    featured: false
  },
  {
    id: 9,
    title: "Reinforcement Learning for Autonomous Drone Navigation",
    authors: ["Dr. Mark Foster", "Dr. Julia Santos", "Prof. Ahmed Hassan"],
    venue: "International Conference on Robotics and Automation (ICRA) 2026",
    type: "conference",
    status: "accepted",
    date: "May 2026",
    description: "We present a deep reinforcement learning framework that enables autonomous drone navigation in GPS-denied and obstacle-rich environments. Our approach combines vision-based perception with model-free reinforcement learning.",
    paperLink: "https://arxiv.org/abs/2605.78901",
    featured: false
  },
  {
    id: 10,
    title: "Bias Mitigation Techniques in AI-Powered Hiring Systems",
    authors: ["Dr. Patricia Moore", "Prof. Steven Clark", "Dr. Yuki Tanaka"],
    venue: "AI and Ethics Journal",
    type: "journal",
    status: "published",
    date: "April 2026",
    description: "This comprehensive study analyzes sources of algorithmic bias in AI-powered hiring and recruitment systems, providing practical mitigation strategies validated across multiple industries.",
    paperLink: "https://arxiv.org/abs/2604.23456",
    featured: false
  },
  {
    id: 11,
    title: "Continual Learning in Dynamic Environments: A Meta-Learning Approach",
    authors: ["Dr. Oliver Schmidt", "Dr. Maya Patel"],
    venue: "International Conference on Learning Representations (ICLR) 2026",
    type: "conference",
    status: "submitted",
    date: "January 2026",
    description: "We propose a meta-learning framework that enables neural networks to continuously adapt to new tasks without catastrophic forgetting. Our approach achieves state-of-the-art performance on continual learning benchmarks.",
    paperLink: "https://arxiv.org/abs/2601.89012",
    featured: false
  },
  {
    id: 12,
    title: "Zero-Shot Cross-Lingual Transfer for Low-Resource Languages",
    authors: ["Dr. Amara Okonkwo", "Prof. Henrik Larsen"],
    venue: "Association for Computational Linguistics (ACL) 2025",
    type: "conference",
    status: "published",
    date: "July 2025",
    description: "This work demonstrates effective zero-shot transfer learning for NLP tasks in low-resource African and Nordic languages. We introduce a novel multilingual pre-training objective that improves cross-lingual generalization.",
    paperLink: "https://arxiv.org/abs/2507.34567",
    featured: false
  },
  {
    id: 13,
    title: "Energy-Efficient Training of Large-Scale Neural Networks",
    authors: ["Dr. Lucas Chen", "Dr. Sofia Rodriguez", "Prof. James Taylor"],
    venue: "Journal of Machine Learning Research (JMLR)",
    type: "journal",
    status: "published",
    date: "November 2025",
    description: "We present novel techniques for reducing the carbon footprint of training large neural networks by up to 60% without sacrificing model performance. Our approach combines mixed-precision training with dynamic batch sizing.",
    paperLink: "https://arxiv.org/abs/2511.45678",
    featured: false
  },
  {
    id: 14,
    title: "Robotic Manipulation with Vision-Language Models",
    authors: ["Dr. Isabella Martinez", "Dr. Ryan O'Brien"],
    venue: "Conference on Robot Learning (CoRL) 2025",
    type: "conference",
    status: "published",
    date: "November 2025",
    description: "We demonstrate that vision-language models can enable zero-shot robotic manipulation through natural language instructions. Our system achieves impressive generalization to unseen objects and tasks.",
    paperLink: "https://arxiv.org/abs/2511.56789",
    featured: false
  },
  {
    id: 15,
    title: "Causal Inference in Observational Healthcare Data",
    authors: ["Dr. Priya Gupta", "Prof. Michael Chang"],
    venue: "Journal of Biomedical Informatics",
    type: "journal",
    status: "accepted",
    date: "March 2026",
    description: "This paper develops rigorous causal inference methods for analyzing observational healthcare data, addressing confounding and selection bias. We validate our approach on electronic health records from multiple hospitals.",
    paperLink: "https://arxiv.org/abs/2603.67890",
    featured: false
  },
  {
    id: 16,
    title: "Neural Rendering for Photorealistic 3D Scene Reconstruction",
    authors: ["Dr. Ethan Park", "Dr. Claire Dubois", "Prof. Antonio Silva"],
    venue: "SIGGRAPH 2026",
    type: "conference",
    status: "accepted",
    date: "July 2026",
    description: "We introduce a neural rendering pipeline that generates photorealistic 3D reconstructions from sparse image collections. Our method combines implicit neural representations with physically-based rendering.",
    paperLink: "https://arxiv.org/abs/2607.78901",
    featured: false
  },
  {
    id: 17,
    title: "Adversarial Attacks on Speech Recognition Systems",
    authors: ["Dr. Fatima Al-Hassan", "Dr. Benjamin Wong"],
    venue: "IEEE Transactions on Audio, Speech, and Language Processing",
    type: "journal",
    status: "in-review",
    date: "February 2026",
    description: "This research characterizes vulnerabilities in modern speech recognition systems to adversarial audio perturbations. We propose novel defense mechanisms that maintain high recognition accuracy under attack.",
    paperLink: "https://arxiv.org/abs/2602.89012",
    featured: false
  },
  {
    id: 18,
    title: "Multimodal Few-Shot Learning for Rare Disease Diagnosis",
    authors: ["Dr. Samuel Lee", "Dr. Ana Costa", "Prof. William Harris"],
    venue: "Nature Medicine",
    type: "journal",
    status: "in-review",
    date: "April 2026",
    description: "We develop a multimodal few-shot learning framework for diagnosing rare diseases using limited patient data. Our approach integrates genomic sequences, medical imaging, and clinical notes.",
    paperLink: "https://arxiv.org/abs/2604.90123",
    featured: false
  },
  {
    id: 19,
    title: "Efficient Video Understanding with Spatiotemporal Transformers",
    authors: ["Dr. Yuki Tanaka", "Dr. Marcus Johnson"],
    venue: "European Conference on Computer Vision (ECCV) 2026",
    type: "conference",
    status: "submitted",
    date: "October 2026",
    description: "We propose a spatiotemporal transformer architecture that achieves state-of-the-art video understanding performance while reducing computational cost by 50%. Our model excels at action recognition and video captioning tasks.",
    paperLink: "https://arxiv.org/abs/2610.12345",
    featured: false
  },
  {
    id: 20,
    title: "Privacy-Preserving Machine Learning on Blockchain Networks",
    authors: ["Dr. Alexandra Volkov", "Prof. Jean-Pierre Dubois"],
    venue: "ACM Transactions on Privacy and Security",
    type: "journal",
    status: "published",
    date: "September 2025",
    description: "This work presents a novel framework for training machine learning models on blockchain networks while preserving data privacy through secure multi-party computation and homomorphic encryption.",
    paperLink: "https://arxiv.org/abs/2509.23456",
    featured: false
  },
  {
    id: 21,
    title: "Automated Theorem Proving with Large Language Models",
    authors: ["Dr. Nathan Williams", "Dr. Livia Romano"],
    venue: "International Joint Conference on Artificial Intelligence (IJCAI) 2025",
    type: "conference",
    status: "published",
    date: "August 2025",
    description: "We demonstrate that large language models can be effectively fine-tuned for automated theorem proving in formal mathematics. Our approach achieves human-level performance on challenging proof benchmarks.",
    paperLink: "https://arxiv.org/abs/2508.34567",
    featured: false
  },
  {
    id: 22,
    title: "Deep Learning for Climate Change Modeling and Prediction",
    authors: ["Prof. Elena Petrova", "Dr. Carlos Santos", "Dr. Jennifer Wu"],
    venue: "Nature Climate Change",
    type: "journal",
    status: "published",
    date: "December 2025",
    description: "We develop deep learning models that improve climate change predictions by incorporating physics-informed neural networks and satellite observation data. Our models provide more accurate temperature and precipitation forecasts.",
    paperLink: "https://arxiv.org/abs/2512.45678",
    featured: false
  },
  {
    id: 23,
    title: "Neural Architecture Search for Efficient On-Device AI",
    authors: ["Dr. Kevin Chen", "Dr. Maria Gonzalez"],
    venue: "International Conference on Mobile Computing (MobiCom) 2026",
    type: "conference",
    status: "accepted",
    date: "June 2026",
    description: "We introduce an automated neural architecture search method optimized for mobile and IoT devices. Our approach discovers architectures that achieve superior accuracy-latency trade-offs compared to manually designed models.",
    paperLink: "https://arxiv.org/abs/2606.56789",
    featured: false
  },
  {
    id: 24,
    title: "Fairness-Aware Recommender Systems for Digital Platforms",
    authors: ["Dr. Aisha Kumar", "Prof. David Miller"],
    venue: "ACM Conference on Recommender Systems (RecSys) 2025",
    type: "conference",
    status: "published",
    date: "September 2025",
    description: "This paper addresses fairness concerns in recommender systems, proposing algorithms that balance personalization with demographic parity. We validate our approach on large-scale e-commerce and streaming platforms.",
    paperLink: "https://arxiv.org/abs/2509.67890",
    featured: false
  },
  {
    id: 25,
    title: "Transfer Learning for Satellite Image Analysis",
    authors: ["Dr. Thomas Anderson", "Dr. Sophie Laurent"],
    venue: "Remote Sensing of Environment",
    type: "journal",
    status: "published",
    date: "October 2025",
    description: "We demonstrate effective transfer learning strategies for analyzing satellite imagery in environmental monitoring applications. Our methods improve land use classification and deforestation detection accuracy.",
    paperLink: "https://arxiv.org/abs/2510.78901",
    featured: false
  },
  {
    id: 26,
    title: "Multi-Agent Reinforcement Learning for Traffic Management",
    authors: ["Dr. Robert Kim", "Dr. Laura Rossi", "Prof. Ahmed Ali"],
    venue: "AAAI Conference on Artificial Intelligence 2026",
    type: "conference",
    status: "submitted",
    date: "February 2026",
    description: "We propose a multi-agent reinforcement learning framework for optimizing urban traffic flow. Our approach reduces congestion by 35% in simulation studies of major metropolitan areas.",
    paperLink: "https://arxiv.org/abs/2602.89012",
    featured: false
  },
  {
    id: 27,
    title: "Neural Machine Translation for Code Generation",
    authors: ["Dr. Emily Zhang", "Dr. Michael O'Connor"],
    venue: "International Conference on Software Engineering (ICSE) 2026",
    type: "conference",
    status: "accepted",
    date: "April 2026",
    description: "This work applies neural machine translation techniques to automatic code generation from natural language descriptions. Our model achieves high accuracy on multiple programming languages and task types.",
    paperLink: "https://arxiv.org/abs/2604.90123",
    featured: false
  },
  {
    id: 28,
    title: "Interpretable Deep Learning for Drug Discovery",
    authors: ["Prof. Sarah Johnson", "Dr. Marco Bianchi"],
    venue: "Journal of Chemical Information and Modeling",
    type: "journal",
    status: "published",
    date: "January 2026",
    description: "We develop interpretable deep learning models for predicting molecular properties and drug-target interactions. Our approach provides chemically meaningful explanations that accelerate the drug discovery process.",
    paperLink: "https://arxiv.org/abs/2601.01234",
    featured: false
  },
  {
    id: 29,
    title: "Attention Mechanisms for Time Series Forecasting",
    authors: ["Dr. Lisa Wang", "Dr. Pierre Dubois"],
    venue: "IEEE International Conference on Data Mining (ICDM) 2025",
    type: "conference",
    status: "published",
    date: "November 2025",
    description: "We introduce attention-based neural networks specifically designed for multivariate time series forecasting. Our models capture complex temporal dependencies and achieve superior performance on financial and weather prediction tasks.",
    paperLink: "https://arxiv.org/abs/2511.12345",
    featured: false
  },
  {
    id: 30,
    title: "Secure Federated Learning with Byzantine Resilience",
    authors: ["Dr. Hassan Ibrahim", "Dr. Anna Kowalski", "Prof. Chen Wei"],
    venue: "IEEE Symposium on Security and Privacy 2026",
    type: "conference",
    status: "submitted",
    date: "May 2026",
    description: "This paper presents robust federated learning algorithms that resist Byzantine attacks from malicious participants. Our framework ensures model integrity while maintaining privacy guarantees in distributed learning scenarios.",
    paperLink: "https://arxiv.org/abs/2605.23456",
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
