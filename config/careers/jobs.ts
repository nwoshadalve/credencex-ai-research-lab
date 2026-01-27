export interface JobPosition {
  id: number;
  title: string;
  department: 'Research' | 'Development' | 'Operations' | 'Design';
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  remote: boolean;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
  salary?: string;
  postedDate: string;
  applicationDeadline?: string;
}

export const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: 'Senior AI Research Scientist',
    department: 'Research',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    remote: true,
    experience: '5+ years',
    description: 'Lead cutting-edge AI/ML research, publish in top-tier conferences, and mentor junior researchers. Requires PhD with 5+ years of experience and strong publication record.',
    responsibilities: [
      'Lead research initiatives in deep learning and neural architecture design',
      'Publish research findings in top-tier conferences (NeurIPS, ICML, CVPR)',
      'Collaborate with cross-functional teams to translate research into products',
      'Mentor junior researchers and PhD candidates',
      'Design and conduct experiments to validate novel AI approaches'
    ],
    requirements: [
      'PhD in Computer Science, AI, Machine Learning, or related field',
      '5+ years of experience in AI/ML research',
      'Strong publication record in top-tier conferences',
      'Expertise in deep learning frameworks (PyTorch, TensorFlow)',
      'Strong mathematical foundation in statistics and optimization',
      'Excellent written and verbal communication skills'
    ],
    niceToHave: [
      'Experience with large language models (LLMs)',
      'Background in computer vision or NLP',
      'Open-source contributions to ML libraries',
      'Industry experience in deploying ML models at scale'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Flexible work arrangements',
      'Annual conference budget',
      'State-of-the-art computing resources'
    ],
    salary: '$150,000 - $200,000',
    postedDate: '2026-01-15',
    applicationDeadline: '2026-04-30'
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    department: 'Development',
    type: 'Full-time',
    location: 'Remote',
    remote: true,
    experience: '3+ years',
    description: 'Build and optimize ML pipelines for production, implement MLOps infrastructure, and collaborate with researchers. Requires 3+ years of experience with Python, ML frameworks, and cloud platforms.',
    responsibilities: [
      'Design and implement ML pipelines for production systems',
      'Optimize model performance and reduce inference latency',
      'Collaborate with researchers to productionize cutting-edge models',
      'Build robust MLOps infrastructure and monitoring systems',
      'Ensure model quality through rigorous testing and validation'
    ],
    requirements: [
      'Bachelor\'s or Master\'s degree in Computer Science or related field',
      '3+ years of experience in ML engineering',
      'Proficiency in Python and ML frameworks (PyTorch, TensorFlow)',
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Strong understanding of software engineering best practices',
      'Experience with containerization (Docker, Kubernetes)'
    ],
    niceToHave: [
      'Experience with model serving frameworks (TensorFlow Serving, TorchServe)',
      'Knowledge of distributed training',
      'Familiarity with MLflow, Weights & Biases, or similar tools',
      'Experience with real-time ML systems'
    ],
    benefits: [
      'Competitive compensation',
      'Remote-first culture',
      'Learning and development budget',
      'Health and wellness programs'
    ],
    salary: '$120,000 - $160,000',
    postedDate: '2026-01-20',
    applicationDeadline: '2026-03-20'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    department: 'Development',
    type: 'Full-time',
    location: 'Hybrid',
    remote: true,
    experience: '2+ years',
    description: 'Develop responsive web applications and RESTful APIs using React, Next.js, and Node.js. Requires 2+ years of full-stack experience with modern frameworks and databases.',
    responsibilities: [
      'Build responsive and intuitive web applications using modern frameworks',
      'Develop RESTful APIs and backend services',
      'Implement real-time features using WebSockets',
      'Optimize application performance and user experience',
      'Collaborate with designers and ML engineers'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '2+ years of full-stack development experience',
      'Proficiency in React, Next.js, and TypeScript',
      'Experience with Node.js and backend frameworks',
      'Strong understanding of database systems (SQL, NoSQL)',
      'Knowledge of web security best practices'
    ],
    niceToHave: [
      'Experience with AI/ML model integration',
      'Familiarity with GraphQL',
      'Knowledge of CI/CD pipelines',
      'Experience with serverless architectures'
    ],
    benefits: [
      'Stock options',
      'Flexible hours',
      'Professional development opportunities',
      'Modern tech stack'
    ],
    salary: '$100,000 - $140,000',
    postedDate: '2026-01-18',
    applicationDeadline: '2026-03-18'
  },
  {
    id: 4,
    title: 'AI Research Intern',
    department: 'Research',
    type: 'Internship',
    location: 'Remote',
    remote: true,
    experience: 'Graduate Student',
    description: 'Support AI/ML research projects, implement algorithms, and contribute to publications. For PhD/Master\'s students with strong ML foundations and Python proficiency.',
    responsibilities: [
      'Assist in research projects focused on AI and machine learning',
      'Implement and experiment with novel algorithms',
      'Analyze experimental results and prepare reports',
      'Contribute to research publications',
      'Present findings to the research team'
    ],
    requirements: [
      'Currently pursuing PhD or Master\'s in Computer Science, AI, or related field',
      'Strong foundation in machine learning and deep learning',
      'Proficiency in Python and ML frameworks',
      'Excellent problem-solving and analytical skills',
      'Strong communication skills'
    ],
    niceToHave: [
      'Previous research experience or publications',
      'Experience with computer vision or NLP',
      'Contributions to open-source projects',
      'Coursework in advanced ML topics'
    ],
    benefits: [
      'Competitive internship stipend',
      'Mentorship from senior researchers',
      'Access to cutting-edge resources',
      'Potential for full-time offer'
    ],
    salary: '$6,000 - $8,000 per month',
    postedDate: '2026-01-10',
    applicationDeadline: '2026-02-28'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    department: 'Operations',
    type: 'Full-time',
    location: 'Remote',
    remote: true,
    experience: '3+ years',
    description: 'Design scalable cloud infrastructure, automate CI/CD pipelines, and ensure high availability. Requires 3+ years with AWS/GCP/Azure, Terraform, and Kubernetes.',
    responsibilities: [
      'Design and implement scalable cloud infrastructure',
      'Automate deployment pipelines and CI/CD processes',
      'Monitor system performance and ensure high availability',
      'Implement security best practices and compliance measures',
      'Optimize costs and resource utilization'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of DevOps experience',
      'Expertise in cloud platforms (AWS, GCP, or Azure)',
      'Proficiency in infrastructure as code (Terraform, CloudFormation)',
      'Strong scripting skills (Python, Bash)',
      'Experience with Kubernetes and Docker'
    ],
    niceToHave: [
      'Experience with GPU infrastructure management',
      'Knowledge of ML/AI workload optimization',
      'Certifications in cloud platforms',
      'Experience with monitoring tools (Prometheus, Grafana)'
    ],
    benefits: [
      'Competitive salary',
      'Remote work flexibility',
      'Certification sponsorship',
      'Cutting-edge technology stack'
    ],
    salary: '$110,000 - $150,000',
    postedDate: '2026-01-22',
    applicationDeadline: '2026-03-22'
  },
  {
    id: 6,
    title: 'UX/UI Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    remote: true,
    experience: '3+ years',
    description: 'Design user-centered web and mobile experiences, create prototypes, and conduct usability testing. Requires 3+ years with Figma/Sketch and a strong portfolio.',
    responsibilities: [
      'Create user-centered designs for web and mobile applications',
      'Develop wireframes, prototypes, and high-fidelity mockups',
      'Conduct user research and usability testing',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve our design system'
    ],
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating design process',
      'Understanding of responsive and accessible design',
      'Excellent communication and collaboration skills'
    ],
    niceToHave: [
      'Experience designing for AI/ML products',
      'Knowledge of front-end development (HTML, CSS, React)',
      'Experience with design systems',
      'Motion design skills'
    ],
    benefits: [
      'Competitive compensation',
      'Creative freedom',
      'Design tools and resources',
      'Collaborative environment'
    ],
    salary: '$95,000 - $130,000',
    postedDate: '2026-01-12',
    applicationDeadline: '2026-03-12'
  },
  {
    id: 7,
    title: 'Computer Vision Engineer',
    department: 'Research',
    type: 'Full-time',
    location: 'Hybrid',
    remote: true,
    experience: '4+ years',
    description: 'Build advanced computer vision models for image recognition and object detection. Requires 4+ years with OpenCV, PyTorch/TensorFlow, and CNNs/transformers.',
    responsibilities: [
      'Develop state-of-the-art computer vision models',
      'Work on image recognition and object detection',
      'Optimize models for real-time performance',
      'Collaborate with research and product teams',
      'Publish research findings'
    ],
    requirements: [
      'Master\'s or PhD in Computer Science, or related field',
      '4+ years of experience in computer vision',
      'Strong expertise in OpenCV, PyTorch, or TensorFlow',
      'Experience with CNNs and transformer architectures',
      'Proficiency in Python and C++'
    ],
    niceToHave: [
      'Experience with 3D vision or SLAM',
      'Knowledge of edge deployment',
      'Publications in CVPR, ICCV, or ECCV',
      'Experience with video understanding'
    ],
    benefits: [
      'Competitive salary and equity',
      'Flexible work arrangements',
      'GPU compute resources',
      'Conference attendance support'
    ],
    salary: '$130,000 - $180,000',
    postedDate: '2025-12-15',
    applicationDeadline: '2026-02-15'
  },
  {
    id: 8,
    title: 'Data Scientist',
    department: 'Research',
    type: 'Full-time',
    location: 'Remote',
    remote: true,
    experience: '3+ years',
    description: 'Analyze large datasets, build predictive models, and derive actionable insights. Requires 3+ years with Python, SQL, and statistical modeling.',
    responsibilities: [
      'Analyze complex datasets to identify trends and patterns',
      'Build and deploy predictive models',
      'Collaborate with engineering teams on data pipelines',
      'Present findings to stakeholders',
      'Develop data visualization dashboards'
    ],
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      '3+ years of data science experience',
      'Strong proficiency in Python and SQL',
      'Experience with scikit-learn, pandas, numpy',
      'Knowledge of statistical modeling and hypothesis testing'
    ],
    niceToHave: [
      'Experience with big data tools (Spark, Hadoop)',
      'Knowledge of A/B testing frameworks',
      'Familiarity with cloud data warehouses',
      'Experience with Tableau or Power BI'
    ],
    benefits: [
      'Competitive salary and stock options',
      'Remote work flexibility',
      'Professional development budget',
      'Health and wellness benefits'
    ],
    salary: '$115,000 - $155,000',
    postedDate: '2025-12-01',
    applicationDeadline: '2026-01-15'
  },
  {
    id: 9,
    title: 'Backend Engineer',
    department: 'Development',
    type: 'Full-time',
    location: 'Hybrid',
    remote: true,
    experience: '4+ years',
    description: 'Design and build scalable backend systems and APIs. Requires 4+ years with Node.js/Python, databases, and microservices architecture.',
    responsibilities: [
      'Design and implement RESTful APIs',
      'Build scalable microservices architecture',
      'Optimize database queries and performance',
      'Implement caching and queuing systems',
      'Ensure system security and reliability'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '4+ years of backend development experience',
      'Expertise in Node.js, Python, or Go',
      'Strong knowledge of PostgreSQL, MongoDB, Redis',
      'Experience with microservices and message queues'
    ],
    niceToHave: [
      'Experience with GraphQL',
      'Knowledge of Elasticsearch',
      'Familiarity with event-driven architectures',
      'Experience with high-traffic systems'
    ],
    benefits: [
      'Competitive compensation package',
      'Flexible work hours',
      'Stock options',
      'Learning and growth opportunities'
    ],
    salary: '$125,000 - $170,000',
    postedDate: '2025-11-20',
    applicationDeadline: '2026-01-20'
  }
];

// Helper Functions
export const getJobsByDepartment = (department: JobPosition['department']): JobPosition[] => {
  return jobPositions.filter(job => job.department === department);
};

export const getJobsByType = (type: JobPosition['type']): JobPosition[] => {
  return jobPositions.filter(job => job.type === type);
};

export const getRemoteJobs = (): JobPosition[] => {
  return jobPositions.filter(job => job.remote);
};

export const getJobById = (id: number): JobPosition | undefined => {
  return jobPositions.find(job => job.id === id);
};

export const getAllDepartments = (): JobPosition['department'][] => {
  return Array.from(new Set(jobPositions.map(job => job.department)));
};

export const getAllJobTypes = (): JobPosition['type'][] => {
  return Array.from(new Set(jobPositions.map(job => job.type)));
};

export const getActiveJobs = (): JobPosition[] => {
  const now = new Date();
  return jobPositions.filter(job => {
    if (!job.applicationDeadline) return true;
    return new Date(job.applicationDeadline) > now;
  });
};

export const isJobActive = (job: JobPosition): boolean => {
  if (!job.applicationDeadline) return true;
  return new Date(job.applicationDeadline) > new Date();
};

export const getJobsCount = (): { total: number; active: number; expired: number } => {
  const active = getActiveJobs();
  return {
    total: jobPositions.length,
    active: active.length,
    expired: jobPositions.length - active.length
  };
};
