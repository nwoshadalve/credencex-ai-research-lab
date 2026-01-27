'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp, Play } from 'lucide-react';
import { getLatestNews, formatNewsDate, newsTypeConfig } from '@/config/home/news';
import Button from '@/components/common/button';
import styles from './news.module.css';

export default function NewsSection() {
    const latestNews = getLatestNews(5);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
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
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Latest News from <span className="text-blue-600 dark:text-blue-400">SentinelX</span>
                    </h2>
                    
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Stay updated with our recent achievements, announcements, and research breakthroughs
                    </p>
                </motion.div>

                {/* News List - Single Column */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-5"
                >
                    {latestNews.map((news) => {
                        const TypeIcon = newsTypeConfig[news.type].icon;
                        const isExpanded = expandedId === news.id;

                        return (
                            <motion.article
                                key={news.id}
                                variants={cardVariants}
                                className="relative"
                            >
                                {/* Card Container */}
                                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-300/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl hover:border-indigo-400/50 dark:hover:border-indigo-500/50 active:shadow-2xl active:border-indigo-400/50 dark:active:border-indigo-500/50 active:scale-[0.99] hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                                    
                                    {/* Gradient Background Overlay on Hover */}
                                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-pink-500/5 to-violet-500/5 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Shine Effect on Hover/Active */}
                                    <div className="absolute inset-0 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className={`absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/20 dark:via-white/10 to-transparent skew-x-12 ${styles.animateShine}`}></div>
                                    </div>

                                    <div className="relative p-6">
                                        {/* Header Row */}
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            {/* Type Badge */}
                                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-300/50 dark:border-gray-600/50">
                                                <TypeIcon className={`w-3.5 h-3.5 ${newsTypeConfig[news.type].color}`} />
                                                <span className={`text-xs font-medium ${newsTypeConfig[news.type].color}`}>
                                                    {newsTypeConfig[news.type].label}
                                                </span>
                                            </div>

                                            {/* Date and Read Time */}
                                            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    <span>{news.readTime}</span>
                                                </div>
                                                <span className="hidden sm:inline">•</span>
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
                                            onClick={() => toggleExpand(news.id)}
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
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* View All News Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center mt-12"
                >
                    <Link href="/news">
                        <Button
                            variant="glass"
                            size="lg"
                            icon={Play}
                            iconPosition="right"
                        >
                            View All News
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}