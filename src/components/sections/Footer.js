import React, { useState } from "react";
import { motion } from "framer-motion";
import { getPublicAssetPath } from "../../utils/utils";
import emailjs from '@emailjs/browser';

const Footer = ({ hideContactForm = false }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.firstName,
        last_name: formData.lastName,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', company: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact-form" className="relative bg-gradient-to-b from-black-900 to-black-950 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(249, 115, 22) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative container-custom py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid - 3 columns when form is shown */}
        <div className={`grid grid-cols-1 ${hideContactForm ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8 lg:gap-10 items-stretch`}>
          {/* LEFT SIDE: Brand & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Peech Logo */}
            <div>
              <img
                src={getPublicAssetPath("peech-txt.png")}
                alt="Peech"
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <p className="mt-4 text-gray-400 text-sm max-w-md leading-relaxed">
                Transforming business processes with intelligent automation and
                process mining excellence.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <motion.a
                  href="mailto:info@peech.tech"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-500 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">info@peech.tech</span>
                </motion.a>

                <motion.a
                  href="tel:+1-631-278-9899"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-500 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-all">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">+1 (631) 278-9899</span>
                </motion.a>
              </div>
            </div>

            {/* Social - LinkedIn */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Connect
              </h3>
              <motion.a
                href="https://www.linkedin.com/company/peech-llc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* MIDDLE: Compact Contact Form */}
          {!hideContactForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full"
            >
              <div className="bg-black-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-black-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                      placeholder="First Name *"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-black-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                      placeholder="Last Name *"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-black-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="Email Address *"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="Company"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-black-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all"
                  >
                    <option value="">Select a subject *</option>
                    <option value="celonis">Celonis Implementation</option>
                    <option value="process-mining">Process Mining Consulting</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 bg-black-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Message *"
                  />
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center"
                    >
                      ✓ Message sent successfully! We'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center"
                    >
                      ✗ Failed to send message. Please try again or email us directly.
                    </motion.div>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2.5 bg-gradient-to-r from-primary-500 to-orange-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}

          {/* RIGHT SIDE: Celonis Gold Partner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-stretch justify-center lg:justify-end"
          >
            <div className="relative group w-full">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Partner badge container */}
              <div className="relative h-full bg-gradient-to-br from-black-800/50 to-black-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 shadow-2xl hover:border-cyan-500/40 transition-all duration-500 flex flex-col items-center justify-center">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                    Certified Partner
                  </span>
                </div>

                <img
                  src={getPublicAssetPath("peechXCelonis-platinum-partner.png")}
                  alt="Celonis Platinum Partner"
                  className="h-32 sm:h-36 md:h-48 w-auto object-contain mx-auto filter drop-shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                <p className="mt-4 text-gray-400 text-xs text-center max-w-xs mx-auto">
                  Recognized excellence in process intelligence
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Peech. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
              <a
                href="#privacy"
                className="hover:text-primary-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-primary-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="hover:text-primary-500 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
