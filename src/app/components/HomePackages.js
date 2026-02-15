'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaPhone } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import { packages } from '@/data/packages';
import { contactInfo } from '@/data/siteData';

export default function HomePackages() {
  return (
    <SectionWrapper background="light" withBlobs>
      <div className="text-center mb-14 md:mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
        >
          Health Packages
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
        >
          Affordable Health Checkup Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base"
        >
          Comprehensive health packages designed to give you a complete picture of your health at affordable prices.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className={`relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
              pkg.popular ? 'ring-2 ring-accent shadow-accent/10' : 'border border-gray-100'
            }`}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute top-5 right-5 z-10">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-accent to-secondary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-accent/25">
                  <FaStar className="w-3 h-3" />
                  Most Popular
                </span>
              </div>
            )}

            {/* Header */}
            <div className={`px-8 pt-8 pb-7 ${pkg.popular ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
              <h3 className={`text-xl font-bold mb-3 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-6 leading-relaxed ${pkg.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                {pkg.description}
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className={`text-sm ${pkg.popular ? 'text-blue-200' : 'text-gray-400'}`}>Rs.</span>
                <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-primary'}`}>
                  {pkg.price}
                </span>
                <span className={`text-sm ${pkg.popular ? 'text-blue-200' : 'text-gray-400'}`}>/-</span>
              </div>
            </div>

            {/* Tests List */}
            <div className="px-8 pt-7 pb-8">
              <div className="text-sm font-semibold text-gray-900 mb-5">
                Includes {pkg.tests.length} Tests:
              </div>
              <ul className="space-y-3.5 mb-8">
                {pkg.tests.map((test) => (
                  <li key={test} className="flex items-start gap-3 text-sm text-gray-600">
                    <FaCheck className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                    {test}
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <a
                  href="/contact"
                  className={`btn-primary w-full ${
                    !pkg.popular ? '!bg-[var(--color-primary)] !bg-none' : ''
                  }`}
                >
                  Book Now
                </a>
                <a
                  href={`tel:${contactInfo.phones[0]}`}
                  className="flex items-center justify-center gap-2.5 text-sm text-gray-500 hover:text-primary transition-colors py-1.5"
                >
                  <FaPhone className="w-3.5 h-3.5" />
                  Call to Book: {contactInfo.phones[0]}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
