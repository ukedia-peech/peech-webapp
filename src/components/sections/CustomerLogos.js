import React from "react";
import { motion } from "framer-motion";
import CelonisGeminiShowcase from "./CelonisGeminiShowcase";

const CustomerLogos = () => {
  return (
    <section className="section-padding bg-black-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by{" "}
            <span className="text-primary-500 font-normal">
              Global Enterprises
            </span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See how Fortune 500 companies are achieving operational excellence
            through our process mining expertise with Celonis and end-to-end
            business transformation.
          </motion.p>
        </motion.div>

        {/* Celonis X Peech Partnership with Google Gemini Effect */}
        <CelonisGeminiShowcase />
      </div>
    </section>
  );
};

export default CustomerLogos;
