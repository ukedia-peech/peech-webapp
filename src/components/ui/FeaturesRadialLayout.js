import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FeaturesRadialLayout = ({ features }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // F-Category configurations
  const fCategories = [
    { id: 'find', label: 'Find', color: '#3b82f6', bgColor: 'bg-blue-500', position: { angle: -90 } },
    { id: 'frame', label: 'Frame', color: '#a855f7', bgColor: 'bg-purple-500', position: { angle: 0 } },
    { id: 'fix', label: 'Fix', color: '#f97316', bgColor: 'bg-orange-500', position: { angle: 90 } },
    { id: 'flow', label: 'Flow', color: '#22c55e', bgColor: 'bg-green-500', position: { angle: 180 } },
  ];

  // Map features to their categories with positions
  const featuresByCategory = {
    Find: features.filter(f => f.fCategory === 'Find'),
    Frame: features.filter(f => f.fCategory === 'Frame'),
    Fix: features.filter(f => f.fCategory === 'Fix'),
    Flow: features.filter(f => f.fCategory === 'Flow'),
  };

  // Calculate card positions radiating from each F-node
  const getCardPositions = (categoryIndex, cardIndex, totalCards) => {
    const baseAngle = fCategories[categoryIndex].position.angle;
    const radius = 320; // Distance from center to cards
    
    // For Find (top) and Fix (bottom), spread cards horizontally
    if (categoryIndex === 0 || categoryIndex === 2) {
      // Find (top, -90°) or Fix (bottom, 90°) - spread horizontally side by side
      const horizontalSpacing = 300; // Increased spacing for better separation
      const xOffset = totalCards > 1 ? (cardIndex - (totalCards - 1) / 2) * horizontalSpacing : 0;
      const x = xOffset;
      const y = Math.sin((baseAngle * Math.PI) / 180) * radius;
      return { x, y, angle: baseAngle };
    } else {
      // Frame (right, 0°) and Flow (left, 180°) - use original angle-based spreading
      const spreadAngle = 40;
      const offset = totalCards > 1 ? (cardIndex - (totalCards - 1) / 2) * spreadAngle : 0;
      const angle = baseAngle + offset;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;
      return { x, y, angle };
    }
  };

  return (
    <div className="w-full py-8">
      <div className="relative mx-auto" style={{ width: '900px', height: '800px' }}>
        
        {/* Central Peech Logo Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <motion.div
            className="w-24 h-24 rounded-full border-3 border-orange-500 bg-orange-500/10 flex items-center justify-center"
            animate={{ boxShadow: ['0 0 20px rgba(249, 115, 22, 0.3)', '0 0 40px rgba(249, 115, 22, 0.5)', '0 0 20px rgba(249, 115, 22, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.img
              src="/peech-logo-removebg-preview.png"
              alt="Peech"
              className="w-16 h-16 object-contain"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* 4 F-Category Nodes around center */}
        {fCategories.map((category, index) => {
          const hubRadius = 100;
          const x = Math.cos((category.position.angle * Math.PI) / 180) * hubRadius;
          const y = Math.sin((category.position.angle * Math.PI) / 180) * hubRadius;
          
          return (
            <motion.div
              key={category.id}
              className="absolute z-20"
              style={{
                left: `calc(50% + ${x}px - 36px)`,
                top: `calc(50% + ${y}px - 36px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="w-[72px] h-[72px] rounded-full flex items-center justify-center border-2 backdrop-blur-sm cursor-pointer"
                style={{
                  borderColor: category.color,
                  backgroundColor: `${category.color}20`,
                }}
                animate={{
                  scale: animationStep === index ? 1.15 : 1,
                  boxShadow: animationStep === index 
                    ? `0 0 30px ${category.color}60` 
                    : `0 0 10px ${category.color}30`,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-white font-bold text-lg">{category.label}</span>
              </motion.div>
            </motion.div>
          );
        })}

        {/* SVG for connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {/* Lines from center to F-nodes */}
          {fCategories.map((category, index) => {
            const hubRadius = 100;
            const x2 = 450 + Math.cos((category.position.angle * Math.PI) / 180) * hubRadius;
            const y2 = 400 + Math.sin((category.position.angle * Math.PI) / 180) * hubRadius;
            
            return (
              <motion.line
                key={`center-${category.id}`}
                x1={450} y1={400}
                x2={x2} y2={y2}
                stroke={category.color}
                strokeWidth="2"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: animationStep === index ? [0, -20] : 0,
                  opacity: animationStep === index ? 1 : 0.4,
                }}
                transition={{
                  duration: 1,
                  repeat: animationStep === index ? Infinity : 0,
                  ease: "linear"
                }}
              />
            );
          })}

          {/* Lines from F-nodes to feature cards */}
          {fCategories.map((category, catIndex) => {
            const cards = featuresByCategory[category.label];
            const hubRadius = 100;
            const x1 = 450 + Math.cos((category.position.angle * Math.PI) / 180) * hubRadius;
            const y1 = 400 + Math.sin((category.position.angle * Math.PI) / 180) * hubRadius;
            
            return cards.map((_, cardIndex) => {
              const pos = getCardPositions(catIndex, cardIndex, cards.length);
              const x2 = 450 + pos.x;
              const y2 = 400 + pos.y;
              
              return (
                <motion.line
                  key={`${category.id}-card-${cardIndex}`}
                  x1={x1} y1={y1}
                  x2={x2} y2={y2}
                  stroke={category.color}
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: 1, 
                    opacity: animationStep === catIndex ? 0.8 : 0.3,
                    strokeDashoffset: animationStep === catIndex ? [0, -24] : 0,
                  }}
                  transition={{
                    pathLength: { delay: 0.5 + catIndex * 0.2, duration: 0.8 },
                    opacity: { duration: 0.3 },
                    strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear" }
                  }}
                />
              );
            });
          })}
        </svg>

        {/* Animated glowing orb traveling between nodes */}
        <motion.div
          className="absolute w-4 h-4 rounded-full z-25"
          style={{
            backgroundColor: '#f97316',
            filter: 'drop-shadow(0 0 12px #f97316)',
          }}
          animate={{
            x: [
              450 - 8, // Center
              450 + 100 * Math.cos((-90 * Math.PI) / 180) - 8, // Find
              450 - 8, // Center
              450 + 100 * Math.cos((0 * Math.PI) / 180) - 8, // Frame
              450 - 8, // Center
              450 + 100 * Math.cos((90 * Math.PI) / 180) - 8, // Fix
              450 - 8, // Center
              450 + 100 * Math.cos((180 * Math.PI) / 180) - 8, // Flow
              450 - 8, // Back to center
            ],
            y: [
              400 - 8, // Center
              400 + 100 * Math.sin((-90 * Math.PI) / 180) - 8, // Find
              400 - 8, // Center
              400 + 100 * Math.sin((0 * Math.PI) / 180) - 8, // Frame
              400 - 8, // Center
              400 + 100 * Math.sin((90 * Math.PI) / 180) - 8, // Fix
              400 - 8, // Center
              400 + 100 * Math.sin((180 * Math.PI) / 180) - 8, // Flow
              400 - 8, // Back to center
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
          }}
        />

        {/* Feature Cards radiating outward */}
        {fCategories.map((category, catIndex) => {
          const cards = featuresByCategory[category.label];
          
          return cards.map((feature, cardIndex) => {
            const pos = getCardPositions(catIndex, cardIndex, cards.length);
            
            return (
              <motion.div
                key={`${category.id}-feature-${cardIndex}`}
                className="absolute z-20"
                style={{
                  left: `calc(50% + ${pos.x}px - 130px)`,
                  top: `calc(50% + ${pos.y}px - 80px)`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + catIndex * 0.15 + cardIndex * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="w-[260px] bg-black-900/90 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-opacity-100 transition-all duration-300 cursor-pointer group"
                  style={{ borderColor: `${category.color}40` }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: category.color,
                    boxShadow: `0 0 25px ${category.color}30`
                  }}
                  animate={{
                    borderColor: animationStep === catIndex ? category.color : `${category.color}40`,
                    boxShadow: animationStep === catIndex ? `0 0 20px ${category.color}20` : 'none',
                  }}
                >
                  {/* Category badge */}
                  <div 
                    className="absolute -top-2 left-4 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.label}
                  </div>
                  
                  {/* Icon */}
                  <div 
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}
                  >
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-orange-400 transition-colors whitespace-pre-line leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default FeaturesRadialLayout;
