export interface WorkCulture {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const workCulture: WorkCulture[] = [
  {
    id: 1,
    title: 'Innovation First',
    description: 'We encourage bold ideas and give you the freedom to experiment, fail fast, and learn continuously.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    id: 2,
    title: 'Collaborative Environment',
    description: 'Work alongside brilliant minds in a supportive environment where knowledge sharing is celebrated.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
  },
  {
    id: 3,
    title: 'Impact-Driven',
    description: 'Your work directly contributes to advancing AI technology that benefits society.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
  },
  {
    id: 4,
    title: 'Diversity & Inclusion',
    description: 'We value diverse perspectives and create an inclusive workplace where everyone can thrive.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80'
  }
];
