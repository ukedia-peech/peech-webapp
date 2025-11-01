import React from 'react';
import { motion } from 'framer-motion';
import { textAnimations, customEasing } from '../../utils/animations';

const AnimatedText = ({ 
  children, 
  variant = 'tiltedReveal', 
  className = '', 
  as = 'div',
  delay = 0,
  ...props 
}) => {
  const Component = motion[as] || motion.div;

  const renderText = () => {
    if (variant === 'typewriter') {
      return (
        <Component
          className={`overflow-hidden ${className}`}
          variants={textAnimations.typewriter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay }}
          {...props}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + delay }}
          >
            {children}
          </motion.span>
        </Component>
      );
    }

    if (variant === 'magnetic') {
      return (
        <Component
          className={`inline-block ${className}`}
          variants={textAnimations.magnetic}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          transition={{ delay }}
          {...props}
        >
          {children}
        </Component>
      );
    }

    if (variant === 'glitch') {
      return (
        <Component
          className={`relative inline-block ${className}`}
          variants={textAnimations.glitch}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          transition={{ delay }}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <motion.span
            className="absolute inset-0 text-primary-500 opacity-50"
            animate={{
              x: [0, -2, 2, -2, 0],
              filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(270deg)", "hue-rotate(0deg)"],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: customEasing.sharp,
            }}
          >
            {children}
          </motion.span>
        </Component>
      );
    }

    if (variant === 'flowingText') {
      return (
        <Component
          className={`overflow-hidden ${className}`}
          variants={textAnimations.flowingText}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay }}
          {...props}
        >
          {children}
        </Component>
      );
    }

    if (variant === 'floatingText') {
      return (
        <Component
          className={`inline-block ${className}`}
          variants={textAnimations.floatingText}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          transition={{ delay }}
          {...props}
        >
          {children}
        </Component>
      );
    }

    // Default tilted reveal
    return (
      <Component
        className={`overflow-hidden ${className}`}
        variants={textAnimations.tiltedReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay }}
        {...props}
      >
        {children}
      </Component>
    );
  };

  return renderText();
};

// Specialized text components
export const TiltedText = (props) => <AnimatedText variant="tiltedReveal" {...props} />;
export const FlowingText = (props) => <AnimatedText variant="flowingText" {...props} />;
export const MagneticText = (props) => <AnimatedText variant="magnetic" {...props} />;
export const GlitchText = (props) => <AnimatedText variant="glitch" {...props} />;
export const TypewriterText = (props) => <AnimatedText variant="typewriter" {...props} />;
export const FloatingText = (props) => <AnimatedText variant="floatingText" {...props} />;

// Staggered text reveal for multiple lines
export const StaggeredText = ({ 
  text, 
  className = '', 
  staggerDelay = 0.1,
  as = 'div',
  ...props 
}) => {
  const Component = motion[as] || motion.div;
  const words = text.split(' ');

  return (
    <Component
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50, 
              rotateX: -90,
              filter: "blur(10px)"
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.8,
                ease: customEasing.elastic,
                delay: index * staggerDelay,
              }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

// Gradient text with animation
export const GradientText = ({ 
  children, 
  className = '', 
  gradient = 'from-primary-500 to-primary-600',
  animate = true,
  ...props 
}) => {
  const Component = animate ? motion.span : 'span';
  
  const animatedProps = animate ? {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: customEasing.fluid,
    }
  } : {};

  return (
    <Component
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent bg-[length:200%_200%] ${className}`}
      {...animatedProps}
      {...props}
    >
      {children}
    </Component>
  );
};

// Split text reveal
export const SplitText = ({ 
  text, 
  className = '', 
  staggerDelay = 0.05,
  as = 'div',
  ...props 
}) => {
  const Component = motion[as] || motion.div;
  const characters = text.split('');

  return (
    <Component
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 100,
              rotateX: -90,
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.6,
                ease: customEasing.elastic,
                delay: index * staggerDelay,
              }
            }
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Component>
  );
};

export default AnimatedText; 