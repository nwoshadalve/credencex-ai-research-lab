'use client';

import { motion } from 'framer-motion';
import { contactConfig } from '@/config/common/contact';

export default function ContactInfo() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.08 } }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="space-y-6"
    >
      {contactConfig.contactInfo.map((info, index) => {
        const Icon = info.icon;
        const isClickable = !!info.href;
        
        const CardContent = (
          <motion.div
            variants={fadeInUp}
            whileHover={isClickable ? { scale: 1.02, y: -4 } : {}}
            transition={{ duration: 0.2 }}
            className={`group p-6 rounded-2xl backdrop-blur-2xl bg-white/70 dark:bg-white/3 border-2 border-gray-300/70 dark:border-white/8 shadow-sm transition-all duration-200 ${
              isClickable ? 'hover:border-blue-400/80 dark:hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 cursor-pointer hover:bg-white/80 dark:hover:bg-white/5' : 'hover:bg-white/80 dark:hover:bg-white/5'
            }`}
          >
            <div className="flex items-start gap-5">
              {/* Icon with modern gradient */}
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 via-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 transition-all duration-200 group-hover:shadow-xl group-hover:shadow-blue-500/30 group-hover:scale-110">
                <Icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2.5 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {info.title}
                </h3>
                <div className="space-y-1.5">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

        if (isClickable) {
          return (
            <a key={index} href={info.href} className="block">
              {CardContent}
            </a>
          );
        }

        return <div key={index}>{CardContent}</div>;
      })}
    </motion.div>
  );
}
