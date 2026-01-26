'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PageHeroContent } from '@/config/common/page-hero';

interface PageHeroProps {
  content: PageHeroContent;
}

export default function PageHero({ content }: PageHeroProps) {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <section className="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-slate-950 dark:via-black dark:to-gray-950">
            {/* iOS 26 Glass Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle Gradient Layers */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute -top-40 left-1/4 w-96 h-96 bg-linear-to-br from-indigo-200/30 via-blue-200/20 to-transparent dark:from-indigo-800/25 dark:via-blue-800/15 dark:to-transparent rounded-full blur-3xl" />
                    <div className="absolute top-1/3 -right-32 w-80 h-80 bg-linear-to-bl from-violet-200/25 via-purple-200/15 to-transparent dark:from-violet-800/20 dark:via-purple-800/10 dark:to-transparent rounded-full blur-3xl" />
                </motion.div>

                {/* Layered Glass Panels - iOS Style */}
                <div className="absolute inset-0 hidden lg:block">
                    {[
                        { x: '8%', y: '35%', width: 280, height: 180, rotate: -6, delay: 0.4 },
                        { x: '65%', y: '40%', width: 320, height: 200, rotate: 4, delay: 0.6 },
                    ].map((panel, i) => (
                        <motion.div
                            key={`panel-${i}`}
                            className="absolute"
                            style={{ left: panel.x, top: panel.y }}
                            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: panel.rotate }}
                            transition={{ duration: 1.2, delay: panel.delay, ease: "easeOut" }}
                        >
                            <div 
                                className="rounded-4xl bg-linear-to-br from-white/50 via-white/30 to-white/20 dark:from-white/15 dark:via-white/8 dark:to-white/5 backdrop-blur-3xl border border-gray-200/60 dark:border-white/20 shadow-xl"
                                style={{ 
                                    width: panel.width, 
                                    height: panel.height,
                                }}
                            >
                                {/* Inner glow effect */}
                                <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-blue-400/5 via-purple-400/5 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dot Pattern - iOS Style */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                </div>

                {/* Accent Light Spots */}
                {[
                    { x: '20%', y: '35%', size: 120, delay: 0.5 },
                    { x: '75%', y: '55%', size: 100, delay: 0.7 },
                ].map((spot, i) => (
                    <motion.div
                        key={`spot-${i}`}
                        className="absolute rounded-full"
                        style={{ 
                            left: spot.x, 
                            top: spot.y,
                            width: spot.size,
                            height: spot.size,
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: spot.delay, ease: "easeOut" }}
                    >
                        <div className="w-full h-full rounded-full bg-linear-to-br from-cyan-300/20 via-blue-300/15 to-indigo-300/10 dark:from-cyan-600/15 dark:via-blue-600/10 dark:to-indigo-600/5 blur-2xl" />
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <motion.div 
                className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-16 lg:pt-28 lg:pb-20"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <div className="text-center">
                    {/* Badge */}
                    {content.badge && (
                        <motion.div 
                            className="flex justify-center mb-6"
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg shadow-gray-200/50 dark:shadow-black/40 hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden">
                                {/* Gradient Background Layer */}
                                <div className="absolute inset-0 bg-linear-to-r from-blue-50/20 via-indigo-50/20 to-purple-50/20 dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Animated Pulse Dot */}
                                <motion.div 
                                    className="relative w-1.5 h-1.5 rounded-full shrink-0"
                                    initial={{ opacity: 0.8 }}
                                    animate={{ opacity: [0.8, 1, 0.8] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-400 via-indigo-400 to-purple-400 blur-sm" />
                                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 to-indigo-500 shadow-sm shadow-blue-500/50" />
                                </motion.div>
                                
                                {/* Text */}
                                <span className="relative text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {content.badge.text}
                                </span>
                                
                                {/* Sparkles Icon */}
                                <Sparkles className="relative w-4 h-4 text-blue-500 dark:text-indigo-400 shrink-0" />
                                
                                {/* Animated Border Glow */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-full border border-blue-400/30 dark:border-indigo-400/30 blur-sm" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white"
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {content.title}
                    </motion.h1>
                    
                    {/* Subtitle */}
                    {content.subtitle && (
                        <motion.p 
                            className="text-lg md:text-xl font-medium mb-6 text-gray-600 dark:text-gray-400"
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {content.subtitle}
                        </motion.p>
                    )}

                    {/* Description */}
                    <motion.p 
                        className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto"
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {content.description}
                    </motion.p>
                </div>
            </motion.div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white dark:from-black to-transparent pointer-events-none" />
        </section>
    );
}
