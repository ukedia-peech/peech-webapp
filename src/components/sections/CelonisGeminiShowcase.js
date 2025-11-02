import React from "react";
import { motion } from "framer-motion";

const CelonisGeminiShowcase = () => {
  return (
    <section className="relative bg-black-950 py-16 sm:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="relative z-10 text-center px-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <a 
                href="https://www.celonis.com/news/press/celonis-and-peech-launch-inventory-lifecycle-solution-to-optimize-retail-cpg-operations-and-reduce-perishable-goods-losses"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <span className="inline-block px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 text-xs sm:text-sm font-bold mb-4 backdrop-blur-sm border border-primary-500/30 group-hover:bg-primary-500/30 transition-colors">
                  🚀 FEATURED PARTNERSHIP
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  Celonis <span className="text-primary-500">X</span> Peech
                </h2>
              </a>
              <p className="text-xl sm:text-2xl lg:text-3xl font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
                Inventory Lifecycle Optimization
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The new solution enables retailers and consumer packaged goods (CPG) companies to reduce product waste and lost revenue by optimizing the process of managing perishable inventory.
            </motion.p>

            {/* Metrics */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-black-900/70 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-primary-500/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  $35M
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  Revenue Recaptured
                </div>
              </div>
              <div className="bg-black-900/70 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-primary-500/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  2%
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  Sell-Through ↑
                </div>
              </div>
              <div className="bg-black-900/70 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-primary-500/30">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  4K+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  Stores Scaled
                </div>
              </div>
            </motion.div>

            {/* Testimonial Quote from Anmol Gupta */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-gradient-to-br from-black-900/80 to-black-800/60 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-primary-500/20 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg italic mb-4 leading-relaxed">
                      "The new solution, co-developed by Celonis and Peech, enables retailers and consumer packaged goods (CPG) companies to reduce product waste and lost revenue by optimising the process of managing perishable inventory."
                    </p>
                    <div className="flex flex-col">
                      <span className="text-white font-semibold text-base sm:text-lg">
                        Celonis Official Press
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm">
                        Press Release
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelonisGeminiShowcase;
