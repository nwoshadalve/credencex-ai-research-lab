'use client';

import { motion } from 'framer-motion';
import { coreValuesContent } from '@/config/about/values';

export default function CoreValues() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-br from-violet-100/30 via-purple-100/20 to-transparent dark:from-violet-900/20 dark:via-purple-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-40 w-96 h-96 bg-linear-to-bl from-pink-100/30 via-rose-100/20 to-transparent dark:from-pink-900/20 dark:via-rose-900/10 rounded-full blur-3xl" />
                
                {/* Dot Pattern */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="values-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#values-dots)" />
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
                            <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-pink-500 shadow-sm shadow-purple-500/50" />
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {coreValuesContent.badge}
                            </span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2 
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        {coreValuesContent.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p 
                        variants={fadeInUp}
                        className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    >
                        {coreValuesContent.description}
                    </motion.p>
                </motion.div>

                {/* Values Cards Grid */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {coreValuesContent.values.map((value) => {
                        const Icon = value.icon;
                        
                        return (
                            <motion.div
                                key={value.id}
                                variants={fadeInUp}
                                whileHover={{ y: -4, scale: 1.01 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="group relative"
                            >
                                {/* Glass Card */}
                                <div className="relative h-full p-8 rounded-3xl bg-linear-to-br from-white/70 via-white/50 to-white/30 dark:from-white/10 dark:via-white/5 dark:to-white/5 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-xl transition-all duration-300 overflow-hidden">
                                    {/* Hover Gradient Overlay (less intense) */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                                    
                                    {/* Shine Effect (removed for subtlety) */}
                                    {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-0 -left-full h-full w-1/2 bg-linear-to-r from-transparent via-white/20 dark:via-white/10 to-transparent skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]" />
                                    </div> */}

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon Container */}
                                        <div
                                            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-linear-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20 border border-purple-200/50 dark:border-purple-400/30 shadow-lg transition-all duration-300"
                                        >
                                            <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" strokeWidth={1.5} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {value.description}
                                        </p>

                                        {/* Bottom Accent Line (less animation) */}
                                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 group-hover:w-1/2 transition-all duration-300 rounded-b-3xl" />
                                    </div>

                                    {/* Corner Decorations (less animation) */}
                                    <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-purple-500/30 dark:border-purple-400/30 rounded-tr-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-pink-500/30 dark:border-pink-400/30 rounded-bl-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
