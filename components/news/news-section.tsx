'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  newsData, 
  getNewsByType, 
  getAllNewsTypes, 
  newsTypeConfig,
  NewsType
} from '@/config/home/news';
import NewsCard from './news-card';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Loader2 } from 'lucide-react';

interface NewsSectionProps {
  newsType: NewsType | 'all';
}

const ITEMS_PER_PAGE = 6;

export default function NewsSection({ newsType }: NewsSectionProps) {
  const [selectedType, setSelectedType] = useState<NewsType | 'all'>(newsType);
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const filterSectionRef = useRef<HTMLDivElement>(null);
  
  const allTypes = getAllNewsTypes();

  // Get unique years from news data
  const availableDates = useMemo(() => {
    const years = new Set<number>();

    newsData.forEach(news => {
      const date = new Date(news.date);
      years.add(date.getFullYear());
    });

    return {
      years: Array.from(years).sort((a, b) => b - a),
    };
  }, []);

  const filteredNews = useMemo(() => {
    let filtered = getNewsByType(selectedType);

    if (selectedYear !== 'all') {
      filtered = filtered.filter(news => 
        new Date(news.date).getFullYear() === parseInt(selectedYear)
      );
    }

    return filtered;
  }, [selectedType, selectedYear]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, selectedYear]);

  // Reset expanded card when filters or page changes
  useEffect(() => {
    if (expandedId !== null) {
      setExpandedId(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, selectedYear, currentPage]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    
    setIsLoading(true);
    
    // Simulate loading delay for smooth transition
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsLoading(false);
      
      // Scroll to filter section smoothly
      if (filterSectionRef.current) {
        const yOffset = -100; // Offset from top of viewport
        const element = filterSectionRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 400);
  };

  

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
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

                {/* Day filter removed: only year filter retained */}
              </div>
            </div>

            {/* Bottom Shine Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/50 dark:via-white/10 to-transparent"></div>
          </div>
        </motion.div>

        {/* News List or Empty State */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center py-32 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-indigo-500 dark:text-indigo-400 animate-spin mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                  Loading news...
                </p>
              </div>
            </motion.div>
          ) : filteredNews.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
            >
              <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                No news found for the selected filters
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Try adjusting your filters to see more results
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`news-list-${selectedType}-${selectedYear}-${currentPage}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-5"
            >
              {currentNews.map((news) => (
                <motion.article
                  key={news.id}
                  variants={cardVariants}
                  layout
                  className="relative"
                >
                  <NewsCard 
                    news={news} 
                    isExpanded={expandedId === news.id}
                    onToggle={() => toggleExpand(news.id)}
                  />
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glass Pagination UI */}
        {!isLoading && filteredNews.length > ITEMS_PER_PAGE && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-white/40 dark:border-gray-700/40 shadow-2xl shadow-black/5 dark:shadow-black/40 overflow-hidden">
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-white/50 via-transparent to-transparent dark:from-white/5 pointer-events-none"></div>
              
              <div className="relative px-6 py-5">
                <div className="flex items-center justify-between gap-4">
                  {/* Page Info */}
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Page <span className="text-indigo-600 dark:text-indigo-400 font-bold">{currentPage}</span> of <span className="font-bold">{totalPages}</span>
                    <span className="hidden sm:inline text-gray-600 dark:text-gray-400 ml-2">
                      ({filteredNews.length} total items)
                    </span>
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center gap-2">
                    {/* First Page */}
                    <button
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        currentPage === 1
                          ? 'opacity-40 cursor-not-allowed bg-gray-300/50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-600'
                          : 'cursor-pointer bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-indigo-500/90 hover:text-white hover:border-indigo-500/50 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20'
                      }`}
                      title="First Page"
                    >
                      <ChevronsLeft size={18} />
                    </button>

                    {/* Previous Page */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        currentPage === 1
                          ? 'opacity-40 cursor-not-allowed bg-gray-300/50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-600'
                          : 'cursor-pointer bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-indigo-500/90 hover:text-white hover:border-indigo-500/50 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20'
                      }`}
                      title="Previous Page"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    {/* Page Numbers */}
                    <div className="hidden sm:flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(page => {
                          // Show first page, last page, current page, and pages around current
                          if (page === 1 || page === totalPages) return true;
                          if (Math.abs(page - currentPage) <= 1) return true;
                          return false;
                        })
                        .map((page, index, array) => {
                          // Add ellipsis between non-consecutive pages
                          const prevPage = array[index - 1];
                          const showEllipsis = prevPage && page - prevPage > 1;

                          return (
                            <div key={page} className="flex items-center gap-2">
                              {showEllipsis && (
                                <span className="text-gray-400 dark:text-gray-600 px-1">...</span>
                              )}
                              <button
                                onClick={() => handlePageChange(page)}
                                className={`min-w-10 px-3 py-2 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                                  currentPage === page
                                    ? 'bg-linear-to-r from-indigo-500/90 to-purple-500/90 dark:from-indigo-500/80 dark:to-purple-500/80 text-white shadow-lg shadow-indigo-500/30 scale-110'
                                    : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 hover:scale-105 hover:shadow-md'
                                }`}
                              >
                                {page}
                              </button>
                            </div>
                          );
                        })}
                    </div>

                    {/* Next Page */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'opacity-40 cursor-not-allowed bg-gray-300/50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-600'
                          : 'cursor-pointer bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-indigo-500/90 hover:text-white hover:border-indigo-500/50 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20'
                      }`}
                      title="Next Page"
                    >
                      <ChevronRight size={18} />
                    </button>

                    {/* Last Page */}
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'opacity-40 cursor-not-allowed bg-gray-300/50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-600'
                          : 'cursor-pointer bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:bg-indigo-500/90 hover:text-white hover:border-indigo-500/50 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20'
                      }`}
                      title="Last Page"
                    >
                      <ChevronsRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Shine Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/50 dark:via-white/10 to-transparent"></div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
