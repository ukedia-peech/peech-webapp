import React from "react";
import { motion } from "framer-motion";
import Team from "../components/sections/Team";
import FlowHero from "../components/sections/FlowHero";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Team />
      <FlowHero />
    </motion.div>
  );
};

export default AboutPage;
