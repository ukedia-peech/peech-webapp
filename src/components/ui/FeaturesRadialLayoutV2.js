import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FeaturesRadialLayoutV2 = ({ features }) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 8000; // 8 seconds for full cycle

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration; // 0 to 1
      setAnimationProgress(progress);
      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Determine which node the ball is currently at (0=Find, 1=Frame, 2=Fix, 3=Flow)
  const getCurrentNode = (progress) => {
    if (progress < 0.25) return 0; // Find
    if (progress < 0.5) return 1;  // Frame
    if (progress < 0.75) return 2; // Fix
    return 3; // Flow
  };

  const currentNode = getCurrentNode(animationProgress);

  // F-Category configurations - all using orange color
  const fCategories = [
    { id: 'find', label: 'Find', color: '#f97316', bgColor: 'bg-orange-500', position: { angle: -90 } },
    { id: 'frame', label: 'Frame', color: '#f97316', bgColor: 'bg-orange-500', position: { angle: 0 } },
    { id: 'fix', label: 'Fix', color: '#f97316', bgColor: 'bg-orange-500', position: { angle: 90 } },
    { id: 'flow', label: 'Flow', color: '#f97316', bgColor: 'bg-orange-500', position: { angle: 180 } },
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
    const radius = 380; // Increased distance from center to cards for better spacing
    
    // For Find (top) and Fix (bottom), spread cards horizontally
    if (categoryIndex === 0 || categoryIndex === 2) {
      // Find (top, -90°) or Fix (bottom, 90°) - spread horizontally side by side
      const horizontalSpacing = 360; // Increased spacing for wider cards
      const xOffset = totalCards > 1 ? (cardIndex - (totalCards - 1) / 2) * horizontalSpacing : 0;
      const x = xOffset;
      const y = Math.sin((baseAngle * Math.PI) / 180) * radius;
      return { x, y, angle: baseAngle };
    } else {
      // Frame (right, 0°) and Flow (left, 180°) - use original angle-based spreading
      const spreadAngle = 40; // Reduced angle to bring cards closer vertically
      const offset = totalCards > 1 ? (cardIndex - (totalCards - 1) / 2) * spreadAngle : 0;
      const angle = baseAngle + offset;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;
      return { x, y, angle };
    }
  };

  return (
    <div className="w-full py-8">
      <div className="relative mx-auto" style={{ width: '1100px', height: '900px' }}>
        
        {/* Central Rotating Peech Logo */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-3 border-orange-500 flex items-center justify-center z-20"
          style={{ 
            backgroundColor: '#f9731615'
          }}
        >
          <motion.img
            src="/peech-logo-removebg-preview.png"
            alt="Peech"
            className="w-16 h-16 object-contain"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* 4 F-Category Nodes around center */}
        {fCategories.map((category, index) => {
          const hubRadius = 120; // Increased radius for better spacing
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
                  scale: currentNode === index ? 1.15 : 1,
                  boxShadow: currentNode === index 
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
          {/* Circular path connecting F-nodes */}
          {fCategories.map((category, index) => {
            const hubRadius = 120;
            const nextIndex = (index + 1) % 4;
            const x1 = 550 + Math.cos((fCategories[index].position.angle * Math.PI) / 180) * hubRadius;
            const y1 = 450 + Math.sin((fCategories[index].position.angle * Math.PI) / 180) * hubRadius;
            const x2 = 550 + Math.cos((fCategories[nextIndex].position.angle * Math.PI) / 180) * hubRadius;
            const y2 = 450 + Math.sin((fCategories[nextIndex].position.angle * Math.PI) / 180) * hubRadius;
            
            const segmentActive = currentNode === index;
            
            return (
              <motion.line
                key={`path-${category.id}`}
                x1={x1} y1={y1}
                x2={x2} y2={y2}
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
                animate={{
                  strokeDashoffset: segmentActive ? [0, -20] : 0,
                  opacity: segmentActive ? 1 : 0.3,
                }}
                transition={{
                  strokeDashoffset: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  opacity: { duration: 0.3 }
                }}
              />
            );
          })}

          {/* Lines from F-nodes to feature cards */}
          {fCategories.map((category, catIndex) => {
            const cards = featuresByCategory[category.label];
            const hubRadius = 120;
            const x1 = 550 + Math.cos((category.position.angle * Math.PI) / 180) * hubRadius;
            const y1 = 450 + Math.sin((category.position.angle * Math.PI) / 180) * hubRadius;
            
            return cards.map((_, cardIndex) => {
              const pos = getCardPositions(catIndex, cardIndex, cards.length);
              const x2 = 550 + pos.x;
              const y2 = 450 + pos.y;
              
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
                    opacity: currentNode === catIndex ? 0.8 : 0.3,
                    strokeDashoffset: currentNode === catIndex ? [0, -24] : 0,
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

        {/* Animated glowing orb traveling between nodes in circular path */}
        <motion.div
          className="absolute w-4 h-4 rounded-full z-25"
          style={{
            backgroundColor: '#f97316',
            filter: 'drop-shadow(0 0 12px #f97316)',
          }}
          animate={{
            x: [
              550 + 120 * Math.cos((-90 * Math.PI) / 180) - 8, // Find (top)
              550 + 120 * Math.cos((0 * Math.PI) / 180) - 8,   // Frame (right)
              550 + 120 * Math.cos((90 * Math.PI) / 180) - 8,  // Fix (bottom)
              550 + 120 * Math.cos((180 * Math.PI) / 180) - 8, // Flow (left)
              550 + 120 * Math.cos((-90 * Math.PI) / 180) - 8, // Back to Find
            ],
            y: [
              450 + 120 * Math.sin((-90 * Math.PI) / 180) - 8, // Find (top)
              450 + 120 * Math.sin((0 * Math.PI) / 180) - 8,   // Frame (right)
              450 + 120 * Math.sin((90 * Math.PI) / 180) - 8,  // Fix (bottom)
              450 + 120 * Math.sin((180 * Math.PI) / 180) - 8, // Flow (left)
              450 + 120 * Math.sin((-90 * Math.PI) / 180) - 8, // Back to Find
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />

        {/* Feature Cards radiating outward - all uniform size */}
        {fCategories.map((category, catIndex) => {
          const cards = featuresByCategory[category.label];
          
          return cards.map((feature, cardIndex) => {
            const pos = getCardPositions(catIndex, cardIndex, cards.length);
            
            return (
              <motion.div
                key={`${category.id}-feature-${cardIndex}`}
                className="absolute z-20"
                style={{
                  left: `calc(50% + ${pos.x}px - 165px)`,
                  top: `calc(50% + ${pos.y}px - 110px)`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + catIndex * 0.15 + cardIndex * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="w-[330px] min-h-[220px] bg-black-900/90 backdrop-blur-sm rounded-xl p-5 border border-gray-800 hover:border-opacity-100 transition-all duration-300 cursor-pointer group flex flex-col"
                  style={{ borderColor: '#f9731640' }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: '#f97316',
                    boxShadow: '0 0 25px rgba(249, 115, 22, 0.3)'
                  }}
                  animate={{
                    borderColor: currentNode === catIndex ? '#f97316' : '#f9731640',
                    boxShadow: currentNode === catIndex ? '0 0 20px rgba(249, 115, 22, 0.2)' : 'none',
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-10 h-10 rounded-lg border-2 border-orange-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform flex-shrink-0"
                  >
                    {feature.icon}
                  </div>
                  
                  {/* Title - single line with proper wrapping */}
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-orange-400 transition-colors leading-tight flex-shrink-0">
                    {feature.title}
                  </h3>
                  
                  {/* Description - full content without truncation */}
                  <p className="text-gray-400 text-xs leading-relaxed flex-grow">
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

export default FeaturesRadialLayoutV2;
