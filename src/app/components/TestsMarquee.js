'use client';

import { motion } from 'framer-motion';
import { popularTests } from '@/data/siteData';

export default function TestsMarquee() {
  const items = [...popularTests, ...popularTests];

  return (
    <section
      aria-label="Popular tests"
      className="relative bg-white border-y border-gray-100 py-3 sm:py-4 overflow-hidden"
    >
      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 sm:gap-12 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((test, index) => (
          <span
            key={`${test}-${index}`}
            className="flex items-center gap-3 text-sm font-medium text-gray-500 whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            {test}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
