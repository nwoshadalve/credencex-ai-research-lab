'use client';

import { useState, useMemo } from 'react';
import { researchTeam, getAllRoles, getTeamByRole, TeamRole } from '@/config/teams/research-team';
import { developmentTeam, getAllDevelopmentRoles, getDevelopmentTeamByRole, DevelopmentRole } from '@/config/teams/development-team';
import TeamFilters from './team-filters';
import TeamGrid from './team-grid';

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

  const getRoleCount = (role: string): number => {
    if (isResearch) {
      return getTeamByRole(role as TeamRole).length;
    }
    return getDevelopmentTeamByRole(role as DevelopmentRole).length;
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
        <TeamFilters
          selectedRole={selectedRole}
          roles={roles}
          allMembersCount={allMembers.length}
          onRoleSelect={setSelectedRole}
          getRoleCount={getRoleCount}
        />

        {/* Team Grid */}
        <TeamGrid members={filteredMembers} />
      </div>
    </section>
  );
}
