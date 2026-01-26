'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X, Globe, GraduationCap, BookOpen, Award, UserCircle, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import { researchTeam, TeamMember, getAllRoles, getTeamByRole, TeamRole } from '@/config/teams/research-team';
import { developmentTeam, DevelopmentTeamMember, getAllDevelopmentRoles, getDevelopmentTeamByRole, DevelopmentRole } from '@/config/teams/development-team';

interface TeamsSectionProps {
  teamType: 'research' | 'development';
}

export default function TeamsSection({ teamType }: TeamsSectionProps) {
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const isResearch = teamType === 'research';
  const allMembers = isResearch ? researchTeam : developmentTeam;
  const roles = isResearch ? getAllRoles() : getAllDevelopmentRoles();

  const filteredMembers = useMemo(() => {
    if (selectedRole === 'all') return allMembers;
    if (isResearch) {
      return getTeamByRole(selectedRole as TeamRole);
    }
    return getDevelopmentTeamByRole(selectedRole as DevelopmentRole);
  }, [selectedRole, allMembers, isResearch]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 60,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 18,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      y: -40,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section className="relative pb-20 lg:pb-28 overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedRole('all')}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
              selectedRole === 'all'
                ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/40'
                : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600'
            }`}
          >
            All Members ({allMembers.length})
          </button>
          {roles.map((role) => {
            const count = isResearch 
              ? getTeamByRole(role as TeamRole).length 
              : getDevelopmentTeamByRole(role as DevelopmentRole).length;
            return (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  selectedRole === role
                    ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/40'
                    : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
              >
                {role} ({count})
              </button>
            );
          })}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                layout
                layoutId={String(member.id)}
                exit="exit"
                className="relative h-full"
              >
                <TeamMemberCard member={member} isResearch={isResearch} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No team members found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface TeamMemberCardProps {
  member: TeamMember | DevelopmentTeamMember;
  isResearch: boolean;
}

function TeamMemberCard({ member, isResearch }: TeamMemberCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative h-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden transition-all duration-300 hover:bg-white/85 dark:hover:bg-gray-900/85 active:bg-white/85 dark:active:bg-gray-900/85 hover:border-blue-400/70 dark:hover:border-blue-500/70 active:border-blue-400/70 dark:active:border-blue-500/70 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/15 active:shadow-2xl active:shadow-blue-500/25 dark:active:shadow-blue-400/15 cursor-pointer">
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Avatar */}
        <div className="mb-4 flex justify-center">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-linear-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 group-active:scale-105 transition-transform duration-300 flex items-center justify-center">
            {!imageError ? (
              <Image
                src={member.avatar}
                alt={member.name}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
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

        {/* Role */}
        <div className="mb-2 text-center">
          <span className="inline-block px-3 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-500/30">
            {member.role}
          </span>
        </div>

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
            {isResearch && 'googleScholar' in member.socialLinks && member.socialLinks.googleScholar && (
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
            {isResearch && 'researchGate' in member.socialLinks && member.socialLinks.researchGate && (
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
            {isResearch && 'orcid' in member.socialLinks && member.socialLinks.orcid && (
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
