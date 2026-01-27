'use client';

import { motion } from 'framer-motion';
import { termsConditionsConfig } from '@/config/legal/terms-conditions';
import { Calendar, FileText, Check } from 'lucide-react';
import Link from 'next/link';

export default function TermsContent() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-br from-indigo-100/30 via-purple-100/20 to-transparent dark:from-indigo-900/20 dark:via-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-linear-to-bl from-violet-100/30 via-fuchsia-100/20 to-transparent dark:from-violet-900/20 dark:via-fuchsia-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.1 } }
          }}
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg">
              <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Legal Agreement
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {termsConditionsConfig.lastUpdated}</span>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {termsConditionsConfig.introduction.description}
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {termsConditionsConfig.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 md:p-8 rounded-2xl backdrop-blur-2xl bg-white/70 dark:bg-white/3 border-2 border-gray-300/70 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>

              {/* Main Content */}
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              {/* Subsections */}
              {section.subsections && (
                <div className="mt-6 space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="pl-4 border-l-2 border-indigo-200 dark:border-indigo-800/50">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {subsection.title}
                      </h3>
                      <ul className="space-y-2.5">
                        {subsection.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <div className="shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/20 border border-indigo-300/50 dark:border-indigo-500/30 flex items-center justify-center mt-0.5">
                              <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" strokeWidth={3} />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Effective Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 p-6 rounded-xl backdrop-blur-2xl bg-indigo-50/70 dark:bg-indigo-900/20 border-2 border-indigo-200/70 dark:border-indigo-800/30 shadow-lg"
        >
          <p className="text-sm text-gray-800 dark:text-gray-200 text-center font-medium">
            <span className="font-semibold">Effective Date:</span> {termsConditionsConfig.effectiveDate}
          </p>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
            Questions about our terms of service?
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10">Contact Our Legal Team</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
