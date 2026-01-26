'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import TeamsSection from '@/components/teams/teams-section';

function TeamsContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'research';

  // Get hero content based on type
  const getHeroContent = () => {
    if (type === 'development') {
      return {
        ...pageHeroContent.developmentTeam,
        badge: { text: 'Development Team', color: 'cyan' as const }
      };
    }
    return {
      ...pageHeroContent.researchTeam,
      badge: { text: 'Research Team', color: 'blue' as const }
    };
  };

  return (
    <>
      <PageHero content={getHeroContent()} />
      <TeamsSection teamType={type as 'research' | 'development'} />
    </>
  );
}

export default function TeamsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamsContent />
    </Suspense>
  );
}
