'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { workCulture } from '@/config/careers/culture';
import { useState } from 'react';
import { Sparkles, Target, Users2 } from 'lucide-react';

const icons = [Sparkles, Users2, Target, Users2];

export default function CultureSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="culture" className="relative py-20 lg:py-28 overflow-hidden bg-linear-to-br from-gray-50 via-white to-slate-50 dark:from-gray-950 dark:via-black dark:to-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl" />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
            Our Culture & Values
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience a workplace where innovation thrives and every voice matters
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="max-w-5xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {workCulture.map((culture, index) => {
              const Icon = icons[index];
              const isActive = activeTab === index;
              
              return (
                <motion.button
                  key={culture.id}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-400 dark:hover:border-emerald-500'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    {culture.title}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Content Card */}
              <div className="relative p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-emerald-500/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl" />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="relative inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30"
                >
                  {(() => {
                    const Icon = icons[activeTab];
                    return <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />;
                  })()}
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  {workCulture[activeTab].title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
                >
                  {workCulture[activeTab].description}
                </motion.p>

                {/* Progress Indicator */}
                <div className="relative flex gap-2">
                  {workCulture.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeTab
                          ? 'bg-linear-to-r from-emerald-500 to-teal-500 flex-1'
                          : 'bg-gray-200 dark:bg-gray-700 w-8'
                      }`}
                      animate={{
                        scale: index === activeTab ? [1, 1.05, 1] : 1
                      }}
                      transition={{
                        repeat: index === activeTab ? Infinity : 0,
                        duration: 2
                      }}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="relative flex gap-3 mt-8">
                  <button
                    onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : workCulture.length - 1))}
                    className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-medium cursor-pointer"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveTab((prev) => (prev < workCulture.length - 1 ? prev + 1 : 0))}
                    className="px-6 py-3 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 font-medium cursor-pointer"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
