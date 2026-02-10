import { Metadata } from 'next';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import TeamsSection from '@/components/teams/teams-section';

type TeamsPageProps = {
  searchParams?: Promise<{ type?: string }> | { type?: string };
};

export async function generateMetadata({ searchParams }: TeamsPageProps): Promise<Metadata> {
  const sp = await Promise.resolve(searchParams);
  const type = sp?.type || 'research';

  const isDevTeam = type === 'development';
  
  return {
    title: isDevTeam ? 'Development Team - CredenceX AI Research Lab' : 'Research Team - CredenceX AI Research Lab',
    description: isDevTeam 
      ? 'Meet our talented development team at CredenceX AI Research Lab. Expert developers and engineers building cutting-edge AI solutions.'
      : 'Meet our distinguished research team at CredenceX AI Research Lab. Leading experts in artificial intelligence and machine learning research.',
    keywords: isDevTeam
      ? ['development team', 'software engineers', 'AI developers', 'CredenceX team', 'tech team']
      : ['research team', 'AI researchers', 'machine learning experts', 'CredenceX researchers', 'AI scientists'],
    openGraph: {
      title: isDevTeam ? 'Development Team - CredenceX AI Research Lab' : 'Research Team - CredenceX AI Research Lab',
      description: isDevTeam 
        ? 'Meet our talented development team at CredenceX AI Research Lab.'
        : 'Meet our distinguished research team at CredenceX AI Research Lab.',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

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
