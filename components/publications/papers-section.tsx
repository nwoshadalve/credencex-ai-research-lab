'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, ExternalLink, Users, Calendar, Award, Filter } from 'lucide-react';
import { publications, statusConfig, typeConfig, Publication } from '@/config/home/publications';
import Button from '@/components/common/button';

type FilterType = 'all' | 'conference' | 'journal';

interface PapersSectionProps {
  typeParam?: FilterType | null;
}

export default function PapersSection({ typeParam }: PapersSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  
  // For type=all or no param, use local state; otherwise derive from URL
  const isAllTypePage = !typeParam || typeParam === 'all';
  const [localFilter, setLocalFilter] = useState<FilterType>('all');
  const activeFilter: FilterType = isAllTypePage ? localFilter : typeParam;
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const handleFilterChange = (callback: () => void) => {
    scrollPositionRef.current = window.scrollY;
    callback();
  };

  // Extract unique years from publications
  const availableYears = useMemo(() => {
    const years = publications.map(pub => {
      const match = pub.date.match(/\d{4}/);
      return match ? match[0] : null;
    }).filter((year): year is string => year !== null);
    
    return ['all', ...Array.from(new Set(years)).sort((a, b) => b.localeCompare(a))];
  }, []);

  // Extract unique statuses from publications
  const availableStatuses = useMemo(() => {
    const statuses = publications.map(pub => pub.status);
    return ['all', ...Array.from(new Set(statuses))];
  }, []);
  
  // Filter publications by type, year, and status
  const filteredPublications = publications.filter(pub => {
    const typeMatch = activeFilter === 'all' || pub.type === activeFilter;
    const yearMatch = selectedYear === 'all' || pub.date.includes(selectedYear);
    const statusMatch = selectedStatus === 'all' || pub.status === selectedStatus;
    return typeMatch && yearMatch && statusMatch;
  });

  // Calculate counts based on current year and status filter
  const conferenceCount = publications.filter(p => {
    const yearMatch = selectedYear === 'all' || p.date.includes(selectedYear);
    const statusMatch = selectedStatus === 'all' || p.status === selectedStatus;
    return p.type === 'conference' && yearMatch && statusMatch;
  }).length;
  
  const journalCount = publications.filter(p => {
    const yearMatch = selectedYear === 'all' || p.date.includes(selectedYear);
    const statusMatch = selectedStatus === 'all' || p.status === selectedStatus;
    return p.type === 'journal' && yearMatch && statusMatch;
  }).length;

  const totalCount = publications.filter(p => {
    const yearMatch = selectedYear === 'all' || p.date.includes(selectedYear);
    const statusMatch = selectedStatus === 'all' || p.status === selectedStatus;
    return yearMatch && statusMatch;
  }).length;

  // Determine which filters to show based on URL parameter
  const showAllFilters = !typeParam || typeParam === 'all';
  const showConferenceFilters = typeParam === 'conference';
  const showJournalFilters = typeParam === 'journal';

  // Preserve scroll position on filter change
  useEffect(() => {
    if (containerRef.current && scrollPositionRef.current > 0) {
      window.scrollTo({ top: scrollPositionRef.current, behavior: 'auto' });
      scrollPositionRef.current = 0;
    }
  }, [filteredPublications]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 60,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: -40,
      rotateX: -10,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section className="relative pb-20 lg:pb-28 overflow-hidden bg-white dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="papers-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#papers-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Filter Tabs - Show all filters only when type=all or no type param */}
        {showAllFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <button
              onClick={() => handleFilterChange(() => setLocalFilter('all'))}
              className={`cursor-pointer px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/40'
                  : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600'
              }`}
            >
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                All Papers ({totalCount})
              </span>
            </button>
            
            <button
              onClick={() => handleFilterChange(() => setLocalFilter('conference'))}
              className={`cursor-pointer px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === 'conference'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/40'
                  : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600'
              }`}
            >
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Conference Papers ({conferenceCount})
              </span>
            </button>
            
            <button
              onClick={() => handleFilterChange(() => setLocalFilter('journal'))}
              className={`cursor-pointer px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === 'journal'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/40'
                  : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600'
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Journal Papers ({journalCount})
              </span>
            </button>
          </motion.div>
        )}

        {/* Show paper count for conference/journal URLs */}
        {(showConferenceFilters || showJournalFilters) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg">
              {showConferenceFilters && (
                <>
                  <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {conferenceCount} Conference {conferenceCount === 1 ? 'Paper' : 'Papers'}
                  </span>
                </>
              )}
              {showJournalFilters && (
                <>
                  <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {journalCount} Journal {journalCount === 1 ? 'Article' : 'Articles'}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Year Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-8"
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Year:</span>
          {availableYears.map((year) => (
            <button
              key={year}
              onClick={() => handleFilterChange(() => setSelectedYear(year))}
              className={`cursor-pointer px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-purple-600 dark:bg-purple-500 text-white shadow-lg shadow-purple-500/40'
                  : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-purple-300 dark:hover:border-purple-600'
              }`}
            >
              {year === 'all' ? 'All Years' : year}
            </button>
          ))}
        </motion.div>

        {/* Status Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Status:</span>
          {availableStatuses.map((status) => {
            const StatusIcon = status !== 'all' ? statusConfig[status as keyof typeof statusConfig].icon : Filter;
            const statusLabel = status === 'all' ? 'All Status' : statusConfig[status as keyof typeof statusConfig].label;
            
            return (
              <button
                key={status}
                onClick={() => handleFilterChange(() => setSelectedStatus(status))}
                className={`cursor-pointer px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  selectedStatus === status
                    ? 'bg-pink-600 dark:bg-pink-500 text-white shadow-lg shadow-pink-500/40'
                    : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-pink-300 dark:hover:border-pink-600'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <StatusIcon className="w-3.5 h-3.5" />
                  {statusLabel}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          ref={containerRef}
          key={`${activeFilter}-${selectedYear}-${selectedStatus}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                variants={cardVariants}
                layout
                layoutId={String(publication.id)}
                exit="exit"
                custom={index}
                className="relative h-full"
                style={{ perspective: 1000 }}
              >
                <PublicationCard publication={publication} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No publications found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const StatusIcon = statusConfig[publication.status].icon;
  const TypeIcon = typeConfig[publication.type].icon;

  return (
    <div className="relative h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Decorative Corner */}
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl transition-colors duration-300" />
      
      <div className="relative z-10 flex flex-col flex-1">
        {/* Type and Status Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300/50 dark:border-gray-600/50">
            <TypeIcon className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {typeConfig[publication.type].label}
            </span>
          </div>

          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${
            publication.status === 'published' 
              ? 'bg-green-100 dark:bg-green-900/30 border-green-300/50 dark:border-green-700/50'
              : publication.status === 'accepted'
              ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-300/50 dark:border-blue-700/50'
              : publication.status === 'in-review'
              ? 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300/50 dark:border-yellow-700/50'
              : 'bg-purple-100 dark:bg-purple-900/30 border-purple-300/50 dark:border-purple-700/50'
          }`}>
            <StatusIcon className={`w-3.5 h-3.5 ${statusConfig[publication.status].color}`} />
            <span className={`text-xs font-medium ${statusConfig[publication.status].color}`}>
              {statusConfig[publication.status].label}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white line-clamp-3">
          {publication.title}
        </h3>

        {/* Authors */}
        <div className="flex items-start gap-2 mb-4">
          <Users className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5 shrink-0" />
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {publication.authors.join(', ')}
          </p>
        </div>

        {/* Venue */}
        <div className="mb-4 px-4 py-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl border border-indigo-200/60 dark:border-indigo-800/60">
          <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-200 line-clamp-2">
            {publication.venue}
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {publication.date}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1">
          {publication.description}
        </p>

        {/* Action Button (hidden for accepted/submitted/in-review) */}
        {publication.paperLink && !['accepted', 'in-review', 'submitted'].includes(publication.status) && (
          <div className="mt-auto">
            <Button
              variant="glass"
              size="sm"
              icon={ExternalLink}
              iconPosition="right"
              onClick={() => window.open(publication.paperLink, '_blank')}
              className="w-full"
            >
              Read Paper
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
