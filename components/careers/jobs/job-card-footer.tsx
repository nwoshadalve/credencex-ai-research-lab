import { ChevronRight, AlertCircle, Clock, Calendar } from 'lucide-react';
import { JobPosition } from '@/config/careers/jobs';

interface JobCardFooterProps {
  job: JobPosition;
  isDeadlinePassed: boolean;
  onApply: () => void;
}

export default function JobCardFooter({ job, isDeadlinePassed, onApply }: JobCardFooterProps) {
  const getDaysRemaining = () => {
    if (!job.applicationDeadline) return null;
    const deadline = new Date(job.applicationDeadline);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysRemaining = getDaysRemaining();
  const isUrgent = daysRemaining !== null && daysRemaining <= 7 && daysRemaining > 0;

  return (
    <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50 space-y-3">
      {/* Deadline Highlight */}
      {job.applicationDeadline && (
        <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${
          isDeadlinePassed 
            ? 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800'
            : isUrgent
            ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 shadow-lg shadow-amber-500/20'
            : 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800'
        }`}>
          {isDeadlinePassed ? (
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
          ) : (
            <Calendar className={`w-5 h-5 shrink-0 ${
              isUrgent 
                ? 'text-amber-600 dark:text-amber-400' 
                : 'text-blue-600 dark:text-blue-400'
            }`} />
          )}
          <div className="flex-1">
            <p className={`text-sm font-semibold ${
              isDeadlinePassed 
                ? 'text-red-900 dark:text-red-200'
                : isUrgent
                ? 'text-amber-900 dark:text-amber-200'
                : 'text-blue-900 dark:text-blue-200'
            }`}>
              {isDeadlinePassed ? 'Application Closed' : 'Application Deadline'}
            </p>
            <div className={`flex items-center gap-2 text-xs mt-0.5 ${
              isDeadlinePassed 
                ? 'text-red-700 dark:text-red-300'
                : isUrgent
                ? 'text-amber-700 dark:text-amber-300'
                : 'text-blue-700 dark:text-blue-300'
            }`}>
              <span>{new Date(job.applicationDeadline).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              {!isDeadlinePassed && daysRemaining !== null && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3" />
                    {daysRemaining === 0 
                      ? 'Last day!'
                      : daysRemaining === 1
                      ? '1 day left'
                      : `${daysRemaining} days left`
                    }
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Apply Button */}
      {!isDeadlinePassed && (
        <button
          onClick={onApply}
          className="w-full relative overflow-hidden group flex items-center justify-center gap-2 px-6 py-3 
            bg-emerald-600 dark:bg-emerald-500 text-white font-semibold rounded-xl 
            hover:bg-emerald-700 dark:hover:bg-emerald-600
            shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/40 
            transition-all duration-300 cursor-pointer"
        >
          {/* Glass shimmer effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          <span className="relative">Apply Now</span>
          <ChevronRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
}
