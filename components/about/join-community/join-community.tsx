'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { joinCommunityContent } from '@/config/about/join-community';

export default function JoinResearchCommunity() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {joinCommunityContent.title.split(' Research Community')[0]} <span className="text-blue-600 dark:text-blue-400">Research Community</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {joinCommunityContent.description}
            </p>
          </motion.div>
          {/* Buttons Only, with Animation */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-8">
            <Link href={joinCommunityContent.buttons.careers.href} passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/40 dark:shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/40 transition-all duration-300 text-base whitespace-nowrap cursor-pointer overflow-hidden"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">{joinCommunityContent.buttons.careers.text}</span>
              </motion.a>
            </Link>
            <Link href={joinCommunityContent.buttons.contact.href} passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-linear-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/40 dark:shadow-purple-400/30 hover:shadow-xl hover:shadow-purple-500/50 dark:hover:shadow-purple-400/40 transition-all duration-300 text-base whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2"><Mail className="w-5 h-5" /> {joinCommunityContent.buttons.contact.text}</span>
              </motion.a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
