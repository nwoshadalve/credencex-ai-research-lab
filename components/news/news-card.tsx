'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { News, newsTypeConfig, formatNewsDate } from '@/config/home/news';

interface NewsCardProps {
  news: News;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function NewsCard({ news, isExpanded, onToggle }: NewsCardProps) {
  const config = newsTypeConfig[news.type];
  const TypeIcon = config.icon;

  return (
    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-300/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:border-indigo-400/50 dark:hover:border-indigo-500/50 active:shadow-2xl active:border-indigo-400/50 dark:active:border-indigo-500/50 active:scale-[0.99] hover:scale-[1.01] transition-all duration-300 overflow-hidden">
      {/* Gradient Background Overlay on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-pink-500/5 to-violet-500/5 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-6">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4 mb-3">
          {/* Type Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-300/50 dark:border-gray-600/50">
            <TypeIcon className={`w-3.5 h-3.5 ${config.color}`} />
            <span className={`text-xs font-medium ${config.color}`}>
              {config.label}
            </span>
          </div>

          {/* Date and Read Time */}
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            {news.readTime && (
              <>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{news.readTime}</span>
                </div>
                <span className="hidden sm:inline">•</span>
              </>
            )}
            <span className="hidden sm:inline">{formatNewsDate(news.date)}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 leading-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
          {news.title}
        </h3>

        {/* Author */}
        {news.author && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            By <span className="font-medium text-gray-700 dark:text-gray-300">{news.author}</span>
          </p>
        )}

        {/* Summary */}
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {news.summary}
        </p>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-4 border-t border-gray-200/50 dark:border-gray-700/50 mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {news.content}
                </p>

                {/* Tags */}
                {news.tags && news.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {news.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-300/50 dark:border-indigo-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        <button
          onClick={onToggle}
          className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 active:scale-95 transition-all mt-2 group/btn cursor-pointer"
        >
          <span>{isExpanded ? 'Read less' : 'Read more'}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
          ) : (
            <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
}
