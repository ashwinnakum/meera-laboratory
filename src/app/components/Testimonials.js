'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { testimonials } from '@/data/siteData';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <SectionWrapper background="white" withBlobs>
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5"
        >
          What Our Patients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base"
        >
          Thousands of patients across Surat trust us with their health. Here is what some of them say.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <FaQuoteLeft className="w-6 h-6 text-accent/20 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: item.rating }).map((_, starIndex) => (
                <FaStar key={starIndex} className="w-4 h-4 text-amber-400" />
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              &ldquo;{item.text}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                {item.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-400">{item.location}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
