'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { WorkCulture } from '@/config/careers/culture';

interface CultureCardProps {
  culture: WorkCulture;
  index: number;
}

export default function CultureCard({ culture, index }: CultureCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden hover:border-cyan-400/70 dark:hover:border-cyan-500/70 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 bg-linear-to-br from-cyan-500/20 to-teal-500/20 overflow-hidden">
          {!imageError ? (
            <Image
              src={culture.image}
              alt={culture.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-cyan-500 dark:text-cyan-400 opacity-50" />
            </div>
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {culture.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {culture.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
