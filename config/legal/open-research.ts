import { DocBlock, GovernancePageConfig } from './types';

export const openResearchConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'CredenceX AI Research Lab supports open, rigorous, and responsible dissemination of research outputs. Where feasible and appropriate, we aim to share publications, preprints, methods, code, documentation, and non-sensitive supporting materials to strengthen scientific progress, reproducibility, and public understanding.',
  },
  sections: [
    {
      title: 'What Open Means in Practice',
      blocks: [
        {
          type: 'paragraph',
          text: 'At CredenceX, “open” does not mean unconditional public release of every artifact. It means making research as transparent, reproducible, and accessible as constraints allow. The following tiers and practices define how we apply openness in day-to-day work.',
        },
      ] as DocBlock[],
      subsections: [
        {
          title: 'Code Availability Tiers',
          blocks: [
            {
              type: 'paragraph',
              text: 'CredenceX classifies code release using the following tiers:',
            },
            {
              type: 'table',
              headers: ['Tier', 'Description'],
              rows: [
                [
                  'Open',
                  'Full source code, configuration files, and documentation are published under a permissive license with public repository access.',
                ],
                [
                  'Partial',
                  'Core methods, evaluation scripts, or reference implementations are shared; some components may be withheld due to partner, security, or contractual constraints.',
                ],
                [
                  'Documentation-only',
                  'Model cards, method descriptions, or pseudocode are published without full source when code release is not feasible.',
                ],
                [
                  'Restricted',
                  'Code is not publicly released; access may be available under controlled terms or not at all, with the restriction and rationale documented.',
                ],
              ],
            },
          ] as DocBlock[],
        },
        {
          title: 'Reproducibility Checklist',
          blocks: [
            {
              type: 'paragraph',
              text: 'When sharing research outputs, CredenceX aims to include the following where applicable:',
            },
            {
              type: 'bullets',
              items: [
                'Documented software environment, dependencies, and configuration used for reported results.',
                'Fixed random seeds or explicit seed-handling procedures for stochastic experiments.',
                'Clear data access instructions, public dataset references, or documented substitutes when raw data cannot be shared.',
                'Evaluation scripts and metrics definitions aligned with reported claims.',
                'Stated limitations on full reproduction (e.g., proprietary data, compute constraints, or withheld components).',
              ],
            },
          ] as DocBlock[],
        },
        {
          title: 'Preprint Policy',
          blocks: [
            {
              type: 'bullets',
              items: [
                'CredenceX may post preprints (e.g., on arXiv or equivalent servers) to share findings promptly while peer review is in progress.',
                'Preprints are clearly labeled as non–peer-reviewed and updated when a peer-reviewed version is published or material corrections are made.',
                'Embargoes, publisher policies, and partner agreements are respected before public preprint release.',
                'Claims in preprints follow the same standards of transparency and caution as peer-reviewed communications, especially regarding clinical readiness.',
              ],
            },
          ] as DocBlock[],
        },
      ],
    },
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
