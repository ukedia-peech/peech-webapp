import React from "react";
import { motion } from "framer-motion";
// import Resources from "../components/sections/Resources";
// import DisplayCardsDemo from "../components/sections/DisplayCardsDemo";

const ResourcesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Page Header */}
      {/* <section className="section-padding bg-black-950">
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-4 sm:mb-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Knowledge <span className="gradient-text">Hub</span>
            </h1>
            <p className="body-lg text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl px-4">
              Explore our comprehensive library of process mining insights, case
              studies, and thought leadership content. Stay ahead with the
              latest trends in business process optimization.
            </p>
          </motion.div>
        </div>
      </section>

      <Resources />
      <DisplayCardsDemo /> */}

      <div className="min-h-screen flex items-center justify-center bg-black-950">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Resources <span className="gradient-text">Coming Soon</span>
          </h1>
          <p className="text-gray-400 text-lg">
            We're working on bringing you amazing content. Stay tuned!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ResourcesPage;
