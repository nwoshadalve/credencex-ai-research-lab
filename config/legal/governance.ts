import { DocBlock, GovernancePageConfig } from './types';

export const governanceConfig: GovernancePageConfig = {
  lastUpdated: 'March 2026',
  effectiveDate: 'March 2026',
  introduction: {
    description:
      'CredenceX AI Research Lab is guided by a governance framework designed to support institutional integrity, responsible research conduct, ethical AI development, and public trust. Our governance approach emphasizes transparency, accountability, documented policies, and independent oversight through advisory input.',
  },
  sections: [
    {
      title: 'Leadership Structure',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX operates through the following roles and bodies:',
        },
      ] as DocBlock[],
      subsections: [
        {
          title: 'Executive Leadership',
          blocks: [
            {
              type: 'paragraph',
              text: 'Executive leadership is responsible for strategy, day-to-day operations, research direction, quality control, partnerships, and delivery of institutional commitments.',
            },
          ] as DocBlock[],
        },
        {
          title: 'Governance Committee (Oversight Function)',
          blocks: [
            {
              type: 'paragraph',
              text: 'A Governance Committee provides structured oversight of governance policies and institutional risk. It reviews adherence to ethics, data governance, conflict-of-interest handling, and open research commitments. The committee may recommend policy updates and corrective actions when gaps are identified.',
            },
          ] as DocBlock[],
        },
        {
          title: 'Advisory Board (Independent Guidance)',
          blocks: [
            {
              type: 'paragraph',
              text: 'The Advisory Board provides independent scientific, ethical, and strategic guidance. It does not manage operations and does not hold fiduciary authority, but it strengthens accountability through expert review and recommendations. (See the Advisory Board page.)',
            },
            {
              type: 'closing',
              text: 'If a formal Board of Directors is established in the future as part of legal registration or organizational restructuring, the governance model and terminology will be updated accordingly.',
            },
          ] as DocBlock[],
        },
      ],
    },
    {
      title: 'Decision-Making and Accountability',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX applies the following governance practices to support responsible decision-making:',
        },
        {
          type: 'bullets',
          items: [
            'Documented policies for ethics standards, data governance, conflicts of interest, and open research.',
            'Proportionate review of high-impact research activities, particularly those involving sensitive data or high-stakes deployment contexts.',
            'Clear roles and escalation paths for ethical concerns, data incidents, or integrity issues.',
            'Periodic policy review to reflect evolving best practice and domain expectations.',
          ],
        },
      ] as DocBlock[],
    },
    {
      title: 'Conflict of Interest (COI)',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX is committed to identifying, disclosing, and managing actual, potential, or perceived conflicts of interest. A conflict may arise when personal, financial, professional, or institutional interests could improperly influence—or appear to influence—judgment and decision-making related to CredenceX research, partnerships, publications, or governance.',
        },
      ] as DocBlock[],
      subsections: [
        {
          title: 'COI Expectations',
          blocks: [
            {
              type: 'bullets',
              items: [
                'Individuals in leadership, governance, advisory, or decision-making roles are expected to disclose relevant interests in a timely manner.',
                'When a conflict is identified, CredenceX may require recusal, independent review, documented mitigation steps, or other safeguards appropriate to the situation.',
                'Publication-related conflicts (e.g., funding, affiliations, consulting) should be disclosed in manuscripts and public communications where relevant.',
              ],
            },
          ] as DocBlock[],
        },
      ],
    },
    {
      title: 'Reporting Concerns',
      blocks: [
        {
          type: 'paragraph',
          text: 'CredenceX encourages responsible reporting of concerns related to research integrity, ethics, or data governance. Concerns may be raised via the Contact page. CredenceX will review reports in good faith, maintain confidentiality as appropriate, and document outcomes where institutional action is required.',
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
