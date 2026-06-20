'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ExternalLink, FileText, FolderKanban } from 'lucide-react';
import Loader from '@/components/common/loader';
import type { NewsRelatedLinks } from '@/config/home/news';

interface RelatedPublication {
  id: number;
  title: string;
  venue: string;
}

interface RelatedProject {
  id: number;
  title: string;
  area: string;
}

interface NewsArticleRelatedLinksProps {
  relatedLinks?: NewsRelatedLinks;
}

export default function NewsArticleRelatedLinks({ relatedLinks }: NewsArticleRelatedLinksProps) {
  const [relatedPublications, setRelatedPublications] = useState<RelatedPublication[]>([]);
  const [relatedProjects, setRelatedProjects] = useState<RelatedProject[]>([]);
  const [loaded, setLoaded] = useState(false);

  const externalLinks = relatedLinks?.external ?? [];
  const hasIds =
    (relatedLinks?.publicationIds?.length ?? 0) > 0 || (relatedLinks?.projectIds?.length ?? 0) > 0;

  useEffect(() => {
    if (!hasIds) {
      setLoaded(true);
      return;
    }

    let cancelled = false;

    async function loadRelated() {
      const [pubModule, projModule] = await Promise.all([
        relatedLinks?.publicationIds?.length
          ? import('@/config/home/publications')
          : Promise.resolve(null),
        relatedLinks?.projectIds?.length
          ? import('@/config/home/projects')
          : Promise.resolve(null),
      ]);

      if (cancelled) return;

      if (pubModule && relatedLinks?.publicationIds) {
        setRelatedPublications(
          relatedLinks.publicationIds
            .map((id) => pubModule.publications.find((p) => p.id === id))
            .filter((p): p is NonNullable<typeof p> => Boolean(p))
            .map(({ id, title, venue }) => ({ id, title, venue }))
        );
      }

      if (projModule && relatedLinks?.projectIds) {
        setRelatedProjects(
          relatedLinks.projectIds
            .map((id) => projModule.projects.find((p) => p.id === id))
            .filter((p): p is NonNullable<typeof p> => Boolean(p))
            .map(({ id, title, area }) => ({ id, title, area }))
        );
      }

      setLoaded(true);
    }

    void loadRelated();
    return () => {
      cancelled = true;
    };
  }, [hasIds, relatedLinks?.publicationIds, relatedLinks?.projectIds]);

  if (!hasIds && externalLinks.length === 0) return null;

  if (hasIds && !loaded) {
    return <Loader variant="inline" label="Loading related work" className="mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-700/50" />;
  }

  const hasRelatedLinks =
    relatedPublications.length > 0 || relatedProjects.length > 0 || externalLinks.length > 0;

  if (!hasRelatedLinks) return null;

  return (
    <section className="mt-10 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
        Related work
      </h2>
      <ul className="space-y-3">
        {relatedPublications.map((publication) => (
          <li key={`pub-${publication.id}`}>
            <Link
              href="/publications"
              className="group flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors"
            >
              <FileText className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
              <span>
                <span className="block text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {publication.title}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {publication.venue}
                </span>
              </span>
            </Link>
          </li>
        ))}
        {relatedProjects.map((project) => (
          <li key={`proj-${project.id}`}>
            <Link
              href="/projects"
              className="group flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors"
            >
              <FolderKanban className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
              <span>
                <span className="block text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {project.area}
                </span>
              </span>
            </Link>
          </li>
        ))}
        {externalLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-0.5 text-indigo-500 shrink-0" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
