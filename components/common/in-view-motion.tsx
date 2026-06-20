'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { useMotionSafe } from '@/lib/motion';

interface InViewMotionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
}

export default function InViewMotion({
  children,
  delay = 0,
  className = '',
  ...props
}: InViewMotionProps) {
  const { reduceMotion, defaultTransition } = useMotionSafe();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ ...defaultTransition, delay: reduceMotion ? 0 : delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
