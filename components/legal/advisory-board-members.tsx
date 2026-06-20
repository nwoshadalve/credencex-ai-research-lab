'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { advisoryBoardMembers } from '@/config/legal/advisory-board';
import AdvisoryMemberCard from '@/components/legal/advisory-member-card';

export default function AdvisoryBoardMembers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {advisoryBoardMembers.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: index * 0.07 }}
        >
          <AdvisoryMemberCard member={member} />
        </motion.div>
      ))}
    </div>
  );
}
