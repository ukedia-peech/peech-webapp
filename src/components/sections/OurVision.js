import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Target, Users, TrendingUp, Heart, Globe } from "lucide-react";

const OurVision = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering world-class process mining solutions",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships with our clients",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Heart,
      title: "Innovation",
      description: "Pushing boundaries in business transformation",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="relative py-12 bg-black-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-primary-500 font-semibold text-sm">Our Vision</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Transforming Business Through
            <br />
            <span className="gradient-text">Process Excellence</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base text-gray-400 leading-relaxed"
          >
            We believe every organization deserves to operate at peak efficiency. Our mission is to empower businesses worldwide with cutting-edge process mining insights.
          </motion.p>
        </motion.div>

        {/* Core Values - Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-black-800/50 to-black-900/50 backdrop-blur-sm rounded-xl p-5 border border-black-700 hover:border-primary-500/50 transition-all duration-300 overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="relative mb-3"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "200%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.3 + index * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
