'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Users, Play } from 'lucide-react';
import { getFeaturedPublications, statusConfig, typeConfig, Publication } from '@/config/home/publications';
import Button from '@/components/common/button';
import styles from './publications.module.css';

export default function Publications() {
  const featuredPublications = getFeaturedPublications();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-500/10 dark:bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-125 h-125 bg-violet-500/5 dark:bg-violet-500/8 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Research Publications at <span className="text-indigo-600 dark:text-indigo-400">CredenceX</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge research contributions advancing the field of artificial intelligence
          </p>
        </motion.div>

        {/* Publications Grid - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featuredPublications.map((publication, index) => (
            <PublicationCard 
              key={publication.id} 
              publication={publication} 
              index={index}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>

        {/* View All Research Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link href="/publications?type=all">
            <Button
              variant="glass"
              size="lg"
              icon={Play}
              iconPosition="right"
            >
              View All Research
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

interface PublicationCardProps {
  publication: Publication;
  index: number;
  cardVariants: import('framer-motion').Variants;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication, index, cardVariants }) => {
  const StatusIcon = statusConfig[publication.status].icon;
  const TypeIcon = typeConfig[publication.type].icon;

  return (
    <motion.article
      variants={cardVariants}
      className="relative h-full"
    >
      {/* Card Container */}
      <div className="relative h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300/70 dark:hover:border-gray-600/70 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
        
        {/* Floating decorative element */}
        <div className={`absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl ${styles.floatEffect}`} style={{ animationDelay: `${index * 0.5}s` }} />

        <div className="relative z-10 flex flex-col flex-1">
          {/* Top Row: Type and Status Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {/* Type Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-300/50 dark:border-gray-600/50">
              <TypeIcon className="w-3 h-3 text-gray-600 dark:text-gray-400" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {typeConfig[publication.type].label}
              </span>
            </div>

            {/* Status Badge */}
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-sm border ${
              publication.status === 'published' 
                ? 'bg-green-100/80 dark:bg-green-900/30 border-green-300/50 dark:border-green-700/50'
                : publication.status === 'accepted'
                ? 'bg-blue-100/80 dark:bg-blue-900/30 border-blue-300/50 dark:border-blue-700/50'
                : publication.status === 'in-review'
                ? 'bg-yellow-100/80 dark:bg-yellow-900/30 border-yellow-300/50 dark:border-yellow-700/50'
                : 'bg-purple-100/80 dark:bg-purple-900/30 border-purple-300/50 dark:border-purple-700/50'
            }`}>
              <StatusIcon className={`w-3 h-3 ${statusConfig[publication.status].color}`} />
              <span className={`text-xs font-medium ${statusConfig[publication.status].color}`}>
                {statusConfig[publication.status].label}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
            {publication.title}
          </h3>

          {/* Authors */}
          <div className="flex items-start gap-2 mb-3">
            <Users className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 mt-0.5 shrink-0" />
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
              {publication.authors.join(', ')}
            </p>
          </div>

          {/* Venue */}
          <div className="mb-3 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg border border-indigo-200/60 dark:border-indigo-800/60">
            <p className="text-xs font-semibold text-indigo-900 dark:text-indigo-200 line-clamp-2">
              {publication.venue}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 flex-1">
            {publication.description}
          </p>

          {/* Action Button */}
          {publication.paperLink && (
            <div className="mt-auto">
              <Button
                variant="glass"
                size="sm"
                icon={ExternalLink}
                iconPosition="right"
                onClick={() => window.open(publication.paperLink, '_blank')}
                className="w-full"
              >
                Read Paper
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};
