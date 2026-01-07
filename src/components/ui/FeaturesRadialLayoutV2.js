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

  // Determine which segment the ball is currently traveling on (0=Find→Frame, 1=Frame→Fix, 2=Fix→Flow, 3=Flow→Find)
  const getCurrentSegment = (progress) => {
    if (progress < 0.25) return 0; // Traveling Find→Frame
    if (progress < 0.5) return 1;  // Traveling Frame→Fix
    if (progress < 0.75) return 2; // Traveling Fix→Flow
    return 3; // Traveling Flow→Find
  };

  const currentSegment = getCurrentSegment(animationProgress);
  // The target node is the one the orb is traveling TO (should glow when orb arrives)
  const targetNode = (currentSegment + 1) % 4;

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
    const radius = 260; // Further reduced for smaller cards
    
    // For Find (top) and Fix (bottom), spread cards horizontally
    if (categoryIndex === 0 || categoryIndex === 2) {
      // Find (top, -90°) or Fix (bottom, 90°) - spread horizontally side by side
      const horizontalSpacing = 240; // Further reduced for smaller cards
      const xOffset = totalCards > 1 ? (cardIndex - (totalCards - 1) / 2) * horizontalSpacing : 0;
      const x = xOffset;
      const y = Math.sin((baseAngle * Math.PI) / 180) * radius;
      return { x, y, angle: baseAngle };
    } else {
      // Frame (right, 0°) and Flow (left, 180°) - spread vertically with increased spacing
      const verticalSpacing = 175; // Increased vertical spacing to prevent cards touching
      const yOffset = totalCards > 1 ? (cardIndex - (totalCards - 1) / 2) * verticalSpacing : 0;
      const x = Math.cos((baseAngle * Math.PI) / 180) * radius;
      const y = yOffset;
      return { x, y, angle: baseAngle };
    }
  };

  const f4Descriptions = [
    {
      label: 'Find',
      description: 'Find issues and inefficiencies via advanced process mining technology',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: 'bg-blue-600'
    },
    {
      label: 'Frame',
      description: 'Expert consulting to frame and structure process challenges effectively',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622" />
        </svg>
      ),
      color: 'bg-purple-600'
    },
    {
      label: 'Fix',
      description: 'Implement AI and intelligent automation solutions to resolve inefficiencies',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-orange-600'
    },
    {
      label: 'Flow',
      description: 'Drive continuous transformation through sustainable optimization and daily improvements',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'bg-green-600'
    }
  ];

  const DIAGRAM_WIDTH = 760;
  const DIAGRAM_HEIGHT = 650;
  const CENTER_X = DIAGRAM_WIDTH / 2;
  const CENTER_Y = DIAGRAM_HEIGHT / 2;

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[760px_1fr] gap-16 items-start max-w-7xl mx-auto px-4">
        {/* Left side - Radial Layout */}
        <div className="relative mx-auto" style={{ width: `${DIAGRAM_WIDTH}px`, height: `${DIAGRAM_HEIGHT}px` }}>
        
        {/* Central Rotating Peech Logo */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 flex items-center justify-center z-20"
          style={{ 
            borderColor: '#f97316',
            backgroundColor: '#f9731615'
          }}
        >
          <motion.img
            src="/peech-logo-removebg-preview.png"
            alt="Peech"
            className="w-10 h-10 object-contain"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* 4 F-Category Nodes around center */}
        {fCategories.map((category, index) => {
          const hubRadius = 85; // Further reduced for smaller diagram
          const x = Math.cos((category.position.angle * Math.PI) / 180) * hubRadius;
          const y = Math.sin((category.position.angle * Math.PI) / 180) * hubRadius;
          
          return (
            <motion.div
              key={category.id}
              className="absolute z-20"
              style={{
                left: `calc(50% + ${x}px - 32px)`,
                top: `calc(50% + ${y}px - 32px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center border-2 backdrop-blur-sm cursor-pointer"
                style={{
                  borderColor: category.color,
                  backgroundColor: `${category.color}20`,
                }}
                animate={{
                  scale: targetNode === index ? 1.15 : 1,
                  boxShadow: targetNode === index 
                    ? `0 0 30px ${category.color}60` 
                    : `0 0 10px ${category.color}30`,
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-white font-bold text-base">{category.label}</span>
              </motion.div>
            </motion.div>
          );
        })}

        {/* SVG for connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {/* Circular path connecting F-nodes */}
          {fCategories.map((category, index) => {
            const hubRadius = 85;
            const nextIndex = (index + 1) % 4;
            const x1 = CENTER_X + Math.cos((fCategories[index].position.angle * Math.PI) / 180) * hubRadius;
            const y1 = CENTER_Y + Math.sin((fCategories[index].position.angle * Math.PI) / 180) * hubRadius;
            const x2 = CENTER_X + Math.cos((fCategories[nextIndex].position.angle * Math.PI) / 180) * hubRadius;
            const y2 = CENTER_Y + Math.sin((fCategories[nextIndex].position.angle * Math.PI) / 180) * hubRadius;
            
            const segmentActive = currentSegment === index;
            
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
            const hubRadius = 85;
            const x1 = CENTER_X + Math.cos((category.position.angle * Math.PI) / 180) * hubRadius;
            const y1 = CENTER_Y + Math.sin((category.position.angle * Math.PI) / 180) * hubRadius;
            
            return cards.map((_, cardIndex) => {
              const pos = getCardPositions(catIndex, cardIndex, cards.length);
              const x2 = CENTER_X + pos.x;
              const y2 = CENTER_Y + pos.y;
              
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
                    opacity: targetNode === catIndex ? 0.8 : 0.3,
                    strokeDashoffset: targetNode === catIndex ? [0, -24] : 0,
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
          className="absolute w-3 h-3 rounded-full z-25"
          style={{
            backgroundColor: '#f97316',
            filter: 'drop-shadow(0 0 8px #f97316)',
          }}
          animate={{
            x: [
              CENTER_X + 85 * Math.cos((-90 * Math.PI) / 180) - 6, // Find (top)
              CENTER_X + 85 * Math.cos((0 * Math.PI) / 180) - 6,   // Frame (right)
              CENTER_X + 85 * Math.cos((90 * Math.PI) / 180) - 6,  // Fix (bottom)
              CENTER_X + 85 * Math.cos((180 * Math.PI) / 180) - 6, // Flow (left)
              CENTER_X + 85 * Math.cos((-90 * Math.PI) / 180) - 6, // Back to Find
            ],
            y: [
              CENTER_Y + 85 * Math.sin((-90 * Math.PI) / 180) - 6, // Find (top)
              CENTER_Y + 85 * Math.sin((0 * Math.PI) / 180) - 6,   // Frame (right)
              CENTER_Y + 85 * Math.sin((90 * Math.PI) / 180) - 6,  // Fix (bottom)
              CENTER_Y + 85 * Math.sin((180 * Math.PI) / 180) - 6, // Flow (left)
              CENTER_Y + 85 * Math.sin((-90 * Math.PI) / 180) - 6, // Back to Find
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
                  left: `calc(50% + ${pos.x}px - 110px)`,
                  top: `calc(50% + ${pos.y}px - 75px)`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + catIndex * 0.15 + cardIndex * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="w-[220px] min-h-[150px] bg-black-900/90 backdrop-blur-sm rounded-lg p-3 border border-gray-800 hover:border-opacity-100 transition-all duration-300 cursor-pointer group flex flex-col"
                  style={{ borderColor: '#f9731640' }}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: '#f97316',
                    boxShadow: '0 0 25px rgba(249, 115, 22, 0.3)'
                  }}
                  animate={{
                    borderColor: targetNode === catIndex ? '#f97316' : '#f9731640',
                    boxShadow: targetNode === catIndex ? '0 0 20px rgba(249, 115, 22, 0.2)' : 'none',
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-8 h-8 rounded-lg border-2 border-orange-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform flex-shrink-0"
                  >
                    <div className="scale-75">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title - single line with proper wrapping */}
                  <h3 className="text-xs font-bold text-white mb-1.5 group-hover:text-orange-400 transition-colors leading-tight flex-shrink-0">
                    {feature.title}
                  </h3>
                  
                  {/* Description - full content without truncation */}
                  <p className="text-gray-400 text-[10px] leading-snug flex-grow">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          });
        })}
        </div>

        {/* Right side - F4 Descriptions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8 pt-8"
        >
          {f4Descriptions.map((item, index) => (
            <div key={item.label} className="flex items-start space-x-5">
              <div className={`w-14 h-14 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.label}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesRadialLayoutV2;
