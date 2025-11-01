import React from "react";
import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import Card from "../ui/Card";
import { staggerContainer, cardVariants } from "../../utils/animations";

const Team = () => {
  const teamMembers = [
    {
      name: "Anmol Gupta",
      role: "CEO & Founder",
      bio: "Visionary leader driving innovation in process mining and intelligent automation, transforming enterprise operations through data-driven insights.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      linkedin: "https://www.linkedin.com/in/anmol-gupta",
      color: "from-primary-500 to-orange-600",
    },
    {
      name: "Gaurav Pothula",
      role: "Partner & Country Head India",
      bio: "Strategic partner leading operations in India, bringing deep expertise in process intelligence and enterprise transformation across diverse industries.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      linkedin: "https://www.linkedin.com/in/gaurav-pothula",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section className="section-padding bg-black-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="heading-lg mb-4 sm:mb-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="body-lg text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl">
            Our rapidly growing team of process mining experts and Celonis
            specialists are passionate about transforming how Fortune 500
            businesses operate.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative h-full group">
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                ></div>

                <Card
                  variant="dark"
                  className="h-full text-center relative overflow-hidden hover:border-primary-500/50 transition-all duration-500"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-500"></div>

                  <div className="relative pt-8">
                    {/* Profile Image Placeholder - Elegant Gradient Circle */}
                    <div className="mb-6">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        className="relative w-32 h-32 mx-auto"
                      >
                        {/* Rotating border ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.color} opacity-30 blur-sm`}
                        />

                        {/* Profile placeholder circle */}
                        <div
                          className={`relative w-full h-full rounded-full bg-gradient-to-br ${member.color} p-0.5 group-hover:shadow-2xl transition-shadow duration-500`}
                        >
                          <div className="w-full h-full rounded-full bg-black-900 flex items-center justify-center relative overflow-hidden">
                            {/* Gradient overlay */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`}
                            ></div>

                            {/* Silhouette icon */}
                            <div className="relative text-gray-400 group-hover:text-white transition-colors duration-300 scale-150">
                              {member.icon}
                            </div>

                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                              animate={{
                                x: ["-100%", "100%"],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut",
                              }}
                            />
                          </div>
                        </div>

                        {/* Status indicator dot */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`absolute bottom-2 right-2 w-4 h-4 rounded-full bg-gradient-to-r ${member.color} border-2 border-black-900 shadow-lg`}
                        />
                      </motion.div>
                    </div>

                    {/* Member Info */}
                    <div className="mb-6 px-6">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p
                        className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {member.role}
                      </motion.p>
                      <motion.p
                        className="text-gray-400 text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                      >
                        {member.bio}
                      </motion.p>
                    </div>

                    {/* LinkedIn Link - Glassmorphism style */}
                    <div className="flex justify-center pb-8">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/link relative"
                      >
                        {/* Button glow */}
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${member.color} opacity-50 blur-sm group-hover/link:opacity-75 transition-opacity duration-300 rounded-xl`}
                        ></div>

                        {/* Button content */}
                        <div className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-black-900/60 backdrop-blur-sm border border-white/10 group-hover/link:border-white/20 rounded-xl transition-all duration-300 overflow-hidden">
                          {/* Background gradient on hover */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover/link:opacity-10 transition-opacity duration-300`}
                          ></div>

                          <svg
                            className="relative w-5 h-5 text-primary-500 group-hover/link:text-primary-400 transition-colors duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          <span className="relative text-sm font-medium text-white">
                            Connect
                          </span>
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 px-4"
        >
          <div className="bg-gradient-to-r from-gray-900/80 to-black-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 border border-primary-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="heading-md text-white mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl">
                  Our Culture & Values
                </h3>
                <p className="body-md text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  We believe in fostering a culture of innovation,
                  collaboration, and continuous learning. Our team is driven by
                  the mission to make process mining accessible and valuable for
                  every business.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50 flex-shrink-0"></div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base">
                      Innovation-first mindset
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50 flex-shrink-0"></div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base">
                      Customer-centric approach
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-500 rounded-full shadow-lg shadow-primary-500/50 flex-shrink-0"></div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base">
                      Continuous learning & growth
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6 lg:mt-0">
                <motion.div
                  className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6"
                  animate={{
                    y: [0, -15, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-3xl blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />

                  {/* Main icon container */}
                  <motion.div
                    className="relative w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {/* Animated sparkles background */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        rotate: [0, 360],
                        transition: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.3,
                              ease: "easeInOut",
                            },
                          }}
                        >
                          <Sparkles className="w-3 h-3 text-white/40" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Main rocket icon */}
                    <motion.div
                      animate={{
                        rotate: [-3, 3, -3],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Rocket
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white relative z-10"
                        strokeWidth={2}
                      />
                    </motion.div>

                    {/* Animated trails */}
                    <motion.div
                      className="absolute bottom-8 left-1/2 -translate-x-1/2"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scaleY: [0.8, 1.2, 0.8],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <div className="w-8 h-12 bg-gradient-to-b from-white/30 to-transparent rounded-full blur-sm" />
                    </motion.div>
                  </motion.div>
                </motion.div>
                <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg">
                  Join our mission to transform business processes with process
                  mining
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
