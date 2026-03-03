'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { whyChooseUs } from '@/data/siteData';
import { FaClock, FaHome, FaMicroscope, FaUserMd, FaBullseye } from 'react-icons/fa';

const iconMap = {
  clock: FaClock,
  home: FaHome,
  equipment: FaMicroscope,
  doctor: FaUserMd,
  accuracy: FaBullseye,
};

export default function WhyChooseUs() {
  return (
    <SectionWrapper background="white" withPattern withBlobs>
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4"
        >
          Why Choose Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5"
        >
          Why Surat Trusts Meera Laboratory
        </motion.h2>
      </div>

      <div className="space-y-10 sm:space-y-16 md:space-y-24">
        {whyChooseUs.map((item, index) => {
          const Icon = iconMap[item.icon];
          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`flex flex-col ${
                isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-6 sm:gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/lab-equipment.jpg"
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  {Icon && <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-5">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                  {item.description}
                </p>
                <div className="mt-5 sm:mt-8 flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  <span className="text-sm font-medium text-accent">Meera Laboratory</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
