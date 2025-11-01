import React from "react";
import { motion } from "framer-motion";

const LocationMap = () => {
  const locations = [
    { name: "Brooklyn, NY", x: 280, y: 180, region: "Americas" },
    { name: "London, UK", x: 430, y: 140, region: "Europe" },
    { name: "Warsaw, Poland", x: 480, y: 135, region: "Europe" },
    { name: "Dubai, UAE", x: 560, y: 220, region: "Middle East" },
    { name: "Hyderabad, India", x: 620, y: 260, region: "Asia" },
    { name: "Jakarta, Indonesia", x: 680, y: 290, region: "Asia" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="relative w-full h-[350px] sm:h-[400px] bg-gradient-to-br from-black-900 to-black-800 rounded-2xl overflow-hidden border border-primary-500/20 p-8">
        {/* World Map SVG Illustration */}
        <svg
          viewBox="0 0 900 500"
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 20px rgba(249, 115, 22, 0.1))" }}
        >
          {/* Grid background */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(249, 115, 22, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>

            {/* Glow effect for markers */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="900" height="500" fill="url(#grid)" />

          {/* More accurate world continents */}
          <g opacity="0.85" stroke="#fbbf24" strokeWidth="2.5" fill="none">
            {/* North America - More detailed */}
            <path d="M 120 80 Q 140 70, 160 75 L 180 85 Q 200 80, 220 90 L 240 110 Q 260 100, 280 115 L 300 140 Q 310 160, 300 180 L 290 210 Q 280 230, 260 240 L 240 250 Q 220 255, 200 250 L 180 245 Q 160 240, 150 230 L 130 210 Q 120 190, 120 170 L 115 140 Q 110 110, 120 80 Z" />

            {/* Central America */}
            <path d="M 240 250 Q 250 260, 245 275 L 240 285" />

            {/* South America - Better shape */}
            <path d="M 240 285 Q 255 295, 260 315 L 270 340 Q 275 360, 270 380 L 265 400 Q 260 415, 250 420 L 235 420 Q 220 410, 215 395 L 210 375 Q 208 355, 215 340 L 225 320 Q 235 300, 240 285 Z" />

            {/* Europe - More defined */}
            <path d="M 410 100 Q 420 95, 435 98 L 450 105 Q 465 108, 475 115 L 485 125 Q 490 140, 485 155 L 475 170 Q 465 180, 450 182 L 435 180 Q 420 175, 410 165 L 405 150 Q 402 125, 410 100 Z" />

            {/* Africa - Recognizable shape */}
            <path d="M 440 165 Q 455 170, 465 185 L 475 205 Q 480 225, 482 245 L 485 270 Q 487 295, 485 315 L 480 340 Q 472 360, 460 370 L 445 375 Q 430 373, 420 365 L 410 350 Q 405 330, 407 310 L 410 285 Q 412 260, 418 240 L 425 220 Q 430 200, 435 185 L 440 165 Z" />

            {/* Asia - Larger and more detailed */}
            <path d="M 490 90 Q 510 85, 530 88 L 555 95 Q 580 98, 605 105 L 630 115 Q 655 125, 675 140 L 695 160 Q 710 180, 715 205 L 718 230 Q 716 255, 708 275 L 695 295 Q 680 305, 660 308 L 635 308 Q 610 305, 590 298 L 570 288 Q 550 275, 535 260 L 520 240 Q 508 220, 503 200 L 498 175 Q 495 150, 495 125 L 490 90 Z" />

            {/* India subcontinent */}
            <path d="M 610 230 Q 620 245, 625 265 L 628 285 Q 625 300, 615 310 L 605 315 Q 595 312, 590 300 L 587 280 Q 590 260, 600 245 L 610 230 Z" />

            {/* Australia - Better proportioned */}
            <path d="M 700 320 Q 720 315, 740 320 L 760 330 Q 775 342, 780 360 L 782 380 Q 778 395, 765 405 L 745 410 Q 725 408, 710 400 L 695 388 Q 688 372, 690 355 L 695 338 Q 700 320, 700 320 Z" />
          </g>

          {/* Animated connection line */}
          <motion.line
            x1={locations[0].x}
            y1={locations[0].y}
            x2={locations[1].x}
            y2={locations[1].y}
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Location markers */}
          {locations.map((location, index) => (
            <g key={index}>
              {/* Pulsing circle background */}
              <motion.circle
                cx={location.x}
                cy={location.y}
                r="20"
                fill="#f97316"
                opacity="0.2"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />

              {/* Main marker */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.3, duration: 0.5 }}
                filter="url(#glow)"
              >
                {/* Pin shape */}
                <path
                  d={`M ${location.x} ${location.y - 15} 
                      Q ${location.x - 8} ${location.y - 15}, ${
                    location.x - 8
                  } ${location.y - 8}
                      Q ${location.x - 8} ${location.y}, ${location.x} ${
                    location.y + 5
                  }
                      Q ${location.x + 8} ${location.y}, ${location.x + 8} ${
                    location.y - 8
                  }
                      Q ${location.x + 8} ${location.y - 15}, ${location.x} ${
                    location.y - 15
                  } Z`}
                  fill="#f97316"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
                <circle
                  cx={location.x}
                  cy={location.y - 10}
                  r="3"
                  fill="#fff"
                />
              </motion.g>

              {/* Label */}
              <motion.text
                x={location.x}
                y={location.y + 25}
                textAnchor="middle"
                fill="#fff"
                fontSize="14"
                fontWeight="600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.3 }}
              >
                {location.name}
              </motion.text>
              <text
                x={location.x}
                y={location.y + 40}
                textAnchor="middle"
                fill="#fbbf24"
                fontSize="12"
                opacity="1"
                fontWeight="500"
              >
                {location.region}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
};

export default LocationMap;
