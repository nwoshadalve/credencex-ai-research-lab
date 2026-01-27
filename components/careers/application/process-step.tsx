'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  step: {
    id: number;
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
  const IconComponent = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon Container */}
        <div className="relative z-10 w-24 h-24 mb-6 rounded-2xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/30 dark:to-teal-500/30 backdrop-blur-xl border border-emerald-400/30 dark:border-emerald-500/40 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
          
          {/* Step Number Badge */}
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center shadow-lg">
            {step.id}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
