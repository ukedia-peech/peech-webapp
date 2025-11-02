import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  TrendingUp, 
  Zap, 
  Cog, 
  Database, 
  Target,
  BarChart3,
  Workflow
} from "lucide-react";

const PowerfulFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: Search,
      title: "Process Discovery",
      description: "Automatically map end-to-end business processes from your system data",
      gradient: "from-blue-600 to-indigo-500",
      color: "blue",
    },
    {
      icon: Database,
      title: "Real-Time Analytics",
      description: "Get instant insights with live dashboards and automated monitoring",
      gradient: "from-violet-600 to-purple-500",
      color: "violet",
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Track KPIs and measure improvements with comprehensive analytics",
      gradient: "from-emerald-500 to-teal-600",
      color: "emerald",
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "AI-powered recommendations for process optimization opportunities",
      gradient: "from-amber-500 to-orange-600",
      color: "amber",
    },
    {
      icon: Target,
      title: "Value Realization",
      description: "Achieve measurable ROI with data-driven transformation initiatives",
      gradient: "from-rose-500 to-pink-600",
      color: "rose",
    },
    {
      icon: Workflow,
      title: "Process Orchestration",
      description: "Coordinate complex workflows across systems and departments",
      gradient: "from-cyan-500 to-sky-600",
      color: "cyan",
    },
    {
      icon: BarChart3,
      title: "Predictive Intelligence",
      description: "Forecast bottlenecks and prevent issues before they occur",
      gradient: "from-fuchsia-500 to-purple-600",
      color: "fuchsia",
    },
    {
      icon: Cog,
      title: "Continuous Optimization",
      description: "Ongoing monitoring and improvements for sustained excellence",
      gradient: "from-blue-500 to-indigo-600",
      color: "blue",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-black-950 via-gray-900 to-black-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              ⚡ Powerful Capabilities
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Powerful Features of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Process Excellence
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Experience enterprise-grade process mining capabilities that transform how you discover, analyze, and optimize your business operations
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`
                  group relative rounded-2xl p-6 sm:p-8
                  bg-gradient-to-br from-gray-900/50 to-gray-800/30
                  backdrop-blur-xl border border-gray-700/50
                  transition-all duration-500 ease-out
                  hover:scale-[1.02] hover:border-${feature.color}-500/50
                  ${index % 4 === 0 || index % 4 === 3 ? 'lg:col-span-2' : ''}
                `}
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Gradient glow on hover */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 0.6 : 0,
                    scale: isHovered ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} blur-2xl -z-10`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <motion.div
                    animate={{
                      rotate: isHovered ? 360 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`
                      w-14 h-14 sm:w-16 sm:h-16 rounded-xl
                      bg-gradient-to-br ${feature.gradient}
                      flex items-center justify-center mb-6
                      shadow-lg shadow-${feature.color}-500/50
                    `}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Animated underline on hover */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : 0 }}
                    transition={{ duration: 0.4 }}
                    className={`h-0.5 bg-gradient-to-r ${feature.gradient} mt-4`}
                  />
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to transform your business processes?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300"
          >
            Explore All Features →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
