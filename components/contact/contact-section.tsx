'use client';

import ContactForm from './contact-form';
import ContactInfo from './contact-info';
import SocialLinks from './social-links';
import { contactConfig } from '@/config/common/contact';

export default function ContactSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-br from-violet-100/30 via-purple-100/20 to-transparent dark:from-violet-900/20 dark:via-purple-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-linear-to-bl from-pink-100/30 via-rose-100/20 to-transparent dark:from-pink-900/20 dark:via-rose-900/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="contact-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-white/40 dark:bg-white/5 border-2 border-gray-300/70 dark:border-white/10 shadow-xl shadow-blue-500/5">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-gray-200/60 dark:border-white/20 shadow-lg mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 shadow-sm shadow-blue-500/50" />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {contactConfig.badge}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  {contactConfig.subtitle}
                </h2>
                
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {contactConfig.description}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
