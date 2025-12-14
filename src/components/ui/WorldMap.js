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

  // Collect unique locations and generate SVG with pins using DottedMap's native methods
  const { svgMapWithPins, locations } = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    
    // Collect unique locations
    const locationsMap = new Map();
    dots.forEach((dot) => {
      const startKey = `${dot.start.lat},${dot.start.lng}`;
      const endKey = `${dot.end.lat},${dot.end.lng}`;
      if (!locationsMap.has(startKey)) {
        locationsMap.set(startKey, dot.start);
      }
      if (!locationsMap.has(endKey)) {
        locationsMap.set(endKey, dot.end);
      }
    });

    // Add pins to the map using DottedMap's native addPin method
    const locs = Array.from(locationsMap.values());
    locs.forEach((loc) => {
      map.addPin({
        lat: loc.lat,
        lng: loc.lng,
        svgOptions: { color: lineColor, radius: 0.8 },
      });
    });

    // Get SVG with the pins rendered by DottedMap
    const svg = map.getSVG({
      radius: 0.25,
      color: "#FFFFFF40",
      shape: "circle",
      backgroundColor: "transparent",
    });

    return { svgMapWithPins: svg, locations: locs };
  }, [dots, lineColor]);

  return (
    <div className="w-full aspect-[2/1] bg-gradient-to-br from-black-900 to-black-800 rounded-2xl relative font-sans overflow-hidden border border-primary-500/20">
      {/* Render the SVG map with pins directly from DottedMap */}
      <div 
        className="h-full w-full"
        dangerouslySetInnerHTML={{ __html: svgMapWithPins }}
        style={{ opacity: 0.6 }}
      />
      
      {/* Labels overlay - positioned using CSS */}
      <div className="absolute inset-0 pointer-events-none">
        {showLabels && locations.map((loc, i) => {
          // Convert lat/lng to percentage position for CSS positioning
          // Using equirectangular projection
          const xPercent = ((loc.lng + 180) / 360) * 100;
          const yPercent = ((90 - loc.lat) / 180) * 100;
          
          return (
            <motion.div
              key={`label-${i}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * i, duration: 0.5 }}
              className="absolute transform -translate-x-1/2 -translate-y-full"
              style={{
                left: `${xPercent}%`,
                top: `${yPercent}%`,
                marginTop: '-8px',
              }}
            >
              <span className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-900/90 text-white backdrop-blur-sm shadow-xl whitespace-nowrap border border-gray-700/50">
                {loc.label}
              </span>
            </motion.div>
          );
        })}
      </div>

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
