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
  {
    id: 1,
    name: "Rezaul Haque",
    role: "Founding Members",
    position: "Founder & Research Director",
    department: "CredenceX AI Research Lab",
    email: "redzaulh603@gmail.com",
    avatar: "/teams/reza.JPG",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/-rezaulhaque/",
      googleScholar: "https://scholar.google.com/citations?user=wi2kfzYAAAAJ&hl=en",
      website: "https://redrik278.github.io/reza/"
    }
  },
  {
    id: 2,
    name: "Abdullah Al Sakib",
    role: "Founding Members",
    position: "Founder & CEO",
    department: "CredenceX AI Research Lab",
    email: "redzaulh603@gmail.com",
    avatar: "/teams/sakibA.jfif",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abdullah-al-sakib-2b78b6209/",
      googleScholar: "https://scholar.google.com/citations?user=QozwSrcAAAAJ&hl=en&oi=ao",
    }
  },
  {
    id: 3,
    name: "Md. Redwan Ahmed",
    role: "Founding Members",
    position: "Co-Founder & Research Lead",
    department: "CredenceX AI Research Lab",
    email: "redrik278@gmail.com",
    avatar: "/teams/Redwan.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      website: "https://redrik278.github.io/Redwan"
    }
  },
  {
    id: 4,
    name: "S M Masfequier Rahman Swapno",
    role: "R&D Lead",
    position: "AI and Digital Health Technology, The University of Queensland, St Lucia, QLD 4072, Australia",
    department: "CredenceX AI Research Lab",
    email: "masfequier.cse.bubt@gmail.com",
    avatar: "/teams/mashfiq.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/masfequier/",
      googleScholar: "https://scholar.google.com/citations?user=iqAaHh8AAAAJ&hl=en",
      }
  },
  {
    id: 5,
    name: "MD Nwoshad Alam Chowdhury",
    role: "R&D Lead",
    position: "Engineering Lead (Web Platform & Product Delivery)",
    department: "Department of CSE, Daffodil International University, Dhaka, Bangladesh",
    email: "nwoshadalve@gmail.com",
    avatar: "/teams/nowshad.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nwoshadalve/",
      googleScholar: "https://scholar.google.com/citations?user=K457W08AAAAJ&hl=en",
      github: "https://github.com/nwoshadalve"
    }
  },
  {
    id: 6,
    name: "Shakil Khan",
    role: "Senior Full Stack Developer",
    position: "Senior Full Stack Engineer (AI Web Apps, Dashboards, Model Integration)",
    department: "Department of Business Analytics, International American University, Los Angeles, CA 90010, USA",
    email: "khanshakil3194@gmail.com",
    avatar: "/teams/shakil.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=wJW1DDkAAAAJ&hl=en"
    }
  },
  {
    id: 7,
    name: "Naimul Islam",
    role: "Senior Full Stack Developer",
    position: "Senior Full Stack Engineer (Inference UI, Explainability Views, Reporting)",
    department: "Department of CSE, East West University, Dhaka 1212, Bangladesh",
    email: "naimul.islam.pulak@gmail.com",
    avatar: "/teams/naimul.webp",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/naimul-islam-pulak/",
      googleScholar: "https://scholar.google.com/citations?user=Z5wu9jsAAAAJ&hl=en"
    }
  },
  {
    id: 8,
    name: "Katura Gania Khushbu",
    role: "Senior Frontend Developer",
    position: "Senior Frontend Engineer (Visualization, Explainability UI, UX)",
    department: "Department of CSE, East West University, Dhaka 1212, Bangladesh",
    email: "katurakhushbu@gmail.com",
    avatar: "/teams/khushbu.jpg",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=fASYqA4AAAAJ&hl=en"
    }
  },
  {
    id: 9,
    name: "Md Ariful Islam",
    role: "Senior Backend Developer",
    position: "Senior Backend Engineer (APIs, Model Serving, Data Pipelines)",
    department: "Department of Business Analytics, International American University, Los Angeles, CA 90010, USA",
    email: "ariful26426@gmail.com",
    avatar: "/teams/ariful.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=ZmQlQpoAAAAJ&hl=en"
    }
  },
  {
    id: 10,
    name: "Md Mahfuzur Rahman",
    role: "DevOps Engineer",
    position: "DevOps / MLOps Engineer (CI/CD, Containers, Deployment Automation)",
    department: "Department of Engineering Management, Westcliff University, Irvine, CA 92614, USA",
    email: "m.faraji.214@westcliff.edu",
    avatar: "/teams/mahfuz.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=Da9mUBUAAAAJ&hl=en"
    }
  },
  {
    id: 11,
    name: "Shafiur Rahman",
    role: "DevOps Engineer",
    position: "DevOps Engineer (Cloud Ops, Monitoring, Reliability)",
    department: "Department of Software Engineering, Daffodil International University, Dhaka, Bangladesh",
    email: "shafiur016@gmail.com",
    avatar: "/teams/shafiur.jpg",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=Aq1Ww_cAAAAJ&hl=en"
    }
  },
  {
    id: 12,
    name: "Ferdaus Ibne Aziz",
    role: "ML Engineer",
    position: "ML Engineer (Model Packaging, Benchmarking, Reproducibility)",
    department: "Department of Artificial Intelligence, Woosong University, Daejeon 34606, Republic of Korea",
    email: "shifatshaheen92@gmail.com",
    avatar: "/teams/ferdaus.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=XgED0OoAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/ferdaus-ibne-aziz/"
    }
  },
  {
    id: 13,
    name: "Asif Ahamed",
    role: "Full Stack Developer",
    position: "Full Stack Engineer (Demo Apps, Dataset Tools, Experiment Tracking)",
    department: "College of Technology and Engineering, Westcliff University, CA 92614, USA",
    email: "asif229932@gmail.com",
    avatar: "/teams/asif.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=5nktbr8AAAAJ&hl=en"
    }
  },
  {
    id: 14,
    name: "Mahedi Hassan Ratul",
    role: "Frontend Developer",
    position: "Frontend Engineer (Component Library, Landing Pages, Docs)",
    department: "Department of CSE, East West University, Dhaka 1212, Bangladesh",
    email: "mahammad.ratul1004@gmail.com",
    avatar: "",
    socialLinks: {
      googleScholar: "https://www.researchgate.net/profile/Mahedi-Ratul"
    }
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
