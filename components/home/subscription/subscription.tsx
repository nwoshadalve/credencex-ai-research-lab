'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { subscriptionContent } from '@/config/home/subscription';
import styles from './subscription.module.css';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-linear-to-br from-white via-gray-50 to-slate-100 dark:from-black dark:via-gray-950 dark:to-slate-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Stay Updated with <span className="text-blue-600 dark:text-blue-400">SentinelX</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {subscriptionContent.description}
            </p>
          </motion.div>

          {/* Subscription Form */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              {/* Glass Card */}
              <div className="relative rounded-3xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-gray-200/60 dark:border-gray-700/60 p-8 md:p-10 shadow-2xl shadow-gray-400/20 dark:shadow-black/40">
                {/* Decorative elements inside card */}
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-blue-500 dark:text-blue-400 opacity-20" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400 opacity-20" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email Input with Button Combined */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={subscriptionContent.inputPlaceholder}
                        className="w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-300/50 dark:border-gray-600/50 rounded-xl text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-base"
                        disabled={isSubmitting || status === 'success'}
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || status === 'success'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/40 dark:shadow-blue-400/30 hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/40 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed text-base whitespace-nowrap cursor-pointer ${
                        isSubmitting ? styles.pulseEffect : ''
                      }`}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span className="hidden sm:inline">Subscribing...</span>
                          </>
                        ) : status === 'success' ? (
                          <>
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="hidden sm:inline">Subscribed!</span>
                          </>
                        ) : (
                          <>
                            <span>{subscriptionContent.buttonText}</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </div>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium bg-green-50 dark:bg-green-900/20 py-3 px-4 rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      {subscriptionContent.successMessage}
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400 text-sm font-medium bg-red-50 dark:bg-red-900/20 py-3 px-4 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5" />
                      {subscriptionContent.errorMessage}
                    </motion.div>
                  )}

                  {/* Privacy Text */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    {subscriptionContent.privacyText}
                  </p>
                </form>
              </div>

              {/* Animated border glow */}
              <div className="absolute -inset-px rounded-3xl opacity-70 transition-opacity duration-500 pointer-events-none -z-10">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-lg"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscription;
