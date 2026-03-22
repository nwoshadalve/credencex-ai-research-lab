import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const publicRoutes = [
  '/',
  '/about',
  '/news',
  '/projects',
  '/publications',
  '/teams',
  '/careers',
  '/contact',
  '/privacy',
  '/terms',
  '/governance',
  '/advisory-board',
  '/board-of-members',
  '/ethics',
  '/data-governance',
  '/open-research',
  '/legal-notice',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
