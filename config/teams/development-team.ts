export interface DevelopmentTeamMember {
  id: number;
  name: string;
  role: string;
  position: string;
  department: string;
  email: string;
  avatar: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    portfolio?: string;
    stackoverflow?: string;
    googleScholar?: string;
    researchGate?: string;
    orcid?: string;
    website?: string;
  };
}

export type DevelopmentRole = 
  | 'Lead Developer'
  | 'Senior Full Stack Developer'
  | 'Senior Frontend Developer'
  | 'Senior Backend Developer'
  | 'DevOps Engineer'
  | 'ML Engineer'
  | 'Full Stack Developer'
  | 'Frontend Developer';

export const developmentTeam: DevelopmentTeamMember[] = [
  // Lead Developer (1) — provided by you
  {
    id: 1,
    name: "MD Nwoshad Alam Chowdhury",
    role: "Lead Developer",
    position: "Engineering Lead (Web Platform & Product Delivery)",
    department: "Development Team",
    email: "nwoshadalve@gmail.com",
    avatar: "/teams/nowshad.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nwoshadalve/",
      googleScholar: "https://scholar.google.com/citations?user=K457W08AAAAJ&hl=en",
      github: "https://github.com/nwoshadalve",
    }
  },

  // Senior Full Stack Developer (2) — selected from non-researchTeam co-author pool
  {
    id: 2,
    name: "Shakil Khan",
    role: "Senior Full Stack Developer",
    position: "Senior Full Stack Engineer (AI Web Apps, Dashboards, Model Integration)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/shakil-khan.jpg",
    socialLinks: {}
  },
  {
    id: 3,
    name: "Sazzadul Islam",
    role: "Senior Full Stack Developer",
    position: "Senior Full Stack Engineer (Inference UI, Explainability Views, Reporting)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/sazzadul-islam.jpg",
    socialLinks: {}
  },

  // Senior Frontend Developer (1)
  {
    id: 4,
    name: "Katura Gania Khushbu",
    role: "Senior Frontend Developer",
    position: "Senior Frontend Engineer (Visualization, Explainability UI, UX)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/katura-khushbu.jpg",
    socialLinks: {}
  },

  // Senior Backend Developer (1)
  {
    id: 5,
    name: "Jia Uddin",
    role: "Senior Backend Developer",
    position: "Senior Backend Engineer (APIs, Model Serving, Data Pipelines)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/jia-uddin.jpg",
    socialLinks: {}
  },

  // DevOps Engineer (2)
  {
    id: 6,
    name: "Maidul Islam",
    role: "DevOps Engineer",
    position: "DevOps / MLOps Engineer (CI/CD, Containers, Deployment Automation)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/maidul-islam.jpg",
    socialLinks: {}
  },
  {
    id: 7,
    name: "Md Manjurul Ahsan",
    role: "DevOps Engineer",
    position: "DevOps Engineer (Cloud Ops, Monitoring, Reliability)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/md-manjurul-ahsan.jpg",
    socialLinks: {}
  },

  // ML Engineer (1)
  {
    id: 8,
    name: "Mahbub Alam Khan",
    role: "ML Engineer",
    position: "ML Engineer (Model Packaging, Benchmarking, Reproducibility)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/mahbub-alam-khan.jpg",
    socialLinks: {}
  },

  // Full Stack Developer (1)
  {
    id: 9,
    name: "A. S. U. K. Pranta",
    role: "Full Stack Developer",
    position: "Full Stack Engineer (Demo Apps, Dataset Tools, Experiment Tracking)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/as-uk-pranta.jpg",
    socialLinks: {}
  },

  // Frontend Developer (1)
  {
    id: 10,
    name: "Amit Kumar Das",
    role: "Frontend Developer",
    position: "Frontend Engineer (Component Library, Landing Pages, Docs साइट)",
    department: "Development Team",
    email: "",
    avatar: "/team/dev/amit-kumar-das.jpg",
    socialLinks: {}
  }
];


// Helper to get team members by role
export const getDevelopmentTeamByRole = (role: DevelopmentRole): DevelopmentTeamMember[] => {
  return developmentTeam.filter(member => member.role === role);
};

// Get all unique roles
export const getAllDevelopmentRoles = (): DevelopmentRole[] => {
  return Array.from(new Set(developmentTeam.map(member => member.role as DevelopmentRole)));
};
