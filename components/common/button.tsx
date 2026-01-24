'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'glass',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 md:gap-3 font-semibold transition-all duration-300 overflow-hidden group";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/20",
    secondary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:shadow-purple-500/30",
    outline: "border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30",
    glass: "bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-300/50 dark:border-white/30 hover:border-gray-400/70 dark:hover:border-white/50 text-gray-900 dark:text-white shadow-lg shadow-gray-400/20 dark:shadow-black/40 hover:shadow-xl hover:shadow-gray-500/30 dark:hover:shadow-black/60"
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-base md:text-lg rounded-xl"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

  const content = (
    <>
      {/* Glass shimmer effect on hover - Hero style */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/40 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {Icon && iconPosition === 'left' && (
        <Icon className={`relative ${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-5 h-5 md:w-6 md:h-6'} transition-transform duration-300`} />
      )}
      
      <span className="relative z-10">{children}</span>
      
      {Icon && iconPosition === 'right' && (
        <Icon className={`relative ${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-5 h-5 md:w-6 md:h-6'} transition-transform duration-300 group-hover:scale-110`} />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedStyles}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
