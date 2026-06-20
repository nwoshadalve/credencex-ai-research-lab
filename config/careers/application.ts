import { LucideIcon, FileText, Send, Users, CheckCircle } from 'lucide-react';

export interface ApplicationProcessStep {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const applicationProcessSteps: ApplicationProcessStep[] = [
  {
    id: 1,
    icon: FileText,
    title: 'Express Interest',
    description: 'Send a short note with your CV, portfolio, or research links. Tell us which listing you are responding to and why it fits.',
  },
  {
    id: 2,
    icon: Users,
    title: 'Fit Check',
    description: 'We check whether your background, timing, and the current project list line up. If there is no fit, we will not force one.',
  },
  {
    id: 3,
    icon: Send,
    title: 'Scope the Work',
    description: 'If it looks promising, we discuss time commitment, expected output, compensation if available, and any university requirements.',
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Start Clearly',
    description: 'Before work begins, we write down the scope, expectations, and any limits around health-related research claims.',
  },
];
