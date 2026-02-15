'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import ContactForm from './ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { branches, contactInfo } from '@/data/siteData';

export default function ContactContent() {
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
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2.5 text-blue-200 text-sm mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get In Touch</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Book your tests, schedule home collection, or reach out for any enquiries.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L720 30L1440 60V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Contact Form + Info */}
      <SectionWrapper background="white" withBlobs>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Book a Test
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send Us Your Enquiry
            </h2>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-7"
          >
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Our Branch
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Visit Us or Call
              </h2>
            </div>

            {/* Branch Cards */}
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-light-gray rounded-2xl p-7 space-y-5 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {branch.id}
                  </div>
                  {branch.name}
                </h3>
                <div className="flex items-start gap-3.5 text-gray-600 text-[15px]">
                  <FaMapMarkerAlt className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <span className="leading-relaxed">{branch.address}</span>
                </div>
                <a
                  href={`tel:${branch.phone}`}
                  className="inline-flex items-center gap-3 text-[15px] font-semibold text-primary hover:text-accent transition-colors"
                >
                  <FaPhone className="w-4 h-4" />
                  {branch.phone}
                </a>
              </div>
            ))}

            {/* Contact Details */}
            <div className="bg-light-gray rounded-2xl p-7 space-y-5 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Contact Details</h3>
              <div className="space-y-4">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3.5 text-[15px] text-gray-600 hover:text-primary transition-colors"
                  >
                    <FaPhone className="w-4 h-4 text-accent shrink-0" />
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3.5 text-[15px] text-gray-600 hover:text-primary transition-colors"
                >
                  <FaEnvelope className="w-4 h-4 text-accent shrink-0" />
                  {contactInfo.email}
                </a>
                <div className="flex items-center gap-3.5 text-[15px] text-gray-600">
                  <FaClock className="w-4 h-4 text-accent shrink-0" />
                  Mon - Sat: 7:00 AM - 9:00 PM | Sun: 7:00 AM - 2:00 PM
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper background="light" withPattern>
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Our Location in Surat
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="px-7 py-5 bg-gradient-to-r from-primary to-secondary text-white">
                <h3 className="font-semibold text-lg">{branch.name}</h3>
                <p className="text-blue-100 text-sm mt-1.5 leading-relaxed">{branch.address}</p>
              </div>
              <iframe
                src={branch.mapUrl}
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${branch.name} Location`}
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
