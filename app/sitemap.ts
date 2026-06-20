import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const publicRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/publications', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/projects', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/teams', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/careers', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/governance', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/advisory-board', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/ethics', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/data-governance', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/open-research', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/legal-notice', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}
