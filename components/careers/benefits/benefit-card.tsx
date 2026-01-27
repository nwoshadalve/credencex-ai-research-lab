'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { CareerBenefit } from '@/config/careers/benefits';

interface BenefitCardProps {
  benefit: CareerBenefit;
  index: number;
}

export default function BenefitCard({ benefit, index }: BenefitCardProps) {
  const IconComponent = Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 p-6 hover:border-emerald-400/70 dark:hover:border-emerald-500/70 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
        {/* Icon */}
        <div className="mb-4 w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/30 dark:to-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
          {benefit.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}
