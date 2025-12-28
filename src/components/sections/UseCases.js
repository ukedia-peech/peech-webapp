import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabVariants } from "../../utils/animations";

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCategory, setActiveCategory] = useState("industry"); // "industry" or "process"
  const intervalRef = useRef(null);

  const industryUseCases = [
    {
      title: "Retail & CPG",
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
      title: "Healthcare & Life Sciences",
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
      title: "Automotive",
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
            d="M8 7h8m-8 5h8m-4-9v2m-6 8h.01M6 17h.01M18 17h.01M18 13h.01M6 13h.01M4 21h16a1 1 0 001-1v-4a1 1 0 00-1-1h-1l-2-6H7L5 15H4a1 1 0 00-1 1v4a1 1 0 001 1z"
          />
        </svg>
      ),
      description:
        "Accelerate automotive innovation by optimizing production lines, streamlining supply chains, and enhancing quality control through data-driven process intelligence.",
      features: [
        "Production line optimization",
        "Supply chain resilience",
        "Quality assurance automation",
        "Dealer network efficiency",
      ],
      color: "from-red-500 to-rose-600",
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
      color: "from-cyan-500 to-blue-600",
    },
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
  ];

  const processUseCases = [
    {
      title: "Accounts Payable",
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
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      description:
        "Streamline invoice processing, reduce payment delays, and optimize cash flow management by identifying bottlenecks and automating approval workflows.",
      features: [
        "Invoice processing automation",
        "Payment cycle optimization",
        "Duplicate payment detection",
        "Vendor management efficiency",
      ],
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Accounts Receivable",
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
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      description:
        "Accelerate collections, reduce DSO, and improve cash flow by analyzing payment patterns and optimizing dunning processes.",
      features: [
        "Collection process optimization",
        "DSO reduction strategies",
        "Payment behavior analysis",
        "Credit risk assessment",
      ],
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Order Management",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
      description:
        "Optimize order-to-cash cycles, reduce fulfillment times, and improve customer satisfaction through end-to-end order visibility.",
      features: [
        "Order cycle time reduction",
        "Fulfillment optimization",
        "Backorder management",
        "Customer delivery tracking",
      ],
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Procurement",
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
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      description:
        "Enhance procurement efficiency, ensure compliance, and reduce maverick spending through transparent procure-to-pay processes.",
      features: [
        "Procure-to-pay optimization",
        "Maverick spending detection",
        "Supplier performance tracking",
        "Contract compliance monitoring",
      ],
      color: "from-rose-500 to-pink-600",
    },
    {
      title: "Supply Chain",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description:
        "Build resilient supply chains by identifying vulnerabilities, optimizing logistics, and improving supplier collaboration.",
      features: [
        "End-to-end visibility",
        "Logistics optimization",
        "Risk identification",
        "Supplier collaboration",
      ],
      color: "from-sky-500 to-blue-600",
    },
    {
      title: "Customer Service",
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
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      description:
        "Elevate customer experience by optimizing service processes, reducing resolution times, and improving first-contact resolution rates.",
      features: [
        "Ticket resolution optimization",
        "First-contact resolution improvement",
        "Service level compliance",
        "Customer journey analysis",
      ],
      color: "from-indigo-500 to-violet-600",
    },
  ];

  const useCases = activeCategory === "industry" ? industryUseCases : processUseCases;

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
  }, [useCases.length]);

  // Reset tab when category changes
  useEffect(() => {
    setActiveTab(0);
  }, [activeCategory]);

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

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % (category === "industry" ? industryUseCases.length : processUseCases.length));
    }, 6000);
  };

  return (
    <section id="resources" className="section-padding bg-black-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Solutions for Every{" "}
            <span className="gradient-text">
              {activeCategory === "industry" ? "Industry" : "Process"}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {activeCategory === "industry"
              ? "Discover how process mining is revolutionizing operations and unlocking value across industries."
              : "Optimize your core business processes with data-driven insights and intelligent automation."}
          </p>

          {/* Category Toggle */}
          <div className="inline-flex items-center p-1 bg-black-800 rounded-full border border-black-700">
            <button
              onClick={() => handleCategoryChange("industry")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "industry"
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              By Industry
            </button>
            <button
              onClick={() => handleCategoryChange("process")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "process"
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              By Process
            </button>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-2 pb-2">
            {useCases.map((useCase, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTabClick(index)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm flex items-center whitespace-nowrap flex-shrink-0 ${
                  activeTab === index
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-black-800 text-gray-400 hover:bg-black-700 border border-black-700"
                }`}
              >
                <span className="mr-2 inline-flex items-center">
                  {useCase.icon}
                </span>
                {useCase.title}
              </motion.button>
            ))}
          </div>
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
