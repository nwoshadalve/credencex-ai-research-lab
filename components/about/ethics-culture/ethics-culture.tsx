'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ethicsCultureContent } from '@/config/about/ethics-culture';

export default function EthicsCulture() {
    const pathname = usePathname();

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
    };

    const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.15 } },
    };

    const { governance, culture, collaboration } = ethicsCultureContent;

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-linear-to-br from-slate-50 via-white to-gray-50 dark:from-slate-950 dark:via-black dark:to-gray-950">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-linear-to-bl from-indigo-100/30 via-blue-100/20 to-transparent dark:from-indigo-900/20 dark:via-blue-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-linear-to-br from-violet-100/30 via-purple-100/20 to-transparent dark:from-violet-900/20 dark:via-purple-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                    className="space-y-16"
                >
                    {/* ── Section Header ── */}
                    <div className="text-center">
                        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg">
                                <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 shadow-sm shadow-indigo-500/50" />
                                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Ethics & Culture
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                        >
                            Principles That Shape Our Practice
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
                        >
                            Governance, openness, and research culture at CredenceX
                        </motion.p>
                    </div>

                    {/* ── Content ── */}
                    <motion.div variants={staggerContainer} className="space-y-12">

                        {/* Governance, Ethics & Openness */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                {governance.badge}
                            </h3>

                            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {governance.description}
                            </p>

                            {/* Learn more links */}
                            <div className="space-y-2">
                                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    {governance.learnMoreLabel}
                                </p>
                                <ul className="space-y-2 pl-1">
                                    {governance.links.map((link) => {
                                        const isSelf =
                                            pathname === link.href ||
                                            pathname === `${link.href}/`;
                                        return (
                                            <li key={link.href} className="flex items-center gap-2.5">
                                                <div className="w-1 h-1 rounded-full bg-indigo-500/60 dark:bg-indigo-400/50 shrink-0" />
                                                {isSelf ? (
                                                    <span className="text-base text-gray-700 dark:text-gray-300">
                                                        {link.label}
                                                    </span>
                                                ) : (
                                                    <Link
                                                        href={link.href}
                                                        className="text-base text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline underline-offset-4 transition-colors duration-200"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Institutional note */}
                            <div className="p-5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40">
                                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        Institutional status:{' '}
                                    </span>
                                    {governance.institutionalNote}{' '}
                                    {pathname !== governance.institutionalLinkHref ? (
                                        <Link
                                            href={governance.institutionalLinkHref}
                                            className="text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
                                        >
                                            See the {governance.institutionalLinkLabel} page for details.
                                        </Link>
                                    ) : (
                                        <span className="text-gray-600 dark:text-gray-400">
                                            See the {governance.institutionalLinkLabel} page for details.
                                        </span>
                                    )}
                                </p>
                            </div>
                        </motion.div>

                        {/* Divider */}
                        <motion.div variants={fadeInUp} className="relative py-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-800" />
                            </div>
                            <div className="relative flex justify-center">
                                <div className="px-4 bg-linear-to-r from-transparent via-slate-50 to-transparent dark:via-black">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <div className="w-2 h-2 rounded-full bg-violet-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Our Research Culture */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="space-y-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                    {culture.badge}
                                </h3>
                                <p className="text-lg text-gray-500 dark:text-gray-400 italic">
                                    {culture.subtitle}
                                </p>
                            </div>

                            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {culture.description}
                            </p>

                            {/* Motivations */}
                            <div className="space-y-3">
                                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    {culture.motivationsLabel}
                                </p>
                                <ul className="space-y-4">
                                    {culture.motivations.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="shrink-0 mt-1.5 w-5 h-5 rounded-md bg-violet-500/10 dark:bg-violet-400/15 border border-violet-200/50 dark:border-violet-700/40 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
                                            </div>
                                            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Divider before collaboration section */}
                        <motion.div variants={fadeInUp} className="relative py-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-800" />
                            </div>
                            <div className="relative flex justify-center">
                                <div className="px-4 bg-linear-to-r from-transparent via-slate-50 to-transparent dark:via-black">
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <div className="w-2 h-2 rounded-full bg-violet-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Collaborate With Us */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="space-y-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                    {collaboration.title}
                                </h3>
                            </div>

                            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                {collaboration.description}
                            </p>

                            <div className="space-y-3">
                                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    {collaboration.modesLabel}
                                </p>
                                <ul className="space-y-4">
                                    {collaboration.modes.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="shrink-0 mt-1.5 w-5 h-5 rounded-md bg-indigo-500/10 dark:bg-indigo-400/15 border border-indigo-200/50 dark:border-indigo-700/40 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                                            </div>
                                            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                {collaboration.closing}
                            </p>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
