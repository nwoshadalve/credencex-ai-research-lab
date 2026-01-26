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
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), June 2025",
    type: "conference",
    status: "published",
    date: "June 2025",
    description: "This paper presents a novel approach to automated neural architecture search specifically optimized for edge devices with limited computational resources. Our method achieves a remarkable 40% reduction in inference latency while maintaining model accuracy comparable to state-of-the-art architectures. We introduce a multi-objective optimization strategy that balances performance, energy efficiency, and model size. Extensive experiments on mobile devices demonstrate the practical applicability of our approach across various computer vision tasks including object detection and semantic segmentation.",
    paperLink: "https://arxiv.org/abs/2501.12345",
    doi: "10.1109/CVPR.2025.12345",
    featured: true
  },
  {
    id: 2,
    title: "Adversarial Robustness in Large Language Models: A Comprehensive Survey",
    authors: ["Dr. James Liu", "Dr. Emily Watson", "Prof. David Kim"],
    venue: "Journal of Artificial Intelligence Research (JAIR), March 2026",
    type: "journal",
    status: "accepted",
    date: "March 2026",
    description: "This comprehensive survey examines the landscape of adversarial attacks and defense mechanisms specifically tailored for large language models. We systematically categorize existing attack vectors including prompt injection, jailbreaking, and model extraction techniques. The paper proposes a unified framework for evaluating robustness that considers both semantic preservation and model behavior under adversarial conditions. Our analysis reveals critical vulnerabilities in current LLM architectures and provides actionable recommendations for developing more resilient systems. We also discuss the trade-offs between model performance and robustness in production environments.",
    paperLink: "https://arxiv.org/abs/2601.45678",
    featured: true
  },
  {
    id: 3,
    title: "Federated Learning with Differential Privacy for Healthcare Applications",
    authors: ["Dr. Maria Garcia", "Prof. Robert Johnson", "Dr. Wei Zhang"],
    venue: "International Conference on Machine Learning (ICML), July 2025",
    type: "conference",
    status: "published",
    date: "July 2025",
    description: "We present a privacy-preserving federated learning framework designed specifically for sensitive healthcare data that ensures HIPAA compliance while maintaining clinical utility. Our approach integrates differential privacy mechanisms with federated optimization, achieving provable privacy guarantees without significant accuracy degradation. Through extensive validation on real-world medical datasets including diagnostic imaging and electronic health records, we demonstrate that our framework maintains prediction accuracy within 2% of centralized models. The paper also addresses practical deployment challenges including communication efficiency and heterogeneous data distributions across healthcare institutions.",
    paperLink: "https://arxiv.org/abs/2507.23456",
    doi: "10.5555/ICML.2025.23456",
    featured: true
  },
  {
    id: 4,
    title: "Quantum-Inspired Optimization Algorithms for Deep Neural Networks",
    authors: ["Dr. Alexandra Novak", "Prof. Thomas Anderson"],
    venue: "Nature Machine Intelligence, arXiv preprint arXiv:2601.78912, January 2026",
    type: "journal",
    status: "in-review",
    date: "January 2026",
    description: "This work introduces novel optimization techniques inspired by principles from quantum computing, specifically quantum annealing and variational quantum algorithms. Our quantum-inspired optimizer demonstrates 25% faster convergence rates on large-scale vision tasks compared to traditional gradient descent methods. We provide theoretical analysis proving convergence guarantees and empirically validate the approach on challenging benchmarks including ImageNet and COCO. The algorithm shows particular promise for training very deep networks and handling non-convex optimization landscapes. Our findings suggest that quantum-inspired classical algorithms can bridge the gap between current hardware capabilities and future quantum computing paradigms.",
    featured: false
  },
  {
    id: 5,
    title: "Real-Time Multi-Modal Emotion Recognition Using Transformer Networks",
    authors: ["Dr. Kevin Park", "Dr. Sophia Martinez", "Prof. Linda Brown"],
    venue: "Annual Conference on Neural Information Processing Systems (NeurIPS), December 2025",
    type: "conference",
    status: "submitted",
    date: "December 2025",
    description: "We propose a unified transformer-based architecture for real-time emotion recognition that seamlessly integrates audio, video, and text modalities. Our model employs cross-modal attention mechanisms to capture subtle emotional cues across different input streams, achieving state-of-the-art performance on multiple emotion recognition benchmarks. The architecture is optimized for low-latency inference, making it suitable for interactive applications such as virtual assistants and mental health monitoring systems. We introduce a novel temporal fusion strategy that handles asynchronous multi-modal inputs and demonstrate robustness to missing modalities. Extensive ablation studies reveal the importance of each modality and their synergistic effects.",
    featured: false
  },
  {
    id: 6,
    title: "Explainable AI for Financial Fraud Detection: A Practical Framework",
    authors: ["Dr. Rachel Green", "Prof. Andrew White"],
    venue: "ACM Transactions on Intelligent Systems and Technology, August 2025",
    type: "journal",
    status: "published",
    date: "August 2025",
    description: "This paper presents a comprehensive framework for building interpretable machine learning models specifically designed for financial fraud detection systems. Our approach combines gradient-boosted decision trees with SHAP-based explanations, providing both high accuracy and human-understandable rationales for fraud alerts. We validate the framework through extensive case studies with three major financial institutions, demonstrating both improved detection rates and reduced false positives. The work addresses critical regulatory requirements for model transparency in financial services and includes practical guidelines for deployment. We also analyze the trade-offs between model complexity and interpretability in production fraud detection systems.",
    paperLink: "https://dl.acm.org/doi/10.1145/3456789",
    doi: "10.1145/3456789.1234567",
    featured: false
  },
  {
    id: 7,
    title: "Self-Supervised Learning for Medical Image Segmentation",
    authors: ["Dr. Nina Sharma", "Dr. Carlos Mendez", "Prof. Jennifer Lee"],
    venue: "Medical Image Computing and Computer Assisted Intervention (MICCAI), October 2025",
    type: "conference",
    status: "accepted",
    date: "October 2025",
    description: "We introduce a self-supervised learning paradigm that dramatically reduces annotation requirements for medical image segmentation tasks by up to 80%. Our method leverages contrastive learning and geometric transformations to learn robust feature representations from unlabeled medical images. The approach is validated across multiple imaging modalities including CT, MRI, and ultrasound, demonstrating segmentation accuracy comparable to fully-supervised methods while requiring minimal expert annotations. We provide detailed analysis of the learned representations and show their transferability across different anatomical structures and imaging protocols. This work has significant implications for reducing the annotation burden in medical imaging research.",
    featured: false
  },
  {
    id: 8,
    title: "Graph Neural Networks for Social Network Analysis and Recommendation",
    authors: ["Prof. Daniel Thompson", "Dr. Lisa Wang"],
    venue: "IEEE Transactions on Knowledge and Data Engineering, arXiv preprint arXiv:2602.13456, February 2026",
    type: "journal",
    status: "in-review",
    date: "February 2026",
    description: "This research develops advanced graph neural network architectures specifically designed for large-scale social network analysis and personalized recommendation systems. Our novel message-passing scheme efficiently captures multi-hop relationships and community structures in networks with billions of nodes. The framework incorporates temporal dynamics to model evolving user preferences and social interactions over time. We demonstrate superior performance on industry-scale datasets, with applications ranging from friend suggestions to content recommendation. The paper also addresses scalability challenges through innovative graph sampling strategies and distributed training techniques. Comprehensive experiments show significant improvements over existing graph-based and collaborative filtering methods.",
    featured: false
  },
  {
    id: 9,
    title: "Reinforcement Learning for Autonomous Drone Navigation in Complex Environments",
    authors: ["Dr. Mark Foster", "Dr. Julia Santos", "Prof. Ahmed Hassan"],
    venue: "International Conference on Robotics and Automation (ICRA), May 2026",
    type: "conference",
    status: "submitted",
    date: "May 2026",
    description: "We present a deep reinforcement learning framework that enables autonomous drone navigation in GPS-denied and obstacle-rich environments. Our approach combines vision-based perception with model-free reinforcement learning, allowing drones to learn robust navigation policies through interaction with simulated and real-world environments. The framework demonstrates impressive generalization capabilities, successfully navigating previously unseen environments with dynamic obstacles. We introduce a curriculum learning strategy that progressively increases environmental complexity during training. Extensive real-world experiments validate the safety and reliability of our approach in indoor and outdoor settings, including forest navigation and urban search-and-rescue scenarios.",
    featured: false
  },
  {
    id: 10,
    title: "Bias Mitigation Techniques in AI-Powered Hiring Systems",
    authors: ["Dr. Patricia Moore", "Prof. Steven Clark", "Dr. Yuki Tanaka"],
    venue: "AI and Ethics Journal, Scientific Reports, April 2026",
    type: "journal",
    status: "accepted",
    date: "April 2026",
    description: "This comprehensive study analyzes sources of algorithmic bias in AI-powered hiring and recruitment systems, providing practical mitigation strategies validated across multiple industries. We identify critical bias amplification points throughout the hiring pipeline, from resume screening to interview scheduling. Our proposed framework combines adversarial debiasing techniques with fairness-aware learning objectives to reduce demographic disparities while maintaining predictive performance. The work includes extensive validation with real hiring data from technology, finance, and healthcare sectors, demonstrating measurable improvements in fairness metrics. We also provide ethical guidelines and best practices for organizations deploying AI in human resource management.",
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
