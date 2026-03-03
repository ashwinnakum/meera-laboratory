'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import ServiceCard from './ServiceCard';
import { services } from '@/data/services';
import { FaArrowRight } from 'react-icons/fa';

export default function HomeServices() {
  const previewServices = services.slice(0, 6);

  return (
    <SectionWrapper background="white" withPattern withBlobs>
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
        >
          Our Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5"
        >
          Diagnostic Tests We Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base text-center"
        >
          Comprehensive range of pathology and diagnostic tests with accurate results and same-day reports.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {previewServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} compact />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-8 sm:mt-10 md:mt-14"
      >
        <Link href="/services" className="btn-primary w-full sm:w-auto py-3.5 px-8">
          View All Tests
          <FaArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
