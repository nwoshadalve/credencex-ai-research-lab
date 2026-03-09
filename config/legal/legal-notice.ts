import { DocBlock, GovernancePageConfig } from './types';

export const legalNoticeConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'CredenceX AI Research Lab is an independent, mission-driven research initiative focused on trustworthy, explainable, and deployment-aware artificial intelligence, with primary emphasis on high-stakes domains such as healthcare and clinical decision support.',
  },
  sections: [
    {
      title: 'Legal Status',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX is not currently registered as a nonprofit or tax-exempt organization. References on this website to our public mission, ethical commitments, governance practices, and open research values describe our institutional goals and operating philosophy and should not be interpreted as a legal claim of nonprofit, charitable, or tax-exempt status.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Independence and Affiliations',
      blocks: [
        {
          type: 'paragraph',
          text: "Any affiliations, collaborations, or institutional references are provided for transparency and context. Unless explicitly stated, they do not imply endorsement, sponsorship, or institutional control over CredenceX's operations, outputs, or positions.",
        },
      ] as DocBlock[],
    },
    {
      title: 'Research and Informational Disclaimer',
      blocks: [
        {
          type: 'paragraph',
          text: 'Content on this website is provided for research communication and educational purposes. It does not constitute medical advice, clinical guidance, legal advice, or professional services. Any described methods, tools, or prototypes are intended for research and evaluation and may not be validated for clinical use unless explicitly stated.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Intellectual Property and Permitted Use',
      blocks: [
        {
          type: 'paragraph',
          text: 'Unless otherwise indicated, text and original materials published on this site may be reused for non-commercial research and educational purposes with appropriate attribution to CredenceX AI Research Lab. For reuse beyond these purposes, please contact us via the Contact page.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Privacy and Data Handling',
      blocks: [
        {
          type: 'paragraph',
          text: 'Where we collect limited information through web forms (e.g., contact inquiries), we use it only for legitimate communication and administrative purposes. We do not sell personal information. For research data governance, please see our Data Governance page.',
        },
      ] as DocBlock[],
    },
  ],
  cta: {
    question: 'Questions about CredenceX institutional status or legal matters?',
    buttonLabel: 'Contact Us',
    href: '/contact',
  },
};
