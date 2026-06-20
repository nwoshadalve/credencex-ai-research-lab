'use client';

import Link from 'next/link';
import { Play } from 'lucide-react';
import { m } from 'framer-motion';
import { heroContent } from '@/config/home/hero-content';
import { researchUseSafetyCueShort } from '@/config/common/disclaimers';
import { useMotionSafe } from '@/lib/motion';

export default function HeroSection() {
    const { reduceMotion, instantTransition, defaultTransition } = useMotionSafe();

    const fadeInUp = reduceMotion
        ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
        : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };

    const staggerContainer = reduceMotion
        ? { initial: {}, animate: {} }
        : { initial: {}, animate: { transition: { staggerChildren: 0.1 } } };

    const bgTransition = reduceMotion ? instantTransition : { duration: 2, ease: 'easeOut' as const };
    const contentTransition = reduceMotion ? instantTransition : defaultTransition;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-950">
            <div className="absolute inset-0 overflow-hidden">
                <m.div
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={bgTransition}
                    className="absolute inset-0"
                >
                    <div className="absolute top-10 -left-10 w-150 h-150 bg-linear-to-br from-blue-100/40 via-cyan-100/30 to-transparent dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-10 -right-10 w-175 h-175 bg-linear-to-tl from-indigo-100/40 via-purple-100/30 to-transparent dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-transparent rounded-full blur-3xl" />
                </m.div>

                {!reduceMotion &&
                    [
                        { x: '12%', y: '18%', width: 220, height: 140, rotate: -8, delay: 0.5 },
                        { x: '72%', y: '12%', width: 200, height: 160, rotate: 6, delay: 0.7 },
                        { x: '18%', y: '68%', width: 180, height: 120, rotate: 12, delay: 0.9 },
                        { x: '68%', y: '62%', width: 210, height: 130, rotate: -6, delay: 1.1 },
                    ].map((card, i) => (
                        <m.div
                            key={`card-${i}`}
                            className="absolute backdrop-blur-2xl hidden md:block"
                            style={{ left: card.x, top: card.y }}
                            initial={{ opacity: 0, scale: 0.8, rotate: 0, y: 50 }}
                            animate={{ opacity: 1, scale: 1, rotate: card.rotate, y: 0 }}
                            transition={{ duration: 1.5, delay: card.delay, ease: 'easeOut' }}
                        >
                            <div
                                className="rounded-3xl bg-linear-to-br from-white/40 via-white/20 to-white/10 dark:from-white/10 dark:to-white/5 border-2 border-gray-300/50 dark:border-white/20 shadow-2xl shadow-gray-400/30 dark:shadow-black/30"
                                style={{ width: card.width, height: card.height }}
                            />
                        </m.div>
                    ))}

                <div className="absolute inset-0 opacity-30 dark:opacity-20">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400/40 dark:text-gray-600/60" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {!reduceMotion &&
                    [
                        { x: '15%', y: '25%', size: 8, delay: 0.6, color: 'from-blue-400/40 to-cyan-400/40 dark:from-blue-500/50 dark:to-cyan-500/50' },
                        { x: '70%', y: '75%', size: 7, delay: 1.6, color: 'from-cyan-400/40 to-purple-400/40 dark:from-cyan-500/50 dark:to-purple-500/50' },
                    ].map((orb, i) => (
                        <m.div
                            key={`orb-${i}`}
                            className="absolute rounded-full"
                            style={{ left: orb.x, top: orb.y, width: orb.size, height: orb.size }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: orb.delay, ease: 'easeOut' }}
                        >
                            <div className={`w-full h-full rounded-full bg-linear-to-br ${orb.color} blur-sm`} />
                        </m.div>
                    ))}

                {!reduceMotion && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 dark:opacity-20">
                        {[
                            { x1: '10%', y1: '20%', x2: '30%', y2: '40%', delay: 0.8 },
                            { x1: '70%', y1: '25%', x2: '90%', y2: '45%', delay: 1.0 },
                        ].map((line, i) => (
                            <m.line
                                key={`line-${i}`}
                                x1={line.x1}
                                y1={line.y1}
                                x2={line.x2}
                                y2={line.y2}
                                stroke="url(#accentGradient)"
                                strokeWidth="1"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.6 }}
                                transition={{ duration: 1.5, delay: line.delay, ease: 'easeInOut' }}
                            />
                        ))}
                        <defs>
                            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" className="text-blue-400 dark:text-blue-500" stopColor="currentColor" stopOpacity="0.5" />
                                <stop offset="100%" className="text-cyan-400 dark:text-cyan-500" stopColor="currentColor" stopOpacity="0.5" />
                            </linearGradient>
                        </defs>
                    </svg>
                )}
            </div>

            <m.div
                className="relative z-10 max-w-6xl mx-auto px-6 py-20 lg:py-32"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                <m.div
                    className="flex justify-center mb-8"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={contentTransition}
                >
                    <div className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-linear-to-r from-white/35 via-white/25 to-white/35 dark:from-white/12 dark:via-white/8 dark:to-white/12 backdrop-blur-xl border border-gray-300/50 dark:border-white/25 shadow-lg shadow-gray-300/25 dark:shadow-black/30 hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-50/20 via-cyan-50/20 to-purple-50/20 dark:from-blue-500/5 dark:via-cyan-500/5 dark:to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-2 h-2 rounded-full shrink-0">
                            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-400 via-cyan-400 to-purple-400 blur-sm" />
                            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 to-cyan-500" />
                        </div>
                        <span className="relative text-sm md:text-base font-medium bg-linear-to-r from-gray-700 via-gray-900 to-gray-800 dark:from-gray-100 dark:via-white dark:to-gray-200 bg-clip-text text-transparent">
                            {heroContent.badge.text}
                        </span>
                        <div className="relative w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors shrink-0">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </m.div>

                <m.div
                    className="text-center max-w-5xl mx-auto mb-10"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ ...contentTransition, delay: reduceMotion ? 0 : 0.2 }}
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
                        <span className="block text-gray-900 dark:text-white mb-4">
                            {heroContent.heading.title}
                        </span>
                    </h1>
                    <m.p
                        className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-4 px-4 font-body"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ ...contentTransition, delay: reduceMotion ? 0 : 0.3 }}
                    >
                        {heroContent.description}
                    </m.p>
                    <m.p
                        className="text-sm text-center text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 px-4 font-body"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ ...contentTransition, delay: reduceMotion ? 0 : 0.35 }}
                    >
                        {researchUseSafetyCueShort}
                    </m.p>
                </m.div>

                <m.div
                    className="flex justify-center"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ ...contentTransition, delay: reduceMotion ? 0 : 0.4 }}
                >
                    <Link
                        href={heroContent.cta.href}
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-300/50 dark:border-white/30 hover:border-gray-400/70 dark:hover:border-white/50 text-gray-900 dark:text-white font-heading font-semibold rounded-xl shadow-lg shadow-gray-400/20 dark:shadow-black/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-300/40 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        <span className="relative">{heroContent.cta.text}</span>
                        <Play size={18} className="relative group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                    </Link>
                </m.div>
            </m.div>
        </section>
    );
}
