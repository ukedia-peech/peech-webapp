import React from "react";
import { motion } from "framer-motion";
import UseCases from "../components/sections/UseCases";

const SolutionsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <UseCases />
    </motion.div>
  );
};

export default SolutionsPage;
