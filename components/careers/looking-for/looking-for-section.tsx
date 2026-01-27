'use client';

import { motion } from 'framer-motion';
import { lookingForQualities } from '@/config/careers/looking-for';
import QualityCard from './quality-card';

export default function LookingForSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            What We&apos;re Looking For
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We seek talented individuals who share our passion for advancing AI technology and making a positive impact
          </p>
        </motion.div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lookingForQualities.map((quality, index) => (
            <QualityCard key={quality.id} quality={quality} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
