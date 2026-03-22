import type { Metadata } from 'next';
import PageHero from '@/components/common/hero';
import { pageHeroContent } from '@/config/common/page-hero';
import { createPageMetadata } from '@/lib/seo';
import BoardOfMembersContent from '@/components/legal/board-of-members-content';

export const metadata: Metadata = createPageMetadata({
  title: 'Board of Members',
  description:
    'Meet the CredenceX Advisory Board members — experts in AI research, clinical medicine, ethics, governance, law, and responsible technology deployment.',
  path: '/board-of-members',
});

export default function BoardOfMembersPage() {
  return (
    <main>
      <PageHero content={pageHeroContent.boardOfMembers} />
      <BoardOfMembersContent />
    </main>
  );
}
