'use client';

import { motion } from 'framer-motion';
import { howWeWorkContent } from '@/config/about/how-we-work';

export default function HowWeWork() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } },
    };

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-slate-950 dark:via-black dark:to-gray-950">
            {/* Background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 left-1/3 w-96 h-96 bg-linear-to-br from-blue-100/40 via-indigo-100/25 to-transparent dark:from-blue-900/20 dark:via-indigo-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-linear-to-bl from-cyan-100/30 via-blue-100/20 to-transparent dark:from-cyan-900/15 dark:via-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg">
                            <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 shadow-sm shadow-blue-500/50" />
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                {howWeWorkContent.badge}
                            </span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        {howWeWorkContent.title}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3"
                    >
                        {howWeWorkContent.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-base text-gray-500 dark:text-gray-500 max-w-2xl mx-auto"
                    >
                        {howWeWorkContent.description}
                    </motion.p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={staggerContainer}
                    className="space-y-5"
                >
                    {howWeWorkContent.steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.id}
                                variants={fadeInUp}
                                className="group flex items-start gap-5 p-6 rounded-2xl bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/70 dark:border-gray-800/70 hover:border-blue-300/60 dark:hover:border-blue-700/50 hover:shadow-md hover:shadow-blue-500/5 dark:hover:shadow-blue-400/5 transition-all duration-300"
                            >
                                {/* Step number + icon column */}
                                <div className="shrink-0 flex flex-col items-center gap-2 pt-0.5">
                                    <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/15 dark:to-indigo-400/15 border border-blue-200/50 dark:border-blue-700/40 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-indigo-500/20 dark:group-hover:from-blue-400/25 dark:group-hover:to-indigo-400/25 transition-all duration-300">
                                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                                    </div>
                                    {index < howWeWorkContent.steps.length - 1 && (
                                        <div className="w-px flex-1 min-h-6 bg-linear-to-b from-blue-300/40 to-transparent dark:from-blue-700/30" />
                                    )}
                                </div>

                                {/* Text content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline gap-3 mb-1.5">
                                        <span className="text-xs font-semibold text-blue-500/70 dark:text-blue-400/60 tabular-nums select-none">
                                            {String(step.id).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
