// World-class animation variants for Framer Motion
import { cubicBezier } from "framer-motion";

// Custom easing curves for premium feel
export const customEasing = {
  smooth: cubicBezier(0.4, 0, 0.2, 1),
  bounce: cubicBezier(0.68, -0.55, 0.265, 1.55),
  elastic: cubicBezier(0.175, 0.885, 0.32, 1.275),
  sharp: cubicBezier(0.4, 0, 0.6, 1),
  fluid: cubicBezier(0.25, 0.46, 0.45, 0.94),
};

// Advanced text animations
export const textAnimations = {
  // Tilted text reveal with stagger
  tiltedReveal: {
    hidden: { 
      opacity: 0, 
      y: 100, 
      rotateX: -90,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: customEasing.elastic,
        staggerChildren: 0.1,
      }
    }
  },

  // Flowing text animation
  flowingText: {
    hidden: { 
      opacity: 0, 
      x: -200,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: customEasing.fluid,
        staggerChildren: 0.15,
      }
    }
  },

  // Magnetic text effect
  magnetic: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: customEasing.bounce,
      }
    },
    hover: {
      scale: 1.1,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: customEasing.smooth,
      }
    }
  },

  // Glitch text effect
  glitch: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: customEasing.sharp,
      }
    },
    hover: {
      x: [0, -2, 2, -2, 0],
      filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(270deg)", "hue-rotate(0deg)"],
      transition: {
        duration: 0.3,
        ease: customEasing.sharp,
      }
    }
  },

  // Typewriter effect
  typewriter: {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: customEasing.smooth,
        staggerChildren: 0.1,
      }
    }
  },

  // Floating text with parallax
  floatingText: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: customEasing.fluid,
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: customEasing.smooth,
      }
    }
  }
};

// Advanced container animations
export const containerAnimations = {
  // Stagger with advanced easing
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: customEasing.fluid,
      }
    }
  },

  // Grid reveal with scale
  gridReveal: {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: customEasing.elastic,
        staggerChildren: 0.1,
      }
    }
  },

  // Parallax container
  parallaxContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: customEasing.fluid,
        staggerChildren: 0.2,
      }
    }
  },

  // Magnetic container
  magneticContainer: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: customEasing.bounce,
      }
    }
  }
};

// Advanced item animations
export const itemAnimations = {
  // Floating card with tilt
  floatingCard: {
    hidden: { 
      opacity: 0, 
      y: 100, 
      rotateX: -15,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: customEasing.elastic,
      }
    },
    hover: {
      y: -20,
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: customEasing.smooth,
      }
    }
  },

  // Slide in from different directions
  slideIn: {
    hidden: { 
      opacity: 0, 
      x: -100,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: customEasing.fluid,
      }
    }
  },

  // Scale with bounce
  scaleBounce: {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: customEasing.bounce,
      }
    }
  },

  // Fade with slide
  fadeSlide: {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: customEasing.smooth,
      }
    }
  },

  // Magnetic hover effect
  magneticHover: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: customEasing.smooth,
      }
    },
    hover: {
      scale: 1.1,
      rotateY: 10,
      transition: {
        duration: 0.3,
        ease: customEasing.smooth,
      }
    }
  }
};

// Background and particle animations
export const backgroundAnimations = {
  // Floating particles
  floatingParticles: {
    animate: {
      y: [0, -30, 0],
      x: [0, 10, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: customEasing.fluid,
      }
    }
  },

  // Gradient flow
  gradientFlow: {
    animate: {
      background: [
        "linear-gradient(45deg, #f97316, #ea580c)",
        "linear-gradient(135deg, #ea580c, #c2410c)",
        "linear-gradient(225deg, #c2410c, #f97316)",
        "linear-gradient(315deg, #f97316, #ea580c)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: customEasing.fluid,
      }
    }
  },

  // Morphing shapes
  morphingShapes: {
    animate: {
      borderRadius: [
        "50% 50% 50% 50% / 50% 50% 50% 50%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "30% 60% 70% 40% / 50% 60% 30% 60%",
        "50% 50% 50% 50% / 50% 50% 50% 50%",
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: customEasing.fluid,
      }
    }
  }
};

// Interactive animations
export const interactiveAnimations = {
  // Button press with ripple
  buttonPress: {
    hidden: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: customEasing.smooth }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1, ease: customEasing.sharp }
    }
  },

  // Card flip
  cardFlip: {
    hidden: { rotateY: 0 },
    hover: { 
      rotateY: 180,
      transition: { duration: 0.6, ease: customEasing.smooth }
    }
  },

  // Magnetic drag
  magneticDrag: {
    hidden: { x: 0, y: 0 },
    hover: (custom) => ({
      x: custom.x,
      y: custom.y,
      transition: { duration: 0.3, ease: customEasing.smooth }
    })
  },

  // Glow effect
  glow: {
    hidden: { 
      boxShadow: "0 0 0 0 rgba(249, 115, 22, 0)",
      scale: 1
    },
    hover: {
      boxShadow: "0 0 30px 10px rgba(249, 115, 22, 0.3)",
      scale: 1.05,
      transition: { duration: 0.3, ease: customEasing.smooth }
    }
  }
};

// Page transitions
export const pageTransitions = {
  // Smooth page enter
  pageEnter: {
    initial: { 
      opacity: 0, 
      y: 50,
      filter: "blur(10px)"
    },
    animate: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: customEasing.fluid,
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      filter: "blur(10px)",
      transition: {
        duration: 0.5,
        ease: customEasing.sharp,
      }
    }
  },

  // Slide page transition
  slideTransition: {
    initial: { x: "100%" },
    animate: { 
      x: 0,
      transition: {
        duration: 0.8,
        ease: customEasing.fluid,
      }
    },
    exit: { 
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: customEasing.sharp,
      }
    }
  }
};

// Legacy animations for backward compatibility
export const fadeInUp = itemAnimations.fadeSlide;
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: customEasing.smooth }
  }
};
export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: customEasing.smooth }
  }
};
export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: customEasing.smooth }
  }
};
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: customEasing.bounce }
  }
};
export const staggerContainer = containerAnimations.staggerContainer;
export const staggerItem = itemAnimations.fadeSlide;
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: customEasing.smooth }
};
export const hoverLift = {
  y: -10,
  transition: { duration: 0.3, ease: customEasing.smooth }
};
export const pageTransition = pageTransitions.pageEnter;
export const floating = backgroundAnimations.floatingParticles;
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: customEasing.fluid,
    }
  }
};

// Tab animations
export const tabVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.5,
      ease: customEasing.fluid
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    filter: "blur(10px)",
    transition: { 
      duration: 0.3,
      ease: customEasing.sharp
    }
  }
};

// Card animations
export const cardVariants = itemAnimations.floatingCard;

// Logo animations
export const logoVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -180
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: customEasing.bounce,
    }
  },
  hover: {
    scale: 1.1,
    rotateY: 10,
    transition: {
      duration: 0.3,
      ease: customEasing.smooth,
    }
  }
}; 