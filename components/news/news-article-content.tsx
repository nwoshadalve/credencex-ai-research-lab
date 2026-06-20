import Link from 'next/link';
import { Clock, ExternalLink, FileText, FolderKanban } from 'lucide-react';
import {
  News,
  newsTypeConfig,
  formatNewsDateWithKind,
  isMedicalNews,
  isUpcomingNews,
} from '@/config/home/news';
import { publications } from '@/config/home/publications';
import { projects } from '@/config/home/projects';
import { researchUseSafetyCueShort } from '@/config/common/disclaimers';

interface NewsArticleContentProps {
  news: News;
  headingLevel?: 'h1' | 'h2';
}

export default function NewsArticleContent({ news, headingLevel = 'h1' }: NewsArticleContentProps) {
  const config = newsTypeConfig[news.type];
  const TypeIcon = config.icon;
  const showMedicalDisclaimer = isMedicalNews(news);
  const Heading = headingLevel;

  const relatedPublications =
    news.relatedLinks?.publicationIds
      ?.map((id) => publications.find((p) => p.id === id))
      .filter((p): p is NonNullable<typeof p> => Boolean(p)) ?? [];

  const relatedProjects =
    news.relatedLinks?.projectIds
      ?.map((id) => projects.find((p) => p.id === id))
      .filter((p): p is NonNullable<typeof p> => Boolean(p)) ?? [];

  const externalLinks = news.relatedLinks?.external ?? [];
  const hasRelatedLinks =
    relatedPublications.length > 0 || relatedProjects.length > 0 || externalLinks.length > 0;

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100/80 dark:bg-gray-800/80 rounded-full border border-gray-300/50 dark:border-gray-600/50">
          <TypeIcon className={`w-3.5 h-3.5 ${config.color}`} />
          <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
        </div>

        {news.featured && (
          <div className="px-3 py-1.5 bg-amber-100/80 dark:bg-amber-900/30 rounded-full border border-amber-300/50 dark:border-amber-700/50">
            <span className="text-xs font-medium text-amber-800 dark:text-amber-200">Featured</span>
          </div>
        )}

        {isUpcomingNews(news.date) && (
          <div className="px-3 py-1.5 bg-violet-100/80 dark:bg-violet-900/30 rounded-full border border-violet-300/50 dark:border-violet-700/50">
            <span className="text-xs font-medium text-violet-700 dark:text-violet-300">Upcoming</span>
          </div>
        )}
      </div>

      <Heading className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
        {news.title}
      </Heading>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-800/40 border border-gray-200/50 dark:border-gray-700/50 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
            Author
          </dt>
          <dd className="font-medium text-gray-800 dark:text-gray-200">{news.author}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
            Date
          </dt>
          <dd className="font-medium text-gray-800 dark:text-gray-200">{formatNewsDateWithKind(news)}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
            Category
          </dt>
          <dd className="font-medium text-gray-800 dark:text-gray-200">{config.label}</dd>
        </div>
        {news.readTime && (
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
              Read time
            </dt>
            <dd className="flex items-center gap-1.5 font-medium text-gray-800 dark:text-gray-200">
              <Clock className="w-3.5 h-3.5" />
              {news.readTime}
            </dd>
          </div>
        )}
      </dl>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-medium">
        {news.summary}
      </p>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
          {news.content}
        </p>
      </div>

      {news.tags && news.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-8">
          {news.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-300/50 dark:border-indigo-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {hasRelatedLinks && (
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
      )}

      {showMedicalDisclaimer && (
        <footer className="mt-10 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 px-4 py-3">
            <span className="font-semibold text-amber-800 dark:text-amber-200">Research notice: </span>
            {researchUseSafetyCueShort}
          </p>
        </footer>
      )}
    </>
  );
}
