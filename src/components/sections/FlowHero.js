import React from "react";
import { motion } from "framer-motion";
import FlowAnimation from "../ui/FlowAnimation";

const FlowHero = () => {
  return (
    <section className="relative min-h-screen bg-black-950 overflow-hidden">
      {/* Flow Animation Background */}
      <FlowAnimation
        className="absolute inset-0"
        height="100vh"
        showText={false}
      />

      {/* Content Overlay - Removed */}
    </section>
  );
};

export default FlowHero;
