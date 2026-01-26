'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getFeaturedProjects, ProjectStatus } from '@/config/home/projects';
import styles from './projects.module.css';
import { CheckCircle2, Clock, Calendar, Play, ExternalLink } from 'lucide-react';
import Button from '@/components/common/button';

export default function ProjectsSection() {
    const featuredProjects = getFeaturedProjects();

    const getStatusIcon = (status: ProjectStatus) => {
        switch (status) {
            case 'completed':
                return <CheckCircle2 className="w-4 h-4" />;
            case 'in-progress':
                return <Clock className="w-4 h-4" />;
            case 'planned':
                return <Calendar className="w-4 h-4" />;
            default:
                return null;
        }
    };

    const getStatusColor = (status: ProjectStatus) => {
        switch (status) {
            case 'completed':
                return 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/30';
            case 'in-progress':
                return 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/30';
            case 'planned':
                return 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/30';
            default:
                return '';
        }
    };

    const getCardVariants = {
        hidden: (custom: number) => {
            // Stagger from left to right based on index
            const isLeftCard = custom % 2 === 0;
            return {
                opacity: 0,
                x: isLeftCard ? -60 : 60,
                y: 30,
                scale: 0.95,
            };
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 20,
                duration: 0.8,
            }
        }
    };

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-900">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-125 h-125 bg-cyan-500/5 dark:bg-cyan-500/8 rounded-full blur-3xl"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Featured Projects at <span className="text-blue-600 dark:text-blue-400">SentinelX</span>
                    </h2>
                    
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Showcasing our cutting-edge research projects that push the boundaries of AI innovation and real-world impact
                    </p>
                </motion.div>

                {/* Projects Grid - Different Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {featuredProjects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <motion.div
                                key={project.id}
                                custom={index}
                                variants={getCardVariants}
                                whileInView="visible"
                                initial="hidden"
                                viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                                whileHover={{ 
                                    y: -10,
                                    transition: { 
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 25
                                    }
                                }}
                                whileTap={{ 
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                                className="group relative touch-manipulation cursor-pointer"
                                style={{ perspective: "1000px" }}
                            >
                                {/* Glass Card with Horizontal Layout */}
                                <div className="relative h-full rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-all duration-300 hover:bg-white/85 dark:hover:bg-gray-900/85 hover:border-blue-400/70 dark:hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/15 active:bg-white/85 dark:active:bg-gray-900/85 active:border-blue-400/70 dark:active:border-blue-500/70 active:shadow-2xl active:shadow-blue-500/25 dark:active:shadow-blue-400/15">
                                    {/* Content Container */}
                                    <div className="relative z-10 p-6 md:p-8">
                                        {/* Top Section: Icon, Status, and Area */}
                                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4 md:mb-6">
                                            <div className="flex items-center gap-3 md:gap-4 flex-1">
                                                {/* Icon with glass effect */}
                                                <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-linear-to-br from-blue-500/90 to-cyan-500/90 backdrop-blur-sm text-white shadow-lg shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110 group-active:rotate-3">
                                                    <Icon className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110 group-active:scale-110" />
                                                    <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                                
                                                {/* Area Tag */}
                                                <div className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                                                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 line-clamp-1">
                                                        {project.area}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            {/* Status Badge */}
                                            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border backdrop-blur-md ${getStatusColor(project.status)} shrink-0`}>
                                                {getStatusIcon(project.status)}
                                                <span className="capitalize whitespace-nowrap">{project.status.replace('-', ' ')}</span>
                                            </div>
                                        </div>

                                        {/* Title and Year */}
                                        <div className="mb-3 md:mb-4">
                                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-active:text-blue-600 dark:group-active:text-blue-400 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                {project.year && (
                                                    <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 shrink-0">
                                                        {project.year}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-4 md:mb-6">
                                            {project.description}
                                        </p>

                                        {/* Technologies and View Project */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
                                            {/* Technologies */}
                                            {project.technologies && (
                                                <div className="flex flex-wrap gap-2 flex-1">
                                                    {project.technologies.slice(0, 4).map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2.5 md:px-3 py-1 text-xs font-semibold rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.technologies.length > 4 && (
                                                        <span className="px-2.5 md:px-3 py-1 text-xs font-semibold rounded-lg bg-gray-500/10 text-gray-600 dark:text-gray-400">
                                                            +{project.technologies.length - 4}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                            
                                            {/* View Project Button - Hero Style */}
                                            <button 
                                                onClick={() => project.projectLink && window.open(project.projectLink, '_blank')}
                                                className="group/btn relative inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-300/50 dark:border-white/30 hover:border-gray-400/70 dark:hover:border-white/50 active:border-gray-400/70 dark:active:border-white/50 text-gray-900 dark:text-white font-semibold rounded-xl shadow-lg shadow-gray-400/20 dark:shadow-black/40 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-black/60 active:shadow-xl active:shadow-gray-500/30 dark:active:shadow-black/60 transition-all duration-300 overflow-hidden shrink-0 w-full sm:w-auto cursor-pointer">
                                                {/* Glass shimmer effect */}
                                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-300/40 dark:via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full group-active/btn:translate-x-full transition-transform duration-700"></div>
                                                
                                                <span className="relative text-sm">View Project</span>
                                                <ExternalLink className="relative w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Subtle gradient overlay on hover */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-60 group-active:opacity-60 transition-opacity duration-500 pointer-events-none`}></div>
                                    
                                    {/* Shimmer Effect on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/20 dark:via-white/10 to-transparent skew-x-12 ${styles.shimmerEffect}`}></div>
                                    </div>
                                    
                                    {/* Animated border glow */}
                                    <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 blur-sm"></div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center mt-16"
                >
                    <Link href="/projects?type=all">
                        <Button 
                            variant="glass" 
                            size="lg"
                            icon={Play}
                            iconPosition="right"
                        >
                            View All Projects
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}