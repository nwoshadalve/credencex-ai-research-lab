export interface CareerBenefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const careerBenefits: CareerBenefit[] = [
  {
    id: 1,
    icon: 'FileText',
    title: 'Clear Research Scope',
    description: 'We try to define a small, concrete research question before work begins.'
  },
  {
    id: 2,
    icon: 'Users',
    title: 'Mentor Check-ins',
    description: 'Interns and collaborators get regular feedback from a project lead or advisor.'
  },
  {
    id: 3,
    icon: 'BookOpen',
    title: 'Publication Pathways',
    description: 'When the contribution is substantial, we discuss authorship and reporting expectations early.'
  },
  {
    id: 4,
    icon: 'Home',
    title: 'Remote-Friendly Work',
    description: 'Most collaborations can happen remotely with clear notes, shared code, and scheduled reviews.'
  }
];
