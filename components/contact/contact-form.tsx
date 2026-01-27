'use client';

import { motion } from 'framer-motion';
import { contactConfig } from '@/config/common/contact';
import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // 90% success rate for demo
          if (Math.random() > 0.1) {
            resolve(true);
          } else {
            reject(new Error('Submission failed'));
          }
        }, 1500);
      });

      setStatus('success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Auto-hide after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        initial: {},
        animate: { transition: { staggerChildren: 0.08 } }
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fadeInUp}>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              {contactConfig.formFields.firstName.label}
              {contactConfig.formFields.firstName.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={contactConfig.formFields.firstName.placeholder}
              className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border-2 ${
                errors.firstName 
                  ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300/60 dark:border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
              } focus:ring-2 outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder:text-gray-500`}
            />
            {errors.firstName && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.firstName}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              {contactConfig.formFields.lastName.label}
              {contactConfig.formFields.lastName.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={contactConfig.formFields.lastName.placeholder}
              className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border-2 ${
                errors.lastName 
                  ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300/60 dark:border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
              } focus:ring-2 outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder:text-gray-500`}
            />
            {errors.lastName && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.lastName}
              </p>
            )}
          </motion.div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fadeInUp}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              {contactConfig.formFields.email.label}
              {contactConfig.formFields.email.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={contactConfig.formFields.email.placeholder}
              className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border-2 ${
                errors.email 
                  ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-gray-300/60 dark:border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
              } focus:ring-2 outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder:text-gray-500`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              {contactConfig.formFields.phone.label}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={contactConfig.formFields.phone.placeholder}
              className="w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border-2 border-gray-300/60 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder:text-gray-500"
            />
          </motion.div>
        </div>

        {/* Subject */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            {contactConfig.formFields.subject.label}
            {contactConfig.formFields.subject.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={contactConfig.formFields.subject.placeholder}
            className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border-2 ${
              errors.subject 
                ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                : 'border-gray-300/60 dark:border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
            } focus:ring-2 outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder:text-gray-500`}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.subject}
            </p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeInUp}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
            {contactConfig.formFields.message.label}
            {contactConfig.formFields.message.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder={contactConfig.formFields.message.placeholder}
            className={`w-full px-4 py-3 rounded-xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border-2 ${
              errors.message 
                ? 'border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                : 'border-gray-300/60 dark:border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
            } focus:ring-2 outline-none transition-all duration-200 text-gray-900 dark:text-white placeholder:text-gray-500 resize-none`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.message}
            </p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={fadeInUp}>
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="relative w-full px-8 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden group"
          >
            {/* Glass shimmer effect on hover */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              {status === 'submitting' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Message Sent!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="w-5 h-5" />
                  Try Again
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {contactConfig.submitButton}
                </>
              )}
            </span>
          </button>
        </motion.div>

        {/* Success Message */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 text-green-700 dark:text-green-400"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Thank you for reaching out!</p>
                <p className="text-sm mt-1">Your message has been sent successfully. We&apos;ll get back to you within 24-48 hours.</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-red-700 dark:text-red-400"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Oops! Something went wrong</p>
                <p className="text-sm mt-1">We couldn&apos;t send your message. Please try again or contact us directly at info@credencex-ai.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
