import { LucideIcon, Newspaper, Megaphone, Award, Rocket, Calendar, TrendingUp, Users, Lightbulb, Trophy, Zap } from 'lucide-react';

export type NewsType = 'announcement' | 'press-release' | 'award' | 'product-launch' | 'event' | 'partnership' | 'achievement' | 'research-highlight';

export interface News {
  id: number;
  title: string;
  summary: string;
  content: string;
  type: NewsType;
  date: string; // ISO format: YYYY-MM-DD
  author?: string;
  readTime?: string; // e.g., "5 min read"
  image?: string;
  link?: string;
  tags?: string[];
}

export const newsTypeConfig: Record<NewsType, { label: string; icon: LucideIcon; color: string }> = {
  'announcement': {
    label: 'Announcement',
    icon: Megaphone,
    color: 'text-blue-600 dark:text-blue-400',
  },
  'press-release': {
    label: 'Press Release',
    icon: Newspaper,
    color: 'text-purple-600 dark:text-purple-400',
  },
  'award': {
    label: 'Award',
    icon: Trophy,
    color: 'text-yellow-600 dark:text-yellow-400',
  },
  'product-launch': {
    label: 'Product Launch',
    icon: Rocket,
    color: 'text-green-600 dark:text-green-400',
  },
  'event': {
    label: 'Event',
    icon: Calendar,
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  'partnership': {
    label: 'Partnership',
    icon: Users,
    color: 'text-cyan-600 dark:text-cyan-400',
  },
  'achievement': {
    label: 'Achievement',
    icon: Award,
    color: 'text-orange-600 dark:text-orange-400',
  },
  'research-highlight': {
    label: 'Research Highlight',
    icon: Lightbulb,
    color: 'text-pink-600 dark:text-pink-400',
  },
};

export const newsData: News[] = [
  {
    id: 1,
    title: "Invited Talk Scheduled: ROBOTICS-2026 (Rome) — Multimodal AI & Real-World Deployment",
    summary: "Our team has been invited to present research on multimodal learning, XAI, and edge-ready AI systems.",
    content:
      "We’re excited to share that an invited talk is scheduled at the World Summit and Expo on Robotics, AI, and Machine Learning (ROBOTICS-2026) in Rome, Italy. The talk will highlight our ongoing work on multimodal fusion, explainable AI, and practical deployment pathways—from clinical screening to resource-constrained settings.",
    type: "event",
    date: "2026-03-01",
    author: "Md. Redwan Ahmed",
    readTime: "3 min read",
    tags: ["Invited Talk", "Multimodal AI", "XAI", "Edge AI"],
  },
  {
    id: 2,
    title: "Invited Talk Scheduled: BEACONGRESS2026 (Portugal) — Trustworthy Clinical AI",
    summary: "Sharing progress on explainable decision support and calibrated medical AI workflows.",
    content:
      "An invited presentation is scheduled at the International Congress on Biomedical Engineering and Applications (BEACONGRESS2026), Portugal. The session will focus on explainable and reliability-aware AI for clinical decision support, with emphasis on trustworthy model behavior, evaluation rigor, and deployment constraints.",
    type: "event",
    date: "2026-03-01",
    author: "Md. Redwan Ahmed",
    readTime: "3 min read",
    tags: ["Invited Talk", "Biomedical AI", "Trustworthy AI", "Clinical"],
  },
  {
    id: 3,
    title: "Organizer Role Announced: IIMCSE 2026",
    summary: "Supporting the research community through conference organization and technical coordination.",
    content:
      "We’re supporting the research community through an organizer role at IIMCSE 2026 (International Innovations on Computer Science and Engineering). This effort reflects our commitment to open scientific exchange and building strong academic–industry collaborations.",
    type: "announcement",
    date: "2026-06-01",
    author: "CredenceX Team",
    readTime: "2 min read",
    tags: ["Conference", "Community", "Organizing"],
  },
  {
    id: 4,
    title: "New Collaboration: Multimodal Glaucoma Detection with Clinical Partner",
    summary: "A calibrated and explainable multimodal pipeline for real-time glaucoma screening is underway.",
    content:
      "We’ve initiated a clinical collaboration on multimodal glaucoma detection, targeting real-time screening with an explainable AI framework. The project emphasizes calibrated predictions, interpretability, and workflow-aligned deployment—bridging research innovation with practical clinical needs.",
    type: "partnership",
    date: "2025-11-01",
    author: "CredenceX Research Team",
    readTime: "4 min read",
    tags: ["Glaucoma", "Medical Imaging", "XAI", "Collaboration"],
  },
  {
    id: 5,
    title: "Paper Accepted: LightVTD (Scientific Reports) for Early Drowsiness Detection",
    summary: "A lightweight, explainable token-fusion ViT designed for safety-critical recognition.",
    content:
      "Our work on LightVTD—Lightweight Explainable Vision Transformer with multi-path token fusion for early drowsiness recognition—has been accepted in Scientific Reports. The study highlights efficiency-driven design choices alongside explainability for safety-critical monitoring scenarios.",
    type: "research-highlight",
    date: "2025-10-01",
    author: "Rezaul Haque",
    readTime: "5 min read",
    tags: ["Scientific Reports", "Drowsiness", "Vision Transformer", "XAI"],
  },
  {
    id: 6,
    title: "Paper Accepted: DepTformer-XAI-SV (iScience) for Depression Emotion & Severity Analysis",
    summary: "Explainable transformer-based modeling for mental health signal understanding.",
    content:
      "Our iScience-accepted work, DepTformer-XAI-SV, presents an explainable transformer approach for fast and reliable depression emotion and severity analysis. The paper emphasizes interpretability and efficiency to support safer downstream decision-making.",
    type: "research-highlight",
    date: "2025-09-01",
    author: "Rezaul Haque",
    readTime: "5 min read",
    tags: ["iScience", "Mental Health", "Transformers", "Explainable AI"],
  },
  {
    id: 7,
    title: "Journal Publication: Vision–Audio Multimodal Object Recognition (Information Fusion)",
    summary: "Hybrid and tensor fusion strategies for multimodal recognition published in a Q1 venue.",
    content:
      "Our vision–audio multimodal object recognition research—using hybrid and tensor fusion to capture cross-modal interactions—has been published in Information Fusion. The work strengthens the lab’s direction on reliable multimodal representation learning.",
    type: "achievement",
    date: "2025-07-01",
    author: "Md. Redwan Ahmed",
    readTime: "4 min read",
    tags: ["Information Fusion", "Multimodal", "Fusion", "Representation Learning"],
  },
  {
    id: 8,
    title: "Research Highlight: Explainable Cotton Leaf Diagnostics & Fabric Defect Detection (iScience, 2025)",
    summary: "A unified explainable transformer framework spanning agriculture and industrial inspection.",
    content:
      "We advanced an explainable transformer framework that generalizes across agricultural disease diagnostics and industrial fabric defect detection. The work showcases how efficiency-aware transformer designs and visual explanations can support practical inspection workflows.",
    type: "research-highlight",
    date: "2025-06-01",
    author: "SentinelX Research Team",
    readTime: "4 min read",
    tags: ["iScience", "Agriculture AI", "Industrial AI", "XAI"],
  },
  {
    id: 9,
    title: "Best Paper Award: ICCIT 2024 (December 2024)",
    summary: "Recognized for research excellence at an international conference in Bangladesh.",
    content:
      "Our team received a Best Paper Award at the 27th International Conference on Computer and Information Technology (ICCIT 2024). This recognition reflects our continued focus on rigorous experimentation, impactful applications, and clear technical contributions.",
    type: "award",
    date: "2024-12-01",
    author: "Rezaul Haque",
    readTime: "3 min read",
    tags: ["Best Paper", "ICCIT", "Award"],
  },
  {
    id: 10,
    title: "Invited Talk Delivered: AI for Low-Resource Esophageal Disease Diagnosis (BECITHCON 2024)",
    summary: "Sharing deployment-oriented medical AI strategies for resource-constrained settings.",
    content:
      "We presented an invited talk on ViT-based esophageal disease diagnosis for low-resource settings, highlighting practical constraints, explainability, and clinical workflow alignment. The session emphasized translation of research models into usable tools.",
    type: "event",
    date: "2024-11-01",
    author: "Rezaul Haque",
    readTime: "3 min read",
    tags: ["Invited Talk", "Healthcare AI", "Deployment", "XAI"],
  },
  {
    id: 11,
    title: "Project Release: Industrial Fabric Defect Detection Dashboard (Factory-Ready Prototype)",
    summary: "A retrofit computer-vision pipeline with a web-based dashboard for quality grading.",
    content:
      "We built a retrofit fabric fault detection and quality grading system and integrated it into a web-based dashboard for industrial deployment. The focus is real-time inspection, interpretable outputs, and practical adoption inside production environments.",
    type: "product-launch",
    date: "2024-08-01",
    author: "SentinelX Engineering Team",
    readTime: "4 min read",
    tags: ["Industrial AI", "Quality Control", "Web App", "Computer Vision"],
  },
  {
    id: 12,
    title: "Mental Health Resilience Study: Psychophysics–EEG Risk Stratification",
    summary: "A transformer-aided EEG framework for early risk screening and interpretability.",
    content:
      "We developed a psychophysics-driven EEG framework for risk stratification of depression/anxiety indicators, pairing stimulus-response design with transformer-based visualization to improve interpretability and screening reliability.",
    type: "research-highlight",
    date: "2024-10-01",
    author: "SentinelX Research Team",
    readTime: "4 min read",
    tags: ["EEG", "Mental Health", "Transformers", "XAI"],
  },
  {
    id: 13,
    title: "Best Paper Award: ICCCI 2024 (September 2024)",
    summary: "Another Best Paper recognition for applied deep learning research contributions.",
    content:
      "We received a Best Paper Award at the 7th International Conference on Contemporary Computing and Informatics (ICCCI 2024), reinforcing our track record in methodologically strong and application-driven AI research.",
    type: "award",
    date: "2024-09-01",
    author: "SentinelX Team",
    readTime: "3 min read",
    tags: ["Best Paper", "ICCCI", "Award"],
  },
  {
    id: 14,
    title: "Best Paper Award: ICEEICT 2024 — Tomato Leaf Disease Detection",
    summary: "Award-winning work combining robust modeling with practical deployment direction.",
    content:
      "Our tomato leaf disease detection work earned a Best Paper Award at ICEEICT 2024. The project reflects our interest in accessible AI for agriculture, combining strong performance with deployment-ready thinking.",
    type: "award",
    date: "2024-05-01",
    author: "Md. Redwan Ahmed",
    readTime: "3 min read",
    tags: ["Best Paper", "Agriculture AI", "ICEEICT"],
  },
  {
    id: 15,
    title: "Android Deployment: Tomato Leaf Disease Predictor App",
    summary: "A mobile deployment path for real-time agricultural screening.",
    content:
      "We deployed an Android-based predictor app for tomato leaf disease identification, translating research models into a practical tool for real-time screening and decision support in the field.",
    type: "product-launch",
    date: "2025-09-01",
    author: "Md. Redwan Ahmed",
    readTime: "4 min read",
    tags: ["Mobile App", "Agriculture", "Deployment", "Computer Vision"],
  },
  {
    id: 16,
    title: "Invited Talk Delivered: Hybrid ViT for Prostate & Oral Cancer Segmentation (ECCE 2025)",
    summary: "Explaining hybrid transformer pipelines and interpretability in medical segmentation.",
    content:
      "We presented an invited talk at ECCE 2025 on hybrid ViT-based prostate and oral cancer segmentation, focusing on model design, generalization, and explainability for trustworthy clinical adoption.",
    type: "event",
    date: "2025-02-01",
    author: "Rezaul Haque",
    readTime: "3 min read",
    tags: ["ECCE", "Medical Imaging", "Segmentation", "XAI"],
  },
  {
    id: 17,
    title: "Invited Talk Delivered: XAI for Rare Medicinal Plant Conservation (ICINT, Australia)",
    summary: "Explainability-driven recognition pipelines supporting biodiversity and conservation.",
    content:
      "We delivered an invited talk on ensemble-based explainable AI for rare medicinal plant recognition and conservation, highlighting interpretability, robustness, and field-friendly deployment strategies.",
    type: "event",
    date: "2025-03-01",
    author: "Rezaul Haque",
    readTime: "3 min read",
    tags: ["ICINT", "XAI", "Conservation", "Computer Vision"],
  },
  {
    id: 18,
    title: "Service Update: Reviewing for Top Elsevier & Springer Venues",
    summary: "Contributing to peer review across leading AI and biomedical journals.",
    content:
      "Our team is actively engaged in peer review for multiple Elsevier and Springer journals and conferences, supporting the research ecosystem and reinforcing our standards for methodological rigor and reproducibility.",
    type: "announcement",
    date: "2025-01-01",
    author: "SentinelX Editorial Team",
    readTime: "2 min read",
    tags: ["Peer Review", "Service", "Community"],
  },
];


// Get latest news sorted by date
export function getLatestNews(limit: number = 5): News[] {
  return [...newsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Get news by type
export function getNewsByType(type: NewsType | 'all'): News[] {
  if (type === 'all') {
    return [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  return newsData
    .filter(news => news.type === type)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all unique news types
export function getAllNewsTypes(): NewsType[] {
  return Object.keys(newsTypeConfig) as NewsType[];
}

// Format date for display
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}
