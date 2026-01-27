'use client';

import { motion } from 'framer-motion';

interface TeamFiltersProps {
  selectedRole: string;
  roles: string[];
  allMembersCount: number;
  onRoleSelect: (role: string) => void;
  getRoleCount: (role: string) => number;
}

export default function TeamFilters({
  selectedRole,
  roles,
  allMembersCount,
  onRoleSelect,
  getRoleCount,
}: TeamFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3 mb-12"
    >
      {/* All Members Button */}
      <button
        onClick={() => onRoleSelect('all')}
        className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
          selectedRole === 'all'
            ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/40'
            : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600'
        }`}
      >
        All Members ({allMembersCount})
      </button>

      {/* Role Filter Buttons */}
      {roles.map((role) => {
        const count = getRoleCount(role);
        return (
          <button
            key={role}
            onClick={() => onRoleSelect(role)}
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
  );
}
