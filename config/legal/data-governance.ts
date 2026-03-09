import { DocBlock, GovernancePageConfig } from './types';

export const dataGovernanceConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'CredenceX AI Research Lab manages data to support scientific quality, privacy protection, responsible reuse, and compliance with applicable legal, ethical, and contractual obligations. Our data governance spans acquisition, access, documentation, storage, retention, sharing, and secure disposal.',
  },
  sections: [
    {
      title: 'Scope',
      blocks: [
        {
          type: 'paragraph',
          text: 'This policy applies to:',
        },
        {
          type: 'bullets',
          items: [
            'Research datasets used for model development and evaluation.',
            'Derived datasets (e.g., curated subsets, annotations, embeddings).',
            'Metadata, labels, and documentation.',
            'Operational data collected via the website (limited to necessary communications).',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Core Principles',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX applies the following principles:',
        },
        {
          type: 'bullets',
          items: [
            'Purpose limitation: use data only for legitimate, stated purposes consistent with permissions and consent conditions.',
            'Data minimization: collect and retain only what is necessary.',
            'Access control: restrict sensitive data to authorized personnel with a legitimate need.',
            'Security by design: use safeguards proportionate to sensitivity and risk.',
            'Provenance and documentation: maintain dataset documentation, versions, and processing records where feasible.',
            'Accountability: document decisions on access, sharing, and restrictions.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Sensitive and Health-Related Data',
      blocks: [
        {
          type: 'paragraph',
          text: 'For sensitive or health-related data, CredenceX applies additional safeguards such as:',
        },
        {
          type: 'bullets',
          items: [
            'Controlled access workflows and logging.',
            'De-identification or pseudonymization where appropriate and permissible.',
            'Strict separation of identifiers from analytical data when feasible.',
            'Clear documentation of restrictions on reuse and redistribution.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Data Sharing and Openness',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX supports open science where appropriate, but openness must be balanced with privacy, consent, security, and misuse considerations. When data cannot be shared openly, we aim to:',
        },
        {
          type: 'bullets',
          items: [
            'Explain the constraint (privacy, contractual, legal, ethical, or security).',
            'Share derived artifacts where feasible (e.g., code, model cards, synthetic examples, documentation).',
            'Consider controlled-access or restricted sharing mechanisms when appropriate.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Incident Response',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX treats suspected data incidents seriously. When an incident is identified, we seek to promptly assess scope, mitigate risk, document actions taken, and update controls to prevent recurrence, consistent with applicable obligations.',
        },
      ] as DocBlock[],
    },
  ],
  cta: {
    question: 'Questions about our data governance practices?',
    buttonLabel: 'Contact Us',
    href: '/contact',
  },
};
