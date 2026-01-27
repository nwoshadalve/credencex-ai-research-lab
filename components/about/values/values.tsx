'use client';

import { motion } from 'framer-motion';
import { coreValuesContent } from '@/config/about/values';
import { useState } from 'react';

export default function CoreValues() {
    const [activeValue, setActiveValue] = useState<string | null>(null);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.15 } }
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

                    <motion.h2 
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        {coreValuesContent.title}
                    </motion.h2>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    >
                        {coreValuesContent.description}
                    </motion.p>
                </motion.div>

                {/* Interactive Timeline */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500 via-pink-500 to-rose-500 opacity-30" />

                    {/* Values List */}
                    <div className="space-y-8">
                        {coreValuesContent.values.map((value, index) => {
                            const Icon = value.icon;
                            const isActive = activeValue === value.id;
                            
                            return (
                                <motion.div
                                    key={value.id}
                                    variants={fadeInUp}
                                    onClick={() => setActiveValue(isActive ? null : value.id)}
                                    className="relative cursor-pointer group"
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Icon Node */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className={`relative z-10 shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                                                isActive 
                                                    ? 'bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                                                    : 'bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 group-hover:border-purple-400 dark:group-hover:border-purple-500'
                                            }`}
                                        >
                                            <Icon className={`w-7 h-7 transition-colors duration-300 ${
                                                isActive ? 'text-white' : 'text-purple-600 dark:text-purple-400'
                                            }`} strokeWidth={1.5} />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex-1 pb-8">
                                            <div
                                                className={`p-6 rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-white/5 border transition-all duration-300 ${
                                                    isActive 
                                                        ? 'border-purple-300/60 dark:border-purple-500/30 shadow-lg shadow-purple-500/10' 
                                                        : 'border-gray-200/60 dark:border-white/10 hover:border-purple-300/60 dark:hover:border-purple-500/30'
                                                }`}
                                            >
                                                <div className="flex items-start justify-between gap-4 mb-3">
                                                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                                                        isActive 
                                                            ? 'text-purple-600 dark:text-purple-400'
                                                            : 'text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400'
                                                    }`}>
                                                        {value.title}
                                                    </h3>
                                                    <div className={`shrink-0 text-4xl font-bold transition-all duration-300 ${
                                                        isActive 
                                                            ? 'text-purple-300 dark:text-purple-600 opacity-100'
                                                            : 'text-gray-200 dark:text-gray-800 opacity-50 group-hover:opacity-100'
                                                    }`}>
                                                        {String(index + 1).padStart(2, '0')}
                                                    </div>
                                                </div>

                                                <motion.div
                                                    initial={false}
                                                    animate={{ 
                                                        height: isActive ? 'auto' : 0,
                                                        opacity: isActive ? 1 : 0
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                                        {value.description}
                                                    </p>
                                                </motion.div>

                                                {/* Click Indicator */}
                                                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                                                    <span>{isActive ? 'Click to collapse' : 'Click to learn more'}</span>
                                                    <motion.svg
                                                        animate={{ rotate: isActive ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </motion.svg>
                                                </div>

                                                {/* Progress Bar */}
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: isActive ? 1 : 0 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="h-1 bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full mt-4 origin-left"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
