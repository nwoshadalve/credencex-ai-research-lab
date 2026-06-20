'use client';

import { useEffect, useMemo, useState } from 'react';
import Loader from '@/components/common/loader';
import TeamFilters from './team-filters';
import TeamGrid from './team-grid';
import type { TeamMember, TeamRole } from '@/config/teams/research-team';
import type { DevelopmentTeamMember, DevelopmentRole } from '@/config/teams/development-team';

interface TeamsSectionProps {
  teamType: 'research' | 'development';
}

type ResearchTeamModule = typeof import('@/config/teams/research-team');
type DevelopmentTeamModule = typeof import('@/config/teams/development-team');

export default function TeamsSection({ teamType }: TeamsSectionProps) {
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [researchModule, setResearchModule] = useState<ResearchTeamModule | null>(null);
  const [developmentModule, setDevelopmentModule] = useState<DevelopmentTeamModule | null>(null);

  const isResearch = teamType === 'research';

  useEffect(() => {
    let cancelled = false;

    async function loadTeamModule() {
      if (isResearch) {
        const mod = await import('@/config/teams/research-team');
        if (!cancelled) setResearchModule(mod);
      } else {
        const mod = await import('@/config/teams/development-team');
        if (!cancelled) setDevelopmentModule(mod);
      }
    }

    void loadTeamModule();
    return () => {
      cancelled = true;
    };
  }, [isResearch]);

  const allMembers = useMemo(() => {
    if (isResearch) return researchModule?.researchTeam ?? [];
    return developmentModule?.developmentTeam ?? [];
  }, [isResearch, researchModule, developmentModule]);

  const roles = useMemo(() => {
    if (isResearch) return researchModule?.getAllRoles() ?? [];
    return developmentModule?.getAllDevelopmentRoles() ?? [];
  }, [isResearch, researchModule, developmentModule]);

  const filteredMembers = useMemo(() => {
    if (selectedRole === 'all') return allMembers;
    if (isResearch && researchModule) {
      return researchModule.getTeamByRole(selectedRole as TeamRole);
    }
    if (developmentModule) {
      return developmentModule.getDevelopmentTeamByRole(selectedRole as DevelopmentRole);
    }
    return allMembers;
  }, [selectedRole, allMembers, isResearch, researchModule, developmentModule]);

  const getRoleCount = (role: string): number => {
    if (isResearch && researchModule) {
      return researchModule.getTeamByRole(role as TeamRole).length;
    }
    if (developmentModule) {
      return developmentModule.getDevelopmentTeamByRole(role as DevelopmentRole).length;
    }
    return 0;
  };

  const isLoading = isResearch ? !researchModule : !developmentModule;

  return (
    <section className="relative pb-20 lg:pb-28 overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-900 section-defer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {isLoading ? (
          <Loader variant="inline" label="Loading team members..." />
        ) : (
          <>
            <TeamFilters
              selectedRole={selectedRole}
              roles={roles}
              allMembersCount={allMembers.length}
              onRoleSelect={setSelectedRole}
              getRoleCount={getRoleCount}
            />
            <TeamGrid members={filteredMembers as (TeamMember | DevelopmentTeamMember)[]} />
          </>
        )}
      </div>
    </section>
  );
}
