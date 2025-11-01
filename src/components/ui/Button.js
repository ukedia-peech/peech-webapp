import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from '../../utils/theme';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white hover:scale-105 hover:shadow-glow focus:ring-primary-500",
    secondary: "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:scale-105 focus:ring-primary-500",
    ghost: "bg-transparent text-corporate-700 hover:text-primary-500 hover:bg-corporate-50 focus:ring-primary-500",
    dark: "bg-dark-900 hover:bg-dark-800 text-white hover:scale-105 focus:ring-dark-500",
    outline: "bg-transparent border-2 border-corporate-300 text-corporate-700 hover:border-primary-500 hover:text-primary-500 focus:ring-primary-500",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;
  
  const buttonContent = (
    <>
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
        />
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );
  
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? animationVariants.hover : {}}
      whileTap={!disabled && !loading ? animationVariants.tap : {}}
      variants={animationVariants.scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button; 