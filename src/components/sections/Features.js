import React, { useState } from "react";
import { motion } from "framer-motion";
import { customEasing } from "../../utils/animations";
import DisplayCards from "../ui/DisplayCards";
import { TiltedText, GradientText } from "../ui/AnimatedText";
import FeaturesFlowLayout from "../ui/FeaturesFlowLayout";
import FeaturesRadialLayout from "../ui/FeaturesRadialLayout";
import FeaturesRadialLayoutV2 from "../ui/FeaturesRadialLayoutV2";
import FeaturesVerticalMobile from "../ui/FeaturesVerticalMobile";

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
    // Find
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#f97316"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
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
          stroke="#f97316"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
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
    // Frame
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#f97316"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Process Strategy & Value Framing",
      description:
        "Convert process mining insights into business-prioritized transformation opportunities. Define clear value cases and strategic initiatives aligned with enterprise objectives.",
      color: "from-purple-500 via-violet-500 to-fuchsia-600",
      fCategory: "Frame",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#f97316"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.25}
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
    // Fix
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#f97316"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
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
          stroke="#f97316"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
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
    // Flow
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="#f97316"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
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
          stroke="#f97316"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
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
          className="text-center mb-16 relative"
        >
          <div className="flex items-center justify-center mb-6 px-4">
            <TiltedText
              as="h2"
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-white"
            >
              The Peech F<sup className="text-orange-500 align-middle">4</sup> Formula - Find. Frame. Fix. Flow.
            </TiltedText>
          </div>
          
          {/* Draft Selector Buttons - Vertical on Right */}
          {/* <div className="fixed right-8 top-1/3 flex flex-col gap-2 z-50">
            {[
              { value: 5, label: 'A' },
              { value: 7, label: 'B' },
              { value: 10, label: 'C' },
              { value: 16, label: 'D' },
              { value: 17, label: 'E' }
            ].map((draft) => (
              <button
                key={draft.value}
                onClick={() => setActiveDraft(draft.value)}
                className={`w-12 h-12 rounded-lg text-sm font-bold transition-all duration-300 ${
                  activeDraft === draft.value
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                    : "bg-black-800 text-gray-400 hover:bg-black-700 hover:text-white border border-gray-700"
                }`}
              >
                {draft.label}
              </button>
            ))}
          </div> */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Transform your business processes with our comprehensive process mining consulting. From Celonis implementation to task mining - we deliver complete business transformation.
          </p>
        </motion.div>

        {/* Features Cards with Creative Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop/Tablet: Radial Layout */}
          <div className="hidden md:block px-4">
            <FeaturesRadialLayoutV2 features={features} />
          </div>
          
          {/* Mobile: Vertical Animation */}
          <div className="block md:hidden">
            <FeaturesVerticalMobile features={features} />
          </div>
        </div>
        {/* Commented out A, B, C, D options - grid layout (saved for future reference) */}
      </div>
    </section>
  );
};

export default Features;
