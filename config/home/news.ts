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
  {
    id: 11,
    title: "SentinelX Launches AI-Powered Sustainability Initiative",
    summary: "Using AI to reduce carbon footprint and promote environmental conservation.",
    content: "We are launching a comprehensive sustainability initiative that leverages AI to optimize energy consumption in data centers and reduce our carbon footprint. Our proprietary algorithms predict and manage computational loads to minimize energy waste while maintaining performance. This initiative aligns with our commitment to responsible AI development and environmental stewardship.",
    type: "announcement",
    date: "2025-12-05",
    author: "Dr. Elena Martinez",
    readTime: "5 min read",
    tags: ["Sustainability", "Environment", "Green AI"],
  },
  {
    id: 12,
    title: "Revolutionary NLP Model Achieves Human-Level Reading Comprehension",
    summary: "Breakthrough in natural language understanding sets new industry standard.",
    content: "Our research team has developed a revolutionary natural language processing model that achieves human-level performance on complex reading comprehension tasks. The model demonstrates exceptional ability in understanding context, nuance, and implicit meaning across diverse text types. This advancement has significant implications for applications in education, customer service, and content analysis.",
    type: "research-highlight",
    date: "2025-11-28",
    author: "Dr. Thomas Anderson",
    readTime: "6 min read",
    tags: ["NLP", "Reading Comprehension", "Breakthrough"],
  },
  {
    id: 13,
    title: "Annual AI Research Symposium 2025: Record Attendance Expected",
    summary: "Join us for three days of cutting-edge AI research presentations and networking.",
    content: "SentinelX AI Research Lab is hosting its Annual AI Research Symposium 2025, expecting over 1,000 attendees from academia and industry. The event will feature keynote speeches from leading AI researchers, poster sessions, panel discussions on AI ethics and safety, and exclusive previews of upcoming research projects. Registration is now open for both in-person and virtual attendance.",
    type: "event",
    date: "2025-11-22",
    author: "Dr. Rachel Thompson",
    readTime: "4 min read",
    tags: ["Symposium", "Conference", "Networking"],
  },
  {
    id: 14,
    title: "SentinelX Named 'AI Research Lab of the Year' by Tech Journal",
    summary: "Recognition for outstanding contributions to artificial intelligence advancement.",
    content: "We are honored to be named 'AI Research Lab of the Year' by the prestigious International Tech Journal. This award recognizes our consistent contributions to advancing the field of artificial intelligence, including our groundbreaking research publications, innovative products, and commitment to open science. The recognition validates our team's dedication to pushing the boundaries of what's possible with AI.",
    type: "award",
    date: "2025-11-18",
    author: "Prof. David Kim",
    readTime: "3 min read",
    tags: ["Award", "Recognition", "Achievement"],
  },
  {
    id: 15,
    title: "Collaborative Partnership with Leading Universities Announced",
    summary: "Multi-year research collaboration to advance AI education and innovation.",
    content: "SentinelX AI Research Lab announces strategic partnerships with five leading universities worldwide to establish collaborative research programs and educational initiatives. These partnerships will facilitate knowledge exchange, provide research opportunities for graduate students, and accelerate innovation in key AI domains including robotics, healthcare AI, and autonomous systems.",
    type: "partnership",
    date: "2025-11-12",
    author: "Prof. Linda Chen",
    readTime: "5 min read",
    tags: ["Education", "Universities", "Collaboration"],
  },
  {
    id: 16,
    title: "New AI-Driven Drug Discovery Platform Accelerates Research",
    summary: "Platform reduces drug candidate identification time from years to months.",
    content: "We are excited to launch our AI-driven drug discovery platform that revolutionizes pharmaceutical research. By combining advanced machine learning with molecular simulation, our platform can identify promising drug candidates in months rather than years. Early partnerships with biotech companies have already yielded three candidates entering clinical trials.",
    type: "product-launch",
    date: "2025-11-05",
    author: "Dr. Jennifer Wong",
    readTime: "6 min read",
    tags: ["Healthcare", "Drug Discovery", "Biotech"],
  },
  {
    id: 17,
    title: "Press Release: SentinelX Opens New Research Center in Singapore",
    summary: "Expanding global presence to strengthen AI research in Asia-Pacific region.",
    content: "SentinelX AI Research Lab officially opens its new state-of-the-art research center in Singapore, marking a significant expansion of our global operations. The facility will house over 100 researchers focusing on AI applications in finance, smart cities, and Southeast Asian languages. This expansion reinforces our commitment to building a truly global research organization.",
    type: "press-release",
    date: "2025-10-28",
    author: "Dr. Raj Kumar",
    readTime: "4 min read",
    tags: ["Expansion", "Singapore", "Global"],
  },
  {
    id: 18,
    title: "Breakthrough in Explainable AI: Making Black Boxes Transparent",
    summary: "New technique provides clear explanations for complex AI decision-making.",
    content: "Our research team has achieved a major breakthrough in explainable AI with a novel technique that provides clear, human-understandable explanations for decisions made by complex neural networks. This advancement addresses one of the most critical challenges in AI adoption, particularly in regulated industries like healthcare and finance where decision transparency is essential.",
    type: "research-highlight",
    date: "2025-10-20",
    author: "Dr. Alex Thompson",
    readTime: "7 min read",
    tags: ["Explainability", "Transparency", "XAI"],
  },
  {
    id: 19,
    title: "SentinelX Team Wins First Place at Global AI Hackathon",
    summary: "Innovative solution for climate prediction earns top honors.",
    content: "Our team of researchers has won first place at the Global AI for Good Hackathon with an innovative climate prediction model. The winning solution combines satellite imagery analysis, weather pattern recognition, and long-term climate modeling to provide accurate predictions for agricultural planning and disaster preparedness. The model is being made available as an open-source tool for researchers worldwide.",
    type: "achievement",
    date: "2025-10-15",
    author: "Dr. Maria Santos",
    readTime: "4 min read",
    tags: ["Hackathon", "Climate", "Competition"],
  },
  {
    id: 20,
    title: "New AI Safety Framework Adopted by Industry Consortium",
    summary: "SentinelX-developed safety protocols become industry standard.",
    content: "We are proud to announce that our AI Safety Framework has been officially adopted by the International AI Industry Consortium as the recommended standard for developing safe and reliable AI systems. The framework provides comprehensive guidelines for risk assessment, testing protocols, and deployment best practices. This adoption represents a significant step toward establishing universal safety standards in AI development.",
    type: "announcement",
    date: "2025-10-08",
    author: "Dr. Richard Brown",
    readTime: "5 min read",
    tags: ["Safety", "Standards", "Framework"],
  },
  {
    id: 21,
    title: "AI-Powered Education Platform Reaches 1 Million Students",
    summary: "Personalized learning platform transforms education across 50 countries.",
    content: "Our AI-powered adaptive learning platform has reached a major milestone of serving over 1 million students across 50 countries. The platform uses sophisticated machine learning algorithms to personalize educational content, adapt to individual learning styles, and provide real-time feedback. Early studies show students using the platform achieve 30% better learning outcomes compared to traditional methods.",
    type: "achievement",
    date: "2025-10-01",
    author: "Dr. Sophia Lee",
    readTime: "5 min read",
    tags: ["Education", "EdTech", "Milestone"],
  },
  {
    id: 22,
    title: "SentinelX Receives Excellence in AI Ethics Award",
    summary: "Recognition for pioneering work in responsible AI development.",
    content: "SentinelX AI Research Lab has been honored with the Excellence in AI Ethics Award from the Global AI Ethics Council. This prestigious award recognizes our comprehensive approach to ethical AI development, including our fairness auditing tools, bias detection frameworks, and commitment to transparency in AI systems. The award ceremony will take place at the upcoming International Ethics in Technology Conference.",
    type: "award",
    date: "2025-09-25",
    author: "Dr. Aisha Patel",
    readTime: "4 min read",
    tags: ["Ethics", "Award", "Responsibility"],
  },
  {
    id: 23,
    title: "International AI Conference 2025: SentinelX to Present 8 Papers",
    summary: "Largest research contribution to premier AI conference this year.",
    content: "We are thrilled to announce that SentinelX researchers will present eight papers at the International AI Conference 2025, our largest contribution to date. The papers cover diverse topics including reinforcement learning, neural architecture search, multimodal learning, and AI safety. Additionally, our team will host two workshops and participate in multiple panel discussions on the future of AI research.",
    type: "event",
    date: "2025-09-18",
    author: "Prof. Michael Rodriguez",
    readTime: "5 min read",
    tags: ["Conference", "Research Papers", "Presentation"],
  },
  {
    id: 24,
    title: "Strategic Alliance with Automotive Industry Leader Announced",
    summary: "Partnership to develop next-generation autonomous driving systems.",
    content: "SentinelX AI Research Lab announces a strategic alliance with a leading global automotive manufacturer to develop advanced autonomous driving systems. This multi-year partnership will focus on creating safer, more reliable self-driving technology using our cutting-edge computer vision and decision-making algorithms. The collaboration combines SentinelX's AI expertise with the manufacturer's automotive engineering excellence.",
    type: "partnership",
    date: "2025-09-10",
    author: "Dr. James Liu",
    readTime: "6 min read",
    tags: ["Automotive", "Autonomous Driving", "Partnership"],
  },
  {
    id: 25,
    title: "Next-Generation AI Chip Achieves 10x Performance Improvement",
    summary: "Custom silicon design enables unprecedented AI processing efficiency.",
    content: "Today we unveil our next-generation AI accelerator chip that delivers 10x performance improvement over current solutions while consuming 50% less power. This breakthrough in custom silicon design enables running large language models and complex computer vision tasks on edge devices with unprecedented efficiency. The chip will be available to research partners starting Q1 2026.",
    type: "product-launch",
    date: "2025-09-05",
    author: "Dr. Wei Zhang",
    readTime: "5 min read",
    tags: ["Hardware", "AI Chip", "Performance"],
  },
  {
    id: 26,
    title: "Press Release: SentinelX Achieves Carbon Neutral Operations",
    summary: "Milestone achievement in sustainable AI research and development.",
    content: "SentinelX AI Research Lab announces that we have achieved carbon neutral operations across all our facilities worldwide. This milestone was reached through a combination of renewable energy adoption, energy-efficient computing infrastructure, and verified carbon offset programs. We remain committed to leading the industry in sustainable AI development and will continue investing in green technologies.",
    type: "press-release",
    date: "2025-08-28",
    author: "Dr. Elena Martinez",
    readTime: "4 min read",
    tags: ["Sustainability", "Carbon Neutral", "Environment"],
  },
  {
    id: 27,
    title: "Revolutionary Approach to Few-Shot Learning Published in Nature",
    summary: "Groundbreaking research enables AI to learn from minimal examples.",
    content: "Our groundbreaking research on few-shot learning has been published in Nature, one of the world's most prestigious scientific journals. The paper introduces a novel meta-learning approach that enables AI models to achieve high accuracy with just a handful of training examples. This advancement has profound implications for domains where labeled data is scarce or expensive to obtain.",
    type: "research-highlight",
    date: "2025-08-20",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    tags: ["Publication", "Nature", "Few-Shot Learning"],
  },
  {
    id: 28,
    title: "SentinelX AI Lab Celebrates 5 Years of Innovation",
    summary: "Reflecting on five years of groundbreaking AI research and achievements.",
    content: "Today marks the fifth anniversary of SentinelX AI Research Lab. Since our founding, we have published over 200 research papers, launched 15 innovative products, and grown from a team of 10 to over 300 researchers worldwide. We celebrate this milestone by reflecting on our journey and renewing our commitment to advancing AI for the benefit of humanity. Thank you to our team, partners, and supporters who made this possible.",
    type: "announcement",
    date: "2025-08-15",
    author: "Prof. David Kim",
    readTime: "6 min read",
    tags: ["Anniversary", "Milestone", "Celebration"],
  },
  {
    id: 29,
    title: "New Multimodal AI Model Understands Text, Images, and Audio",
    summary: "Unified model processes multiple data types with unprecedented accuracy.",
    content: "We are excited to introduce our latest multimodal AI model that seamlessly processes and understands text, images, and audio within a single unified architecture. The model demonstrates exceptional performance in tasks requiring cross-modal reasoning, such as generating image descriptions from audio narrations or creating visual content from textual descriptions. This advancement opens new possibilities for accessible AI applications.",
    type: "research-highlight",
    date: "2025-08-08",
    author: "Dr. Thomas Anderson",
    readTime: "6 min read",
    tags: ["Multimodal", "AI Model", "Innovation"],
  },
  {
    id: 30,
    title: "SentinelX Recognized as Top AI Employer by Tech Talent Survey",
    summary: "Voted best workplace for AI researchers and engineers.",
    content: "We are honored to be recognized as the top employer for AI researchers and engineers in the annual Tech Talent Survey. This recognition reflects our commitment to fostering a collaborative, innovative work environment that empowers our team to pursue ambitious research goals. We continue to invest in professional development, cutting-edge research infrastructure, and initiatives that support work-life balance and diversity in AI.",
    type: "achievement",
    date: "2025-08-01",
    author: "Dr. Rachel Thompson",
    readTime: "4 min read",
    tags: ["Employer", "Recognition", "Culture"],
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
