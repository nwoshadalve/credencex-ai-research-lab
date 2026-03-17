import { DocBlock, GovernancePageConfig } from './types';

export interface AdvisoryMember {
  id: number;
  name: string;
  position: string;
  institute: string;
  expertise: string;
  bio: string;
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

export const advisoryBoardMembers: AdvisoryMember[] = [
  {
    id: 1,
    name: 'Prof. Dr. Ahmed Wasif Reza',
    position: 'Dean of Faculty of Sciences and Engineering',
    institute: 'East West University',
    expertise: 'Clinical AI Safety & Deployment',
    bio: 'Dr. Reza specializes in the safe deployment of AI systems in clinical settings, with a focus on uncertainty quantification and human-AI collaboration in diagnostic workflows.',
    email: 'wasif@ewubd.edu',
    avatar: '/teams/wasif.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/professor-dr-ahmed-wasif-reza-099920151/',
      googleScholar: 'https://scholar.google.com/citations?user=4dhJMl4AAAAJ&hl=en',
      orcid: 'https://orcid.org/0000-0003-4321-5880',
    },
  },
  {
    id: 2,
    name: 'Prof. Dr. Nazmul Siddique',
    position: 'Professor of School of Computing & Intelligent System',
    institute: 'Ulster University',
    expertise: 'AI Ethics, Responsible Technology & Policy',
    bio: 'Prof. Nazmul Siddique leads research on the governance of AI systems in high-stakes environments, advising government and academic bodies on responsible AI frameworks, bias mitigation, and accountability standards.',
    email: 'nh.siddique@ulster.ac.uk',
    avatar: '/teams/siddique.jpeg',
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nazmul-siddique-27315478/",
      googleScholar: "https://scholar.google.com/citations?user=oV13Kl0AAAAJ&hl=en",
    },
  },
  {
    id: 3,
    name: 'Dr. Abhishek Appaji',
    position: 'Senior Research Scientist of Medical Electronics',
    institute: 'Maastricht University',
    expertise: 'Robustness, Distribution Shift & Medical Imaging AI',
    bio: 'Dr. Appaji works on robust machine learning for medical imaging, with emphasis on cross-site generalization, domain adaptation, and evaluation under real-world operational constraints.',
    email: "abhishek.ml@bmsce.ac.in",
    avatar: "/teams/appaji.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhishek-appaji/",
      googleScholar: "https://scholar.google.com/citations?user=Sf-xh70AAAAJ&hl=en",
    },
  },
];


export const advisoryBoardConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'The CredenceX Advisory Board provides independent guidance to strengthen scientific quality, ethical rigor, and strategic relevance. Advisory members may include experts in AI, medicine, public health, ethics, governance, law, and responsible technology deployment. The Advisory Board supports CredenceX by providing critical feedback on research direction, evaluation practices, transparency standards, and real-world deployment risks—especially in high-stakes contexts such as healthcare.',
  },
  sections: [
    {
      title: 'Role and Scope',
      blocks: [
        {
          type: 'paragraph',
          text: 'The Advisory Board may advise on:',
        },
        {
          type: 'bullets',
          items: [
            'Research priorities and portfolio coherence.',
            'Methodological rigor, evaluation standards, and reporting quality.',
            'Responsible AI practices (bias, robustness, uncertainty, interpretability).',
            'Data governance and ethical handling of sensitive information.',
            'Misuse risk, dual-use considerations, and safeguards.',
            'Partnerships and public-interest alignment.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Independence and Limitations',
      blocks: [
        {
          type: 'bullets',
          items: [
            'The Advisory Board is non-executive and does not manage daily operations.',
            'Advisory input is provided as guidance; final operational decisions remain with CredenceX leadership and governance structures.',
            'Advisory recommendations may be documented and used to improve policies, research practices, and public communications.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Membership Expectations',
      blocks: [
        {
          type: 'paragraph',
          text: 'Advisory members are expected to:',
        },
        {
          type: 'bullets',
          items: [
            'Provide independent, good-faith guidance aligned with scientific integrity and public benefit.',
            'Disclose conflicts of interest relevant to CredenceX activities.',
            'Respect confidentiality where necessary (e.g., pre-publication work, sensitive partnerships).',
            'Support a culture of rigorous critique, transparency, and responsible communication.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Advisory Engagement Model',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX aims to engage the Advisory Board through periodic reviews of major initiatives and policies, and through targeted consultations when high-impact decisions require additional independent input.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Advisory Board Members',
      blocks: [
        {
          type: 'paragraph',
          text: 'Current advisory board members are listed below. Profiles are updated as appointments are confirmed.',
        },
      ] as DocBlock[],
    },
  ],
  cta: {
    question: 'Interested in supporting CredenceX as an advisor?',
    buttonLabel: 'Contact Us',
    href: '/contact',
  },
};
