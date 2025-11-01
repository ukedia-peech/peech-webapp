import React from "react";
import { motion } from "framer-motion";
import CelonisShowcase from "../components/sections/DatabaseDemo";
import UseCases from "../components/sections/UseCases";
import HowItWorks from "../components/sections/HowItWorks";

const SolutionsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <CelonisShowcase />
      <UseCases />
      <HowItWorks />
    </motion.div>
  );
};

export default SolutionsPage;
