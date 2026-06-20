'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Info } from 'lucide-react';
import { statusConfig } from '@/config/home/publications';
import { publicationStatusLegend } from '@/config/publications/status-legend';

export default function PublicationStatusLegend() {
  const [isOpen, setIsOpen] = useState(false);
  const { title, intro, statuses, paperActionsTitle, paperActions, triggerHint } =
    publicationStatusLegend;

  return (
    <div className="mb-8">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-gray-200/60 bg-white/60 px-4 py-3 text-left shadow-sm backdrop-blur-xl transition-colors duration-200 hover:border-indigo-300/60 hover:bg-white/80 dark:border-gray-700/60 dark:bg-gray-900/60 dark:hover:border-indigo-600/60 dark:hover:bg-gray-900/80"
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <Info className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-gray-900 dark:text-white">{title}</span>
            <span className="block truncate text-xs text-gray-500 dark:text-gray-400">{triggerHint}</span>
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 dark:text-gray-400 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-2xl border border-gray-200/60 bg-white/70 p-5 shadow-lg backdrop-blur-2xl dark:border-gray-700/60 dark:bg-gray-900/70 md:p-6">
              <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{intro}</p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {statuses.map(({ status, description }) => {
                  const StatusIcon = statusConfig[status].icon;

                  return (
                    <div
                      key={status}
                      className="rounded-xl border border-gray-200/60 bg-white/60 p-3.5 dark:border-gray-700/60 dark:bg-gray-800/40"
                    >
                      <div className="mb-1.5 flex items-center gap-2">
                        <StatusIcon className={`h-3.5 w-3.5 shrink-0 ${statusConfig[status].color}`} />
                        <span className={`text-sm font-semibold ${statusConfig[status].color}`}>
                          {statusConfig[status].label}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-gray-200/60 pt-5 dark:border-gray-700/60">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300">
                  {paperActionsTitle}
                </h3>
                <ul className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
                  {paperActions.map(({ label, description }) => (
                    <li
                      key={label}
                      className="rounded-xl border border-gray-200/60 bg-gray-50/70 px-3.5 py-2.5 dark:border-gray-700/60 dark:bg-gray-800/50"
                    >
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
