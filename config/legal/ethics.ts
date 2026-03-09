import { DocBlock, GovernancePageConfig } from './types';

export const ethicsConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'CredenceX AI Research Lab is committed to conducting research and development with integrity, rigor, accountability, and respect for human dignity. We expect all contributors—researchers, staff, collaborators, and advisors—to uphold high standards of research ethics and responsible scientific practice.',
  },
  sections: [
    {
      title: 'Research Integrity',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX does not tolerate fabrication, falsification, plagiarism, or misrepresentation of methods or results. We emphasize:',
        },
        {
          type: 'bullets',
          items: [
            'Accurate reporting of methods, assumptions, uncertainties, and limitations.',
            'Proper attribution of prior work and avoidance of inappropriate reuse.',
            'Responsible authorship and contributor recognition.',
            'Transparent disclosure of funding sources and relevant competing interests.',
            'Correction of errors when identified.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Human-Centered and High-Stakes Responsibility',
      blocks: [
        {
          type: 'paragraph',
          text: 'When work relates to healthcare or other high-impact settings, CredenceX treats performance metrics as necessary but insufficient. We emphasize human oversight, context-appropriate evaluation, and careful treatment of failure modes, including risks of over-reliance, bias, and harm from incorrect outputs.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Human Data and Participant Protection',
      blocks: [
        {
          type: 'paragraph',
          text: 'Where research involves human participants, health information, or sensitive data, CredenceX seeks appropriate ethical review and safeguards consistent with applicable laws, permissions, and institutional obligations. This may include:',
        },
        {
          type: 'bullets',
          items: [
            'Respect for consent conditions and lawful data use.',
            'Privacy protection, minimization of identifiability, and access restriction.',
            'Security measures proportionate to data sensitivity.',
            'Documentation of intended use and limitations.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Responsible Communication',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX aims to avoid overstated claims, especially regarding clinical readiness. We communicate:',
        },
        {
          type: 'bullets',
          items: [
            'The intended scope of use and known limitations.',
            'Appropriate cautions when evidence is preliminary.',
            'Conditions under which a tool is not suitable for real-world use.',
          ],
        },
      ] as DocBlock[],
    },
  ],
  cta: {
    question: 'Questions about our ethics standards or research conduct?',
    buttonLabel: 'Contact Us',
    href: '/contact',
  },
};
