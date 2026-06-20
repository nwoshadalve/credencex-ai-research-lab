'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { getFeaturedNews } from '@/config/home/news';
import NewsCard from '@/components/news/news-card';
import { useNewsModal } from '@/components/news/use-news-modal';
import NewsModal from '@/components/news/news-modal';
import Button from '@/components/common/button';

export default function NewsSection() {
    const featuredNews = getFeaturedNews(4);
    const { selectedNews, openNews, closeNews } = useNewsModal('/');

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
        <section id="home-news" className="relative py-32 px-6 overflow-hidden bg-linear-to-br from-gray-50 via-white to-slate-50 dark:from-gray-950 dark:via-black dark:to-slate-950 section-defer">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/3 w-150 h-150 bg-violet-500/5 dark:bg-violet-500/3 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

            <div className="relative max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Latest News from <span className="text-blue-600 dark:text-blue-400">CredenceX</span>
                    </h2>
                    
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Featured announcements, events, and research updates from the lab
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-5"
                >
                    {featuredNews.map((news) => (
                        <motion.article key={news.id} variants={cardVariants} className="relative">
                            <NewsCard news={news} showFeaturedBadge onOpen={openNews} />
                        </motion.article>
                    ))}
                </motion.div>

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

            <NewsModal news={selectedNews} onClose={closeNews} />
        </section>
    );
}
