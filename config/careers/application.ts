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
    title: 'Submit Application',
    description: 'Apply online with your resume, cover letter, and relevant work samples or research papers.'
  },
  {
    id: 2,
    icon: Users,
    title: 'Initial Screening',
    description: 'Our team reviews applications and conducts initial phone/video screenings with qualified candidates.'
  },
  {
    id: 3,
    icon: Send,
    title: 'Technical Interview',
    description: 'Participate in technical interviews to demonstrate your skills and problem-solving abilities.'
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Final Interview & Offer',
    description: 'Meet with team leaders for a final discussion. Successful candidates receive an offer to join our team.'
  }
];
