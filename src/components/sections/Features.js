import React, { useState } from "react";
import { motion } from "framer-motion";
import { customEasing } from "../../utils/animations";
import DisplayCards from "../ui/DisplayCards";
import { TiltedText, GradientText } from "../ui/AnimatedText";
import FeaturesFlowLayout from "../ui/FeaturesFlowLayout";
import FeaturesRadialLayout from "../ui/FeaturesRadialLayout";

const Features = () => {
  const [activeDraft, setActiveDraft] = useState(5);

  // F-category configuration
  const fCategories = {
    Find: { color: "bg-blue-500", textColor: "text-blue-500", borderColor: "border-blue-500", gradient: "from-blue-500 to-blue-600" },
    Frame: { color: "bg-purple-500", textColor: "text-purple-500", borderColor: "border-purple-500", gradient: "from-purple-500 to-violet-500" },
    Fix: { color: "bg-orange-500", textColor: "text-orange-500", borderColor: "border-orange-500", gradient: "from-orange-500 to-red-500" },
    Flow: { color: "bg-green-500", textColor: "text-green-500", borderColor: "border-green-500", gradient: "from-green-500 to-emerald-500" },
  };

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
      fCategory: "Find",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "COE as\na Service",
      description:
        "Establish a sustainable Center of Excellence with our managed services. We provide ongoing support, governance frameworks, and continuous value delivery to sustain your process mining journey.",
      color: "from-violet-500 via-purple-500 to-fuchsia-600",
      fCategory: "Flow",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Training & User Enablement",
      description:
        "Empower your teams with comprehensive training programs, certification paths, and hands-on workshops to build internal expertise and drive adoption across your organization.",
      color: "from-emerald-500 via-teal-500 to-cyan-600",
      fCategory: "Flow",
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
      fCategory: "Fix",
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
      fCategory: "Find",
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
      title: "RPA\nAutomation",
      description:
        "Implement intelligent robotic process automation to streamline repetitive tasks and accelerate digital transformation with proven RPA frameworks.",
      color: "from-sky-500 via-blue-500 to-indigo-600",
      fCategory: "Fix",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Process Strategy & Value Framing",
      description:
        "Convert process mining insights into business-prioritized transformation opportunities.",
      color: "from-purple-500 via-violet-500 to-fuchsia-600",
      fCategory: "Frame",
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
      title: "Transformation Roadmap & Governance Design",
      description:
        "Design structured transformation roadmaps with clear governance frameworks, milestones, and KPIs to ensure sustainable process excellence and organizational alignment.",
      color: "from-indigo-500 via-purple-500 to-pink-600",
      fCategory: "Frame",
    },
  ];

  // Render F-category badge based on active draft
  const renderFCategoryBadge = (feature, index) => {
    const category = fCategories[feature.fCategory];
    if (!category) return null;

    switch (activeDraft) {
      case 5:
        // Draft 5: Glassmorphism - frosted glass effect
        return (
          <div className="absolute top-4 right-4 z-20">
            <div className={`backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg`}>
              <span className={`${category.textColor} drop-shadow-sm`}>{feature.fCategory}</span>
            </div>
          </div>
        );
      case 7:
        // Draft 7: Animated pulse/glow effect
        return (
          <div className="absolute top-4 right-4 z-20">
            <div className="relative">
              <div className={`absolute inset-0 ${category.color} rounded-full blur-md opacity-60 animate-pulse`}></div>
              <div className={`relative ${category.color} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg`}>
                {feature.fCategory}
              </div>
            </div>
          </div>
        );
      case 10:
        // Draft 10: Floating elevated card badge with icon
        return (
          <div className="absolute top-4 right-4 z-20">
            <div className={`bg-black-800/90 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 shadow-xl flex items-center gap-2`}>
              <div className={`w-5 h-5 rounded ${category.color} flex items-center justify-center`}>
                <span className="text-white text-[10px] font-black">{feature.fCategory.charAt(0)}</span>
              </div>
              <span className="text-white text-xs font-semibold">{feature.fCategory}</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
          <div className="flex items-center justify-center gap-4 mb-6 px-4">
            <TiltedText
              as="h2"
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-white"
            >
              Powerful Features for{" "}
              <GradientText gradient="from-primary-500 via-primary-400 to-primary-600">
                Process Excellence
              </GradientText>
            </TiltedText>
            {/* Draft Selector Buttons */}
            <div className="flex gap-2 justify-center">
              {[
                { value: 5, label: 'A' },
                { value: 7, label: 'B' },
                { value: 10, label: 'C' },
                { value: 16, label: 'D' }
              ].map((draft) => (
                <button
                  key={draft.value}
                  onClick={() => setActiveDraft(draft.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                    activeDraft === draft.value
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                      : "bg-black-800 text-gray-400 hover:bg-black-700 hover:text-white border border-gray-700"
                  }`}
                >
                  {draft.label}
                </button>
              ))}
            </div>
          </div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Everything you need to transform your business processes with
            Celonis and comprehensive process mining solutions.
          </p>
        </motion.div>

        {/* Features Cards with Creative Layout */}
        {activeDraft === 16 ? (
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <FeaturesRadialLayout features={features} />
          </div>
        ) : (
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
                <div className={`relative bg-black-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-primary-500/50 transition-all duration-500 overflow-hidden h-full ${activeDraft === 4 ? 'pb-14' : ''}`}>
                  {/* F-Category Badge for Drafts 2, 3, 4 */}
                  {activeDraft !== 1 && renderFCategoryBadge(feature, index)}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-6 items-center min-h-0">
                    {/* Left Content */}
                    <div className="relative z-10 min-h-0">
                      {/* Title with Icon */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0 mt-1`}
                        >
                          <div className="w-8 h-8">
                            {feature.icon}
                          </div>
                        </div>
                        <div className="flex items-center flex-wrap gap-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300 leading-tight whitespace-pre-line">
                            {feature.title}
                          </h3>
                          {/* F-Category Badge for Draft 1 - inline with title */}
                          {activeDraft === 1 && renderFCategoryBadge(feature, index)}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Right Visual - Animated Abstract Design */}
                    <div className="relative h-48 lg:h-full min-h-[180px] rounded-2xl overflow-hidden flex-shrink-0">
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
        )}
      </div>
    </section>
  );
};

export default Features;
