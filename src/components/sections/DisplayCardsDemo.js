import React from "react";
import { motion } from "framer-motion";
import DisplayCards from "../ui/DisplayCards";
import { TiltedText, GradientText } from "../ui/AnimatedText";
import { customEasing } from "../../utils/animations";

const DisplayCardsDemo = () => {
  const customCards = [
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Advanced ML models for predictive analytics",
      date: "Just now",
      iconClassName: "text-cyan-400",
      titleClassName: "text-cyan-400",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-cyan-500/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-black-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: "🌐",
      title: "Cloud-Native Platform",
      description: "Built for scale with cloud-native architecture",
      date: "2 hours ago",
      iconClassName: "text-blue-400",
      titleClassName: "text-blue-400",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-blue-500/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-black-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Access your data anywhere with responsive apps",
      date: "1 day ago",
      iconClassName: "text-purple-400",
      titleClassName: "text-purple-400",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <section className="section-padding bg-black-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: customEasing.fluid,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-primary-500/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: customEasing.fluid,
            delay: 2,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: customEasing.fluid }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <TiltedText
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Featured{" "}
            <GradientText gradient="from-primary-500 via-primary-400 to-primary-600">
              Capabilities
            </GradientText>
          </TiltedText>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our cutting-edge features designed to transform your
            business operations.
          </p>
        </motion.div>

        {/* Display Cards */}
        <div className="flex justify-center">
          <DisplayCards cards={customCards} />
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: customEasing.fluid }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <div className="bg-gradient-to-r from-black-900 to-black-800 rounded-xl p-6 sm:p-8 md:p-12 border border-primary-500/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
              Ready to Experience the Future?
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already transforming their operations
              with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-black-950 hover:bg-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-black-950 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DisplayCardsDemo;
