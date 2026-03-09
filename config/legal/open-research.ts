import { DocBlock } from './types';

export interface GovernancePageConfig {
  lastUpdated: string;
  effectiveDate: string;
  introduction: { description: string };
  sections: { title: string; blocks: DocBlock[]; subsections?: { title: string; blocks: DocBlock[] }[] }[];
  cta: { question: string; buttonLabel: string; href: string };
}

export const openResearchConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'CredenceX AI Research Lab supports open, rigorous, and responsible dissemination of research outputs. Where feasible and appropriate, we aim to share publications, preprints, methods, code, documentation, and non-sensitive supporting materials to strengthen scientific progress, reproducibility, and public understanding.',
  },
  sections: [
    {
      title: 'What We Aim to Share',
      blocks: [
        {
          type: 'paragraph',
          text: 'Depending on the project context, CredenceX may share:',
        },
        {
          type: 'bullets',
          items: [
            'Peer-reviewed publications and/or preprints.',
            'Code and configuration files necessary to reproduce key results.',
            'Model documentation (e.g., intended use, limitations, evaluation scope, failure modes).',
            'Reporting artifacts (e.g., ablation summaries, robustness checks, calibration analysis).',
            'Non-sensitive supporting materials (e.g., templates, annotation guidelines).',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Responsible Constraints on Openness',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX recognizes legitimate constraints on disclosure, including:',
        },
        {
          type: 'bullets',
          items: [
            'Participant privacy and consent restrictions.',
            'Legal and contractual obligations.',
            'Security considerations and misuse risk.',
            'Protection of sensitive operational details when needed.',
          ],
        },
        {
          type: 'closing',
          text: 'Where constraints apply, we aim to use proportionate alternatives such as redaction, delayed release, controlled access, or sharing of derived artifacts rather than raw sensitive data.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Publication Ethics',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX expects publications to:',
        },
        {
          type: 'bullets',
          items: [
            'Describe methods, assumptions, and limitations transparently.',
            'Avoid overstating clinical readiness or deployment claims.',
            'Disclose relevant funding, affiliations, and competing interests.',
            'Use appropriate citations and avoid inappropriate duplication.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Public Benefit Statement',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX exists to advance research and innovation in the public interest. Our work seeks to improve the trustworthiness, transparency, and real-world reliability of AI systems, particularly in high-stakes domains where failure can meaningfully impact human well-being. We interpret public benefit to include scientific contribution, educational value, responsible innovation, and the reduction of harms associated with unsafe or opaque AI.',
        },
      ] as DocBlock[],
    },
  ],
  cta: {
    question: 'Questions about our open research policy?',
    buttonLabel: 'Contact Us',
    href: '/contact',
  },
};
