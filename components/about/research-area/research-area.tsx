'use client';

import { motion } from 'framer-motion';
import { researchAreas } from '@/config/about/research-areas';
import styles from './research-area.module.css';

export default function ResearchArea() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.08 } }
    };

    const getCardVariants = {
        hidden: (custom: number) => {
            const column = custom % 3;
            return {
                opacity: 0,
                y: 60,
                x: column === 0 ? -20 : column === 2 ? 20 : 0,
                scale: 0.9,
                rotateX: 10,
            };
        },
        visible: () => ({
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        })
    };

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-slate-950 dark:via-black dark:to-gray-950">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-0 -left-40 w-96 h-96 bg-linear-to-br from-blue-100/30 via-cyan-100/20 to-transparent dark:from-blue-900/20 dark:via-cyan-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-40 w-96 h-96 bg-linear-to-bl from-purple-100/30 via-indigo-100/20 to-transparent dark:from-purple-900/20 dark:via-indigo-900/10 rounded-full blur-3xl" />
                
                {/* Dot Pattern */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="research-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#research-dots)" />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div 
                        variants={fadeInUp}
                        className="flex justify-center mb-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg">
                            <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 shadow-sm shadow-blue-500/50" />
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                Research Areas
                            </span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2 
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        Core Research Areas
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                        variants={fadeInUp}
                        className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    >
                        Exploring cutting-edge technologies to build safer, smarter, and more trustworthy AI systems for tomorrow
                    </motion.p>
                </motion.div>

                {/* Research Grid */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {researchAreas.map((area, index) => {
                        const Icon = area.icon;
                        
                        return (
                            <motion.div
                                key={area.id}
                                custom={index}
                                variants={getCardVariants}
                                whileInView="visible"
                                initial="hidden"
                                viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                                whileHover={{ 
                                    y: -12,
                                    scale: 1.02,
                                    transition: { 
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }
                                }}
                                whileTap={{ 
                                    y: -8,
                                    scale: 0.98,
                                    transition: { duration: 0.2 }
                                }}
                                className="group relative touch-manipulation"
                                style={{ perspective: "1000px" }}
                            >
                                {/* Glass Card */}
                                <div className="relative h-full p-8 pb-12 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-300/60 dark:border-gray-700/60 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 hover:border-blue-400/50 dark:hover:border-blue-500/50 active:shadow-2xl active:shadow-blue-500/20 dark:active:shadow-blue-400/20 active:border-blue-400/50 dark:active:border-blue-500/50">
                                    {/* Gradient Background Overlay */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${area.gradient} opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500`}></div>
                                    
                                    {/* Shine Effect on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500">
                                        <div className={`absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/20 dark:via-white/10 to-transparent skew-x-12 ${styles.shineEffect}`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon and Number Row */}
                                        <div className="flex items-center justify-between mb-5">
                                            {/* Icon on Left */}
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg group-hover:scale-110 group-active:scale-110 transition-all duration-300">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            
                                            {/* Number Badge on Right */}
                                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold text-lg group-hover:bg-linear-to-br group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white group-hover:rotate-3 group-hover:scale-110 group-active:bg-linear-to-br group-active:from-blue-500 group-active:to-cyan-500 group-active:text-white group-active:rotate-3 group-active:scale-110 transition-all duration-300">
                                                {String(area.id).padStart(2, '0')}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-active:text-blue-600 dark:group-active:text-blue-400 transition-colors duration-300">
                                            {area.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                            {area.description}
                                        </p>
                                    </div>

                                    {/* Bottom Border Accent */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-blue-500 to-cyan-500 group-hover:w-full group-active:w-full transition-all duration-500"></div>

                                    {/* Corner Decoration */}
                                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-blue-500/30 dark:border-blue-400/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-purple-500/30 dark:border-purple-400/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
