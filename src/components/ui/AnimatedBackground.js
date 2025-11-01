import React from 'react';
import { motion } from 'framer-motion';
import { backgroundAnimations, customEasing } from '../../utils/animations';

const AnimatedBackground = ({ variant = 'particles', className = '' }) => {
  const variants = {
    particles: (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={backgroundAnimations.floatingParticles}
            animate="animate"
            transition={{
              delay: i * 0.2,
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: customEasing.fluid,
            }}
          />
        ))}
        
        {/* Larger floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={backgroundAnimations.floatingParticles}
            animate="animate"
            transition={{
              delay: i * 0.5,
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: customEasing.fluid,
            }}
          />
        ))}
      </div>
    ),

    morphing: (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Morphing shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-500/20 to-primary-600/20"
          variants={backgroundAnimations.morphingShapes}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-primary-400/15 to-primary-500/15"
          variants={backgroundAnimations.morphingShapes}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-primary-600/10 to-primary-700/10"
          variants={backgroundAnimations.morphingShapes}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>
    ),

    gradient: (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          variants={backgroundAnimations.gradientFlow}
          animate="animate"
        />
        
        {/* Gradient orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`gradient-${i}`}
            className="absolute w-96 h-96 rounded-full opacity-5"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              background: `radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: customEasing.fluid,
            }}
          />
        ))}
      </div>
    ),

    grid: (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className="absolute w-px h-full bg-primary-500"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0.05, 0.2, 0.05],
                scaleY: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
                ease: customEasing.fluid,
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`grid-h-${i}`}
              className="absolute w-full h-px bg-primary-500"
              style={{ top: `${i * 5}%` }}
              animate={{
                opacity: [0.05, 0.2, 0.05],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
                ease: customEasing.fluid,
              }}
            />
          ))}
        </div>
      </div>
    ),

    waves: (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Animated wave patterns */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <motion.path
            d="M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z",
                "M0,500 Q250,600 500,500 T1000,500 L1000,1000 L0,1000 Z",
                "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: customEasing.fluid,
            }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(249, 115, 22, 0.1)" />
              <stop offset="50%" stopColor="rgba(249, 115, 22, 0.05)" />
              <stop offset="100%" stopColor="rgba(249, 115, 22, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  };

  return variants[variant] || variants.particles;
};

export default AnimatedBackground; 