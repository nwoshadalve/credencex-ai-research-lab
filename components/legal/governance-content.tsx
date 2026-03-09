'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DocBlock } from '@/config/legal/types';
import { GovernancePageConfig } from '@/config/legal/governance-pages';
import { Calendar, Building2, Check } from 'lucide-react';
import Link from 'next/link';
import { useRenderText } from '@/lib/render-text';

type RenderFn = (text: string) => React.ReactNode;

function RenderBlocks({ blocks, renderText }: { blocks: DocBlock[]; renderText: RenderFn }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {renderText(block.text)}
            </p>
          );
        }
        if (block.type === 'bullets') {
          return (
            <ul key={i} className="space-y-2.5 mb-4">
              {block.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 dark:bg-indigo-400/20 border border-indigo-300/50 dark:border-indigo-500/30 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" strokeWidth={3} />
                  </div>
                  <span>{renderText(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'closing') {
          return (
            <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm italic mt-2 mb-4">
              {renderText(block.text)}
            </p>
          );
        }
        return null;
      })}
    </>
  );
}

interface GovernanceContentProps {
  config: GovernancePageConfig;
}

export default function GovernanceContent({ config }: GovernanceContentProps) {
  const renderText = useRenderText();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-br from-indigo-100/30 via-blue-100/20 to-transparent dark:from-indigo-900/20 dark:via-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-linear-to-bl from-violet-100/30 via-purple-100/20 to-transparent dark:from-violet-900/20 dark:via-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ initial: {}, animate: { transition: { staggerChildren: 0.1 } } }}
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg">
              <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Governance
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {config.lastUpdated}</span>
            </div>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {renderText(config.introduction.description)}
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {config.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 md:p-8 rounded-2xl backdrop-blur-2xl bg-white/70 dark:bg-white/3 border-2 border-gray-300/70 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <RenderBlocks blocks={section.blocks} renderText={renderText} />

              {section.subsections && (
                <div className="mt-6 space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="pl-4 border-l-2 border-indigo-200 dark:border-indigo-800/50">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {subsection.title}
                      </h3>
                      <RenderBlocks blocks={subsection.blocks} renderText={renderText} />
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
            <span className="font-semibold">Effective Date:</span> {config.effectiveDate}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
            {config.cta.question}
          </p>
          <Link
            href={config.cta.href}
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">{config.cta.buttonLabel}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
