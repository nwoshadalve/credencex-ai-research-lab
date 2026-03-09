import { Metadata } from 'next';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import TeamsSection from '@/components/teams/teams-section';
import { createPageMetadata } from '@/lib/seo';

type TeamsPageProps = {
  searchParams?: Promise<{ type?: string }> | { type?: string };
};

export async function generateMetadata({ searchParams }: TeamsPageProps): Promise<Metadata> {
  const sp = await Promise.resolve(searchParams);
  const type = sp?.type || 'research';

  const isDevTeam = type === 'development';
  const path = isDevTeam ? '/teams?type=development' : '/teams';
  const title = isDevTeam ? 'Development Team' : 'Research Team';
  const description = isDevTeam
    ? 'Meet the CredenceX development team building reliable AI applications, tooling, and deployment-ready systems.'
    : 'Meet the CredenceX research team advancing trustworthy AI, medical imaging, and high-stakes decision support.';
  
  return {
    ...createPageMetadata({
      title,
      description,
      path,
      keywords: isDevTeam
        ? ['development team', 'software engineers', 'AI developers', 'CredenceX team', 'tech team']
        : ['research team', 'AI researchers', 'machine learning experts', 'CredenceX researchers', 'AI scientists'],
    }),
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
