import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { itemAnimations, interactiveAnimations, customEasing } from '../../utils/animations';

const InteractiveCard = ({ 
  children, 
  className = '', 
  variant = 'magnetic',
  background = 'dark',
  padding = 'lg',
  onClick,
  disabled = false,
  ...props 
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to card rotation
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  // Parallax transforms (always defined to avoid conditional hooks)
  const parallaxX = useTransform(mouseX, [-300, 300], [-10, 10]);
  const parallaxY = useTransform(mouseY, [-300, 300], [10, -10]);
  
  // Smooth spring animations
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  // Scale and shadow effects
  const scale = useSpring(isHovered ? 1.05 : 1, springConfig);
  const shadowY = useSpring(isHovered ? -20 : 0, springConfig);
  const shadowBlur = useSpring(isHovered ? 30 : 0, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current || disabled) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const backgroundVariants = {
    dark: "bg-black-900 border border-black-800",
    glass: "bg-black-900/80 backdrop-blur-md border border-black-800/50",
    gradient: "bg-gradient-to-br from-black-900 to-black-800 border border-primary-500/20",
    neon: "bg-black-900 border border-primary-500/30 shadow-lg shadow-primary-500/10",
  };

  const paddingVariants = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const baseClasses = `relative rounded-xl overflow-hidden transition-all duration-300 ${backgroundVariants[background]} ${paddingVariants[padding]} ${className}`;

  if (variant === 'magnetic') {
    return (
      <motion.div
        ref={cardRef}
        className={baseClasses}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale,
          boxShadow: `0 ${shadowY}px ${shadowBlur}px rgba(249, 115, 22, 0.2)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        variants={itemAnimations.floatingCard}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        cursor={onClick ? "pointer" : "default"}
        {...props}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: customEasing.smooth }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }

  if (variant === 'flip') {
    return (
      <motion.div
        className={`${baseClasses} perspective-1000`}
        variants={interactiveAnimations.cardFlip}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        onClick={onClick}
        cursor={onClick ? "pointer" : "default"}
        {...props}
      >
        <div className="relative w-full h-full transform-style-preserve-3d">
          {/* Front side */}
          <motion.div
            className="absolute inset-0 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {children}
          </motion.div>
          
          {/* Back side */}
          <motion.div
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="text-black-950 font-bold text-lg">
              Learn More
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'parallax') {
    return (
      <motion.div
        className={baseClasses}
        variants={itemAnimations.floatingCard}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        onClick={onClick}
        cursor={onClick ? "pointer" : "default"}
        {...props}
      >
        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: customEasing.fluid,
          }}
        />
        
        {/* Content with parallax effect */}
        <motion.div
          className="relative z-10"
          style={{
            y: parallaxY,
            x: parallaxX,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }

  if (variant === 'neon') {
    return (
      <motion.div
        className={baseClasses}
        variants={interactiveAnimations.glow}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        onClick={onClick}
        cursor={onClick ? "pointer" : "default"}
        {...props}
      >
        {/* Neon border effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          animate={{
            boxShadow: isHovered 
              ? "0 0 30px 10px rgba(249, 115, 22, 0.3), inset 0 0 30px 10px rgba(249, 115, 22, 0.1)"
              : "0 0 0 0 rgba(249, 115, 22, 0)",
          }}
          transition={{ duration: 0.3, ease: customEasing.smooth }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }

  // Default floating card
  return (
    <motion.div
      className={baseClasses}
      variants={itemAnimations.floatingCard}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      onClick={onClick}
      cursor={onClick ? "pointer" : "default"}
      {...props}
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: customEasing.smooth }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default InteractiveCard; 