import { joinCommunityContent } from '@/config/about/join-community';
import InViewMotion from '@/components/common/in-view-motion';
import JoinCommunityButtons from './join-community-buttons';

export default function JoinResearchCommunity() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-900 section-defer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative max-w-3xl mx-auto text-center">
        <InViewMotion className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {joinCommunityContent.title.split(' Research Community')[0]}{' '}
            <span className="text-blue-600 dark:text-blue-400">Research Community</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {joinCommunityContent.description}
          </p>
        </InViewMotion>
        <InViewMotion delay={0.1}>
          <JoinCommunityButtons />
        </InViewMotion>
      </div>
    </section>
  );
}
