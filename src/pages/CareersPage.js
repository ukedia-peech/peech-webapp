import React from "react";
import { motion } from "framer-motion";
import Careers from "../components/sections/Careers";

const CareersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Careers />
    </motion.div>
  );
};

export default CareersPage;
