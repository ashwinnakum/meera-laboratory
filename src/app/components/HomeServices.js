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
      <div className="text-center mb-14 md:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
        >
          Our Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
        >
          Diagnostic Tests We Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base text-center"
        >
          Comprehensive range of pathology and diagnostic tests with accurate results and same-day reports.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
        {previewServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} compact />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-14"
      >
        <Link href="/services" className="btn-primary">
          View All Tests
          <FaArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
