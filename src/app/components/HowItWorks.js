'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { howItWorks } from '@/data/siteData';
import { FaCalendarCheck, FaVial, FaFileMedical } from 'react-icons/fa';

const iconMap = {
  book: FaCalendarCheck,
  collect: FaVial,
  report: FaFileMedical,
};

export default function HowItWorks() {
  return (
    <SectionWrapper background="light" withPattern>
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
        >
          Simple Process
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base"
        >
          Getting tested with us takes just three easy steps — from booking to report.
        </motion.p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] border-t-2 border-dashed border-accent/30" />

        {howItWorks.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="relative text-center"
            >
              {/* Step circle */}
              <div className="relative inline-flex mb-5 sm:mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-primary text-xs font-bold flex items-center justify-center shadow-md border border-gray-100">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
