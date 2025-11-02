import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import { staggerContainer, cardVariants } from "../utils/animations";

// Lazy load WorldMap for better performance
const WorldMap = lazy(() =>
  import("../components/ui/WorldMap").then((module) => ({
    default: module.WorldMap,
  }))
);

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Page Header */}
      <section className="section-padding bg-black-950">
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-4 sm:mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="body-lg text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4">
              Ready to transform your business processes? Let's discuss how our
              process mining and automation expertise can drive operational
              excellence for your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* World Map - Full Width */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Our <span className="gradient-text">Locations</span>
            </h2>
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/50">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-primary-500">Loading map...</div>
                  </div>
                }
              >
                <WorldMap
                  dots={[
                    {
                      start: {
                        lat: 40.7128,
                        lng: -74.006,
                        label: "NYC, NY",
                      },
                      end: {
                        lat: 17.385,
                        lng: 78.4867,
                        label: "Hyderabad, India",
                      },
                    },
                    {
                      start: {
                        lat: 51.5074,
                        lng: -18.0,
                        label: "London, UK",
                      },
                      end: {
                        lat: 17.385,
                        lng: 78.4867,
                        label: "Hyderabad, India",
                      },
                    },
                    {
                      start: {
                        lat: 52.2297,
                        lng: 21.0122,
                        label: "Warsaw, Poland",
                      },
                      end: {
                        lat: 17.385,
                        lng: 78.4867,
                        label: "Hyderabad, India",
                      },
                    },
                    {
                      start: {
                        lat: 25.2048,
                        lng: 55.2708,
                        label: "Dubai, UAE",
                      },
                      end: {
                        lat: 17.385,
                        lng: 78.4867,
                        label: "Hyderabad, India",
                      },
                    },
                    {
                      start: {
                        lat: -6.2088,
                        lng: 106.8456,
                        label: "Jakarta, Indonesia",
                      },
                      end: {
                        lat: 17.385,
                        lng: 78.4867,
                        label: "Hyderabad, India",
                      },
                    },
                  ]}
                  lineColor="#f97316"
                  showLabels={true}
                  animationDuration={2}
                  loop={true}
                />
              </Suspense>
            </div>
          </div>

          {/* Two Column Layout - Contact Details and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Contact Details */}
            <div className="space-y-8">
              {/* Contact Details - Email, Phone, and Business Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email and Phone */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary-500"
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
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Email
                      </h3>
                      <p className="text-gray-400">
                        <a
                          href="mailto:info@peech.tech"
                          className="hover:text-primary-500 transition-colors"
                        >
                          info@peech.tech
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary-500"
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
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-400">
                        <a
                          href="tel:+1-631-278-9899"
                          className="hover:text-primary-500 transition-colors"
                        >
                          +1 (631) 278-9899
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <Card variant="dark" className="p-8 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors">
                      <option value="">Select a subject</option>
                      <option value="celonis">Celonis Implementation</option>
                      <option value="process-mining">
                        Process Mining Consulting
                      </option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your process mining and automation needs..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </motion.button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
