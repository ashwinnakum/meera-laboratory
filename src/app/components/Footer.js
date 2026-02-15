'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { contactInfo, branches } from '@/data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const popularTests = [
    'Complete Blood Count',
    'Thyroid Profile',
    'Lipid Profile',
    'Vitamin D3',
    'HbA1c',
    'Liver Function Test',
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3.5 mb-7">
              <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">Meera Laboratory</div>
                <div className="text-[11px] text-gray-400 tracking-wider uppercase">
                  Pathology & Diagnostics
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-7">
              Trusted diagnostic laboratory in Surat offering accurate pathology tests with same-day reports and home sample collection facility.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-7">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Popular Tests */}
          <div>
            <h3 className="text-white font-semibold text-base mb-7">Popular Tests</h3>
            <ul className="space-y-4">
              {popularTests.map((test) => (
                <li key={test}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors" />
                    {test}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-7">Contact Us</h3>
            <div className="space-y-6">
              {branches.map((branch) => (
                <div key={branch.id} className="flex gap-3.5 text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-white mb-1">{branch.name}</div>
                    <div className="text-gray-400 leading-relaxed">{branch.address}</div>
                  </div>
                </div>
              ))}
              <div className="space-y-4 pt-2">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3.5 text-sm text-gray-400 hover:text-accent transition-colors"
                  >
                    <FaPhone className="w-3.5 h-3.5 text-accent" />
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3.5 text-sm text-gray-400 hover:text-accent transition-colors"
                >
                  <FaEnvelope className="w-3.5 h-3.5 text-accent" />
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>&copy; {currentYear} Meera Laboratory. All rights reserved.</p>
          <p>Trusted Diagnostics in Surat, Gujarat</p>
        </div>
      </div>
    </footer>
  );
}
