'use client';

import { Clock, ArrowRight } from 'lucide-react';
import {
  News,
  newsTypeConfig,
  formatNewsDateWithKind,
  isUpcomingNews,
} from '@/config/home/news';

interface NewsCardProps {
  news: News;
  showFeaturedBadge?: boolean;
  onOpen: (news: News) => void;
}

export default function NewsCard({
  news,
  showFeaturedBadge = false,
  onOpen,
}: NewsCardProps) {
  const config = newsTypeConfig[news.type];
  const TypeIcon = config.icon;

  return (
    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-300/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:border-indigo-400/50 dark:hover:border-indigo-500/50 active:shadow-2xl active:border-indigo-400/50 dark:active:border-indigo-500/50 active:scale-[0.99] hover:scale-[1.01] transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-pink-500/5 to-violet-500/5 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-300/50 dark:border-gray-600/50">
              <TypeIcon className={`w-3.5 h-3.5 ${config.color}`} />
              <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
            </div>

            {showFeaturedBadge && news.featured && (
              <div className="px-3 py-1.5 bg-amber-100/80 dark:bg-amber-900/30 backdrop-blur-sm rounded-full border border-amber-300/50 dark:border-amber-700/50">
                <span className="text-xs font-medium text-amber-800 dark:text-amber-200">Featured</span>
              </div>
            )}

            {isUpcomingNews(news.date) && (
              <div className="px-3 py-1.5 bg-violet-100/80 dark:bg-violet-900/30 backdrop-blur-sm rounded-full border border-violet-300/50 dark:border-violet-700/50">
                <span className="text-xs font-medium text-violet-700 dark:text-violet-300">Upcoming</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 shrink-0">
            {news.readTime && (
              <>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{news.readTime}</span>
                </div>
                <span className="hidden sm:inline">•</span>
              </>
            )}
            <span className="hidden sm:inline">{formatNewsDateWithKind(news)}</span>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
          <button
            type="button"
            onClick={() => onOpen(news)}
            className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 cursor-pointer"
          >
            {news.title}
          </button>
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          By <span className="font-medium text-gray-700 dark:text-gray-300">{news.author}</span>
        </p>

        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{news.summary}</p>

        <button
          type="button"
          onClick={() => onOpen(news)}
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 active:scale-95 transition-all group/btn cursor-pointer"
        >
          <span>Read article</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
