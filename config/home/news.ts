import { LucideIcon, Newspaper, Megaphone, Rocket, Calendar, Users, Lightbulb, Trophy } from 'lucide-react';

export type NewsType = 'announcement' | 'press-release' | 'award' | 'product-launch' | 'event' | 'partnership' | 'research-highlight';

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
  'research-highlight': {
    label: 'Research Highlight',
    icon: Lightbulb,
    color: 'text-pink-600 dark:text-pink-400',
  },
};

export const newsData: News[] = [
  {
    id: 1,
    title: "Invited Talk: ROBOTICS-2026 (Rome) — Multimodal AI and Real-World Deployment",
    summary:
      "Our team will present ongoing research on multimodal learning, explainability, and deployment-ready AI systems.",
    content:
      "CredenceX AI Research Lab has been invited to deliver a talk at the World Summit and Expo on Robotics, AI, and Machine Learning (ROBOTICS-2026) in Rome, Italy. The presentation will highlight our work on multimodal fusion, explainable AI, and deployment pathways—from clinical screening to resource-constrained environments.",
    type: "event",
    date: "2026-03-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Invited Talk", "Multimodal AI", "XAI", "Edge AI"],
  },
  {
    id: 2,
    title: "Invited Talk: BEACONGRESS2026 (Portugal) — Trustworthy Clinical AI",
    summary:
      "Sharing progress on explainable decision support and calibration-aware medical AI workflows.",
    content:
      "An invited presentation is scheduled at the International Congress on Biomedical Engineering and Applications (BEACONGRESS2026) in Portugal. The session will focus on explainable, reliability-aware AI for clinical decision support, emphasizing evaluation rigor, calibrated confidence, and practical deployment constraints.",
    type: "event",
    date: "2026-03-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Invited Talk", "Biomedical AI", "Trustworthy AI", "Clinical"],
  },
  {
    id: 3,
    title: "Conference Service: Organizer Role at IIMCSE 2026",
    summary:
      "Contributing to the research community through conference organization and technical coordination.",
    content:
      "CredenceX AI Research Lab is supporting the research community through an organizer role at IIMCSE 2026 (International Innovations on Computer Science and Engineering). This service reflects our commitment to rigorous scientific exchange and strong academic–industry collaboration.",
    type: "announcement",
    date: "2026-06-01",
    author: "CredenceX Research Team",
    readTime: "2 min read",
    tags: ["Conference", "Community", "Organizing"],
  },
  {
    id: 4,
    title: "Clinical Collaboration: Multimodal Glaucoma Screening with Vision Eye Hospital",
    summary:
      "A calibrated and explainable multimodal pipeline for real-time glaucoma screening is underway.",
    content:
      "We have initiated a clinical collaboration on multimodal glaucoma detection aimed at real-time screening supported by an explainable AI framework. The project prioritizes calibrated predictions, interpretable evidence, and workflow-aligned deployment to bridge research advances with clinical practice.",
    type: "partnership",
    date: "2025-11-01",
    author: "CredenceX Research Team",
    readTime: "",
    tags: ["Glaucoma", "Medical Imaging", "XAI", "Collaboration"],
  },
  {
    id: 5,
    title:
      "Paper Accepted (Scientific Reports): Domain-Robust Vision Transformer for Explainable Low-Latency Driver Drowsiness Detection",
    summary:
      "A lightweight, explainable token-fusion Vision Transformer designed for safety-critical recognition.",
    content:
      "Our work on LightVTD (a lightweight, explainable Vision Transformer with multi-path token fusion for early drowsiness recognition) has been accepted in Scientific Reports. The study emphasizes efficient design choices, robust evaluation, and interpretable outputs for safety-critical monitoring.",
    type: "research-highlight",
    date: "2025-10-01",
    author: "CredenceX Research Team",
    readTime: "5 min read",
    tags: ["Scientific Reports", "Drowsiness", "Vision Transformer", "XAI"],
  },
  {
    id: 6,
    title:
      "Paper Published (iScience): Ensemble Transformers with Post-Hoc Explanations for Depression Emotion and Severity Detection",
    summary:
      "Explainable transformer-based modeling for mental health signal understanding.",
    content:
      "Our iScience publication, DepTformer-XAI-SV, presents an explainable transformer-based approach for depression emotion and severity analysis. The work emphasizes interpretability, efficiency, and reliability-aware evaluation to support safer downstream decision-making.",
    type: "research-highlight",
    date: "2025-09-01",
    author: "CredenceX Research Team",
    readTime: "5 min read",
    tags: ["iScience", "Mental Health", "Transformers", "Explainable AI"],
  },
  {
    id: 7,
    title: "Research Collaboration: EEG-Based Early Detection and Risk Stratification for Anxiety and Depression",
    summary:
      "Launching a psychophysics-driven EEG framework to support early detection and risk stratification among East West University students.",
    content:
      "CredenceX AI Research Lab has launched a research initiative titled “Towards Mental Health Resilience: A Psychophysics-Driven EEG Framework for Early Detection and Risk Stratification of Anxiety and Depression in East West University Students.” The project combines psychophysics task design with EEG analytics to identify early risk signals, quantify uncertainty, and support responsible, privacy-aware screening and follow-up workflows.",
    type: "partnership",
    date: "2025-11-15",
    author: "CredenceX Research Team",
    readTime: "",
    tags: ["EEG", "Mental Health", "Anxiety", "Depression", "Early Detection", "Risk Stratification"],
  },
  {
    id: 8,
    title: "Research Highlight (iScience, 2025): Explainable Transformers for Cotton Leaf Diagnosis and Fabric Defect Detection",
    summary:
      "A unified explainable transformer framework spanning agriculture and industrial inspection.",
    content:
      "We developed an explainable transformer framework that generalizes across agricultural disease diagnosis and industrial fabric defect detection. The work demonstrates how efficiency-aware transformer designs and visual explanations can support practical inspection workflows across domains.",
    type: "research-highlight",
    date: "2025-06-01",
    author: "CredenceX Research Team",
    readTime: "4 min read",
    tags: ["iScience", "Agriculture AI", "Industrial AI", "XAI"],
  },
  {
    id: 9,
    title: "Best Paper Award: ICCIT 2024 (December 2024)",
    summary:
      "Recognized for research excellence at an international conference in Bangladesh.",
    content:
      "Our team received a Best Paper Award at the 27th International Conference on Computer and Information Technology (ICCIT 2024). The recognition reflects our continued focus on rigorous experimentation, impactful applications, and clear technical contributions.",
    type: "award",
    date: "2024-12-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Best Paper", "ICCIT", "Award"],
  },
  {
    id: 10,
    title: "Invited Talk: AI for Low-Resource Esophageal Disease Diagnosis (BECITHCON 2024)",
    summary:
      "Presenting deployment-oriented medical AI strategies for resource-constrained settings.",
    content:
      "We delivered an invited talk at BECITHCON 2024 on Vision Transformer–based esophageal disease diagnosis for low-resource settings. The presentation highlighted practical deployment constraints, interpretability, and workflow alignment to support translation from research prototypes to usable clinical tools.",
    type: "event",
    date: "2024-11-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Invited Talk", "Healthcare AI", "Deployment", "XAI"],
  },
  {
    id: 11,
    title: "Prototype Release: Industrial Fabric Defect Detection Dashboard",
    summary:
      "A factory-ready computer vision pipeline with a web dashboard for quality inspection and grading.",
    content:
      "We developed a fabric defect detection and quality grading pipeline and integrated it into a web-based dashboard intended for industrial deployment. The system emphasizes real-time inspection, interpretable outputs, and practical integration within production workflows.",
    type: "product-launch",
    date: "2024-08-01",
    author: "CredenceX Research Team",
    readTime: "4 min read",
    tags: ["Industrial AI", "Quality Control", "Web App", "Computer Vision"],
  },
  {
    id: 12,
    title: "Research Highlight: Psychophysics–EEG Framework for Mental Health Risk Stratification",
    summary:
      "A transformer-aided EEG framework to support early risk screening with interpretable outputs.",
    content:
      "We developed a psychophysics-driven EEG framework for risk stratification of anxiety and depression indicators. The approach pairs stimulus-response design with transformer-based modeling and visualization to improve interpretability and strengthen screening reliability.",
    type: "research-highlight",
    date: "2024-10-01",
    author: "CredenceX Research Team",
    readTime: "4 min read",
    tags: ["EEG", "Mental Health", "Transformers", "XAI"],
  },
  {
    id: 13,
    title: "Best Paper Award: ICCCI 2024 (September 2024)",
    summary:
      "Best Paper recognition for applied deep learning research and strong technical contribution.",
    content:
      "We received a Best Paper Award at the 7th International Conference on Contemporary Computing and Informatics (ICCCI 2024). The recognition reinforces our focus on methodologically rigorous and application-driven AI research.",
    type: "award",
    date: "2024-09-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Best Paper", "ICCCI", "Award"],
  },
  {
    id: 14,
    title: "Best Paper Award: ICEEICT 2024 — Tomato Leaf Disease Detection",
    summary:
      "Award-winning work combining robust modeling with deployment-oriented design.",
    content:
      "Our work on tomato leaf disease detection received a Best Paper Award at ICEEICT 2024. The project reflects our interest in accessible AI for agriculture, combining strong performance with practical deployment considerations.",
    type: "award",
    date: "2024-05-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Best Paper", "Agriculture AI", "ICEEICT"],
  },
  {
    id: 15,
    title: "Deployment Update: Android App for Tomato Leaf Disease Screening",
    summary:
      "A mobile pathway for real-time agricultural screening and decision support.",
    content:
      "We deployed an Android-based application for tomato leaf disease identification, translating our research model into a practical tool for real-time screening and decision support in field settings.",
    type: "product-launch",
    date: "2025-09-01",
    author: "CredenceX Research Team",
    readTime: "4 min read",
    tags: ["Mobile App", "Agriculture", "Deployment", "Computer Vision"],
  },
  {
    id: 16,
    title: "Invited Talk: Hybrid ViT for Prostate and Oral Cancer Segmentation (ECCE 2025)",
    summary:
      "Discussing hybrid transformer pipelines and interpretability for trustworthy medical segmentation.",
    content:
      "We delivered an invited talk at ECCE 2025 on hybrid Vision Transformer approaches for prostate and oral cancer segmentation. The presentation covered model design, generalization considerations, and explainability to support reliable clinical adoption.",
    type: "event",
    date: "2025-02-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["ECCE", "Medical Imaging", "Segmentation", "XAI"],
  },
  {
    id: 17,
    title: "Invited Talk: Explainable AI for Rare Medicinal Plant Conservation (ICINT, Australia)",
    summary:
      "Presenting explainability-driven recognition pipelines supporting biodiversity and conservation.",
    content:
      "We delivered an invited talk at ICINT (Australia) on ensemble-based explainable AI for rare medicinal plant recognition. The talk emphasized interpretability, robustness, and field-ready deployment strategies for conservation applications.",
    type: "event",
    date: "2025-03-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["ICINT", "XAI", "Conservation", "Computer Vision"],
  },
  {
    id: 18,
    title: "Community Service: Reviewer Appointments at Taylor & Francis (2025)",
    summary:
      "CredenceX researchers are contributing to peer review across Taylor & Francis journals in 2025.",
    content:
      "In 2025, CredenceX AI Research Lab members are serving as reviewers for Taylor & Francis journals. This service supports research integrity by providing careful technical assessment and constructive feedback to strengthen published work.",
    type: "announcement",
    date: "2025-10-01",
    author: "CredenceX Research Team",
    readTime: "2 min read",
    tags: ["Reviewing", "Taylor & Francis", "Community", "Peer Review"],
  },
  {
    id: 19,
    title: "Research Partnership: Cybersecurity and Trustworthy AI with South East University CSRC",
    summary:
      "Partnering with South East University’s Cyber Security Research Center to advance risk-aware, trustworthy AI.",
    content:
      "We have initiated a collaboration with South East University’s Cyber Security Research Center (CSRC) focused on AI security, risk-aware deployment, and trustworthy machine learning. The partnership will advance robust and transparent systems, strengthen reliability under real-world threat models, and translate research outcomes into deployable solutions.",
    type: "partnership",
    date: "2025-01-15",
    author: "CredenceX Research Team",
    readTime: "",
    tags: ["Cybersecurity", "Trustworthy AI", "Collaboration", "Risk-Aware AI"],
  },
  {
    id: 20,
    title: "Research Partnership: BCI Wheelchair Control with East West University CRT",
    summary:
      "Collaborating with EWU’s Center for Research and Training on a BCI-driven wheelchair control system.",
    content:
      "CredenceX AI Research Lab has initiated a collaboration with East West University’s Center for Research and Training (CRT) on “A Brain–Computer Interface System to Control Wheelchair for Severe Mobility Impaired Persons.” The work focuses on reliable brain-signal decoding, human-in-the-loop evaluation, and safety-first deployment to support assistive mobility in real-world settings.",
    type: "partnership",
    date: "2025-11-02",
    author: "CredenceX Research Team",
    readTime: "",
    tags: ["BCI", "Assistive Technology", "Rehabilitation", "Human-in-the-Loop", "Collaboration"],
  },
  {
    id: 21,
    title: "Best Paper Award: IEEE ECCE 2025",
    summary:
      "Recognized for outstanding research at the 2025 International Conference on Electrical, Computer and Communication Engineering (ECCE).",
    content:
      "Our team received a Best Paper Award at IEEE ECCE 2025 for “Hybrid Vision Transformer Model for Accurate Prostate Cancer Classification in MRI Images.” The award recognizes our focus on rigorous validation, clinically meaningful problem selection, and trustworthy AI for high-stakes medical imaging.",
    type: "award",
    date: "2025-07-01",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Best Paper", "IEEE", "ECCE", "Medical Imaging", "Award"],
  },
  {
    id: 22,
    title: "Best Paper Award: IEEE PEEIACON 2025",
    summary:
      "Awarded for research excellence at the 2025 IEEE International Conference on Power, Electrical, Electronics and Industrial Applications (PEEIACON).",
    content:
      "CredenceX AI Research Lab received a Best Paper Award at IEEE PEEIACON 2025 for “MobileDepFormer-XAI: A Lightweight Transformer Ensemble for Explainable Depression Emotion and Severity Detection.” The award highlights our emphasis on reproducibility, interpretable modeling, and reliability-aware evaluation for real-world impact.",
    type: "award",
    date: "2025-12-05",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Best Paper", "IEEE", "PEEIACON", "XAI", "Mental Health", "Award"],
  },
  {
    id: 23,
    title: "Best Paper Award: IEEE BECITHCON 2025",
    summary:
      "Honored for impactful applied AI research at the 2025 IEEE BECITHCON conference.",
    content:
      "Our team earned a Best Paper Award at IEEE BECITHCON 2025 for “SkinViT-EfficientX: A Hybrid Vision Transformer Model with Token Pruning and Explainable AI for Multiclass Skin Cancer Diagnosis.” The recognition reinforces our focus on transparent, reliable medical AI supported by careful evaluation and deployment considerations.",
    type: "award",
    date: "2025-11-30",
    author: "CredenceX Research Team",
    readTime: "3 min read",
    tags: ["Best Paper", "IEEE", "BECITHCON", "Medical Imaging", "Skin Cancer", "Award"],
  },
  {
    id: 24,
    title: "Community Service: Reviewer Appointments at Elsevier Journals (2025)",
    summary:
      "CredenceX researchers are contributing to peer review across multiple Elsevier journals in 2025.",
    content:
      "Several CredenceX AI Research Lab members have been appointed as reviewers for Elsevier journals in 2025, supporting rigorous peer review and research quality. Review assignments include Biomedical Signal Processing and Control, Computer Speech & Language, Computers & Electrical Engineering, Pattern Recognition, Medical Image Analysis, Information Fusion, Data in Brief, Engineering Applications of Artificial Intelligence, Heliyon, iScience, JoVE, and Measurement.",
    type: "announcement",
    date: "2025-02-01",
    author: "CredenceX Research Team",
    readTime: "2 min read",
    tags: ["Reviewing", "Elsevier", "Community", "Peer Review"],
  },
  {
    id: 25,
    title: "Community Service: Reviewer Appointments at Springer Nature Journals (2025)",
    summary:
      "CredenceX researchers are serving as reviewers for Springer Nature journals in 2025.",
    content:
      "In 2025, our team is supporting the research community through reviewer roles at Springer Nature journals, including Scientific Reports, Knowledge and Information Systems, Discover Applied Sciences, Memetic Computing, Journal of Big Data, Discover Artificial Intelligence, and BMC Bioinformatics. These appointments reflect our commitment to constructive peer review and evidence-driven science.",
    type: "announcement",
    date: "2025-03-15",
    author: "CredenceX Research Team",
    readTime: "2 min read",
    tags: ["Reviewing", "Springer Nature", "Community", "Peer Review"],
  },
  {
    id: 26,
    title: "Community Service: Reviewer Appointments at MDPI Journals (2025)",
    summary:
      "CredenceX team members are contributing as reviewers across multiple MDPI journals in 2025.",
    content:
      "CredenceX AI Research Lab members are serving as reviewers for several MDPI journals in 2025, supporting editorial decisions through constructive technical feedback. Review assignments include Sensors, Life, Healthcare, Tomography, Bioengineering, Fractal and Fractional, Entropy, Symmetry, and Journal of Imaging.",
    type: "announcement",
    date: "2025-05-01",
    author: "CredenceX Research Team",
    readTime: "2 min read",
    tags: ["Reviewing", "MDPI", "Community", "Peer Review"],
  },
  {
    id: 27,
    title: "Community Service: Reviewer Appointments at SAGE Journals (2025)",
    summary:
      "CredenceX researchers are serving as reviewers for SAGE journals in 2025.",
    content:
      "We are pleased to share that CredenceX AI Research Lab members have taken on reviewer roles for SAGE journals in 2025. These appointments reflect our ongoing commitment to transparent, fair, and constructive peer review across applied AI and health technology research.",
    type: "announcement",
    date: "2025-08-01",
    author: "CredenceX Research Team",
    readTime: "2 min read",
    tags: ["Reviewing", "SAGE", "Community", "Peer Review"],
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
