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
      title: 'Data Classification',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX assigns data to one of the following classification levels to guide handling, access, and sharing decisions:',
        },
        {
          type: 'table',
          headers: ['Classification', 'Description'],
          rows: [
            [
              'Public',
              'Materials intended for open dissemination, such as published papers, public documentation, and non-sensitive project summaries.',
            ],
            [
              'Internal',
              'Operational or research data for authorized CredenceX personnel with a legitimate need, not intended for public release.',
            ],
            [
              'Restricted',
              'Datasets or outputs subject to contractual, ethical, legal, or partner-imposed limits on access and reuse.',
            ],
            [
              'Sensitive',
              'Health-related, identifiable, or high-risk data requiring enhanced security, logging, and approval controls.',
            ],
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Retention and Access Approval',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX applies the following workflows for data lifecycle management:',
        },
      ] as DocBlock[],
      subsections: [
        {
          title: 'Retention',
          blocks: [
            {
              type: 'paragraph',
              text: 'Data is retained only for as long as needed to support stated research, legal, contractual, or operational purposes. When retention periods expire or data is no longer required, secure disposal or de-identification is performed in line with classification requirements and documented procedures.',
            },
          ] as DocBlock[],
        },
        {
          title: 'Access Approval',
          blocks: [
            {
              type: 'paragraph',
              text: 'Access to internal, restricted, or sensitive data requires documented approval from data owners or designated governance leads. Approved access is logged, limited to the minimum necessary scope, and reviewed periodically or when roles or project needs change.',
            },
          ] as DocBlock[],
        },
      ],
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
