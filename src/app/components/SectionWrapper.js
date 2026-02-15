'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionWrapper({
  children,
  className = '',
  id,
  background = 'white',
  withPattern = false,
  withBlobs = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bgClasses = {
    white: 'bg-white',
    light: 'bg-light-gray',
    gradient: 'bg-gradient-to-br from-primary via-secondary to-accent',
    dark: 'bg-primary',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 overflow-hidden ${bgClasses[background] || bgClasses.white} ${className}`}
    >
      {withPattern && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #1E3A8A 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      )}

      {withBlobs && (
        <>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
}
