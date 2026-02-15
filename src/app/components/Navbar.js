'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
      <div className="bg-primary text-white text-sm py-3 relative z-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-6 flex-wrap">
            <a href={`tel:${contactInfo.phones[0]}`} className="flex items-center gap-2.5 hover:text-blue-200 transition-colors">
              <FaPhone className="w-3 h-3" />
              <span>{contactInfo.phones[0]}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="hidden sm:flex items-center gap-2.5 hover:text-blue-200 transition-colors">
              <FaEnvelope className="w-3 h-3" />
              <span>{contactInfo.email}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2.5 text-blue-200">
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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-[72px] md:h-[84px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3.5">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">M</span>
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold text-primary leading-tight">
                  Meera Laboratory
                </div>
                <div className="text-[10px] md:text-xs text-gray-500 tracking-wider uppercase">
                  Pathology & Diagnostics
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2.5 rounded-lg text-[15px] font-medium transition-colors duration-200 ${
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
            <div className="flex items-center gap-4">
              <a
                href={`tel:${contactInfo.phones[0]}`}
                className="btn-primary hidden md:inline-flex !py-3 !px-7 !text-sm"
              >
                <FaPhone className="w-3.5 h-3.5" />
                Book Test
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 text-gray-600 hover:text-primary transition-colors rounded-xl hover:bg-gray-100"
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
              <div className="px-5 py-5 space-y-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-5 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3">
                  <a
                    href={`tel:${contactInfo.phones[0]}`}
                    className="btn-primary w-full !text-sm"
                  >
                    <FaPhone className="w-3.5 h-3.5" />
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
