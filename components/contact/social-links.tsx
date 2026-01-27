'use client';

import { motion } from 'framer-motion';
import { contactConfig } from '@/config/common/contact';
import { Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  youtube: Youtube
};

export default function SocialLinks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } }
      }}
      className="mt-8"
    >
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        Follow Us
      </h3>
      <div className="flex gap-4">
        {contactConfig.socialLinks.map((social, index) => {
          const Icon = iconMap[social.icon as keyof typeof iconMap];
          
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 hover:border-purple-300/60 dark:hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" strokeWidth={1.5} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
