'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarAlt, FaFileMedical, FaShieldAlt, FaHome } from 'react-icons/fa';
import { contactInfo } from '@/data/siteData';

const floatingCards = [
  {
    icon: FaFileMedical,
    title: 'Same Day Reports',
    subtitle: 'Fast & accurate',
  },
  {
    icon: FaShieldAlt,
    title: 'NABL Quality',
    subtitle: 'Strict protocols',
  },
  {
    icon: FaHome,
    title: 'Home Collection',
    subtitle: 'At your doorstep',
  },
];

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

      {/* Gradient mesh blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      {/* Floating decorative shapes - hidden on mobile */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 rounded-full animate-pulse hidden sm:block" />
      <div className="absolute bottom-40 right-40 w-40 h-40 border border-white/5 rounded-full hidden sm:block" />

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
        <div className="flex items-center justify-between gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-white/10"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              NABL Quality Standards
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
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
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
              className="text-sm sm:text-base md:text-xl text-blue-100/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
            >
              Accurate Reports. Fast Results. Home Sample Collection Available.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
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

            {/* Trust chips - mobile & tablet only (floating cards cover desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
              className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 lg:hidden"
            >
              {floatingCards.map((card) => (
                <span
                  key={card.title}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-2 text-xs font-medium text-blue-100"
                >
                  <card.icon className="w-3.5 h-3.5 text-cyan-300" />
                  {card.title}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Floating glass cards - desktop only */}
          <div className="hidden lg:flex flex-col gap-5 shrink-0">
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.8,
                  }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 shadow-xl w-60"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shrink-0">
                    <card.icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{card.title}</div>
                    <div className="text-blue-200 text-xs">{card.subtitle}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
