'use client';

import React, { useState } from 'react';
import { AdvisoryMember } from '@/config/legal/advisory-board';
import { UserCircle, Mail, Linkedin, GraduationCap, Globe, Github } from 'lucide-react';
import Image from 'next/image';

export default function AdvisoryMemberCard({ member }: { member: AdvisoryMember }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-all duration-300 hover:bg-white/85 dark:hover:bg-gray-900/85 hover:border-blue-400/70 dark:hover:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/15">
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="mb-4 flex justify-center">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-linear-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            {member.avatar && !imageError ? (
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

        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {member.name}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-1 font-medium">
          {member.position}
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
          {member.institute}
        </p>

        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center text-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-700/40">
            {member.expertise}
          </span>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-4 flex-1">
          {member.bio}
        </p>

        <div className="flex items-center justify-center gap-2 mb-4 text-xs text-gray-500 dark:text-gray-400">
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{member.email}</span>
        </div>

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

      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
