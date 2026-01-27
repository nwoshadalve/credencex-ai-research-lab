import { ChevronRight, CheckCircle2, Star, Gift } from 'lucide-react';
import { JobPosition } from '@/config/careers/jobs';

interface JobCardDescriptionProps {
  job: JobPosition;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function JobCardDescription({ job, isExpanded, onToggle }: JobCardDescriptionProps) {
  return (
    <div className="flex-1 mb-4">
      <div className="relative">
        <div 
          className={`text-sm text-gray-700 dark:text-gray-300 space-y-4 transition-all duration-500 ease-in-out overflow-hidden ${
            !isExpanded ? 'max-h-50' : 'max-h-500'
          }`}
        >
        {/* Description */}
        <div className="space-y-2">
          <p className="text-sm leading-relaxed">{job.description}</p>
        </div>

        {/* Requirements */}
        {job.requirements && job.requirements.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-wide flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Requirements
            </h4>
            <ul className="space-y-1.5 ml-1">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 dark:text-emerald-400 mt-1 shrink-0">•</span>
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Nice to Have */}
        {job.niceToHave && job.niceToHave.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-wide flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              Nice to Have
            </h4>
            <ul className="space-y-1.5 ml-1">
              {job.niceToHave.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 dark:text-amber-400 mt-1 shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits */}
        {job.benefits && job.benefits.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 tracking-wide flex items-center gap-2">
              <Gift className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Benefits
            </h4>
            <ul className="space-y-1.5 ml-1">
              {job.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-500 dark:text-purple-400 mt-1 shrink-0">•</span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white dark:from-gray-900 to-transparent pointer-events-none" />
      )}
      </div>
      
      <button
        onClick={onToggle}
        className="mt-3 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 
          bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 
          rounded-lg border border-emerald-200 dark:border-emerald-800 
          transition-all duration-300 flex items-center gap-2 cursor-pointer"
      >
        <span>{isExpanded ? 'Show less' : 'View full details'}</span>
        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
          isExpanded ? '-rotate-90' : 'rotate-90'
        }`} />
      </button>
    </div>
  );
}
