import React from "react";
import { motion } from "framer-motion";
import ProcessMiningVisualization from "../ui/ProcessMiningVisualization";
import { staggerContainer } from "../../utils/animations";

const CelonisShowcase = () => {
  return (
    <section className="section-padding bg-black-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-blue-950/20 to-black-800" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-4 sm:mb-6 px-4 pb-2"
            variants={{
              hiddens: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            End-to-End Process Transformation
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            Transform your business processes with our comprehensive process
            mining consulting. From Celonis implementation to task mining - we
            deliver complete business transformation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8">
          {/* Left side - Process Mining Visualization */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.4 },
              },
            }}
            className="flex justify-center order-1 lg:order-1"
          >
            <ProcessMiningVisualization
              className="mx-auto"
              centerText="PEECH"
              accentColor="#f97316"
              processSteps={{
                first: "Find",
                second: "Frame",
                third: "Fix",
                fourth: "Flow",
              }}
            />
          </motion.div>

          {/* Right side - Celonis Capabilities */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.6 },
              },
            }}
            className="space-y-8 order-2 lg:order-2"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Find
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Find issues and inefficiencies via advanced process mining technology
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Frame
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Expert consulting to frame and structure process challenges effectively
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Fix
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Implement AI and intelligent automation solutions to resolve inefficiencies
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Flow
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Drive continuous transformation through sustainable optimization and daily improvements
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CelonisShowcase;
