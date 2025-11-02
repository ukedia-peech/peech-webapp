import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabVariants } from "../../utils/animations";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);
  const intervalRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % useCases.length);
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset interval when user manually changes tab
  const handleTabClick = (index) => {
    setActiveTab(index);
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Start new interval
    intervalRef.current = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % useCases.length);
    }, 6000);
  };

  const useCases = [
    {
      title: "Financial Services",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        "Optimize loan processing, compliance workflows, and fraud detection by visualizing end-to-end transaction processes and identifying bottlenecks in real-time.",
      features: [
        "Loan origination process optimization",
        "Compliance workflow monitoring",
        "Fraud pattern detection",
        "Customer onboarding acceleration",
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Healthcare",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      description:
        "Enhance patient care and operational efficiency by analyzing clinical pathways, reducing wait times, and optimizing resource allocation across departments.",
      features: [
        "Patient journey optimization",
        "Clinical pathway analysis",
        "Resource allocation efficiency",
        "Appointment scheduling optimization",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Manufacturing",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      description:
        "Streamline production workflows, reduce downtime, and optimize supply chain operations by discovering inefficiencies and automating quality control processes.",
      features: [
        "Production process optimization",
        "Downtime analysis & reduction",
        "Supply chain visibility",
        "Quality defect tracking",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Retail & E-commerce",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      description:
        "Transform order fulfillment, optimize inventory management, and reduce return processing times by analyzing customer journey touchpoints and warehouse operations.",
      features: [
        "Order-to-delivery optimization",
        "Inventory turnover analysis",
        "Return process efficiency",
        "Customer journey mapping",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Technology",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      description:
        "Transform IT operations and software development by analyzing system processes, identifying performance bottlenecks, and optimizing resource allocation through advanced process mining.",
      features: [
        "IT service process optimization",
        "System performance bottleneck analysis",
        "Cloud resource utilization tracking",
        "Software development workflow enhancement",
      ],
      color: "from-gray-500 to-gray-700",
    },
  ];

  return (
    <section id="resources" className="section-padding bg-black-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Solutions for Every <span className="gradient-text">Industry</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how process mining is revolutionizing operations and
            unlocking value across industries.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
          {useCases.map((useCase, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTabClick(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base flex items-center ${
                activeTab === index
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-black-800 text-gray-400 hover:bg-black-700 border border-black-700"
              }`}
            >
              <span className="mr-1 sm:mr-2 inline-flex items-center">
                {useCase.icon}
              </span>
              <span className="hidden sm:inline">{useCase.title}</span>
              <span className="sm:hidden">{useCase.title.split(" ")[0]}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-black-900 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-black-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Content */}
                <div>
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${useCases[activeTab].color} flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6`}
                  >
                    {useCases[activeTab].icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                    {useCases[activeTab].title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {useCases[activeTab].description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3">
                    {useCases[activeTab].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-sm sm:text-base text-gray-300"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Modern Abstract Visual */}
                <div className="relative mt-6 lg:mt-0">
                  <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden">
                    {/* Animated geometric pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black-800 to-black-900">
                      {/* Grid pattern */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)",
                          backgroundSize: "30px 30px",
                        }}
                      ></div>

                      {/* Floating shapes */}
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute top-10 right-10 w-20 h-20 rounded-lg bg-gradient-to-br ${useCases[activeTab].color} opacity-30 blur-sm`}
                      />
                      <motion.div
                        animate={{
                          y: [0, 20, 0],
                          rotate: [0, -5, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className={`absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br ${useCases[activeTab].color} opacity-20 blur-md`}
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-2xl bg-gradient-to-br ${useCases[activeTab].color} opacity-10`}
                      />
                    </div>

                    {/* Central icon with glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br ${useCases[activeTab].color} flex items-center justify-center shadow-2xl relative`}
                      >
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${useCases[activeTab].color} blur-xl opacity-50`}
                        ></div>
                        <div className="relative text-white scale-150">
                          {useCases[activeTab].icon}
                        </div>
                      </motion.div>
                    </div>

                    {/* Corner accent */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${useCases[activeTab].color} opacity-20 rounded-bl-full`}
                    ></div>
                    <div
                      className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${useCases[activeTab].color} opacity-20 rounded-tr-full`}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
