import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { customEasing } from "../../utils/animations";

// Utility function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

function DisplayCard({
  className = "",
  icon = "✨",
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-primary-500",
  titleClassName = "text-primary-500",
  onClick,
}) {
  return (
    <motion.div
      className={cn(
        "relative flex h-44 w-[26rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-black-900/70 backdrop-blur-sm px-5 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[24rem] after:bg-gradient-to-l after:from-black-950 after:to-transparent after:content-[''] hover:border-primary-500/20 hover:bg-black-800/70 cursor-pointer overflow-hidden",
        className
      )}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: customEasing.smooth },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1, ease: customEasing.sharp },
      }}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <span
          className={cn(
            "relative inline-block rounded-full bg-primary-800/20 p-2 border border-primary-500/30",
            iconClassName
          )}
        >
          <span className="text-xl">{icon}</span>
        </span>
        <p
          className={cn(
            "text-lg font-semibold text-white leading-tight",
            titleClassName
          )}
        >
          {title}
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-sm text-white leading-relaxed line-clamp-3 break-words">
          {description}
        </p>
      </div>
      <p className="text-xs text-gray-500 mt-2">{date}</p>
    </motion.div>
  );
}

export default function DisplayCards({ cards = [], className = "" }) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const defaultCards = [
    {
      icon: "🚀",
      title: "AI-Powered Automation",
      description: "Streamline workflows with intelligent automation",
      date: "Just now",
      iconClassName: "text-blue-400",
      titleClassName: "text-blue-400",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-primary-500/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-black-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Get deep insights into your data",
      date: "2 hours ago",
      iconClassName: "text-green-400",
      titleClassName: "text-green-400",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-primary-500/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-black-950/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption",
      date: "1 day ago",
      iconClassName: "text-purple-400",
      titleClassName: "text-purple-400",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards.length > 0 ? cards : defaultCards;

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "grid [grid-template-areas:'stack'] place-items-center opacity-100",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: customEasing.fluid }}
    >
      {displayCards.map((cardProps, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            ...(isInView && {
              x: index === 0 ? 0 : index === 1 ? -16 : -32,
              y: index === 0 ? -10 : index === 1 ? -1 : 10,
            }),
          }}
          transition={{
            delay: index * 0.2,
            duration: 0.8,
            ease: customEasing.fluid,
          }}
        >
          <DisplayCard {...cardProps} />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Export individual components for flexibility
export { DisplayCard };
