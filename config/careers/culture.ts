export interface WorkCulture {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const workCulture: WorkCulture[] = [
  {
    id: 1,
    title: 'Careful Work',
    description: 'We would rather publish a careful result than an overstated one. Clear limits and reproducible work matter here.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 2,
    title: 'Small Team, Shared Notes',
    description: 'Most collaboration happens across time zones, so we rely on clear notes, readable code, and regular check-ins.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    id: 3,
    title: 'No Overclaiming',
    description: 'Many projects sit close to health or safety. We are careful about what a result can and cannot support.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  },
  {
    id: 4,
    title: 'Clear Roles',
    description: 'Internship, collaboration, advisory, and partnership roles are different. We try to make the expectations clear from the start.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
  },
];
