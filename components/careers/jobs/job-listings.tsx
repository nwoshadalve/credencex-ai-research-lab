'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, AlertCircle, LucideIcon } from 'lucide-react';
import { jobPositions, getAllDepartments, getAllJobTypes, getJobsCount } from '@/config/careers/jobs';
import JobFilters from './job-filters';
import JobCard from './job-card';

const EmptyState = ({ message, icon: Icon = Briefcase, jobsCount }: { message: string; icon?: LucideIcon; jobsCount?: { total: number; active: number; expired: number } }) => (
  <div className="col-span-full">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-gray-400 dark:text-gray-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {message}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md text-center">
        {jobsCount?.total === 0 
          ? "We're currently not hiring, but check back soon for new opportunities!"
          : "Try adjusting your filters to see more positions"}
      </p>
    </motion.div>
  </div>
);

export default function JobListings() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const departments = getAllDepartments();
  const jobTypes = getAllJobTypes();
  const jobsCount = getJobsCount();

  const filteredJobs = jobPositions.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const typeMatch = selectedType === 'all' || job.type === selectedType;
    return departmentMatch && typeMatch;
  });

  return (
    <section id="positions" className="relative py-20 lg:py-28 overflow-hidden bg-white dark:bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Open Positions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find your next opportunity to make an impact in AI research and development
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <JobFilters
            selectedDepartment={selectedDepartment}
            selectedType={selectedType}
            departments={departments}
            jobTypes={jobTypes}
            onDepartmentChange={setSelectedDepartment}
            onTypeChange={setSelectedType}
          />
        </motion.div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {jobPositions.length === 0 ? (
            <EmptyState message="No Positions Available" icon={AlertCircle} jobsCount={jobsCount} />
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))
          ) : (
            <EmptyState message="No Positions Found" jobsCount={jobsCount} />
          )}
        </div>
      </div>
    </section>
  );
}
