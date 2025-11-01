import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const FloatingCTA = ({ 
  variant = 'chat',
  position = 'bottom-right',
  className = '',
  ...props 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible] = useState(true);

  const positions = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  };

  const variants = {
    chat: {
      icon: '💬',
      label: 'Chat with us',
      color: 'primary',
    },
    demo: {
      icon: '🎯',
      label: 'Book Demo',
      color: 'primary',
    },
    support: {
      icon: '🆘',
      label: 'Get Help',
      color: 'secondary',
    },
  };

  const selectedVariant = variants[variant];

  const handleClick = () => {
    if (variant === 'chat') {
      setIsExpanded(!isExpanded);
    } else {
      // Handle other CTA actions
      console.log(`${variant} clicked`);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className={`fixed ${positions[position]} z-50 ${className}`}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Main CTA Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <Button
                variant={selectedVariant.color}
                size="lg"
                onClick={handleClick}
                className="w-16 h-16 rounded-full p-0 shadow-glow-lg"
                icon={selectedVariant.icon}
                {...props}
              />
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 w-16 h-16 rounded-full bg-primary-500 opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Expanded Chat Interface */}
            <AnimatePresence>
              {isExpanded && variant === 'chat' && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-20 right-0 w-80 bg-black-900 rounded-2xl shadow-premium-lg border border-black-800 overflow-hidden"
                >
                  {/* Chat Header */}
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-sm">💬</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">Chat Support</h3>
                          <p className="text-primary-100 text-sm">We're here to help</p>
                        </div>
                      </div>
                      <button
                        onClick={handleClose}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 h-64 overflow-y-auto bg-black-950">
                    <div className="space-y-4">
                      {/* Bot Message */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-500/20 border border-primary-500/30 rounded-full flex items-center justify-center">
                          <span className="text-sm">🤖</span>
                        </div>
                        <div className="bg-black-800 border border-black-700 rounded-lg p-3 max-w-xs">
                          <p className="text-sm text-gray-300">
                            Hi! How can I help you today? I'm here to answer any questions about our AI platform.
                          </p>
                        </div>
                      </div>

                      {/* User Message */}
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-primary-500 text-white rounded-lg p-3 max-w-xs">
                          <p className="text-sm">
                            I'd like to learn more about your process mining capabilities.
                          </p>
                        </div>
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                          <span className="text-sm text-white">👤</span>
                        </div>
                      </div>

                      {/* Bot Response */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-500/20 border border-primary-500/30 rounded-full flex items-center justify-center">
                          <span className="text-sm">🤖</span>
                        </div>
                        <div className="bg-black-800 border border-black-700 rounded-lg p-3 max-w-xs">
                          <p className="text-sm text-gray-300">
                            Great! Our process mining technology helps you discover, monitor, and improve your business processes. Would you like me to schedule a demo?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-black-700 bg-black-900">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 bg-black-800 border border-black-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                      />
                      <Button
                        variant="primary"
                        size="sm"
                        className="px-4"
                        icon="📤"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingCTA; 