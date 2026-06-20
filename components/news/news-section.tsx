'use client';

import { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  newsData, 
  getNewsByType, 
  getAllNewsTypes, 
  newsTypeConfig,
  parseNewsDate,
  filterNewsByEventTiming,
  NewsType,
  EventTimingFilter,
} from '@/config/home/news';
import NewsCard from './news-card';
import InfiniteScrollSentinel from '@/components/common/infinite-scroll-sentinel';
import { useIncrementalLoad } from '@/lib/use-incremental-load';
import type { News } from '@/config/home/news';

interface NewsSectionProps {
  newsType: NewsType | 'all';
  onOpenNews: (news: News) => void;
}

const ITEMS_PER_PAGE = 12;

export default function NewsSection({ newsType, onOpenNews }: NewsSectionProps) {
  const [selectedType, setSelectedType] = useState<NewsType | 'all'>(newsType);
  const [eventTiming, setEventTiming] = useState<EventTimingFilter>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [selectedDay, setSelectedDay] = useState<string>('all');
  const filterSectionRef = useRef<HTMLDivElement>(null);
  
  const allTypes = getAllNewsTypes();

  // Get unique years, months, and days from news data
  const availableDates = useMemo(() => {
    const years = new Set<number>();
    const months = new Set<string>();
    const days = new Set<string>();

    newsData.forEach(news => {
      const date = parseNewsDate(news.date);
      years.add(date.getFullYear());
      
      if (selectedYear !== 'all') {
        const newsYear = date.getFullYear();
        if (newsYear === parseInt(selectedYear)) {
          const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
          months.add(monthKey);
          
          if (selectedMonth !== 'all') {
            const [year, month] = selectedMonth.split('-');
            if (newsYear === parseInt(year) && date.getMonth() + 1 === parseInt(month)) {
              days.add(news.date);
            }
          }
        }
      }
    });

    return {
      years: Array.from(years).sort((a, b) => b - a),
      months: Array.from(months).sort().reverse(),
      days: Array.from(days).sort().reverse()
    };
  }, [selectedYear, selectedMonth]);

  const filteredNews = useMemo(() => {
    let filtered = getNewsByType(selectedType);
    
    if (selectedDay !== 'all') {
      filtered = filtered.filter(news => news.date === selectedDay);
    } else if (selectedMonth !== 'all') {
      filtered = filtered.filter(news => {
        const [year, month] = selectedMonth.split('-');
        const newsDate = parseNewsDate(news.date);
        return newsDate.getFullYear() === parseInt(year) && 
               newsDate.getMonth() + 1 === parseInt(month);
      });
    } else if (selectedYear !== 'all') {
      filtered = filtered.filter(news => 
        parseNewsDate(news.date).getFullYear() === parseInt(selectedYear)
      );
    }
    
    filtered = filterNewsByEventTiming(filtered, eventTiming);
    
    return filtered;
  }, [selectedType, eventTiming, selectedYear, selectedMonth, selectedDay]);

  const filterKey = `${selectedType}-${eventTiming}-${selectedYear}-${selectedMonth}-${selectedDay}`;

  const { visibleCount, sentinelRef, hasMore } = useIncrementalLoad({
    totalItems: filteredNews.length,
    pageSize: ITEMS_PER_PAGE,
    resetKey: filterKey,
  });

  const visibleNews = filteredNews.slice(0, visibleCount);

  const formatMonth = (monthKey: string) => {
    const [year, month] = monthKey.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const formatDay = (dateStr: string) => {
    const date = parseNewsDate(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-linear-to-br from-gray-50 via-white to-slate-50 dark:from-gray-950 dark:via-black dark:to-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-150 h-150 bg-violet-500/5 dark:bg-violet-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* iPhone-Style Glass Filter Container */}
        <motion.div
          ref={filterSectionRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Main Glass Container */}
          <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl border border-white/40 dark:border-gray-700/40 shadow-2xl shadow-black/5 dark:shadow-black/40 overflow-hidden">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-white/50 via-transparent to-transparent dark:from-white/5 pointer-events-none"></div>
            
            <div className="relative p-6 md:p-8 space-y-6">
              {/* Type Filters */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-1">
                  Filter by Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedType('all')}
                    className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                      selectedType === 'all'
                        ? 'bg-indigo-500/90 dark:bg-indigo-500/80 text-white shadow-lg shadow-indigo-500/30 scale-105'
                        : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                    }`}
                  >
                    All News
                  </button>
                  {allTypes.map((type) => {
                    const config = newsTypeConfig[type];
                    const TypeIcon = config.icon;
                    
                    return (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                          selectedType === type
                            ? 'bg-indigo-500/90 dark:bg-indigo-500/80 text-white shadow-lg shadow-indigo-500/30 scale-105'
                            : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                        }`}
                      >
                        <TypeIcon size={14} />
                        {config.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upcoming vs Past (events/talks and all dated items) */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-1">
                  Upcoming vs Past
                </h3>
                <div className="flex flex-wrap gap-2">
                  {([
                    { value: 'all', label: 'All' },
                    { value: 'upcoming', label: 'Upcoming' },
                    { value: 'past', label: 'Past' },
                  ] as const).map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => setEventTiming(value)}
                      className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                        eventTiming === value
                          ? 'bg-violet-500/90 dark:bg-violet-500/80 text-white shadow-lg shadow-violet-500/30 scale-105'
                          : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Filters - Hierarchical */}
              <div className="space-y-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                {/* Year Filter */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-1">
                    Filter by Date
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setSelectedYear('all');
                        setSelectedMonth('all');
                        setSelectedDay('all');
                      }}
                      className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                        selectedYear === 'all'
                          ? 'bg-linear-to-r from-blue-500/90 to-indigo-500/90 dark:from-blue-500/80 dark:to-indigo-500/80 text-white shadow-lg shadow-blue-500/30 scale-105'
                          : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                      }`}
                    >
                      All Time
                    </button>
                    {availableDates.years.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(String(year));
                          setSelectedMonth('all');
                          setSelectedDay('all');
                        }}
                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                          selectedYear === String(year)
                            ? 'bg-linear-to-r from-blue-500/90 to-indigo-500/90 dark:from-blue-500/80 dark:to-indigo-500/80 text-white shadow-lg shadow-blue-500/30 scale-105'
                            : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Month Filter - Only show if year selected */}
                {selectedYear !== 'all' && availableDates.months.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-1">
                      Select Month
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setSelectedMonth('all');
                          setSelectedDay('all');
                        }}
                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                          selectedMonth === 'all'
                            ? 'bg-linear-to-r from-cyan-500/90 to-blue-500/90 dark:from-cyan-500/80 dark:to-blue-500/80 text-white shadow-lg shadow-cyan-500/30 scale-105'
                            : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                        }`}
                      >
                        All Months
                      </button>
                      {availableDates.months.map((month) => (
                        <button
                          key={month}
                          onClick={() => {
                            setSelectedMonth(month);
                            setSelectedDay('all');
                          }}
                          className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                            selectedMonth === month
                              ? 'bg-linear-to-r from-cyan-500/90 to-blue-500/90 dark:from-cyan-500/80 dark:to-blue-500/80 text-white shadow-lg shadow-cyan-500/30 scale-105'
                              : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                          }`}
                        >
                          {formatMonth(month)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Day Filter - Only show if month selected */}
                {selectedMonth !== 'all' && availableDates.days.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-1">
                      Select Day
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedDay('all')}
                        className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                          selectedDay === 'all'
                            ? 'bg-linear-to-r from-teal-500/90 to-cyan-500/90 dark:from-teal-500/80 dark:to-cyan-500/80 text-white shadow-lg shadow-teal-500/30 scale-105'
                            : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                        }`}
                      >
                        All Days
                      </button>
                      {availableDates.days.map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                            selectedDay === day
                              ? 'bg-linear-to-r from-teal-500/90 to-cyan-500/90 dark:from-teal-500/80 dark:to-cyan-500/80 text-white shadow-lg shadow-teal-500/30 scale-105'
                              : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                          }`}
                        >
                          {formatDay(day)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Bottom Shine Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/50 dark:via-white/10 to-transparent"></div>
          </div>
        </motion.div>

        {/* News List */}
        {filteredNews.length > 0 && (
          <div key={filterKey} className="space-y-5">
            {visibleNews.map((news) => (
              <article key={news.id} className="relative">
                <NewsCard news={news} onOpen={onOpenNews} />
              </article>
            ))}
          </div>
        )}

        {filteredNews.length > 0 && (
          <InfiniteScrollSentinel
            sentinelRef={sentinelRef}
            hasMore={hasMore}
            visibleCount={visibleCount}
            totalCount={filteredNews.length}
            itemLabel="news items"
          />
        )}

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
          >
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
              No news found for the selected filters
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Try adjusting your filters to see more results
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
