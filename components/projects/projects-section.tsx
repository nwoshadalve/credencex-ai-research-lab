'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderKanban, Filter, Rocket, Calendar, Layers, ExternalLink } from 'lucide-react';
import { projects, statusConfig, Project, ProjectStatus } from '@/config/home/projects';

type FilterType = 'all' | 'active' | 'completed' | 'planned';

interface ProjectsSectionProps {
  typeParam?: FilterType | null;
}

export default function ProjectsSection({ typeParam }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  
  // For type=all or no param, use local state; otherwise derive from URL
  const isAllTypePage = !typeParam || typeParam === 'all';
  const [localFilter, setLocalFilter] = useState<FilterType>('all');
  
  // Map 'active' to 'in-progress' for internal status matching
  const getStatusFromFilter = (filter: FilterType): ProjectStatus | 'all' => {
    if (filter === 'active') return 'in-progress';
    if (filter === 'all') return 'all';
    return filter as ProjectStatus;
  };
  
  const activeFilter: FilterType = isAllTypePage ? localFilter : typeParam;
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');

  const handleFilterChange = (callback: () => void) => {
    scrollPositionRef.current = window.scrollY;
    callback();
  };

  // Extract unique years from projects
  const availableYears = useMemo(() => {
    const years = projects
      .map(proj => proj.year)
      .filter((year): year is string => year !== undefined);
    
    return ['all', ...Array.from(new Set(years)).sort((a, b) => b.localeCompare(a))];
  }, []);

  // Extract unique areas from projects
  const availableAreas = useMemo(() => {
    const areas = projects.map(proj => proj.area);
    return ['all', ...Array.from(new Set(areas))];
  }, []);
  
  // Filter projects by status, year, and area
  const filteredProjects = projects.filter(proj => {
    const currentStatus = getStatusFromFilter(activeFilter);
    const statusMatch = currentStatus === 'all' || proj.status === currentStatus;
    const yearMatch = selectedYear === 'all' || proj.year === selectedYear;
    const areaMatch = selectedArea === 'all' || proj.area === selectedArea;
    return statusMatch && yearMatch && areaMatch;
  });

  // Calculate counts based on current year and area filter
  const activeCount = projects.filter(p => {
    const yearMatch = selectedYear === 'all' || p.year === selectedYear;
    const areaMatch = selectedArea === 'all' || p.area === selectedArea;
    return p.status === 'in-progress' && yearMatch && areaMatch;
  }).length;
  
  const completedCount = projects.filter(p => {
    const yearMatch = selectedYear === 'all' || p.year === selectedYear;
    const areaMatch = selectedArea === 'all' || p.area === selectedArea;
    return p.status === 'completed' && yearMatch && areaMatch;
  }).length;

  const plannedCount = projects.filter(p => {
    const yearMatch = selectedYear === 'all' || p.year === selectedYear;
    const areaMatch = selectedArea === 'all' || p.area === selectedArea;
    return p.status === 'planned' && yearMatch && areaMatch;
  }).length;

  const totalCount = projects.filter(p => {
    const yearMatch = selectedYear === 'all' || p.year === selectedYear;
    const areaMatch = selectedArea === 'all' || p.area === selectedArea;
    return yearMatch && areaMatch;
  }).length;

  // Determine which filters to show based on URL parameter
  const showAllFilters = !typeParam || typeParam === 'all';
  const showActiveFilters = typeParam === 'active';
  const showCompletedFilters = typeParam === 'completed';
  const showPlannedFilters = typeParam === 'planned';

  // Preserve scroll position on filter change
  useEffect(() => {
    if (containerRef.current && scrollPositionRef.current > 0) {
      window.scrollTo({ top: scrollPositionRef.current, behavior: 'auto' });
      scrollPositionRef.current = 0;
    }
  }, [filteredProjects]);

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
    <section className="relative pb-20 lg:pb-28 overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-125 h-125 bg-cyan-500/5 dark:bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

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
                All Projects ({totalCount})
              </span>
            </button>
            
            <button
              onClick={() => handleFilterChange(() => setLocalFilter('active'))}
              className={`cursor-pointer px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === 'active'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/40'
                  : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600'
              }`}
            >
              <span className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                Active Projects ({activeCount})
              </span>
            </button>
            
            <button
              onClick={() => handleFilterChange(() => setLocalFilter('completed'))}
              className={`cursor-pointer px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === 'completed'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/40'
                  : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600'
              }`}
            >
              <span className="flex items-center gap-2">
                <FolderKanban className="w-4 h-4" />
                Completed Projects ({completedCount})
              </span>
            </button>

            <button
              onClick={() => handleFilterChange(() => setLocalFilter('planned'))}
              className={`cursor-pointer px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === 'planned'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/40'
                  : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-600'
              }`}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Planned Projects ({plannedCount})
              </span>
            </button>
          </motion.div>
        )}

        {/* Show project count for active/completed/planned URLs */}
        {(showActiveFilters || showCompletedFilters || showPlannedFilters) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg">
              {showActiveFilters && (
                <>
                  <Rocket className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {activeCount} Active {activeCount === 1 ? 'Project' : 'Projects'}
                  </span>
                </>
              )}
              {showCompletedFilters && (
                <>
                  <FolderKanban className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {completedCount} Completed {completedCount === 1 ? 'Project' : 'Projects'}
                  </span>
                </>
              )}
              {showPlannedFilters && (
                <>
                  <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {plannedCount} Planned {plannedCount === 1 ? 'Project' : 'Projects'}
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

        {/* Area Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center items-center gap-3 mb-12"
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Area:</span>
          {availableAreas.map((area) => (
            <button
              key={area}
              onClick={() => handleFilterChange(() => setSelectedArea(area))}
              className={`cursor-pointer px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedArea === area
                  ? 'bg-pink-600 dark:bg-pink-500 text-white shadow-lg shadow-pink-500/40'
                  : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-pink-300 dark:hover:border-pink-600'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                {area === 'all' ? 'All Areas' : area}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={containerRef}
          key={`${activeFilter}-${selectedYear}-${selectedArea}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                layout
                layoutId={String(project.id)}
                exit="exit"
                custom={index}
                className="relative h-full"
                style={{ perspective: 1000 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <FolderKanban className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const StatusIcon = statusConfig[project.status].icon;
  const ProjectIcon = project.icon;

  return (
    <div className="group relative h-full rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-all duration-300 hover:bg-white/85 dark:hover:bg-gray-900/85 active:bg-white/85 dark:active:bg-gray-900/85 hover:border-blue-400/70 dark:hover:border-blue-500/70 active:border-blue-400/70 dark:active:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/15 active:shadow-2xl active:shadow-blue-500/25 dark:active:shadow-blue-400/15 cursor-pointer">
      {/* Content Container */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        {/* Icon and Status */}
        <div className="flex items-start justify-between mb-4">
          {/* Icon with glass effect */}
          <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-linear-to-br from-blue-500/90 to-cyan-500/90 backdrop-blur-sm text-white shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110 group-active:rotate-3">
            <ProjectIcon className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110 group-active:scale-110" />
            <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Status Badge */}
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border backdrop-blur-md ${
            project.status === 'completed' 
              ? 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/30'
              : project.status === 'in-progress'
              ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/30'
              : 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/30'
          }`}>
            <StatusIcon className="w-3.5 h-3.5" />
            <span className="capitalize whitespace-nowrap">{statusConfig[project.status].label}</span>
          </div>
        </div>

        {/* Title and Year */}
        <div className="mb-3">
          <div className="flex items-baseline justify-between gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-active:text-blue-600 dark:group-active:text-blue-400 transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
            {project.year && (
              <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 shrink-0">
                {project.year}
              </span>
            )}
          </div>
        </div>

        {/* Area Tag */}
        <div className="mb-4">
          <div className="inline-block px-3 py-1.5 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              {project.area}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-gray-500/10 text-gray-600 dark:text-gray-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* View Project Button */}
            {project.projectLink && (
              <button 
                onClick={() => window.open(project.projectLink, '_blank')}
                className="group/btn relative inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-300/50 dark:border-white/30 hover:border-gray-400/70 dark:hover:border-white/50 active:border-gray-400/70 dark:active:border-white/50 text-gray-900 dark:text-white font-semibold rounded-xl shadow-lg shadow-gray-400/20 dark:shadow-black/40 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-black/60 active:shadow-xl active:shadow-gray-500/30 dark:active:shadow-black/60 transition-all duration-300 overflow-hidden w-full cursor-pointer"
              >
                {/* Glass shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-300/40 dark:via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative text-sm">View Project</span>
                <ExternalLink className="relative w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-60 group-active:opacity-60 transition-opacity duration-500 pointer-events-none`}></div>
      
      {/* Animated border glow */}
      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 blur-sm"></div>
      </div>
    </div>
  );
};
