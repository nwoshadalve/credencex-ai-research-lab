export interface LookingFor {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const lookingForQualities: LookingFor[] = [
  {
    id: 1,
    title: 'Research Curiosity',
    description: 'You like asking why a model works, where it fails, and how to test it more honestly.',
    icon: 'Sparkles'
  },
  {
    id: 2,
    title: 'Steady Problem Solving',
    description: 'You can take an unclear research task and turn it into a small, testable next step.',
    icon: 'Lightbulb'
  },
  {
    id: 3,
    title: 'Good Communication',
    description: 'You write things down, ask questions early, and make it easy for others to follow your work.',
    icon: 'Users'
  },
  {
    id: 4,
    title: 'Willingness to Learn',
    description: 'You do not need to know everything. You do need to learn carefully and follow through.',
    icon: 'GraduationCap'
  },
  {
    id: 5,
    title: 'Care with Claims',
    description: 'You understand that health-related and safety-related research needs cautious language and careful review.',
    icon: 'Shield'
  },
  {
    id: 6,
    title: 'Reliable Follow-Through',
    description: 'Small research projects still need deadlines, clean handoffs, and honest status updates.',
    icon: 'Award'
  }
];
