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
    title: "SentinelX AI Research Lab Wins Best Innovation Award at AI Summit 2026",
    summary: "Our groundbreaking work in neural architecture optimization recognized globally.",
    content: "We are thrilled to announce that SentinelX AI Research Lab has been awarded the prestigious Best Innovation Award at the International AI Summit 2026. This recognition highlights our pioneering research in neural architecture search and edge AI deployment, which has revolutionized how AI models are optimized for resource-constrained devices.",
    type: "award",
    date: "2026-01-20",
    author: "Dr. Sarah Chen",
    readTime: "3 min read",
    tags: ["Award", "Innovation", "AI Summit"],
  },
  {
    id: 2,
    title: "Announcing Our New Federated Learning Platform for Healthcare",
    summary: "Privacy-preserving AI solution set to transform medical diagnostics worldwide.",
    content: "Today, we are excited to unveil our latest product: a comprehensive federated learning platform designed specifically for healthcare applications. This platform enables hospitals and research institutions to collaboratively train AI models while maintaining strict patient privacy through differential privacy mechanisms. The platform has already been adopted by three major healthcare networks.",
    type: "product-launch",
    date: "2026-01-18",
    author: "Dr. Maria Garcia",
    readTime: "5 min read",
    tags: ["Product Launch", "Healthcare", "Privacy"],
  },
  {
    id: 3,
    title: "Strategic Partnership with Global Tech Leaders Announced",
    summary: "Collaboration to accelerate AI research and development across industries.",
    content: "SentinelX AI Research Lab is proud to announce a strategic partnership with leading global technology companies to advance AI research and development. This collaboration will focus on creating open-source AI tools, establishing industry standards for responsible AI, and fostering innovation in edge computing and large language models.",
    type: "partnership",
    date: "2026-01-15",
    author: "Prof. Michael Rodriguez",
    readTime: "4 min read",
    tags: ["Partnership", "Collaboration", "Industry"],
  },
  {
    id: 4,
    title: "SentinelX Team Achieves Breakthrough in Adversarial Robustness",
    summary: "New defense mechanism shows 95% effectiveness against sophisticated attacks.",
    content: "Our research team has achieved a significant breakthrough in adversarial robustness for large language models. The newly developed defense mechanism demonstrates a 95% success rate in detecting and mitigating sophisticated adversarial attacks, including prompt injection and jailbreaking attempts. This advancement marks a crucial step toward building more secure and reliable AI systems.",
    type: "research-highlight",
    date: "2026-01-12",
    author: "Dr. James Liu",
    readTime: "6 min read",
    tags: ["Research", "Security", "LLM"],
  },
  {
    id: 5,
    title: "Join Us at the International Machine Learning Conference 2026",
    summary: "SentinelX researchers to present five papers and host workshop on edge AI.",
    content: "We are excited to participate in the upcoming International Machine Learning Conference (ICML) 2026 in Vienna. Our team will be presenting five accepted research papers covering topics from neural architecture search to federated learning. Additionally, we will be hosting a full-day workshop on 'Efficient AI for Edge Devices' featuring industry experts and hands-on tutorials.",
    type: "event",
    date: "2026-01-08",
    author: "Dr. Emily Watson",
    readTime: "4 min read",
    tags: ["Conference", "ICML", "Workshop"],
  },
  {
    id: 6,
    title: "SentinelX Research Lab Expands Team with 15 New AI Researchers",
    summary: "Growing our world-class team to accelerate innovation in AI research.",
    content: "As part of our commitment to pushing the boundaries of AI research, SentinelX is welcoming 15 new researchers to our team. The new members bring expertise in areas including computer vision, natural language processing, reinforcement learning, and AI ethics. This expansion will strengthen our research capabilities and enable us to tackle more ambitious projects.",
    type: "announcement",
    date: "2026-01-05",
    author: "Prof. David Kim",
    readTime: "3 min read",
    tags: ["Team", "Hiring", "Growth"],
  },
  {
    id: 7,
    title: "Press Release: SentinelX Secures $50M Series B Funding",
    summary: "Investment to accelerate AI research and expand global operations.",
    content: "SentinelX AI Research Lab announces the successful completion of its $50 million Series B funding round, led by prominent venture capital firms specializing in deep tech. The funds will be used to expand our research facilities, invest in cutting-edge computing infrastructure, and establish new research centers in Europe and Asia. This investment validates our vision of democratizing AI technology and making it accessible to organizations worldwide.",
    type: "press-release",
    date: "2025-12-28",
    author: "Dr. Robert Johnson",
    readTime: "5 min read",
    tags: ["Funding", "Investment", "Growth"],
  },
  {
    id: 8,
    title: "Our Computer Vision Model Tops ImageNet Benchmark Leaderboard",
    summary: "Achieving state-of-the-art accuracy with 40% fewer parameters.",
    content: "We are proud to announce that our latest computer vision model has achieved top ranking on the ImageNet benchmark leaderboard. What makes this achievement particularly remarkable is that our model uses 40% fewer parameters than competing solutions while maintaining superior accuracy. This efficiency breakthrough opens new possibilities for deploying sophisticated vision AI on edge devices and mobile platforms.",
    type: "achievement",
    date: "2025-12-20",
    author: "Dr. Wei Zhang",
    readTime: "4 min read",
    tags: ["Computer Vision", "Benchmark", "Performance"],
  },
  {
    id: 9,
    title: "New Open-Source AI Ethics Framework Released to Community",
    summary: "Comprehensive guidelines for responsible AI development and deployment.",
    content: "Today we are releasing our comprehensive AI Ethics Framework as an open-source resource for the global AI community. This framework provides practical guidelines for developing and deploying AI systems responsibly, covering areas such as fairness, transparency, accountability, and privacy. The framework has been developed through extensive collaboration with ethicists, legal experts, and industry practitioners.",
    type: "announcement",
    date: "2025-12-15",
    author: "Dr. Aisha Patel",
    readTime: "7 min read",
    tags: ["Ethics", "Open Source", "Community"],
  },
  {
    id: 10,
    title: "Spotlight: Quantum-Inspired Algorithms for Classical ML",
    summary: "New research demonstrates quantum computing principles in traditional hardware.",
    content: "Our latest research explores how quantum computing principles can be adapted to improve classical machine learning algorithms. The study introduces novel optimization techniques inspired by quantum mechanics that significantly accelerate training on traditional GPUs. Early results show up to 3x speedup in training large neural networks, making advanced AI more accessible to researchers with limited computational resources.",
    type: "research-highlight",
    date: "2025-12-10",
    author: "Prof. Michael Rodriguez",
    readTime: "6 min read",
    tags: ["Quantum", "Research", "Optimization"],
  },
];

// Get latest news sorted by date
export function getLatestNews(limit: number = 5): News[] {
  return [...newsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
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
