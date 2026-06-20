import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Advisory Board Members',
  description: 'Redirect to the CredenceX Advisory Board members section.',
  path: '/board-of-members',
  noIndex: true,
});

export default function BoardOfMembersPage() {
  redirect('/advisory-board#advisory-board-members');
}
