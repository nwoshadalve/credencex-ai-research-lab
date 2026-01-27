'use client';

import { motion } from 'framer-motion';
import { JobPosition } from '@/config/careers/jobs';
import { useState } from 'react';
import ApplicationModal from '@/components/careers/application/application-modal';
import JobCardHeader from './job-card-header';
import JobCardDescription from './job-card-description';
import JobCardFooter from './job-card-footer';

interface JobCardProps {
  job: JobPosition;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if deadline has passed
  const isDeadlinePassed = job.applicationDeadline 
    ? new Date(job.applicationDeadline) < new Date() 
    : false;

  const handleApply = () => {
    setIsModalOpen(true);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/70 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden">
        <div className="p-6 flex-1 flex flex-col">
          <JobCardHeader job={job} />
          <JobCardDescription 
            job={job}
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
          />
          <JobCardFooter 
            job={job}
            isDeadlinePassed={isDeadlinePassed}
            onApply={handleApply}
          />
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={job}
      />
    </motion.article>
  );
}
