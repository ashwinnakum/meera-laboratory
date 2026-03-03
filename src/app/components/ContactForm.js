'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { services } from '@/data/services';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    test: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', test: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const inputClasses = (field) =>
    `w-full px-3.5 py-3 sm:px-4 rounded-xl border ${
      errors[field]
        ? 'border-red-300 bg-red-50'
        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
    } focus:border-accent focus:ring-3 focus:ring-accent/10 focus:bg-white outline-none transition-all duration-200 text-sm text-slate-900 placeholder:text-slate-400`;

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-100 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
            >
              <FaCheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-500 mx-auto mb-4 sm:mb-5" />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto">
              We have received your request. Our team will contact you shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            {/* Form Header */}
            <div className="px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 pb-0">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Contact Details</h3>
              <p className="text-sm text-gray-500 mt-1">
                Share your info and we will reach out within a few minutes.
              </p>
            </div>

            {/* Form Body */}
            <div className="px-5 sm:px-6 md:px-8 py-5 sm:py-6 space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputClasses('name')}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1.5" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={inputClasses('phone')}
                    required
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-xs mt-1.5" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Test Information</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Select the test you need and add any extra instructions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email (optional)"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClasses('email')}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1.5" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Select Test
                  </label>
                  <div className="relative">
                    <select
                      name="test"
                      value={formData.test}
                      onChange={handleChange}
                      className={`${inputClasses('test')} appearance-none pr-10`}
                    >
                      <option value="">Choose a test (optional)</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.shortName}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400 text-xs">
                      ▼
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific requirements or questions..."
                  className={`${inputClasses('message')} min-h-[100px] sm:min-h-[120px] resize-none`}
                />
              </div>
            </div>

            {/* Form Footer */}
            <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8">
              <button
                type="submit"
                className="btn-primary w-full py-3.5"
              >
                <FaPaperPlane className="w-4 h-4" />
                Submit Enquiry
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">
                By submitting this form you consent to being contacted by Meera Laboratory.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
