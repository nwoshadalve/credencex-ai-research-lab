'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { LookingFor } from '@/config/careers/looking-for';

interface QualityCardProps {
  quality: LookingFor;
  index: number;
}

export default function QualityCard({ quality, index }: QualityCardProps) {
  const IconComponent = Icons[quality.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:border-blue-400/60 dark:hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
        {/* Icon */}
        <div className="mb-4 w-14 h-14 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {quality.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {quality.description}
        </p>
      </div>
    </motion.div>
  );
}
