'use client';

import { motion, AnimatePresence } from 'framer-motion';
import TeamMemberCard from './team-member-card';
import { TeamMember } from '@/config/teams/research-team';
import { DevelopmentTeamMember } from '@/config/teams/development-team';

interface TeamGridProps {
  members: (TeamMember | DevelopmentTeamMember)[];
  isResearch: boolean;
  selectedRole: string;
}

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

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function TeamGrid({ members, isResearch }: TeamGridProps) {
  if (members.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <p className="text-lg text-gray-600 dark:text-gray-400">
          No team members found in this category
        </p>
      </motion.div>
    );
  }

  // Group members by role
  const groupedMembers = members.reduce((acc, member) => {
    const role = member.role;
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(member);
    return acc;
  }, {} as Record<string, (TeamMember | DevelopmentTeamMember)[]>);

  // Get role order (maintain order as they appear in the full team list)
  const roleOrder = Object.keys(groupedMembers);

  return (
    <div className="space-y-12">
      <AnimatePresence mode="sync">
        {roleOrder.map((role) => (
          <motion.section
            key={role}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-6"
          >
            {/* Role Section Header */}
            <div className="relative">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                {role}
                <span className="ml-2 sm:ml-3 text-sm sm:text-base md:text-lg font-normal text-gray-500 dark:text-gray-400">
                  ({groupedMembers[role].length})
                </span>
              </h3>
              <div className="mt-2">
                <div className="h-px bg-linear-to-r from-gray-300 via-gray-200 to-transparent dark:from-gray-700 dark:via-gray-800 dark:to-transparent" />
              </div>
            </div>

            {/* Team Members Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {groupedMembers[role].map((member, index) => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    custom={index}
                    layout
                    layoutId={String(member.id)}
                    exit="exit"
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="relative h-full"
                  >
                    <TeamMemberCard member={member} isResearch={isResearch} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.section>
        ))}
      </AnimatePresence>
    </div>
  );
}
