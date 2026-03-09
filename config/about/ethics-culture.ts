export interface EthicsLink {
  label: string;
  href: string;
}

export interface EthicsCultureContent {
  governance: {
    badge: string;
    title: string;
    description: string;
    learnMoreLabel: string;
    links: EthicsLink[];
    institutionalNote: string;
    institutionalLinkLabel: string;
    institutionalLinkHref: string;
  };
  culture: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    motivationsLabel: string;
    motivations: string[];
  };
  collaboration: {
    title: string;
    description: string;
    modesLabel: string;
    modes: string[];
    closing: string;
  };
}

export const ethicsCultureContent: EthicsCultureContent = {
  governance: {
    badge: 'Governance, Ethics & Openness',
    title: 'Guided by documented policies and responsible practice',
    description:
      'CredenceX is guided by documented policies covering governance, conflicts of interest, ethical research conduct, data governance, and responsible research dissemination. These policies reflect our commitment to rigorous research practice and trustworthy AI development.',
    learnMoreLabel: 'Learn more',
    links: [
      { label: 'Governance & Leadership', href: '/governance' },
      { label: 'Advisory Board',          href: '/advisory-board' },
      { label: 'Ethics Standards',        href: '/ethics' },
      { label: 'Data Governance',         href: '/data-governance' },
      { label: 'Open Research & Publication Policy', href: '/open-research' },
      { label: 'Institutional Status & Legal Notice', href: '/legal-notice' },
    ],
    institutionalNote:
      'CredenceX is an independent research initiative and is not currently registered as a nonprofit or tax-exempt organization.',
    institutionalLinkLabel: 'Institutional Status & Legal Notice',
    institutionalLinkHref: '/legal-notice',
  },
  culture: {
    badge: 'Our Research Culture',
    title: 'Rigorous, responsible, and collaborative',
    subtitle: 'Rigorous, responsible, and collaborative',
    description:
      'We value research that is technically strong, carefully evaluated, and communicated with appropriate caution—especially when results may be interpreted in clinical or safety-critical contexts. We encourage constructive critique, transparent reporting of limitations, and collaboration across disciplines.',
    motivationsLabel: 'What motivates our work',
    motivations: [
      'The need for AI that remains reliable under real-world variability and operational constraints.',
      'The belief that trust is earned through evidence, transparency, and accountable design.',
      'A commitment to supporting researchers and practitioners through shared tools, methods, and open scientific communication where appropriate.',
    ],
  },
  collaboration: {
    title: 'Collaborate With Us',
    description:
      'We welcome collaboration with researchers, clinicians, institutions, and organizations aligned with trustworthy AI and high-stakes decision support.',
    modesLabel: 'Typical collaboration modes include:',
    modes: [
      'Joint research projects and co-authored publications',
      'Dataset governance and evaluation design support',
      'Prototype validation and real-world robustness studies',
      'Educational partnerships, mentoring, and student research involvement',
    ],
    closing:
      'For collaboration inquiries, please use the Contact page and include a brief description of your objective, domain context, and any constraints (data sensitivity, timelines, intended outputs).',
  },
};
