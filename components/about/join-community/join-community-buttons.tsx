'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { joinCommunityContent } from '@/config/about/join-community';

export default function JoinCommunityButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-8">
      <Link
        href={joinCommunityContent.buttons.careers.href}
        className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/40 dark:shadow-blue-400/30 hover:shadow-xl transition-all duration-300 text-base whitespace-nowrap cursor-pointer overflow-hidden"
      >
        <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block">
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative z-10">{joinCommunityContent.buttons.careers.text}</span>
        </motion.span>
      </Link>

      <Link
        href={joinCommunityContent.buttons.contact.href}
        className="group relative px-8 py-4 bg-linear-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/40 dark:shadow-purple-400/30 hover:shadow-xl transition-all duration-300 text-base whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
      >
        <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block w-full">
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" /> {joinCommunityContent.buttons.contact.text}
          </span>
        </motion.span>
      </Link>
    </div>
  );
}
