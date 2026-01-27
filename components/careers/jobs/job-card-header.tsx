import { MapPin, Clock, Briefcase, Calendar } from 'lucide-react';
import { JobPosition } from '@/config/careers/jobs';

interface JobCardHeaderProps {
  job: JobPosition;
}

export default function JobCardHeader({ job }: JobCardHeaderProps) {
  return (
    <div className="mb-4">
      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
        {job.title}
      </h3>

      {/* Meta Information */}
      <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1.5">
          <Briefcase className="w-4 h-4" />
          <span>{job.department}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{job.experience}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
          {job.department}
        </span>
        {job.remote && (
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
            Remote
          </span>
        )}
        {job.salary && (
          <span className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
            {job.salary}
          </span>
        )}
      </div>
    </div>
  );
}
