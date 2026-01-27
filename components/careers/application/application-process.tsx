'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import ProcessStep from './process-step';
import { applicationProcessSteps } from '@/config/careers/application';

export default function ApplicationProcess() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-black">
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
            Application Process
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our hiring process is designed to be transparent and find the best fit for both you and our team
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-500/20 via-teal-500/40 to-cyan-500/20 dark:from-emerald-500/30 dark:via-teal-500/50 dark:to-cyan-500/30" style={{ top: '64px' }} />

          {applicationProcessSteps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-linear-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 rounded-2xl p-8 border border-emerald-200/60 dark:border-emerald-800/60">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Ready to Join Our Team?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
              We&apos;re always looking for talented individuals who are passionate about AI and want to make a difference.
            </p>
            <a
              href="#positions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30 relative overflow-hidden group"
            >
              {/* Glass shimmer effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <span className="relative">View Open Positions</span>
              <Send className="relative w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
