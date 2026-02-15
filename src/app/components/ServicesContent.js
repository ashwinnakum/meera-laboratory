'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import ServiceCard from './ServiceCard';
import { services, categories } from '@/data/services';
import { FaPhone, FaHome } from 'react-icons/fa';
import { contactInfo } from '@/data/siteData';

export default function ServicesContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 section-inner text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2.5 text-blue-200 text-sm mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Our Diagnostic Services</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive range of 21+ pathology and diagnostic tests with accurate results.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L720 30L1440 60V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper background="white" withBlobs>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-md shadow-primary/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                compact={false}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-base">
            No services found in this category.
          </div>
        )}
      </SectionWrapper>

      {/* Home Collection CTA */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 section-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 text-blue-200 mb-4 justify-center md:justify-start">
                <FaHome className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Home Sample Collection</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Tested at Your Doorstep
              </h2>
              <p className="text-blue-100 max-w-xl leading-relaxed text-base">
                Our trained phlebotomists will visit your home for sample collection. Convenient, hygienic, and hassle-free.
              </p>
            </div>

            <a
              href={`tel:${contactInfo.phones[0]}`}
              className="btn-white text-base py-4 px-10 shrink-0"
            >
              <FaPhone className="w-4 h-4" />
              Call: {contactInfo.phones[0]}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
