export interface TeamMember {
  id: number;
  name: string;
  role: string;
  position: string;
  institute: string;
  email: string;
  avatar: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    googleScholar?: string;
    researchGate?: string;
    orcid?: string;
    website?: string;
  };
}

export type TeamRole = 
  | 'Principal Research Scientist'
  | 'Senior Research Scientist'
  | 'Research Scientist'
  | 'Postdoctoral Researcher'
  | 'Research Associate'
  | 'PhD Candidate';

export const researchTeam: TeamMember[] = [
  // =========================
  // Founder / Co-Founder
  // =========================
  {
    id: 1,
    name: "Rezaul Haque",
    role: "Founder & Co-Founder",
    position: "Founder & Research Lead (Trustworthy Medical AI, Multimodal Fusion, XAI)",
    institute: "SentinelX AI Research Lab",
    email: "redzaulh603@gmail.com",
    avatar: "/team/rezaul-haque.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/-rezaulhaque/",
      googleScholar: "https://scholar.google.com/citations?user=wi2kfzYAAAAJ&hl=en",
      github: "https://github.com/rezaul-h",
      researchGate: "https://www.researchgate.net/profile/Rezaul-Haque-7",
      orcid: "https://orcid.org/0000-0002-9203-1622",
      website: "https://rezaul-h.github.io/"
    }
  },
  {
    id: 2,
    name: "Md. Redwan Ahmed",
    role: "Founder & Co-Founder",
    position: "Co-Founder & Research Lead (Multimodal Learning, Clinical AI, Deployment)",
    institute: "SentinelX AI Research Lab",
    email: "redrik278@gmail.com",
    avatar: "/teams/Redwan.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278",
      website: "https://redrik278.github.io/Redwan",
      researchGate: "https://www.researchgate.net/profile/Md-Redwan-Ahmed-2?ev=hdr_xprf",
      orcid: "https://orcid.org/my-orcid?orcid=0009-0007-4042-2936"
    }
  },

  // =========================
  // Supervisors / Advisors
  // =========================
  {
    id: 3,
    name: "Prof. Dr. Mohammad Ali Moni",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=JnwcUwkAAAAJ&hl=en"
    }
  },
  {
    id: 4,
    name: "Prof. Dr. Nazmul Siddique",
    role: "Research Consultant",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/teams/siddique.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=oV13Kl0AAAAJ&hl=en"
    }
  },
  {
    id: 5,
    name: "Prof. Dr. Young-Im Cho",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 6,
    name: "Prof. Dr. M. Ali Akber Dewan",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 7,
    name: "Prof. Dr. Fakir Mashuque Alamgir",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "fma@ewubd.edu",
    avatar: "/teams/mashuque.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dr-fakir-mashuque-alamgir-066114338/",
      googleScholar: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=sD1W1egAAAAJ"
    }
  },
  {
    id: 8,
    name: "Prof. Dr. Ahmed Wasif Reza",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "wasif@ewubd.edu",
    avatar: "/teams/wasif.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/professor-dr-ahmed-wasif-reza-099920151/",
      googleScholar: "https://scholar.google.com/citations?user=4dhJMl4AAAAJ&hl=en"
    }
  },
  
  {
    id: 9,
    name: "Prof. Dr. Abhishek Appaji",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/teams/appaji.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=Sf-xh70AAAAJ&hl=en"
    }
  },
  {
    id: 10,
    name: "Prof. Dr. Md Junayed Hasan",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/teams/junayed.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 11,
    name: "Prof. Dr. Shamim Hasnat Ripon",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 12,
    name: "Prof. Dr. Mohamed S. Abdallah",
    role: "Supervisor",
    position: "Supervisor / Advisor",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },

  // =========================
  // Lead Researchers
  // =========================
  {
    id: 13,
    name: "S M Masfequier Rahman Swapno",
    role: "Lead Researcher",
    position: "Lead Researcher (Explainable Transformers & Applied Vision)",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/teams/mashfiq.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 14,
    name: "Ferdaus Ibne Aziz",
    role: "Lead Researcher",
    position: "Lead Researcher",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 15,
    name: "Shafiur Rahman",
    role: "Lead Researcher",
    position: "Lead Researcher",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/teams/shafiur.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shafiur-rahman-377874217/",
      googleScholar: "https://scholar.google.com/citations?user=Aq1Ww_cAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 16,
    name: "Md Ismail Hossain Siddiqui",
    role: "Lead Researcher",
    position: "Lead Researcher (Medical Image Intelligence & XAI)",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 17,
    name: "Anamul Haque Sakib",
    role: "Lead Researcher",
    position: "Lead Researcher (Multimodal Fusion & Efficient Models)",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },

  // =========================
  // Researchers
  // =========================
  {
    id: 18,
    name: "Arafath Bin Mohiuddin",
    role: "Researcher",
    position: "Researcher",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 19,
    name: "Hamdadur Rahman",
    role: "Researcher",
    position: "Researcher (Medical Imaging & Explainable AI)",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 20,
    name: "Abdullah Al Noman",
    role: "Researcher",
    position: "Researcher",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 21,
    name: "Hasib Fardin",
    role: "Researcher",
    position: "Researcher",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },

  // =========================
  // Research Assistants
  // =========================
  {
    id: 22,
    name: "Amira Hossain",
    role: "Research Assistant",
    position: "Research Assistant",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 23,
    name: "Jesika Debnath",
    role: "Research Assistant",
    position: "Research Assistant",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 24,
    name: "Zishad Hossain Limon",
    role: "Research Assistant",
    position: "Research Assistant",
    institute: "SentinelX AI Research Lab",
    email: "",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/redrik278/",
      googleScholar: "https://scholar.google.com/citations?user=_GI3BXMAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  },
  {
    id: 25,
    name: "S M Arafat Rahman",
    role: "Research Assistant",
    position: "Research Assistant",
    institute: "SentinelX AI Research Lab",
    email: "smarafat233@gmail.com",
    avatar: "/teams/arafat.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/s-m-arafat-rahman-4b2aa8228/",
      googleScholar: "https://scholar.google.com/citations?user=Y4MLN8gAAAAJ&hl=en",
      github: "https://github.com/SmArafatRahman"
    }
  },
  {
    id: 26,
    name: "Sheikh Shemanto Afridi",
    role: "Research Assistant",
    position: "Research Assistant",
    institute: "SentinelX AI Research Lab",
    email: "sheikhshemantoafridi@gmail.com",
    avatar: "/teams/afridi.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ssafridi7676/",
      googleScholar: "https://scholar.google.com/citations?user=QB4ZmDIAAAAJ&hl=en",
      github: "https://github.com/redrik278"
    }
  }
];


// Helper to get team members by role
export const getTeamByRole = (role: TeamRole): TeamMember[] => {
  return researchTeam.filter(member => member.role === role);
};

// Get all unique roles
export const getAllRoles = (): TeamRole[] => {
  return Array.from(new Set(researchTeam.map(member => member.role as TeamRole)));
};
