import styles from './loader.module.css';

interface SectionLoaderProps {
  cards?: number;
  maxWidth?: '5xl' | '7xl';
  minHeight?: string;
}

const maxWidthClass = {
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
} as const;

export default function SectionLoader({
  cards = 3,
  maxWidth = '5xl',
  minHeight = 'min-h-[520px]',
}: SectionLoaderProps) {
  return (
    <section
      className={`relative py-32 px-6 overflow-hidden bg-linear-to-br from-gray-50 via-white to-slate-50 dark:from-gray-950 dark:via-black dark:to-slate-950 ${minHeight}`}
      aria-hidden="true"
    >
      <div className={`relative ${maxWidthClass[maxWidth]} mx-auto`}>
        <div className="text-center mb-16 space-y-4">
          <div className="relative h-10 rounded-lg bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-300/50 dark:border-white/20 overflow-hidden max-w-md mx-auto">
            <div className={`absolute inset-0 bg-linear-to-r from-transparent via-gray-300/40 dark:via-white/10 to-transparent ${styles.shimmer}`} />
          </div>
          <div className="relative h-5 rounded-lg bg-white/60 dark:bg-black/60 backdrop-blur-xl border border-gray-300/40 dark:border-white/15 overflow-hidden max-w-xl mx-auto">
            <div className={`absolute inset-0 bg-linear-to-r from-transparent via-gray-300/30 dark:via-white/10 to-transparent ${styles.shimmer}`} />
          </div>
        </div>
        <div className="space-y-5">
          {Array.from({ length: cards }).map((_, i) => (
            <div
              key={i}
              className="relative h-28 rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-300/50 dark:border-white/20 shadow-lg shadow-gray-400/10 dark:shadow-black/30 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-r from-transparent via-gray-300/35 dark:via-white/10 to-transparent ${styles.shimmer}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
