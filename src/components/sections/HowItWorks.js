import React from "react";
import { motion } from "framer-motion";
import { Database, Cog, Lightbulb, Rocket, TrendingUp, Sparkles, BookOpen } from "lucide-react";

const HowItWorks = () => {

  // Animated Icon Component
  const AnimatedIcon = ({ IconComponent, color, index }) => (
    <motion.div
      className="relative w-full h-full"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-20 blur-md`}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main container */}
      <motion.div
        className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Animated sparkles */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 25}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-2 h-2 text-white/60" />
            </motion.div>
          ))}
        </div>

        {/* Main icon with rotation */}
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white relative z-10" strokeWidth={2.5} />
        </motion.div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );

  const steps = [
    {
      number: "01",
      title: "Connect Your Data",
      description:
        "Seamlessly integrate with your existing systems and data sources through our secure API.",
      IconComponent: Database,
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: "02",
      title: "Development",
      description:
        "Our team develops custom solutions tailored to your business processes and requirements.",
      IconComponent: Cog,
      color: "from-purple-500 to-pink-600",
    },
    {
      number: "03",
      title: "Get Insights",
      description:
        "Receive actionable insights and recommendations to optimize your business processes.",
      IconComponent: Lightbulb,
      color: "from-green-500 to-emerald-600",
    },
    {
      number: "04",
      title: "Take Action",
      description:
        "Implement automated workflows and make data-driven decisions to drive growth.",
      IconComponent: Rocket,
      color: "from-orange-500 to-red-600",
    },
    {
      number: "05",
      title: "Our Methodology",
      description:
        "A proven framework built on discovery-first approach, data-driven insights, continuous improvement, and collaborative partnership.",
      IconComponent: BookOpen,
      color: "from-cyan-500 to-blue-600",
    },
    {
      number: "06",
      title: "Value Realization",
      description:
        "Track measurable outcomes and ROI as your optimized processes deliver sustained business value.",
      IconComponent: TrendingUp,
      color: "from-yellow-500 to-amber-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-black-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 px-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Transform your business with our comprehensive approach from
            data integration to measurable value realization.
          </p>
        </motion.div>

        {/* Process Steps - 6 Cards in One Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 px-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="relative bg-black-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-black-800">
                {/* Step Number */}
                <div className="absolute -top-3 left-4">
                  <div className="w-7 h-7 bg-primary-500 text-black-950 rounded-full flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-3">
                  <div className="w-10 h-10">
                    <AnimatedIcon
                      IconComponent={step.IconComponent}
                      color={step.color}
                      index={index}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {step.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
