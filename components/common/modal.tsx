'use client';

import { useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type ModalMaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

const maxWidthClasses: Record<ModalMaxWidth, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
};

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  labelledBy?: string;
  describedBy?: string;
  maxWidth?: ModalMaxWidth;
  showHeader?: boolean;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  panelClassName?: string;
  bodyClassName?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  labelledBy,
  describedBy,
  maxWidth = 'lg',
  showHeader = true,
  showCloseButton = true,
  closeOnBackdrop = true,
  closeOnEscape = true,
  panelClassName = '',
  bodyClassName = '',
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEscape]);

  const showTopBar = showHeader && (title || showCloseButton);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOnBackdrop ? onClose : undefined}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={labelledBy}
              aria-describedby={describedBy}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              className={`pointer-events-auto w-full ${maxWidthClasses[maxWidth]} max-h-[90vh] overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-300/60 dark:border-gray-700/60 shadow-2xl flex flex-col ${panelClassName}`}
            >
              {showTopBar && (
                <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-gray-200/60 dark:border-gray-700/60 shrink-0">
                  {title ? (
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {title}
                    </p>
                  ) : (
                    <span />
                  )}
                  {showCloseButton && (
                    <button
                      type="button"
                      onClick={onClose}
                      aria-label="Close"
                      className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </button>
                  )}
                </div>
              )}

              <div className={`overflow-y-auto ${showTopBar ? 'px-5 py-6 md:px-8 md:py-8' : ''} ${bodyClassName}`}>
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
