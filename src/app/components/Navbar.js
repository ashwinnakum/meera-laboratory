'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { contactInfo } from '@/data/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-white text-xs sm:text-sm py-2 sm:py-2.5 relative z-50">
        <div className="section-inner flex justify-between items-center">
          <a href={`tel:${contactInfo.phones[0]}`} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <FaPhoneAlt className="w-3 h-3" />
            <span>{contactInfo.phones[0]}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`} className="hidden sm:flex items-center gap-2 hover:text-blue-200 transition-colors">
            <FaEnvelope className="w-3 h-3" />
            <span>{contactInfo.email}</span>
          </a>
          <div className="hidden md:flex items-center gap-2 text-blue-200">
            <FaMapMarkerAlt className="w-3 h-3" />
            <span>Yogichowk, Surat, Gujarat</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-900/5'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="section-inner">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-primary/10 shadow-sm flex items-center justify-center shrink-0">
                <Image
                  src="/images/meera-logo.jpeg"
                  alt="Meera Laboratory logo"
                  width={64}
                  height={64}
                  priority
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="min-w-0">
                <div className="text-base md:text-xl font-bold text-primary leading-tight truncate">
                  Meera Laboratory
                </div>
                <div className="text-xs text-gray-500 tracking-wider uppercase hidden sm:block">
                  Pathology & Diagnostics
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeLink"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${contactInfo.phones[0]}`}
                className="btn-primary hidden md:inline-flex text-sm py-2.5 px-5"
              >
                <FaPhoneAlt className="w-3.5 h-3.5" />
                Book Test
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-11 h-11 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-xl hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="section-inner py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 pb-1">
                  <a
                    href={`tel:${contactInfo.phones[0]}`}
                    className="btn-primary w-full py-3.5"
                  >
                    <FaPhoneAlt className="w-3.5 h-3.5" />
                    Call Now: {contactInfo.phones[0]}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
