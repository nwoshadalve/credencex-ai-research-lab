import type { PublicationStatus } from '@/config/home/publications';

export interface StatusLegendEntry {
  status: PublicationStatus;
  description: string;
}

export interface PaperActionLegendEntry {
  label: string;
  description: string;
}

export interface PublicationStatusLegendConfig {
  title: string;
  triggerHint: string;
  intro: string;
  statuses: StatusLegendEntry[];
  paperActionsTitle: string;
  paperActions: PaperActionLegendEntry[];
}

export const publicationStatusLegend: PublicationStatusLegendConfig = {
  title: 'Status & paper link guide',
  triggerHint: 'Published · Accepted · In Review · Submitted — expand for details',
  intro:
    'This page includes work at every stage of the publication pipeline. Status badges and paper links are explained below.',
  statuses: [
    {
      status: 'published',
      description:
        'Formally published and peer-reviewed. The final version is available through the publisher.',
    },
    {
      status: 'accepted',
      description:
        'Accepted by the journal or conference. The paper may be in press or awaiting final publication.',
    },
    {
      status: 'in-review',
      description:
        'Currently under peer review. Venue, content, and timeline may change before a final decision.',
    },
    {
      status: 'submitted',
      description:
        'Submitted to a venue; peer review has not yet concluded or a decision is pending.',
    },
  ],
  paperActionsTitle: 'What paper links mean',
  paperActions: [
    {
      label: 'Read on Publisher',
      description:
        'Opens the official publisher page (DOI) for published or in-press papers.',
    },
    {
      label: 'Read on IEEE Xplore',
      description:
        'Opens the IEEE Xplore record for papers published in IEEE proceedings.',
    },
    {
      label: 'Preprint / Under review',
      description:
        'No public link is available yet. We share preprints when possible; otherwise contact us for manuscript access.',
    },
  ],
};
