'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { LazyMotion, domAnimation, type Transition } from 'framer-motion';

interface MotionContextValue {
  reduceMotion: boolean;
  instantTransition: Transition;
  defaultTransition: Transition;
}

const MotionContext = createContext<MotionContextValue>({
  reduceMotion: false,
  instantTransition: { duration: 0 },
  defaultTransition: { duration: 0.6, ease: 'easeOut' },
});

export function useMotionSafe(): MotionContextValue {
  return useContext(MotionContext);
}

function detectReduceMotion(): boolean {
  if (typeof window === 'undefined') return false;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowConcurrency =
    typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
  return prefersReduced || lowConcurrency;
}

interface MotionProviderProps {
  children: ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(detectReduceMotion());
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduceMotion(detectReduceMotion());
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  const value: MotionContextValue = {
    reduceMotion,
    instantTransition: { duration: 0 },
    defaultTransition: reduceMotion
      ? { duration: 0.15, ease: 'easeOut' }
      : { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <MotionContext.Provider value={value}>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </MotionContext.Provider>
  );
}
