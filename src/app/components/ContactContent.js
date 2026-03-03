'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import ContactForm from './ContactForm';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { branches, contactInfo } from '@/data/siteData';

export default function ContactContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden py-14 sm:py-20 md:py-24">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 section-inner text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2.5 text-blue-200 text-sm mb-3 sm:mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Contact Us</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              Get In Touch
            </h1>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
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

      {/* Quick Contact Strip */}
      <section className="bg-background relative z-20">
        <div className="section-inner">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 -mt-6 sm:-mt-8">
            {[
              {
                icon: FaPhoneAlt,
                label: 'Call Us',
                value: contactInfo.phones[0],
                href: `tel:${contactInfo.phones[0]}`,
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: FaEnvelope,
                label: 'Email Us',
                value: contactInfo.email,
                href: `mailto:${contactInfo.email}`,
                color: 'from-indigo-500 to-indigo-600',
              },
              {
                icon: FaClock,
                label: 'Working Hours',
                value: 'All Days: 9 AM - 10 PM',
                color: 'from-violet-500 to-violet-600',
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-bold text-gray-900 mt-0.5 truncate group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-100">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-bold text-gray-900 mt-0.5">{item.value}</p>
                      {item.subValue && (
                        <p className="text-xs text-gray-500 mt-0.5">{item.subValue}</p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Branch Info */}
      <SectionWrapper background="light" withBlobs spacing="wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Form - takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="mb-6 sm:mb-8">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                Book a Test
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Send Us Your Enquiry
              </h2>
            </div>
            <ContactForm />
          </motion.div>

          {/* Branch Info - takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-5 sm:space-y-6"
          >
            <div className="mb-6 sm:mb-8">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                Our Branch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Visit Us
              </h2>
            </div>

            {/* Branch Cards */}
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
              >
                {/* Branch Header */}
                <div className="bg-gradient-to-r from-primary to-secondary px-5 sm:px-6 py-3.5 sm:py-4">
                  <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm font-bold">
                      {branch.id}
                    </span>
                    {branch.name}
                  </h3>
                </div>

                {/* Branch Details */}
                <div className="p-5 sm:p-6 space-y-3.5 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <FaMapMarkerAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <FaPhoneAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <FaClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Hours</p>
                      <p className="text-sm text-gray-700">All Days: 9:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${branch.phone}`}
                    className="btn-primary flex-1 py-3"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaEnvelope className="w-3.5 h-3.5" />
                    Email Us
                  </a>
                </div>
              </div>
            ))}

            {/* All Contact Numbers */}
            {contactInfo.phones.length > 1 && (
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">
                <h4 className="text-base font-bold text-gray-900 mb-3 sm:mb-4">All Contact Numbers</h4>
                <div className="space-y-3">
                  {contactInfo.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <FaPhoneAlt className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="font-medium">{phone}</span>
                      <FaArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper background="white" withPattern spacing="wide">
        <div className="text-center mb-8 sm:mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3"
          >
            Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Our Location
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {branches.filter((b) => b.mapUrl).map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="px-5 sm:px-6 py-4 sm:py-5 bg-gradient-to-r from-primary to-secondary text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{branch.name}</h3>
                  <p className="text-blue-100 text-sm mt-1 leading-relaxed">{branch.address}</p>
                </div>
                <a
                  href={`tel:${branch.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors w-full sm:w-auto"
                >
                  <FaPhoneAlt className="w-3.5 h-3.5" />
                  {branch.phone}
                </a>
              </div>
              <iframe
                src={branch.mapUrl}
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${branch.name} Location`}
                className="h-56 sm:h-72 md:h-96"
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
