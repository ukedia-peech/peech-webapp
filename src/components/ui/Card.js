import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from '../../utils/theme';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  hover = true,
  padding = 'md',
  onClick,
  ...props 
}) => {
  const baseClasses = "rounded-2xl overflow-hidden transition-all duration-300";
  
  const variants = {
    default: "bg-black-900 text-white shadow-premium border border-black-800",
    dark: "bg-black-950 text-white shadow-premium border border-black-800",
    glass: "bg-black-900/80 backdrop-blur-md border border-black-800 text-white shadow-premium",
    elevated: "bg-black-900 text-white shadow-premium-lg border border-black-800",
    outline: "bg-transparent border-2 border-primary-500 text-white",
  };
  
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };
  
  const hoverClasses = hover ? "hover:transform hover:scale-105 hover:shadow-premium-lg" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`;
  
  const cardContent = (
    <div className="h-full">
      {children}
    </div>
  );
  
  if (onClick) {
    return (
      <motion.div
        className={classes}
        onClick={onClick}
        whileHover={hover ? animationVariants.hover : {}}
        whileTap={animationVariants.tap}
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        cursor="pointer"
        {...props}
      >
        {cardContent}
      </motion.div>
    );
  }
  
  return (
    <motion.div
      className={classes}
      whileHover={hover ? animationVariants.hover : {}}
      variants={animationVariants.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {cardContent}
    </motion.div>
  );
};

// Card sub-components for better organization
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`pb-4 ${className}`} {...props}>
    {children}
  </div>
);

Card.Body = ({ children, className = '', ...props }) => (
  <div className={`flex-1 ${className}`} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`pt-4 border-t border-corporate-100 ${className}`} {...props}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className = '', ...props }) => (
  <div className={`overflow-hidden ${className}`} {...props}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
);

export default Card; 