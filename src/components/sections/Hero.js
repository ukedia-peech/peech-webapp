import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { backgroundAnimations, customEasing } from "../../utils/animations";
import AnimatedBackground from "../ui/AnimatedBackground";
import { FloatingPathsBackground } from "../ui/BackgroundPaths";
import {
  FlowingText,
  MagneticText,
  GradientText,
  SplitText,
} from "../ui/AnimatedText";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black-950 pt-20"
    >
      {/* Advanced Animated Background */}
      <AnimatedBackground variant="particles" />

      {/* Floating Paths Background */}
      <FloatingPathsBackground />

      {/* Morphing shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={backgroundAnimations.morphingShapes}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-500/20 to-primary-600/20"
        />
        <motion.div
          variants={backgroundAnimations.morphingShapes}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-primary-400/15 to-primary-500/15"
        />
        <motion.div
          variants={backgroundAnimations.morphingShapes}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-40 left-1/2 w-20 h-20 bg-gradient-to-r from-primary-600/10 to-primary-700/10"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-black-900 border border-primary-500 text-primary-500 text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, ease: customEasing.bounce }}
          >
            <motion.span
              className="w-2 h-2 bg-primary-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: customEasing.fluid,
              }}
            />
            Trusted by Fortune 500 - Process Mining Excellence
          </motion.div>

          {/* Main Headline with Split Text Animation */}
          <div className="mb-6">
            <SplitText
              text="Transform Your Business"
              as="h1"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-nowrap"
              staggerDelay={0.05}
            />
            <div className="mt-2">
              <SplitText
                text="with"
                as="span"
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                staggerDelay={0.05}
              />
            </div>
            <div className="mt-2">
              <GradientText
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                gradient="from-primary-500 via-primary-400 to-primary-600"
              >
                Process Mining Excellence
              </GradientText>
            </div>
          </div>

          {/* Subheadline with Flowing Animation */}
          <FlowingText
            as="p"
            className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            delay={1}
          >
            Unlock operational excellence with Celonis process mining and
            comprehensive business transformation. Trusted by Fortune 500
            companies.
          </FlowingText>

          {/* CTA Button - Glassmorphism Modern Design */}
          <motion.div
            className="flex justify-center items-center mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, ease: customEasing.fluid }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-orange-500 to-primary-600 rounded-2xl opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500 animate-gradient-x"></div>

                {/* Glassmorphism container */}
                <div className="relative px-8 py-4 bg-black-900/40 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

                  {/* Button content */}
                  <div className="relative flex items-center gap-3">
                    {/* Sparkle icon */}
                    <svg
                      className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors duration-300 group-hover:rotate-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <span className="text-white font-semibold text-lg tracking-tight">
                      Get Started Today
                    </span>

                    {/* Arrow with subtle animation */}
                    <svg
                      className="w-5 h-5 text-primary-400 group-hover:text-primary-300 group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out"></div>
                </div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats with Animated Counters */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 mb-24 sm:mb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, ease: customEasing.fluid }}
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ ease: customEasing.smooth }}
            >
              <GradientText className="text-3xl md:text-4xl font-bold mb-2">
                5x
              </GradientText>
              <div className="text-gray-400 text-sm sm:text-base">
                Average ROI achieved
                <br className="hidden sm:hidden" />
                {" "}per process
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ ease: customEasing.smooth }}
            >
              <GradientText className="text-3xl md:text-4xl font-bold mb-2">
                70+
              </GradientText>
              <div className="text-gray-400 text-sm sm:text-base">
                Projects delivered across 10+ industries
              </div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ ease: customEasing.smooth }}
            >
              <GradientText className="text-3xl md:text-4xl font-bold mb-2">
                $500M+
              </GradientText>
              <div className="text-gray-400 text-sm sm:text-base">
                Client business impact realized
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
