import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";

export function WorldMap({
  dots = [],
  lineColor = "#f97316", // Orange from your theme
  showLabels = true,
  labelClassName = "text-sm",
  animationDuration = 2,
  loop = true,
}) {
  const svgRef = useRef(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const map = useMemo(
    () => new DottedMap({ height: 60, grid: "diagonal" }),
    []
  );

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.25,
        color: "#FFFFFF40", // Brighter dots for better contrast
        shape: "circle",
        backgroundColor: "transparent",
      }),
    [map]
  );

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Calculate animation timing
  const staggerDelay = 0.3;
  const totalAnimationTime = dots.length * staggerDelay + animationDuration;
  const pauseTime = 2; // Pause for 2 seconds when all paths are drawn
  const fullCycleDuration = totalAnimationTime + pauseTime;

  // Deduplicate points to avoid rendering the same location multiple times
  const uniquePoints = useMemo(() => {
    const pointsMap = new Map();
    
    dots.forEach((dot) => {
      const startKey = `${dot.start.lat},${dot.start.lng}`;
      const endKey = `${dot.end.lat},${dot.end.lng}`;
      
      if (!pointsMap.has(startKey)) {
        pointsMap.set(startKey, {
          ...dot.start,
          x: projectPoint(dot.start.lat, dot.start.lng).x,
          y: projectPoint(dot.start.lat, dot.start.lng).y,
        });
      }
      
      if (!pointsMap.has(endKey)) {
        pointsMap.set(endKey, {
          ...dot.end,
          x: projectPoint(dot.end.lat, dot.end.lng).x,
          y: projectPoint(dot.end.lat, dot.end.lng).y,
        });
      }
    });
    
    return Array.from(pointsMap.values());
  }, [dots]);

  return (
    <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] bg-gradient-to-br from-black-900 to-black-800 rounded-2xl relative font-sans overflow-hidden border border-primary-500/20">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none object-cover opacity-40"
        alt="world map"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feMorphology operator="dilate" radius="0.5" />
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated lines removed as per user request */}

        {/* Render unique points only once */}
        {uniquePoints.map((point, i) => (
          <g key={`point-${i}`}>
            <motion.g
              onHoverStart={() =>
                setHoveredLocation(point.label || `Location ${i}`)
              }
              onHoverEnd={() => setHoveredLocation(null)}
              className="cursor-pointer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={lineColor}
                filter="url(#glow)"
                className="drop-shadow-lg"
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="4"
                  to="16"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </motion.g>

            {showLabels && point.label && (
              <motion.g
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * i, duration: 0.5 }}
                className="pointer-events-none"
              >
                <foreignObject
                  x={point.x - 50}
                  y={point.y - 35}
                  width="100"
                  height="26"
                  className="block"
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gray-900/90 text-white backdrop-blur-sm shadow-xl whitespace-nowrap">
                      {point.label}
                    </span>
                  </div>
                </foreignObject>
              </motion.g>
            )}
          </g>
        ))}
      </svg>

      {/* Mobile Tooltip */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 bg-black-900/95 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm sm:hidden border border-primary-500/50"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
