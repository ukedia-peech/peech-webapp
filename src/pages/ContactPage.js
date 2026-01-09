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
                        lat: 17.3850,
                        lng: 78.4867,
                        label: "Hyderabad, India",
                      },
                    },
                    {
                      start: {
                        lat: 51.5074,
                        lng: -0.1278,
                        label: "London, UK",
                      },
                      end: {
                        lat: 17.3850,
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
                        lat: 17.3850,
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
                        lat: 17.3850,
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

        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
