'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { contactInfo } from '@/data/siteData';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] max-h-[900px] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-lab.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-lab.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/60" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Floating decorative shapes - hidden on mobile */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full animate-pulse hidden sm:block" />
      <div className="absolute bottom-40 right-40 w-40 h-40 border border-white/5 rounded-full hidden sm:block" />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-inner w-full py-12 sm:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            NABL Quality Standards
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
          >
            Trusted Pathology &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Diagnostic Laboratory
            </span>{' '}
            in Surat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm sm:text-base md:text-xl text-blue-100/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
          >
            Accurate Reports. Fast Results. Home Sample Collection Available.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a href="/contact" className="btn-white w-full sm:w-auto py-3.5 px-6 sm:py-4 sm:px-8">
              <FaCalendarAlt className="w-4 h-4" />
              Book Test Now
            </a>

            <a href={`tel:${contactInfo.phones[0]}`} className="btn-outline w-full sm:w-auto py-3.5 px-6 sm:py-4 sm:px-8">
              <FaPhoneAlt className="w-4 h-4" />
              Call: {contactInfo.phones[0]}
            </a>
          </motion.div>
        </div>
      </div>

      {/* SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 54C1248 48 1344 48 1392 48L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
