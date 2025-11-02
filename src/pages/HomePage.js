import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import CustomerLogos from "../components/sections/CustomerLogos";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <CustomerLogos />
    </motion.div>
  );
};

export default HomePage;
