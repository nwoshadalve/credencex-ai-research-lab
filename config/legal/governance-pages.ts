import { DocBlock, DocSection } from './types';

export interface GovernancePageConfig {
  lastUpdated: string;
  effectiveDate: string;
  introduction: { description: string };
  sections: DocSection[];
  cta: { question: string; buttonLabel: string; href: string };
}

// ── Governance & Leadership ──────────────────────────────────────────────────

export const governanceConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'This page provides an overview of how CredenceX is structured, how decisions are made, and the principles that guide our independent research initiative.',
  },
  sections: [
    {
      title: 'Organisational Structure',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX is an independent research initiative led by its founding research director. It operates without formal institutional affiliation, board of directors, or nonprofit registration at this time. All strategic and operational decisions are made by the founding team in accordance with the principles documented on this page.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Decision-Making Principles',
      blocks: [
        {
          type: 'paragraph',
          text: 'Decisions about research direction, publication, partnerships, and public communication are guided by scientific rigor, ethical integrity, and transparency. We document significant decisions and their rationale where appropriate.',
        },
        {
          type: 'bullets',
          items: [
            'Research priorities are set based on scientific merit and potential for real-world impact.',
            'Conflicts of interest are declared and managed in line with our documented policy.',
            'External advisors are consulted on matters of ethics, clinical relevance, and responsible AI practice.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Leadership',
      blocks: [
        {
          type: 'paragraph',
          text: 'Leadership details and team information are available on the Teams page. Advisory board members are listed on the Advisory Board page.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Review & Updates',
      blocks: [
        {
          type: 'paragraph',
          text: 'This governance document is reviewed periodically and updated to reflect changes in organisational structure, scope, or applicable standards. The effective date above reflects the most recent revision.',
        },
      ] as DocBlock[],
    },
  ],
  cta: {
    question: 'Questions about how CredenceX is governed?',
    buttonLabel: 'Contact Us',
    href: '/contact',
  },
};

// ── Advisory Board ───────────────────────────────────────────────────────────

export const advisoryBoardConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'Our advisory board provides guidance on scientific direction, ethical practice, and responsible AI development. Advisors bring expertise from AI research, clinical medicine, and responsible technology domains.',
  },
  sections: [
    {
      title: 'Role of the Advisory Board',
      blocks: [
        {
          type: 'paragraph',
          text: 'The CredenceX Advisory Board serves in an advisory capacity only. Advisors are consulted on questions of research ethics, clinical relevance, and responsible AI practice, but do not have governance authority or fiduciary responsibilities.',
        },
        {
          type: 'bullets',
          items: [
            'Providing expert feedback on research methodology and evaluation design.',
            'Advising on responsible AI practices and deployment considerations.',
            'Supporting peer review and scientific communication standards.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Current Advisors',
      blocks: [
        {
          type: 'paragraph',
          text: 'Advisory board details and individual advisor profiles will be published here as the board is formally constituted. We are in the process of identifying advisors with relevant expertise across AI research, clinical imaging, and AI ethics.',
        },
        {
          type: 'closing',
          text: 'This section will be updated as advisory appointments are confirmed.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Conflicts of Interest',
      blocks: [
        {
          type: 'paragraph',
          text: 'All advisors are required to declare any conflicts of interest relevant to CredenceX research activities. Declared conflicts are documented and managed in line with our governance policy.',
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

// ── Ethics Standards ─────────────────────────────────────────────────────────

export const ethicsConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'CredenceX is committed to ethical research practice across all stages of our work — from data collection and model development to evaluation, publication, and dissemination.',
  },
  sections: [
    {
      title: 'Core Ethical Commitments',
      blocks: [
        {
          type: 'bullets',
          items: [
            'Research is conducted with scientific integrity, including honest reporting of methods, results, limitations, and failures.',
            'We do not overstate the clinical applicability of our work. Research outputs are presented as research prototypes unless explicitly validated for clinical use.',
            'We support transparent and reproducible science, including sharing of code, models, and evaluation protocols where appropriate.',
            'We apply appropriate caution when working with sensitive data, including medical imaging data.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Human Subjects & Data Ethics',
      blocks: [
        {
          type: 'paragraph',
          text: 'Where research involves human-derived data, we apply appropriate ethical standards. Research involving patient data is conducted only under appropriate data use agreements and with due consideration of privacy, consent, and data governance.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Conflicts of Interest',
      blocks: [
        {
          type: 'paragraph',
          text: 'Potential conflicts of interest — including funding relationships, commercial interests, and personal relationships — are declared in publications and communications as appropriate. We follow field-standard practices for conflict of interest disclosure.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Responsible AI Practice',
      blocks: [
        {
          type: 'paragraph',
          text: 'We apply responsible AI principles throughout our research pipeline, including attention to fairness, robustness under distribution shift, uncertainty quantification, and explainability. We document known limitations and failure modes in our publications and documentation.',
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

// ── Data Governance ──────────────────────────────────────────────────────────

export const dataGovernanceConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'This policy describes how CredenceX handles data in the course of its research activities, including the types of data we work with, how it is stored and protected, and the principles that guide our data practices.',
  },
  sections: [
    {
      title: 'Types of Data We Work With',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX research may involve the following categories of data:',
        },
        {
          type: 'bullets',
          items: [
            'Publicly available datasets, including benchmark datasets for medical imaging research.',
            'Data obtained under formal data use agreements with institutions or data custodians.',
            'Synthetic or simulated data generated for research purposes.',
          ],
        },
        {
          type: 'closing',
          text: 'We do not collect or store identifiable personal data from website visitors beyond standard analytics.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Data Security & Storage',
      blocks: [
        {
          type: 'paragraph',
          text: 'Research data is stored securely and access is limited to authorised researchers. Data involving sensitive or potentially identifiable information is handled in line with applicable data use agreements and ethical standards.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Data Minimisation & Retention',
      blocks: [
        {
          type: 'paragraph',
          text: 'We apply data minimisation principles, using only the data necessary for the research purpose. Retention periods are determined by the requirements of the specific project and any applicable data use agreements.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Third-Party Data',
      blocks: [
        {
          type: 'paragraph',
          text: 'Where research uses third-party datasets, we comply with the terms of the relevant data licenses and use agreements. Datasets are cited appropriately in publications and documentation.',
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

// ── Open Research & Publication Policy ───────────────────────────────────────

export const openResearchConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'CredenceX supports open and reproducible research. This policy describes our approach to publishing findings, sharing research artifacts, and communicating the scope, limitations, and uncertainty of our work.',
  },
  sections: [
    {
      title: 'Publication & Dissemination',
      blocks: [
        {
          type: 'paragraph',
          text: 'We aim to publish our research in peer-reviewed venues and to make preprints publicly available where possible. We support open access to research outputs, subject to the policies of specific journals and conferences.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Code & Model Sharing',
      blocks: [
        {
          type: 'paragraph',
          text: 'Where possible, we share code, model weights, and evaluation pipelines to support reproducibility. Sharing decisions take into account data privacy constraints, third-party license requirements, and the potential for misuse.',
        },
        {
          type: 'bullets',
          items: [
            'Code is shared via our public GitHub repositories where appropriate.',
            'Model releases are accompanied by documentation of intended use, limitations, and evaluation conditions.',
            'We document known failure modes and out-of-distribution behaviour in all shared artifacts.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Communicating Limitations & Uncertainty',
      blocks: [
        {
          type: 'paragraph',
          text: 'We are committed to transparent communication about the limitations of our research. This includes clear statements about evaluation conditions, dataset characteristics, out-of-distribution risks, and the gap between research prototypes and clinical-grade systems.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Responsible Communication',
      blocks: [
        {
          type: 'paragraph',
          text: 'We avoid overstating findings in public communication. Research outputs from CredenceX are research prototypes unless explicitly stated otherwise. We do not make clinical recommendations based on our work.',
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

// ── Institutional Status & Legal Notice ──────────────────────────────────────

export const legalNoticeConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'This page clarifies the institutional status of CredenceX and provides important notices for visitors, collaborators, and users of our research outputs.',
  },
  sections: [
    {
      title: 'Institutional Status',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX is an independent research initiative. It is not currently registered as a nonprofit organisation, a tax-exempt entity, or a formally incorporated legal entity. It operates as an unincorporated research project led by its founding team.',
        },
        {
          type: 'paragraph',
          text: 'CredenceX is not affiliated with any university, hospital, government body, or commercial organisation unless explicitly stated in a specific publication or project description.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Research Output Disclaimer',
      blocks: [
        {
          type: 'paragraph',
          text: 'All research outputs published by CredenceX — including papers, models, code, datasets, and website content — are provided for research and educational purposes only.',
        },
        {
          type: 'bullets',
          items: [
            'Nothing on this website or in our publications constitutes clinical advice or medical guidance.',
            'Our AI systems and models are research prototypes and have not been validated as clinical-grade medical devices unless explicitly stated.',
            'Results reported in publications reflect performance under specific evaluation conditions and may not generalise to all real-world settings.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Funding & Conflicts of Interest',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX is currently self-funded. Any external funding, grants, or commercial relationships that may be relevant to specific projects will be disclosed in the corresponding publications and project documentation.',
        },
      ] as DocBlock[],
    },
    {
      title: 'Contact',
      blocks: [
        {
          type: 'paragraph',
          text: 'For enquiries regarding institutional status, collaboration, or any legal matters, please contact us via the Contact page.',
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
