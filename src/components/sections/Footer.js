import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black-900 to-black-950 text-white overflow-hidden">
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

      <div className="relative container-custom py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                src="/peech-txt.png"
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

          {/* RIGHT SIDE: Celonis Gold Partner - Large & Prominent */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Partner badge container */}
              <div className="relative bg-gradient-to-br from-black-800/50 to-black-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl hover:border-yellow-500/40 transition-all duration-500">
                <div className="text-center mb-6">
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-yellow-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    Certified Partner
                  </span>
                </div>

                <img
                  src="/Celonis-Gold.png"
                  alt="Celonis Gold Partner"
                  className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto object-contain mx-auto filter drop-shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                <p className="mt-6 text-gray-400 text-xs text-center max-w-xs mx-auto">
                  Recognized excellence in process intelligence and enterprise
                  transformation
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
