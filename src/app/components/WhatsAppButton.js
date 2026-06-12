'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '@/data/siteData';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hello Meera Laboratory! I would like to book a test. Please share the details.')}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-green-500/40 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      <FaWhatsapp className="relative z-10 w-7 h-7 text-white" />
    </motion.a>
  );
}
