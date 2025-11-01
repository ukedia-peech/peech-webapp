import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProcessMiningVisualization = ({
  className = '',
  title = 'Process Mining',
  centerText = 'CELONIS',
  accentColor = '#0066cc',
  processSteps = {
    first: 'Extract',
    second: 'Transform',
    third: 'Analyze', 
    fourth: 'Optimize'
  },
  metrics = {
    first: 'Efficiency',
    second: 'Compliance'
  }
}) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000); // 2 seconds per step = 8 seconds total cycle to match ball movement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      {/* Main container */}
      <div className="relative w-80 h-80 mx-auto">
        
        {/* Central Celonis Hub */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-3 flex items-center justify-center z-20"
          style={{ 
            borderColor: accentColor,
            backgroundColor: `${accentColor}15`
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-xs font-bold text-white text-center"
            style={{ color: accentColor }}
          >
            {centerText}
          </motion.div>
        </div>

        {/* Process Flow Nodes */}
        {Object.entries(processSteps).map(([key, step], index) => {
          const angle = (index * 90) - 90; // Start from top
          const radius = 110;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={key}
              className="absolute w-16 h-16 rounded-xl border-2 border-gray-600 bg-gray-800/80 backdrop-blur-sm flex items-center justify-center z-10"
              style={{
                left: `calc(50% + ${x}px - 32px)`,
                top: `calc(50% + ${y}px - 32px)`,
              }}
              animate={{
                borderColor: animationStep === index ? accentColor : '#4B5563',
                backgroundColor: animationStep === index ? `${accentColor}20` : '#1F2937CC',
                scale: animationStep === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs font-semibold text-white text-center px-1">
                {step}
              </span>
            </motion.div>
          );
        })}

        {/* Connecting Lines/Data Flow - Sequential Process Flow */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Extract to Transform */}
          <motion.line
            x1={160} y1={50} x2={270} y2={160}
            stroke={animationStep === 0 ? accentColor : '#4B5563'}
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: animationStep === 0 ? [0, -10] : 0,
            }}
            transition={{
              duration: 1,
              repeat: animationStep === 0 ? Infinity : 0,
              ease: "linear"
            }}
          />

          {/* Transform to Analyze */}
          <motion.line
            x1={270} y1={160} x2={160} y2={270}
            stroke={animationStep === 1 ? accentColor : '#4B5563'}
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: animationStep === 1 ? [0, -10] : 0,
            }}
            transition={{
              duration: 1,
              repeat: animationStep === 1 ? Infinity : 0,
              ease: "linear"
            }}
          />

          {/* Analyze to Optimize */}
          <motion.line
            x1={160} y1={270} x2={50} y2={160}
            stroke={animationStep === 2 ? accentColor : '#4B5563'}
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: animationStep === 2 ? [0, -10] : 0,
            }}
            transition={{
              duration: 1,
              repeat: animationStep === 2 ? Infinity : 0,
              ease: "linear"
            }}
          />

          {/* Optimize back to Extract */}
          <motion.line
            x1={50} y1={160} x2={160} y2={50}
            stroke={animationStep === 3 ? accentColor : '#4B5563'}
            strokeWidth="2"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: animationStep === 3 ? [0, -10] : 0,
            }}
            transition={{
              duration: 1,
              repeat: animationStep === 3 ? Infinity : 0,
              ease: "linear"
            }}
          />
        </svg>

        {/* Data Points/Events flowing - Sequential Process Flow */}
        <motion.div
          className="absolute w-3 h-3 rounded-full z-5"
          style={{
            backgroundColor: accentColor,
            filter: `drop-shadow(0 0 8px ${accentColor})`
          }}
          animate={{
            // Extract (top) → Transform (right) → Analyze (bottom) → Optimize (left) → back to Extract
            x: [
              160 - 6, // Extract (center - half ball width)
              160 + 110 - 6, // Transform (right)
              160 - 6, // Analyze (center)
              160 - 110 - 6, // Optimize (left)
              160 - 6 // Back to Extract
            ],
            y: [
              160 - 110 - 6, // Extract (top)
              160 - 6, // Transform (center)
              160 + 110 - 6, // Analyze (bottom)
              160 - 6, // Optimize (center)
              160 - 110 - 6 // Back to Extract
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1] // Equal time for each segment
          }}
        />
      </div>

      {/* Process Metrics Display */}
      <div className="mt-8 space-y-3">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">{metrics.first}</span>
            <div className="flex items-center space-x-2">
              <div className="w-12 bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                  animate={{ width: ['40%', '85%', '40%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <span className="text-sm font-semibold" style={{ color: accentColor }}>
                85%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">{metrics.second}</span>
            <div className="flex items-center space-x-2">
              <div className="w-12 bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: '#10B981' }}
                  animate={{ width: ['60%', '92%', '60%'] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </div>
              <span className="text-sm font-semibold text-green-400">
                92%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-4">
        <h3 className="text-sm font-medium text-gray-300">{title}</h3>
      </div>
    </div>
  );
};

export default ProcessMiningVisualization;