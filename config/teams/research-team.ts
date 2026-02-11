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

  {
    id: 1,
    name: "Prof. Dr. Ahmed Wasif Reza",
    role: "Research Scientist",
    position: "East West University (Dean); University of Malaya (Malaysia); Multimedia University (Malaysia)",
    institute: "CredenceX AI Research Lab",
    email: "wasif@ewubd.edu",
    avatar: "/teams/wasif.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/professor-dr-ahmed-wasif-reza-099920151/",
      googleScholar: "https://scholar.google.com/citations?user=4dhJMl4AAAAJ&hl=en"
    }
  },
  {
    id: 2,
    name: "Dr. Nazmul Siddique",
    role: "Research Consultant",
    position: "Ulster University(UK); The University of Sheffield(UK); Technische Universität Dresden(Germany)",
    institute: "CredenceX AI Research Lab",
    email: "nh.siddique@ulster.ac.uk",
    avatar: "/teams/siddique.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nazmul-siddique-27315478/",
      googleScholar: "https://scholar.google.com/citations?user=oV13Kl0AAAAJ&hl=en"
    }
  },
    {
    id: 3,
    name: "Prof. Dr. Shamim Hasnat Ripon",
    role: "Research Consultant",
    position: "National University of Singapore(Singapore); University of York(UK); University of Glasgow(UK); University of Southampton(UK)",
    institute: "CredenceX AI Research Lab",
    email: "dshr@ewubd.edu",
    avatar: "/teams/ripon.jfif",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shamim-ripon-8b07156/",
      googleScholar: "https://scholar.google.com/citations?user=TkA8sygAAAAJ&hl=en"
    }
  },
  {
    id: 4,
    name: "Prof. Dr. M. Ali Akber Dewan",
    role: "Research Consultant",
    position: "Athabasca University(Canada); Concordia University(Canada); Kyung Hee University(South Korea)",
    institute: "CredenceX AI Research Lab",
    email: "adewan@athabascau.ca",
    avatar: "/teams/dewan.jfif",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/alidewan/",
      googleScholar: "https://scholar.google.com/citations?user=N6rTw2AAAAAJ&hl=en&authuser=1",
    }
  },
  {
    id: 5,
    name: "Dr. Mohammad Rifat Ahmmad Rashid",
    role: "Supervisor",
    position: "University of Pavia (Italy); University of Turin (Italy)",
    institute: "CredenceX AI Research Lab",
    email: "rifat.rashid@ewubd.edu",
    avatar: "/teams/refat.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mohammad-rifat-ahmmad-rashid-73982a5b/",
      googleScholar: "https://scholar.google.com/citations?user=fXu1UdgAAAAJ&hl=en"
    }
  },
  {
    id: 6,
    name: "Dr. Fakir Mashuque Alamgir",
    role: "Supervisor",
    position: "University of Dhaka; University of Greenwich(UK)",
    institute: "CredenceX AI Research Lab",
    email: "fma@ewubd.edu",
    avatar: "/teams/mashuque.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dr-fakir-mashuque-alamgir-066114338/",
      googleScholar: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=sD1W1egAAAAJ"
    }
  },
  {
    id: 7,
    name: "Prof. Dr. Abhishek Appaji",
    role: "Supervisor",
    position: "Maastricht University(Netherlands); Massachusetts Institute of Technology(USA)",
    institute: "CredenceX AI Research Lab",
    email: "abhishek.ml@bmsce.ac.in",
    avatar: "/teams/appaji.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhishek-appaji/",
      googleScholar: "https://scholar.google.com/citations?user=Sf-xh70AAAAJ&hl=en"
    }
  },
  {
    id: 8,
    name: "Dr. Md Junayed Hasan",
    role: "Supervisor",
    position: "University of Glasgow(UK); University of Ulsan(South Korea); National Subsea Centre(UK); ",
    institute: "CredenceX AI Research Lab",
    email: "junhasan@gmail.com",
    avatar: "/teams/junayed.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mdjunayedhasan/",
      googleScholar: "https://scholar.google.com/citations?user=6dp1PZAAAAAJ&hl=en",
    }
  },

  {
    id: 9,
    name: "Dr. Raihan Ul Islam",
    role: "Research Consultant",
    position: "Lulea University of Technology (Sweden)",
    institute: "CredenceX AI Research Lab",
    email: "raihan.islam@ewubd.edu",
    avatar: "/teams/raihan.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/raihan-ul-islam/",
      googleScholar: "https://scholar.google.com/citations?user=mjWULyIAAAAJ&hl=en"
    }
  },

  // =========================
  // Lead Researchers
  // =========================
  
  {
    id: 10,
   name: "Ferdaus Ibne Aziz",
    role: "Lead Researcher",
    position: "MS in Artificial Intelligence, Woosong University, South Korea",
    institute: "CredenceX AI Research Lab",
    email: "shifatshaheen92@gmail.com",
    avatar: "/teams/ferdaus.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=XgED0OoAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/ferdaus-ibne-aziz/"
    }
  },


  {
    id: 11,
    name: "Anamul Haque Sakib",
    role: "Lead Researcher",
    position: "MS, International American University, Los Angeles, USA",
    institute: "CredenceX AI Research Lab",
    email: "anamulhaquesakib0@gmail.com",
    avatar: "/teams/shakil.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=wJW1DDkAAAAJ&hl=en"
    }
  },
  {
    id: 12,
    name: "Md Ismail Hossain Siddiqui",
    role: "Lead Researcher",
    position: "MS in Engineering/Industrial Management, Westcliff University, Irvine, USA",
    institute: "CredenceX AI Research Lab",
    email: "ismailhossainsiddiqui.ce@gmail.com",
    avatar: "/teams/Siddiqui.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=ml6xkJMAAAAJ&hl=en",
    }
  },
  {
    id: 13,
    name: "Md Tanvir Rahman Tarafder",
    role: "Lead Researcher",
    position: "MS in Information Technology, Westcliff University, Irvine, USA",
    institute: "CredenceX AI Research Lab",
    email: "tanviraditto90@gmail.com",
    avatar: "/teams/tanvir.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=mK-xZUEAAAAJ&hl=en&oi=ao"
    }
  },
{
    id: 14,
    name: "Hamdadur rahman",
    role: "Lead Researcher",
    position: "MS, International American University, Los Angeles, USA",
    institute: "CredenceX AI Research Lab",
    email: "hamdadurrahman348@gmail.com",
    avatar: "/teams/Hamdadur.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=h1YufU0AAAAJ&hl=en"
    }
  },
  {
    id: 15,
    name: "Abdullah AL Noman",
    role: "Lead Researcher",
    position: "MS in Information Technology, Westcliff University, Irvine, USA",
    institute: "CredenceX AI Research Lab",
    email: "nomanabdullah19974@gmail.com",
    avatar: "/teams/noman.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=QHRTCy8AAAAJ&hl=en"
    }
  },
{
    id: 16,
    name: "Hasib Mahmud Fardin",
    role: "Lead Researcher",
    position: "MS in Engineering/Industrial Management, Westcliff University, Irvine, USA",
    institute: "CredenceX AI Research Lab",
    email: "hasibmahmudfardin@gmail.com",
    avatar: "/teams/fardin.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=1skMsIsAAAAJ&hl=en&oi=ao",
    }
  },

  {
    id: 17,
   name: "Shah Imran",
    role: "Lead Researcher",
    position: "PhD in Information Systems Engineering, Concordia University, Canada",
    institute: "CredenceX AI Research Lab",
    email: "shah.imran.1599@gmail.com",
    avatar: "/teams/imran.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=pahMUOEAAAAJ&hl=en"
    }
  },

  // =========================
  // Researchers
  // =========================
  {
    id: 18,
    name: "Arafath Bin Mohiuddin",
    role: "Researcher",
    position: "MS in Information Technology, Westcliff University, Irvine, USA",
    institute: "CredenceX AI Research Lab",
    email: "arafath2307@gmail.com",
    avatar: "/teams/Mohiuddin.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=r4rIoawAAAAJ&hl=en&oi=ao",
    }
  },
  {
    id: 19,
    name: "Jesika Debnath",
    role: "Researcher",
    position: "MS in Computer Science, Westcliff University, Irvine, USA",
    institute: "CredenceX AI Research Lab",
    email: "jesika.toma09@gmail.com",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=sRCPNqUAAAAJ&hl=en",
    }
  },
  {
    id: 20,
    name: "Zishad Hossain Limon",
    role: "Researcher",
    position: "MS in Computer Science, Westcliff University, Irvine, USA",
    institute: "CredenceX AI Research Lab",
    email: "zishadlimon@gmail.com",
    avatar: "/teams/limon.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?user=sONkdskAAAAJ&hl=en&oi=ao",
    }
  },
  {
    id: 21,
    name: "Md Nuruzzaman Pranto",
    role: "Researcher",
    position: "MS, International American University, Los Angeles, USA",
    institute: "CredenceX AI Research Lab",
    email: "prantonurz@gmail.com",
    avatar: "/teams/Pranto.jfif",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?hl=en&user=pyZLqF4AAAAJ&view_op=list_works&sortby=pubdate",
    }
  },

  // =========================
  // Research Assistants
  // =========================
  {
    id: 22,
    name: "Amira Hossain",
    role: "Research Assistant",
    position: "MS in Computer Science, Westcliff University, Irvine, USA",
    institute: "CredenceX AI Research Lab",
    email: " a.hossain.193@westcliff.edu",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      googleScholar: "https://www.researchgate.net/scientific-contributions/Amira-Hossain-2312180288",
    }
  },
  {
    id: 23,
    name: "Al Shahriar Uddin Khondakar Pranta",
    role: "Research Assistant",
    position: "MS in Computer Science at Wright State University, Ohio, USA",
    institute: "CredenceX AI Research Lab",
    email: "skpranta3699@gmail.com",
    avatar: "/team/placeholder.jpg",
    socialLinks: {
      googleScholar: "https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=rXICsQoAAAAJ",
    }
  },
  {
    id: 24,
    name: "S M Arafat Rahman",
    role: "Research Assistant",
    position: "BS in CSE at East West University, Bangladesh",
    institute: "CredenceX AI Research Lab",
    email: "smarafat233@gmail.com",
    avatar: "/teams/arafat.jpg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/s-m-arafat-rahman-4b2aa8228/",
      googleScholar: "https://scholar.google.com/citations?user=Y4MLN8gAAAAJ&hl=en",
      github: "https://github.com/SmArafatRahman"
    }
  },
  {
    id: 25,
    name: "Sheikh Shemanto Afridi",
    role: "Research Assistant",
    position: "BS in CSE at East West University, Bangladesh",
    institute: "CredenceX AI Research Lab",
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
