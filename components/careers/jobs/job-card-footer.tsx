import { ChevronRight } from 'lucide-react';
import { JobPosition } from '@/config/careers/jobs';

interface JobCardFooterProps {
  job: JobPosition;
  onApply: () => void;
}

export default function JobCardFooter({ onApply }: JobCardFooterProps) {
  return (
    <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
      <button
        onClick={onApply}
        className="w-full relative overflow-hidden group flex items-center justify-center gap-2 px-6 py-3 
          bg-emerald-600 dark:bg-emerald-500 text-white font-semibold rounded-xl 
          hover:bg-emerald-700 dark:hover:bg-emerald-600
          shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/40 
          transition-all duration-300 cursor-pointer"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <span className="relative">Express Interest</span>
        <ChevronRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
}
