import React from "react";
import { motion } from "framer-motion";
import { customEasing } from "../../utils/animations";
import DisplayCards from "../ui/DisplayCards";
import { TiltedText, GradientText } from "../ui/AnimatedText";

const Features = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Celonis Process Mining",
      description:
        "Discover actual business processes from system data, identify bottlenecks, and uncover hidden inefficiencies with industry-leading process mining technology.",
      color: "from-blue-500 via-blue-600 to-indigo-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "Process Optimization",
      description:
        "Data-driven recommendations for process improvements with measurable ROI and performance metrics that drive operational excellence.",
      color: "from-violet-500 via-purple-500 to-fuchsia-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "End-to-End Transformation",
      description:
        "Complete business transformation from process discovery to automation implementation and value realization with proven methodologies.",
      color: "from-emerald-500 via-teal-500 to-cyan-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "AI-Powered Process Excellence",
      description:
        "Intelligent automation and predictive analytics powered by AI to optimize workflows, identify opportunities, and drive continuous improvement at scale.",
      color: "from-amber-500 via-orange-500 to-red-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Task Mining Solutions",
      description:
        "Analyze user interactions and desktop activities to identify automation opportunities and process improvements through advanced task mining.",
      color: "from-rose-500 via-pink-500 to-fuchsia-600",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "RPA Automation",
      description:
        "Implement intelligent robotic process automation to streamline repetitive tasks and accelerate digital transformation with proven RPA frameworks.",
      color: "from-sky-500 via-blue-500 to-indigo-600",
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-black-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: customEasing.fluid }}
          className="text-center mb-16"
        >
          <TiltedText
            as="h2"
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 px-4"
          >
            Powerful Features for{" "}
            <GradientText gradient="from-primary-500 via-primary-400 to-primary-600">
              Process Excellence
            </GradientText>
          </TiltedText>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Everything you need to transform your business processes with
            Celonis and comprehensive process mining solutions.
          </p>
        </motion.div>

        {/* Features Cards with Creative Layout */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group relative"
              >
                <div className="relative bg-black-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-primary-500/50 transition-all duration-500 overflow-hidden h-full">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-6 items-center">
                    {/* Left Content */}
                    <div className="relative z-10">
                      {/* Title with Icon */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0 mt-1`}
                        >
                          <div className="w-8 h-8">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                          {feature.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Right Visual - Animated Abstract Design */}
                    <div className="relative h-48 lg:h-full min-h-[180px] rounded-2xl overflow-hidden">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black-800 to-black-900">
                        {/* Grid pattern */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />

                        {/* Floating animated shapes - standardized sizes */}
                        <motion.div
                          animate={{
                            y: [0, -12, 0],
                            rotate: [0, 8, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} opacity-40 blur-sm`}
                        />
                        <motion.div
                          animate={{
                            y: [0, 12, 0],
                            rotate: [0, -8, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                          className={`absolute bottom-6 left-6 w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} opacity-30 blur-md`}
                        />
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20`}
                        />
                      </div>

                      {/* Central icon with enhanced glow */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: 0.2 + index * 0.1,
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-2xl relative group-hover:shadow-primary-500/50 transition-all duration-500`}
                        >
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                          />
                          <div className="relative text-white scale-125 group-hover:scale-150 transition-transform duration-500">
                            {feature.icon}
                          </div>
                        </motion.div>
                      </div>

                      {/* Corner accents */}
                      <div
                        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.color} opacity-30 rounded-bl-full`}
                      />
                      <div
                        className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${feature.color} opacity-30 rounded-tr-full`}
                      />

                      {/* Particle effects */}
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.color}`}
                      />
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className={`absolute bottom-8 right-8 w-2 h-2 rounded-full bg-gradient-to-br ${feature.color}`}
                      />
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Border glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    style={{
                      boxShadow: `inset 0 0 30px rgba(249, 115, 22, 0.1)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
