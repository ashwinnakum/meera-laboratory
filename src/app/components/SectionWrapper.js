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
  spacing = 'default',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bgClasses = {
    white: 'bg-white',
    light: 'bg-light-gray',
    gradient: 'bg-gradient-to-br from-primary via-secondary to-accent',
    dark: 'bg-primary',
  };

  const spacingClasses = {
    default: 'section-spacing',
    compact: 'section-spacing-tight',
    wide: 'section-spacing-wide',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`relative overflow-hidden ${spacingClasses[spacing] || spacingClasses.default} ${bgClasses[background] || bgClasses.white} ${className}`}
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
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 section-inner"
      >
        {children}
      </motion.div>
    </section>
  );
}
