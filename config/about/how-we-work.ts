import { LucideIcon, Globe, BarChart3, Eye, ShieldCheck, FileText } from 'lucide-react';

export interface HowWeWorkStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HowWeWorkContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  steps: HowWeWorkStep[];
}

export const howWeWorkContent: HowWeWorkContent = {
  badge: 'How We Work',
  title: 'Deployment-aware research, end to end',
  subtitle: 'From benchmark performance to deployment readiness',
  description:
    'CredenceX emphasizes a deployment-aware research mindset. Depending on the project, our approach may include:',
  steps: [
    {
      id: 1,
      title: 'Generalization Testing',
      description:
        'Testing across scanners, sites, and acquisition conditions to ensure models hold up outside the training distribution.',
      icon: Globe,
    },
    {
      id: 2,
      title: 'Uncertainty Estimation & Calibration',
      description:
        'Quantifying prediction confidence and calibrating outputs to support risk-aware decision support.',
      icon: BarChart3,
    },
    {
      id: 3,
      title: 'Explainability & Audit Workflows',
      description:
        'Applying saliency analysis, faithfulness checks, and error characterization so outputs remain interpretable and auditable.',
      icon: Eye,
    },
    {
      id: 4,
      title: 'Robustness Evaluation',
      description:
        'Stress-testing under common perturbations and operational constraints to surface failure modes before deployment.',
      icon: ShieldCheck,
    },
    {
      id: 5,
      title: 'Clear Documentation',
      description:
        'Documenting intended use, known limitations, and failure modes to support responsible communication and handoff.',
      icon: FileText,
    },
  ],
};
