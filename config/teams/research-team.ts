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
  // Principal Research Scientist (2)
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    role: 'Principal Research Scientist',
    position: 'Director of AI Research',
    institute: 'SentinelX AI Research Lab',
    email: 's.mitchell@sentinelx-ai.org',
    avatar: '/team/sarah-mitchell.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarah-mitchell',
      twitter: 'https://twitter.com/sarahmitchell_ai',
      googleScholar: 'https://scholar.google.com/citations?user=sarahmitchell',
      researchGate: 'https://www.researchgate.net/profile/Sarah-Mitchell',
      orcid: 'https://orcid.org/0000-0001-2345-6789',
      website: 'https://sarahmitchell.ai'
    }
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Principal Research Scientist',
    position: 'Head of Natural Language Processing',
    institute: 'SentinelX AI Research Lab',
    email: 'm.chen@sentinelx-ai.org',
    avatar: '/team/michael-chen.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michael-chen-ai',
      twitter: 'https://twitter.com/michaelchen_nlp',
      github: 'https://github.com/michaelchen',
      googleScholar: 'https://scholar.google.com/citations?user=michaelchen',
      orcid: 'https://orcid.org/0000-0002-3456-7890'
    }
  },

  // Senior Research Scientist (4)
  {
    id: 3,
    name: 'Dr. Elena Rodriguez',
    role: 'Senior Research Scientist',
    position: 'Lead Researcher - Reinforcement Learning',
    institute: 'SentinelX AI Research Lab',
    email: 'e.rodriguez@sentinelx-ai.org',
    avatar: '/team/elena-rodriguez.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/elena-rodriguez',
      twitter: 'https://twitter.com/elena_rl',
      googleScholar: 'https://scholar.google.com/citations?user=elenarodriguez',
      researchGate: 'https://www.researchgate.net/profile/Elena-Rodriguez',
      orcid: 'https://orcid.org/0000-0003-4567-8901'
    }
  },
  {
    id: 4,
    name: 'Dr. James Thompson',
    role: 'Senior Research Scientist',
    position: 'Lead Researcher - Robotics & Autonomous Systems',
    institute: 'SentinelX AI Research Lab',
    email: 'j.thompson@sentinelx-ai.org',
    avatar: '/team/james-thompson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/james-thompson-robotics',
      github: 'https://github.com/jthompson',
      googleScholar: 'https://scholar.google.com/citations?user=jamesthompson',
      website: 'https://jthompson-robotics.com'
    }
  },
  {
    id: 5,
    name: 'Dr. Priya Sharma',
    role: 'Senior Research Scientist',
    position: 'Lead Researcher - Explainable AI',
    institute: 'SentinelX AI Research Lab',
    email: 'p.sharma@sentinelx-ai.org',
    avatar: '/team/priya-sharma.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/priya-sharma-ai',
      twitter: 'https://twitter.com/priya_xai',
      googleScholar: 'https://scholar.google.com/citations?user=priyasharma',
      researchGate: 'https://www.researchgate.net/profile/Priya-Sharma',
      orcid: 'https://orcid.org/0000-0004-5678-9012'
    }
  },
  {
    id: 6,
    name: 'Dr. David Kim',
    role: 'Senior Research Scientist',
    position: 'Lead Researcher - Generative AI',
    institute: 'SentinelX AI Research Lab',
    email: 'd.kim@sentinelx-ai.org',
    avatar: '/team/david-kim.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/david-kim-genai',
      twitter: 'https://twitter.com/davidkim_ai',
      github: 'https://github.com/davidkim',
      googleScholar: 'https://scholar.google.com/citations?user=davidkim'
    }
  },

  // Research Scientist (6)
  {
    id: 7,
    name: 'Dr. Sophie Laurent',
    role: 'Research Scientist',
    position: 'Researcher - Medical AI',
    institute: 'SentinelX AI Research Lab',
    email: 's.laurent@sentinelx-ai.org',
    avatar: '/team/sophie-laurent.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sophie-laurent',
      googleScholar: 'https://scholar.google.com/citations?user=sophielaurent',
      researchGate: 'https://www.researchgate.net/profile/Sophie-Laurent',
      orcid: 'https://orcid.org/0000-0005-6789-0123'
    }
  },
  {
    id: 8,
    name: 'Dr. Ahmed Hassan',
    role: 'Research Scientist',
    position: 'Researcher - Edge AI',
    institute: 'SentinelX AI Research Lab',
    email: 'a.hassan@sentinelx-ai.org',
    avatar: '/team/ahmed-hassan.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ahmed-hassan-ai',
      twitter: 'https://twitter.com/ahmed_edgeai',
      github: 'https://github.com/ahassan',
      googleScholar: 'https://scholar.google.com/citations?user=ahmedhassan'
    }
  },
  {
    id: 9,
    name: 'Dr. Lisa Wang',
    role: 'Research Scientist',
    position: 'Researcher - Federated Learning',
    institute: 'SentinelX AI Research Lab',
    email: 'l.wang@sentinelx-ai.org',
    avatar: '/team/lisa-wang.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/lisa-wang-ml',
      twitter: 'https://twitter.com/lisa_fedml',
      googleScholar: 'https://scholar.google.com/citations?user=lisawang',
      orcid: 'https://orcid.org/0000-0006-7890-1234'
    }
  },
  {
    id: 10,
    name: 'Dr. Marcus Johnson',
    role: 'Research Scientist',
    position: 'Researcher - Time Series Analysis',
    institute: 'SentinelX AI Research Lab',
    email: 'm.johnson@sentinelx-ai.org',
    avatar: '/team/marcus-johnson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/marcus-johnson-ai',
      github: 'https://github.com/mjohnson',
      googleScholar: 'https://scholar.google.com/citations?user=marcusjohnson',
      researchGate: 'https://www.researchgate.net/profile/Marcus-Johnson'
    }
  },
  {
    id: 11,
    name: 'Dr. Yuki Tanaka',
    role: 'Research Scientist',
    position: 'Researcher - Graph Neural Networks',
    institute: 'SentinelX AI Research Lab',
    email: 'y.tanaka@sentinelx-ai.org',
    avatar: '/team/yuki-tanaka.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/yuki-tanaka-gnn',
      twitter: 'https://twitter.com/yuki_graphai',
      googleScholar: 'https://scholar.google.com/citations?user=yukitanaka',
      orcid: 'https://orcid.org/0000-0007-8901-2345'
    }
  },
  {
    id: 12,
    name: 'Dr. Emma Williams',
    role: 'Research Scientist',
    position: 'Researcher - Multimodal Learning',
    institute: 'SentinelX AI Research Lab',
    email: 'e.williams@sentinelx-ai.org',
    avatar: '/team/emma-williams.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emma-williams-ai',
      twitter: 'https://twitter.com/emma_multimodal',
      github: 'https://github.com/ewilliams',
      googleScholar: 'https://scholar.google.com/citations?user=emmawilliams'
    }
  },

  // Postdoctoral Researcher (4)
  {
    id: 13,
    name: 'Dr. Carlos Martinez',
    role: 'Postdoctoral Researcher',
    position: 'Postdoc - Neural Architecture Search',
    institute: 'SentinelX AI Research Lab',
    email: 'c.martinez@sentinelx-ai.org',
    avatar: '/team/carlos-martinez.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/carlos-martinez-ml',
      twitter: 'https://twitter.com/carlos_automl',
      googleScholar: 'https://scholar.google.com/citations?user=carlosmartinez',
      orcid: 'https://orcid.org/0000-0008-9012-3456'
    }
  },
  {
    id: 14,
    name: 'Dr. Ananya Patel',
    role: 'Postdoctoral Researcher',
    position: 'Postdoc - Causal Inference',
    institute: 'SentinelX AI Research Lab',
    email: 'a.patel@sentinelx-ai.org',
    avatar: '/team/ananya-patel.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ananya-patel-causal',
      googleScholar: 'https://scholar.google.com/citations?user=ananyapatel',
      researchGate: 'https://www.researchgate.net/profile/Ananya-Patel',
      orcid: 'https://orcid.org/0000-0009-0123-4567'
    }
  },
  {
    id: 15,
    name: 'Dr. Thomas Anderson',
    role: 'Postdoctoral Researcher',
    position: 'Postdoc - Quantum Machine Learning',
    institute: 'SentinelX AI Research Lab',
    email: 't.anderson@sentinelx-ai.org',
    avatar: '/team/thomas-anderson.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/thomas-anderson-qml',
      twitter: 'https://twitter.com/thomas_quantumai',
      github: 'https://github.com/tanderson',
      googleScholar: 'https://scholar.google.com/citations?user=thomasanderson'
    }
  },
  {
    id: 16,
    name: 'Dr. Nina Kowalski',
    role: 'Postdoctoral Researcher',
    position: 'Postdoc - Continual Learning',
    institute: 'SentinelX AI Research Lab',
    email: 'n.kowalski@sentinelx-ai.org',
    avatar: '/team/nina-kowalski.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/nina-kowalski-ml',
      twitter: 'https://twitter.com/nina_lifelongai',
      googleScholar: 'https://scholar.google.com/citations?user=ninakowalski',
      orcid: 'https://orcid.org/0000-0010-1234-5678'
    }
  },

  // Research Associate (2)
  {
    id: 17,
    name: 'Olivia Brown',
    role: 'Research Associate',
    position: 'Research Associate - Data Science',
    institute: 'SentinelX AI Research Lab',
    email: 'o.brown@sentinelx-ai.org',
    avatar: '/team/olivia-brown.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/olivia-brown-ds',
      github: 'https://github.com/obrown',
      researchGate: 'https://www.researchgate.net/profile/Olivia-Brown'
    }
  },
  {
    id: 18,
    name: 'Ryan Lee',
    role: 'Research Associate',
    position: 'Research Associate - Computer Vision',
    institute: 'SentinelX AI Research Lab',
    email: 'r.lee@sentinelx-ai.org',
    avatar: '/team/ryan-lee.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/ryan-lee-cv',
      github: 'https://github.com/rlee',
      twitter: 'https://twitter.com/ryan_cv'
    }
  },

  // PhD Candidate (2)
  {
    id: 19,
    name: 'Alexandra Silva',
    role: 'PhD Candidate',
    position: 'PhD Candidate - Adversarial Robustness',
    institute: 'SentinelX AI Research Lab',
    email: 'a.silva@sentinelx-ai.org',
    avatar: '/team/alexandra-silva.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alexandra-silva-phd',
      twitter: 'https://twitter.com/alex_advml',
      github: 'https://github.com/asilva',
      googleScholar: 'https://scholar.google.com/citations?user=alexandrasilva'
    }
  },
  {
    id: 20,
    name: 'Kevin Zhang',
    role: 'PhD Candidate',
    position: 'PhD Candidate - Self-Supervised Learning',
    institute: 'SentinelX AI Research Lab',
    email: 'k.zhang@sentinelx-ai.org',
    avatar: '/team/kevin-zhang.jpg',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/kevin-zhang-ssl',
      twitter: 'https://twitter.com/kevin_ssl',
      github: 'https://github.com/kzhang',
      googleScholar: 'https://scholar.google.com/citations?user=kevinzhang'
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
