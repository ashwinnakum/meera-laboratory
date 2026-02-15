'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FaCheckCircle, FaFlask, FaUsers, FaShieldAlt, FaHeart } from 'react-icons/fa';
import { branches } from '@/data/siteData';

const values = [
  {
    title: 'Precision Testing',
    description: 'State-of-the-art analyzers and strict quality control protocols ensure highly accurate results.',
    icon: FaFlask,
  },
  {
    title: 'Patient First',
    description: 'Patient comfort and convenience is our priority. From home collection to same-day reports.',
    icon: FaHeart,
  },
  {
    title: 'Expert Team',
    description: 'Qualified pathologists and trained phlebotomists with years of diagnostic experience.',
    icon: FaUsers,
  },
  {
    title: 'Quality Assurance',
    description: 'Following NABL guidelines and internal quality checks at every stage of testing.',
    icon: FaShieldAlt,
  },
];

export default function AboutContent() {
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
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2.5 text-blue-200 text-sm mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">About Meera Laboratory</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Your trusted partner for accurate diagnostics and pathology services in Surat.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L720 30L1440 60V60H0Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Introduction */}
      <SectionWrapper background="white" withBlobs>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-lab.jpg"
                alt="Meera Laboratory"
                width={600}
                height={450}
                className="w-full h-80 md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-7">
              Trusted Diagnostics Since Day One
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-base">
              <p>
                Meera Laboratory is a leading pathology and diagnostic center in Surat, Gujarat.
                Located conveniently at Yogichowk, we bring quality healthcare diagnostics
                closer to you.
              </p>
              <p>
                We specialize in precision testing using modern, fully automated equipment.
                From routine blood tests to advanced diagnostic panels, our experienced
                pathologists ensure every report meets the highest standards of accuracy.
              </p>
              <p>
                Our affordable health packages and home sample collection service make
                diagnostics accessible and convenient for everyone.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              {['Convenient Branch at Yogichowk', 'Modern Automated Equipment', 'Same Day Reports', 'Home Sample Collection', 'Affordable Health Packages'].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <FaCheckCircle className="w-4.5 h-4.5 text-green-500 shrink-0" />
                  <span className="text-gray-700 text-[15px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Team/Lab Image Section */}
      <SectionWrapper background="light" withPattern>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-doctor.jpg"
                alt="Expert Team"
                width={600}
                height={450}
                className="w-full h-80 md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-7">
              Experienced Professionals
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Our team of qualified pathologists, experienced lab technicians, and trained
              phlebotomists work together to deliver accurate results you can trust. Every
              test is supervised by experienced professionals following strict quality protocols.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'Qualified Pathologists', value: 'Expert' },
                { label: 'Lab Technicians', value: 'Trained' },
                { label: 'Quality Protocols', value: 'NABL' },
                { label: 'Patient Focus', value: '100%' },
              ].map((item) => (
                <div key={item.label} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-xl font-bold text-primary mb-1.5">{item.value}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Our Branch */}
      <SectionWrapper background="white" withBlobs>
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Our Location
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Visit Our Branch in Surat
          </motion.h2>
        </div>

        <div className="max-w-lg mx-auto">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-light-gray rounded-2xl p-10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-bold text-2xl">{branch.id}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{branch.name}</h3>
              <p className="text-gray-600 text-base mb-7 leading-relaxed">{branch.address}</p>
              <a href={`tel:${branch.phone}`} className="btn-primary">
                Call: {branch.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Values Grid */}
      <SectionWrapper background="light" withPattern withBlobs>
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Our Values
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            What Drives Us Every Day
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
