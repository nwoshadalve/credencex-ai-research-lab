'use client';

import { motion } from 'framer-motion';
import { missionVisionContent } from '@/config/about/mission';
import { Check } from 'lucide-react';

export default function MissionVision() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };

    const fadeInLeft = {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 }
    };

    const fadeInRight = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 }
    };

    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } }
    };

    const MissionIcon = missionVisionContent.mission.icon;
    const VisionIcon = missionVisionContent.vision.icon;

    return (
        <section id="mission" className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-br from-blue-100/40 via-indigo-100/30 to-transparent dark:from-blue-900/20 dark:via-indigo-900/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -right-40 w-96 h-96 bg-linear-to-bl from-purple-100/40 via-violet-100/30 to-transparent dark:from-purple-900/20 dark:via-violet-900/15 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-32">
                {/* Mission Section - Visual Left, Content Right */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left: Visual Design */}
                    <motion.div 
                        variants={fadeInLeft}
                        transition={{ duration: 0.6 }}
                        className="relative order-1"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Main Glass Container */}
                            <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-400/20 dark:via-indigo-400/20 dark:to-purple-400/20 backdrop-blur-3xl border border-blue-200/50 dark:border-blue-400/30 shadow-2xl">
                                {/* Inner gradient glow */}
                                <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-blue-400/5 via-indigo-400/5 to-purple-400/5" />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute top-12 right-12 w-32 h-32 rounded-3xl bg-linear-to-br from-white/60 via-white/40 to-white/20 dark:from-white/15 dark:via-white/10 dark:to-white/5 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-xl"
                                animate={{ 
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ 
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute bottom-16 left-12 w-24 h-24 rounded-2xl bg-linear-to-br from-white/60 via-white/40 to-white/20 dark:from-white/15 dark:via-white/10 dark:to-white/5 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-xl"
                                animate={{ 
                                    y: [0, 20, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{ 
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />

                            {/* Center Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-32 h-32 rounded-3xl bg-linear-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-400/30 dark:to-indigo-400/30 backdrop-blur-xl border border-blue-300/50 dark:border-blue-400/40 shadow-2xl flex items-center justify-center"
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <MissionIcon className="w-16 h-16 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
                                </motion.div>
                            </div>

                            {/* Decorative Dots */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
                                    style={{
                                        top: `${30 + i * 20}%`,
                                        left: `${20 + i * 15}%`,
                                    }}
                                    animate={{
                                        opacity: [0.3, 0.8, 0.3],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.4
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        variants={staggerContainer}
                        className="space-y-6 order-2"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg">
                                <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 shadow-sm shadow-blue-500/50" />
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {missionVisionContent.mission.badge}
                                </span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h2 
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
                        >
                            {missionVisionContent.mission.title}
                        </motion.h2>

                        {/* Description */}
                        <motion.p 
                            variants={fadeInUp}
                            className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                            {missionVisionContent.mission.description}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div 
                            variants={staggerContainer}
                            className="space-y-3 pt-4"
                        >
                            {missionVisionContent.mission.highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-lg bg-blue-500/10 dark:bg-blue-400/20 border border-blue-200/50 dark:border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/20 dark:group-hover:bg-blue-400/30 transition-colors duration-300">
                                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                                        {highlight}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Vision Section - Content Left, Visual Right */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left: Content */}
                    <motion.div
                        variants={staggerContainer}
                        className="space-y-6 order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg">
                                <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-violet-500 shadow-sm shadow-purple-500/50" />
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {missionVisionContent.vision.badge}
                                </span>
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.h2 
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
                        >
                            {missionVisionContent.vision.title}
                        </motion.h2>

                        {/* Description */}
                        <motion.p 
                            variants={fadeInUp}
                            className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                            {missionVisionContent.vision.description}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div 
                            variants={staggerContainer}
                            className="space-y-3 pt-4"
                        >
                            {missionVisionContent.vision.highlights.map((highlight, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-lg bg-purple-500/10 dark:bg-purple-400/20 border border-purple-200/50 dark:border-purple-400/30 flex items-center justify-center group-hover:bg-purple-500/20 dark:group-hover:bg-purple-400/30 transition-colors duration-300">
                                        <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" strokeWidth={2.5} />
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                                        {highlight}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Visual Design */}
                    <motion.div 
                        variants={fadeInRight}
                        transition={{ duration: 0.6 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Main Glass Container */}
                            <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-purple-500/10 via-violet-500/10 to-pink-500/10 dark:from-purple-400/20 dark:via-violet-400/20 dark:to-pink-400/20 backdrop-blur-3xl border border-purple-200/50 dark:border-purple-400/30 shadow-2xl">
                                <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-purple-400/5 via-violet-400/5 to-pink-400/5" />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute top-16 left-12 w-28 h-28 rounded-3xl bg-linear-to-br from-white/60 via-white/40 to-white/20 dark:from-white/15 dark:via-white/10 dark:to-white/5 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-xl"
                                animate={{ 
                                    y: [0, 20, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{ 
                                    duration: 5.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute bottom-12 right-16 w-24 h-24 rounded-2xl bg-linear-to-br from-white/60 via-white/40 to-white/20 dark:from-white/15 dark:via-white/10 dark:to-white/5 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-xl"
                                animate={{ 
                                    y: [0, -15, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ 
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                }}
                            />

                            {/* Center Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className="w-32 h-32 rounded-3xl bg-linear-to-br from-purple-500/20 to-violet-500/20 dark:from-purple-400/30 dark:to-violet-400/30 backdrop-blur-xl border border-purple-300/50 dark:border-purple-400/40 shadow-2xl flex items-center justify-center"
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <VisionIcon className="w-16 h-16 text-purple-600 dark:text-purple-400" strokeWidth={1.5} />
                                </motion.div>
                            </div>

                            {/* Decorative Dots */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400"
                                    style={{
                                        top: `${40 + i * 15}%`,
                                        right: `${25 + i * 12}%`,
                                    }}
                                    animate={{
                                        opacity: [0.3, 0.8, 0.3],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.5
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
