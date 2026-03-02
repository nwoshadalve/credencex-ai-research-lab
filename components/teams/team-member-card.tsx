'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, X, Globe, GraduationCap, BookOpen, Award, UserCircle, Linkedin, Github, Code } from 'lucide-react';
import { TeamMember } from '@/config/teams/research-team';
import { DevelopmentTeamMember } from '@/config/teams/development-team';

interface TeamMemberCardProps {
  member: TeamMember | DevelopmentTeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-all duration-300 hover:bg-white/85 dark:hover:bg-gray-900/85 active:bg-white/85 dark:active:bg-gray-900/85 hover:border-blue-400/70 dark:hover:border-blue-500/70 active:border-blue-400/70 dark:active:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/15 active:shadow-2xl active:shadow-blue-500/25 dark:active:shadow-blue-400/15 cursor-pointer">
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Avatar */}
        <div className="mb-4 flex justify-center">
          <div className="relative w-24 h-24 aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 group-active:scale-105 transition-transform duration-300 flex items-center justify-center">
            {!imageError ? (
              <Image
                src={member.avatar}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover object-top scale-110"
                onError={() => setImageError(true)}
                unoptimized={member.avatar.toLowerCase().endsWith('.jfif') || member.avatar.toLowerCase().endsWith('.webp')}
              />
            ) : (
              <UserCircle className="w-16 h-16 text-blue-500 dark:text-blue-400" />
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-active:text-blue-600 dark:group-active:text-blue-400 transition-colors duration-300">
          {member.name}
        </h3>

        {/* Position */}
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-2 font-medium">
          {member.position}
        </p>

        {/* Institute/Department */}
        <p className="text-xs text-gray-600 dark:text-gray-400 text-center mb-4">
          {'institute' in member ? member.institute : member.department}
        </p>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 mb-4 text-xs text-gray-600 dark:text-gray-400">
          <Mail className="w-3.5 h-3.5" />
          <span className="truncate">{member.email}</span>
        </div>

        {/* Social Links */}
        <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {member.socialLinks.linkedin && (
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
            )}
            {member.socialLinks.twitter && (
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <X className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300" />
              </a>
            )}
            {member.socialLinks.github && (
              <a
                href={member.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
            )}
            {'googleScholar' in member.socialLinks && member.socialLinks.googleScholar && (
              <a
                href={member.socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <GraduationCap className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
              </a>
            )}
            {'researchGate' in member.socialLinks && member.socialLinks.researchGate && (
              <a
                href={member.socialLinks.researchGate}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <BookOpen className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400" />
              </a>
            )}
            {'orcid' in member.socialLinks && member.socialLinks.orcid && (
              <a
                href={member.socialLinks.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Award className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400" />
              </a>
            )}
            {'stackoverflow' in member.socialLinks && member.socialLinks.stackoverflow && (
              <a
                href={member.socialLinks.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Code className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400" />
              </a>
            )}
            {(('website' in member.socialLinks && member.socialLinks.website) || ('portfolio' in member.socialLinks && member.socialLinks.portfolio)) && (
              <a
                href={'website' in member.socialLinks ? member.socialLinks.website : ('portfolio' in member.socialLinks ? member.socialLinks.portfolio : undefined)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-60 group-active:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
