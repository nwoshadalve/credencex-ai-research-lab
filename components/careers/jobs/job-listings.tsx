'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, AlertCircle, Info, LucideIcon } from 'lucide-react';
import {
  jobPositions,
  getAllCategories,
  getAllJobTypes,
  getJobsCount,
  OPPORTUNITIES_BANNER,
} from '@/config/careers/jobs';
import JobFilters from './job-filters';
import JobCard from './job-card';

const EmptyState = ({
  message,
  icon: Icon = Briefcase,
}: {
  message: string;
  icon?: LucideIcon;
}) => (
  <div className="col-span-full">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{message}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md text-center">
        Try adjusting your filters, or contact us to discuss a collaboration not listed here.
      </p>
    </motion.div>
  </div>
);

export default function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const categories = getAllCategories();
  const jobTypes = getAllJobTypes();
  const jobsCount = getJobsCount();

  const filteredJobs = jobPositions.filter((job) => {
    const categoryMatch = selectedCategory === 'all' || job.category === selectedCategory;
    const typeMatch = selectedType === 'all' || job.type === selectedType;
    return categoryMatch && typeMatch;
  });

  return (
    <section id="positions" className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Join Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A small research lab open to internships, student collaborations, advisors, and focused partnerships
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-800/40">
            <Info className="w-5 h-5 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
            <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">{OPPORTUNITIES_BANNER}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <JobFilters
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            categories={categories}
            jobTypes={jobTypes}
            onCategoryChange={setSelectedCategory}
            onTypeChange={setSelectedType}
          />
        </motion.div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          {jobsCount.total} opportunit{jobsCount.total === 1 ? 'y' : 'ies'} listed
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobPositions.length === 0 ? (
            <EmptyState message="No Opportunities Listed" icon={AlertCircle} />
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => <JobCard key={job.id} job={job} index={index} />)
          ) : (
            <EmptyState message="No Matching Opportunities" />
          )}
        </div>
      </div>
    </section>
  );
}
