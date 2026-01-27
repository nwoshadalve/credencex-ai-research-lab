import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import TeamsSection from '@/components/teams/teams-section';

type TeamsPageProps = {
  searchParams?: Promise<{ type?: string }> | { type?: string };
};

export default async function TeamsPage({ searchParams }: TeamsPageProps) {
  const sp = await Promise.resolve(searchParams);
  const type = sp?.type || 'research';

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
    <main>
      <PageHero content={getHeroContent()} />
      <TeamsSection teamType={type as 'research' | 'development'} />
    </main>
  );
}
