import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturesVerticalMobile = ({ features }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  const categories = [
    { name: 'Find', color: '#f97316', bgColor: 'bg-orange-500' },
    { name: 'Frame', color: '#f97316', bgColor: 'bg-orange-500' },
    { name: 'Fix', color: '#f97316', bgColor: 'bg-orange-500' },
    { name: 'Flow', color: '#f97316', bgColor: 'bg-orange-500' },
  ];

  // Auto-rotate through categories every 3 seconds
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start interval - always running
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveCategory((prev) => (prev + 1) % 4);
    }, 3000); // 3 seconds

    // Cleanup function to prevent memory leaks
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Only run once on mount

  // Handle manual navigation without pausing auto-play
  const handleManualNavigation = (newIndex) => {
    // Determine direction for animation
    setDirection(newIndex > activeCategory ? 1 : -1);
    setActiveCategory(newIndex);
  };

  const goToPrevious = () => {
    const newIndex = (activeCategory - 1 + 4) % 4;
    handleManualNavigation(newIndex);
  };

  const goToNext = () => {
    const newIndex = (activeCategory + 1) % 4;
    handleManualNavigation(newIndex);
  };

  // Group features by category
  const featuresByCategory = {
    Find: features.filter(f => f.fCategory === 'Find'),
    Frame: features.filter(f => f.fCategory === 'Frame'),
    Fix: features.filter(f => f.fCategory === 'Fix'),
    Flow: features.filter(f => f.fCategory === 'Flow'),
  };

  const currentCategoryName = categories[activeCategory].name;
  const currentFeatures = featuresByCategory[currentCategoryName];

  // Swipe detection
  const x = useMotionValue(0);
  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrevious();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
  };

  return (
    <div className="w-full py-8 px-4 relative">
      {/* Active Category Label with Navigation Arrows */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Left Arrow Button */}
        <motion.button
          onClick={goToPrevious}
          className="absolute left-0 flex items-center justify-center transition-all duration-300 z-30"
          whileHover={{
            scale: 1.2,
            filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))'
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-8 h-8 text-orange-500" strokeWidth={3} />
        </motion.button>

        {/* Category Label - Fixed position to prevent layout shift */}
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentCategoryName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold text-orange-500 mb-2"
            >
              {currentCategoryName}
            </motion.h3>
          </AnimatePresence>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Right Arrow Button */}
        <motion.button
          onClick={goToNext}
          className="absolute right-0 flex items-center justify-center transition-all duration-300 z-30"
          whileHover={{
            scale: 1.2,
            filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))'
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-8 h-8 text-orange-500" strokeWidth={3} />
        </motion.button>
      </div>

      {/* Feature Cards Container - Fixed to prevent layout shift */}
      <div className="relative min-h-[400px]">
        {/* Feature Cards with Swipe Support */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="cursor-grab active:cursor-grabbing"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentCategoryName}
              custom={direction}
              initial={{ opacity: 0, position: 'absolute', width: '100%' }}
              animate={{ opacity: 1, position: 'relative' }}
              exit={{ opacity: 0, position: 'absolute', width: '100%' }}
              transition={{
                duration: 0.3,
                opacity: { duration: 0.2 }
              }}
              className="space-y-4"
            >
              {currentFeatures.map((feature, index) => (
                <motion.div
                  key={`${currentCategoryName} -${index} `}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  className="bg-black-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-orange-500 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg border-2 border-orange-500 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesVerticalMobile;
