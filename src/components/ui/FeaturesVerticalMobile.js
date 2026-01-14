import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeaturesVerticalMobile = ({ features }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    { name: 'Find', color: '#f97316', bgColor: 'bg-orange-500' },
    { name: 'Frame', color: '#f97316', bgColor: 'bg-orange-500' },
    { name: 'Fix', color: '#f97316', bgColor: 'bg-orange-500' },
    { name: 'Flow', color: '#f97316', bgColor: 'bg-orange-500' },
  ];

  // Auto-rotate through categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Group features by category
  const featuresByCategory = {
    Find: features.filter(f => f.fCategory === 'Find'),
    Frame: features.filter(f => f.fCategory === 'Frame'),
    Fix: features.filter(f => f.fCategory === 'Fix'),
    Flow: features.filter(f => f.fCategory === 'Flow'),
  };

  const currentCategoryName = categories[activeCategory].name;
  const currentFeatures = featuresByCategory[currentCategoryName];

  return (
    <div className="w-full py-8 px-4">
      {/* Active Category Label */}
      <motion.div 
        key={currentCategoryName}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h3 className="text-2xl font-bold text-orange-500 mb-2">
          {currentCategoryName}
        </h3>
        <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Feature Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategoryName}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {currentFeatures.map((feature, index) => (
            <motion.div
              key={`${currentCategoryName}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {categories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeCategory === index 
                ? 'bg-orange-500 w-6' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesVerticalMobile;
