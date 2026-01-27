'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin as LinkedinIcon, 
  Facebook, 
  Github as GithubIcon, 
  Youtube
} from 'lucide-react';
import { footerLinks } from '@/config/common/footer-links';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, resolvedTheme } = useTheme();

  const socialLinks = [
    { icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/profile.php?id=61586371207333', label: 'X' },
    { icon: <GithubIcon size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-slate-50 dark:from-gray-950 dark:via-black dark:to-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="relative w-full">
        {/* Glass Container */}
        <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border-t border-b border-white/40 dark:border-gray-700/40 shadow-2xl shadow-black/5 dark:shadow-black/40 overflow-hidden">
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-white/50 via-transparent to-transparent dark:from-white/5 pointer-events-none"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
            {/* Top Section */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Brand Section */}
              <motion.div className="lg:col-span-2" variants={itemVariants}>
                <Link href="/" className="inline-block mb-6 group">
                  <Image
                    src={(theme === 'dark' || resolvedTheme === 'dark') ? '/logos/logo-dark.png' : '/logos/logo-light.png'}
                    alt="CredenceX AI Research Lab"
                    width={200}
                    height={75}
                    className="h-16 w-auto transition-transform group-hover:scale-105"
                    priority
                  />
                </Link>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                  Pioneering research in high-stakes AI applications. Building intelligent systems that make a difference.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <a 
                    href="mailto:info@credencex-ai.com" 
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
                      <Mail size={16} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="font-medium">info@credencex-ai.com</span>
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
                      <Phone size={16} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="font-medium">+1 (234) 567-890</span>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 shrink-0">
                      <MapPin size={16} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="font-medium leading-relaxed">123 AI Research Blvd<br />Innovation District, CA 94000</span>
                  </div>
                </div>
              </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Research Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              Research
            </h3>
            <ul className="space-y-3">
              {footerLinks.research.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-linear-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider with Gradient */}
        <motion.div 
          className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-600/50 hover:bg-linear-to-r hover:from-indigo-500/90 hover:to-purple-500/90 hover:border-indigo-500/50 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-700 dark:text-gray-300 font-medium">
              <p>© {currentYear} CredenceX AI Research Lab. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
          </div>

          {/* Bottom Shine Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/50 dark:via-white/10 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}
