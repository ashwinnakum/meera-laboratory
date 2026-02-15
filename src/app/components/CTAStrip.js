'use client';

import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { contactInfo } from '@/data/siteData';

export default function CTAStrip() {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-r from-primary via-secondary to-accent overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Book Your Test Today
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Call us now for appointments, home sample collection, or any enquiries. We are here to help!
          </p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {contactInfo.phones.map((phone, index) => (
              <motion.a
                key={phone}
                href={`tel:${phone}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="btn-outline !px-10 !py-4 !text-base"
              >
                <span className="relative">
                  <FaPhone className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                </span>
                {phone}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
