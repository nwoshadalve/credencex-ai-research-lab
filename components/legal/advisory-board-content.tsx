'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DocBlock } from '@/config/legal/types';
import { advisoryBoardConfig, advisoryBoardMembers } from '@/config/legal/advisory-board';
import { Calendar, Building2, Check, UserCircle, Mail, Linkedin, GraduationCap, Globe, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRenderText } from '@/lib/render-text';
import { useState } from 'react';

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

function AdvisoryMemberCard({ member }: { member: typeof advisoryBoardMembers[number] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-all duration-300 hover:bg-white/85 dark:hover:bg-gray-900/85 hover:border-blue-400/70 dark:hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/15">
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Avatar */}
        <div className="mb-4 flex justify-center">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-linear-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            {!imageError ? (
              <Image
                src={member.avatar}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover object-top scale-110"
                onError={() => setImageError(true)}
              />
            ) : (
              <UserCircle className="w-16 h-16 text-blue-500 dark:text-blue-400" />
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {member.name}
        </h3>

        {/* Position */}
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-1 font-medium">
          {member.position}
        </p>

        {/* Institute */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
          {member.institute}
        </p>

        {/* Expertise badge */}
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center text-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-700/40">
            {member.expertise}
          </span>
        </div>

        {/* Bio */}
        <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-4 flex-1">
          {member.bio}
        </p>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{member.email}</span>
        </div>

        {/* Social links */}
        <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {member.socialLinks.linkedin && (
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
            )}
            {member.socialLinks.googleScholar && (
              <a href={member.socialLinks.googleScholar} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <GraduationCap className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
            )}
            {member.socialLinks.github && (
              <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
            )}
            {member.socialLinks.orcid && (
              <a href={member.socialLinks.orcid} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                <span className="text-xs font-bold text-gray-600 dark:text-gray-400 px-0.5">iD</span>
              </a>
            )}
            {member.socialLinks.website && (
              <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

export default function AdvisoryBoardContent() {
  const renderText = useRenderText();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  const config = advisoryBoardConfig;

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
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Governance</span>
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

        {/* Policy Sections (all except last "Advisory Board Members") */}
        <div className="space-y-8 mb-16">
          {config.sections.slice(0, -1).map((section, index) => (
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
                  {section.subsections.map((sub, si) => (
                    <div key={si} className="pl-4 border-l-2 border-indigo-200 dark:border-indigo-800/50">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">{sub.title}</h3>
                      <RenderBlocks blocks={sub.blocks} renderText={renderText} />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Advisory Board Members section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            {config.sections[config.sections.length - 1].title}
          </h2>
          <RenderBlocks
            blocks={config.sections[config.sections.length - 1].blocks}
            renderText={renderText}
          />
        </motion.div>

        {/* Member cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advisoryBoardMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <AdvisoryMemberCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Effective Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-4 p-6 rounded-xl backdrop-blur-2xl bg-indigo-50/70 dark:bg-indigo-900/20 border-2 border-indigo-200/70 dark:border-indigo-800/30 shadow-lg"
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
