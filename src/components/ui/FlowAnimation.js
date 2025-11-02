import React from 'react';
import { motion } from 'framer-motion';

const FlowAnimation = ({ 
  className = '',
  title = 'peech processes',
  subtitle = 'minimal intelligence flows',
  showText = true 
}) => {
  return (
    <div className={`${className}`}>
      {showText && (
        <div className="py-12">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <span className="text-primary-500">peech</span>{' '}
              <span className="text-white">processes</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-400 font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              minimal intelligence flows
            </motion.p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowAnimation;
