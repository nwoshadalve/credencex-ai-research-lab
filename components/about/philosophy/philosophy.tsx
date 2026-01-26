'use client';

import { motion } from 'framer-motion';
import { philosophyContent } from '@/config/about/philosophy';

export default function Philosophy() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.15 } }
    };

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-slate-950 dark:via-black dark:to-gray-950">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-blue-100/30 via-indigo-100/20 to-transparent dark:from-blue-900/20 dark:via-indigo-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-bl from-purple-100/30 via-violet-100/20 to-transparent dark:from-purple-900/20 dark:via-violet-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="space-y-16"
                >
                    {/* Section Header */}
                    <div className="text-center">
                        {/* Badge */}
                        <motion.div 
                            variants={fadeInUp}
                            className="flex justify-center mb-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg">
                                <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 shadow-sm shadow-blue-500/50" />
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {philosophyContent.badge}
                                </span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h2 
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                        >
                            {philosophyContent.title}
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p 
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
                        >
                            {philosophyContent.subtitle}
                        </motion.p>
                    </div>

                    {/* Content Container */}
                    <motion.div 
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        {/* Philosophy Section */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                {philosophyContent.philosophy.title}
                            </h3>
                            <div className="space-y-4">
                                {philosophyContent.philosophy.content.map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        variants={fadeInUp}
                                        className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Divider */}
                        <motion.div 
                            variants={fadeInUp}
                            className="relative py-8"
                        >
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <div className="px-4 bg-linear-to-r from-transparent via-slate-50 to-transparent dark:via-black">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* What Drives Us Section */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                {philosophyContent.whatDrivesUs.title}
                            </h3>
                            <div className="space-y-4">
                                {philosophyContent.whatDrivesUs.content.map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        variants={fadeInUp}
                                        className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
