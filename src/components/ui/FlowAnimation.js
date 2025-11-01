import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FlowAnimation = ({ 
  className = '',
  title = 'peech processes',
  subtitle = 'minimal intelligence flows',
  height = '100vh',
  showText = true 
}) => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const processesRef = useRef(['collect', 'analyze', 'optimize', 'flow']);
  const currentProcessRef = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let dots = [];

    // Custom cursor tracking
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const rect = container.getBoundingClientRect();
        cursorRef.current.style.left = (e.clientX - rect.left - 10) + 'px';
        cursorRef.current.style.top = (e.clientY - rect.top - 10) + 'px';
        cursorRef.current.style.opacity = '1';
        
        // Create cursor trails occasionally
        if (Math.random() > 0.7) {
          createCursorTrail(e.clientX - rect.left, e.clientY - rect.top);
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    // Create cursor trail
    const createCursorTrail = (x, y) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #f97316;
        border-radius: 50%;
        pointer-events: none;
        z-index: 999;
        left: ${x - 2}px;
        top: ${y - 2}px;
        opacity: 0.8;
        transition: all 0.3s ease;
      `;
      container.appendChild(trail);

      setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
      }, 100);

      setTimeout(() => {
        if (container.contains(trail)) {
          container.removeChild(trail);
        }
      }, 300);
    };

    // Create floating particles
    const createFloatingParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: #374151;
        border-radius: 50%;
        opacity: 0.5;
        left: ${Math.random() * container.offsetWidth}px;
        animation: float 8s infinite linear;
        animation-delay: ${Math.random() * 8}s;
      `;
      container.appendChild(particle);

      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 8000);
    };

    // Create process dot
    const createProcessDot = (x, y, isActive = false) => {
      const dot = document.createElement('div');
      dot.className = `flow-dot ${isActive ? 'active' : ''}`;
      dot.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: ${isActive ? '#f97316' : '#374151'};
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        opacity: ${isActive ? '1' : '0'};
        transition: all 0.3s ease;
        ${isActive ? 'box-shadow: 0 0 20px #f97316; animation: pulse 2s infinite;' : ''}
      `;
      
      if (isActive) {
        // Add process label
        const label = document.createElement('div');
        label.className = 'process-label';
        label.textContent = processesRef.current[currentProcessRef.current % processesRef.current.length];
        label.style.cssText = `
          position: absolute;
          font-size: 0.7rem;
          font-weight: 500;
          color: #f97316;
          left: ${x - 30}px;
          top: ${y + 20}px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.5s ease;
          pointer-events: none;
          text-transform: uppercase;
          letter-spacing: 1px;
        `;
        container.appendChild(label);
        
        setTimeout(() => {
          label.style.opacity = '1';
          label.style.transform = 'translateY(0)';
        }, 200);
        
        setTimeout(() => {
          if (container.contains(label)) {
            label.style.opacity = '0';
            label.style.transform = 'translateY(-10px)';
            setTimeout(() => {
              if (container.contains(label)) {
                container.removeChild(label);
              }
            }, 500);
          }
        }, 2000);
        
        currentProcessRef.current++;
      }
      
      container.appendChild(dot);
      dots.push({ element: dot, x, y, age: 0 });

      return dot;
    };

    // Create connection between dots
    const createConnection = (dot1, dot2) => {
      const line = document.createElement('div');
      line.className = 'connection-line';
      
      const dx = dot2.x - dot1.x;
      const dy = dot2.y - dot1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
      
      line.style.cssText = `
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent, #f97316, transparent);
        left: ${dot1.x}px;
        top: ${dot1.y}px;
        width: 0;
        opacity: 0;
        transform: rotate(${angle}deg);
        transform-origin: left;
        animation: drawLine 0.8s ease-out forwards;
      `;
      
      container.appendChild(line);
      
      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line);
        }
      }, 1500);
    };

    // Generate organic flow pattern
    const generateFlowPattern = () => {
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      const radius = Math.min(container.offsetWidth, container.offsetHeight) * 0.3;
      
      const angle = (Date.now() / 50) % 360;
      const spiral = angle * 0.1;
      
      const x = centerX + Math.cos(angle * Math.PI / 180) * (radius + spiral * 2);
      const y = centerY + Math.sin(angle * Math.PI / 180) * (radius + spiral * 2);
      
      if (x > 50 && x < container.offsetWidth - 50 && y > 50 && y < container.offsetHeight - 50) {
        const isActive = Math.random() > 0.85;
        createProcessDot(x, y, isActive);
        
        if (dots.length > 1 && Math.random() > 0.7) {
          const nearbyDot = dots[dots.length - 2];
          const distance = Math.sqrt((x - nearbyDot.x) ** 2 + (y - nearbyDot.y) ** 2);
          if (distance < 150) {
            createConnection(nearbyDot, { x, y });
          }
        }
      }
    };

    // Update dot states
    const updateDots = () => {
      dots.forEach((dot, index) => {
        dot.age++;
        
        if (dot.age > 180) {
          dot.element.style.background = '#374151';
          dot.element.style.opacity = '0.3';
          dot.element.style.transform = 'scale(0.5)';
        } else if (dot.age > 120) {
          dot.element.style.background = '#6b7280';
          dot.element.style.opacity = '0.6';
          dot.element.style.transform = 'scale(0.7)';
          dot.element.style.boxShadow = 'none';
          dot.element.style.animation = 'none';
        } else if (dot.age > 60) {
          dot.element.style.background = '#6b7280';
          dot.element.style.boxShadow = 'none';
          dot.element.style.animation = 'none';
        }
        
        if (dot.age > 240) {
          if (container.contains(dot.element)) {
            container.removeChild(dot.element);
          }
          dots.splice(index, 1);
        }
      });
    };

    // Click interaction
    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const offsetX = (Math.random() - 0.5) * 60;
          const offsetY = (Math.random() - 0.5) * 60;
          createProcessDot(x + offsetX, y + offsetY, i === 0);
        }, i * 100);
      }
    };

    // Main animation loop
    const animate = () => {
      if (Math.random() > 0.3) {
        generateFlowPattern();
      }
      updateDots();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('click', handleClick);

    // Start animations
    const particleInterval = setInterval(createFloatingParticle, 2000);
    animate();

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('click', handleClick);
      clearInterval(particleInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden cursor-none ${className}`}
      style={{ height }}
    >
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 border border-primary-500 rounded-full pointer-events-none z-50 opacity-0 transition-all duration-100 hidden md:block"
      />

      {/* Center text */}
      {showText && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center px-4">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <span className="text-primary-500">peech</span>{' '}
              <span className="text-white">processes</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-400 font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            >
              minimal intelligence flows
            </motion.p>
          </div>
        </div>
      )}

      {/* CSS animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 0 20px #f97316; 
          }
          50% { 
            transform: scale(1.5); 
            box-shadow: 0 0 40px #f97316; 
          }
        }

        @keyframes drawLine {
          from { 
            width: 0; 
            opacity: 0; 
          }
          to { 
            width: 100px; 
            opacity: 0.8; 
          }
        }

        @keyframes float {
          0% { 
            transform: translateY(100vh) translateX(0); 
            opacity: 0; 
          }
          10% { 
            opacity: 0.5; 
          }
          90% { 
            opacity: 0.5; 
          }
          100% { 
            transform: translateY(-100px) translateX(50px); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
};

export default FlowAnimation;
