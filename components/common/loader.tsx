import styles from './loader.module.css';

type LoaderVariant = 'inline' | 'section' | 'overlay';

interface LoaderProps {
  variant?: LoaderVariant;
  label?: string;
  className?: string;
}

export default function Loader({
  variant = 'inline',
  label = 'Loading',
  className = '',
}: LoaderProps) {
  const spinner = (
    <div
      className={`relative w-10 h-10 rounded-full border-2 border-gray-200/80 dark:border-white/15 ${styles.spinnerRing}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 border-r-cyan-500 dark:border-t-blue-400 dark:border-r-cyan-400" />
    </div>
  );

  if (variant === 'overlay') {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-label={label}
        className={`flex flex-col items-center justify-center gap-4 min-h-[40vh] px-6 ${className}`}
      >
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-300/50 dark:border-white/30 shadow-lg shadow-gray-400/20 dark:shadow-black/40 overflow-hidden">
          <div className={`absolute inset-0 bg-linear-to-r from-transparent via-gray-300/30 dark:via-white/10 to-transparent ${styles.shimmer}`} />
          {spinner}
        </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</span>
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-label={label}
        className={`flex items-center justify-center py-16 ${className}`}
      >
        <div className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-300/50 dark:border-white/30 shadow-lg shadow-gray-400/20 dark:shadow-black/40 overflow-hidden">
          <div className={`absolute inset-0 bg-linear-to-r from-transparent via-gray-300/30 dark:via-white/10 to-transparent ${styles.shimmer}`} />
          {spinner}
        </div>
      </div>
    );
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-3 py-8 ${className}`}
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-300/50 dark:border-white/30 shadow-md shadow-gray-400/15 dark:shadow-black/30 overflow-hidden">
        <div className={`absolute inset-0 bg-linear-to-r from-transparent via-gray-300/30 dark:via-white/10 to-transparent ${styles.shimmer}`} />
        {spinner}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
    </div>
  );
}
