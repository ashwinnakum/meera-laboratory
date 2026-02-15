'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({ service, index = 0, compact = false }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Decorative blob */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-300" />

      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-primary/15 group-hover:to-accent/15 transition-colors duration-300">
          {Icon && <Icon className="w-6 h-6 text-primary" />}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          {compact ? service.shortName : service.name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {!compact && (
          <div className="space-y-3 pt-5 border-t border-gray-100">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Sample Type</span>
              <span className="font-medium text-gray-700">{service.sampleType}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Fasting Required</span>
              <span className="font-medium text-gray-700">{service.fastingRequired}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Report Time</span>
              <span className="font-medium text-accent">{service.reportTime}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
