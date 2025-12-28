import React, { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  BaseEdge,
  getSmoothStepPath,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';

// Custom F-Category Node (circular hub nodes)
const FCategoryNode = ({ data }) => {
  return (
    <div className="relative">
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-transparent !border-0"
        style={{ bottom: -5 }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: data.delay }}
        className={`w-20 h-20 rounded-full ${data.bgColor} flex items-center justify-center shadow-2xl cursor-pointer relative`}
        whileHover={{ scale: 1.1 }}
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-full ${data.bgColor} blur-xl opacity-50`}></div>
        {/* Inner circle */}
        <div className={`relative w-16 h-16 rounded-full bg-black-900/50 backdrop-blur-sm flex items-center justify-center border-2 ${data.borderColor}`}>
          <span className="text-white font-bold text-lg">{data.label}</span>
        </div>
      </motion.div>
    </div>
  );
};

// Custom Feature Card Node
const FeatureCardNode = ({ data }) => {
  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-transparent !border-0"
        style={{ top: -5 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: data.delay }}
        className="w-72 bg-black-900/90 backdrop-blur-sm rounded-2xl p-5 border border-gray-800 hover:border-primary-500/50 transition-all duration-300 shadow-xl cursor-pointer group"
        whileHover={{ scale: 1.02, y: -5 }}
      >
        {/* Category indicator */}
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 ${data.categoryColor} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg`}>
          {data.category}
        </div>
        
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.iconGradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {data.icon}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors whitespace-pre-line">
          {data.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {data.description}
        </p>
      </motion.div>
    </div>
  );
};

// Custom animated edge
const AnimatedEdge = ({ id, sourceX, sourceY, targetX, targetY, style, data }) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    borderRadius: 20,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          ...style,
          strokeWidth: 2,
          stroke: data?.color || '#f97316',
        }}
      />
      {/* Animated dot along the path */}
      <circle r="4" fill={data?.color || '#f97316'}>
        <animateMotion dur="2s" repeatCount="indefinite" path={edgePath} />
      </circle>
    </>
  );
};

const nodeTypes = {
  fCategory: FCategoryNode,
  featureCard: FeatureCardNode,
};

const edgeTypes = {
  animated: AnimatedEdge,
};

const FeaturesFlowLayout = ({ features }) => {
  // F-Category configurations
  const fCategories = {
    Find: { color: 'bg-blue-500', borderColor: 'border-blue-500', hex: '#3b82f6' },
    Frame: { color: 'bg-purple-500', borderColor: 'border-purple-500', hex: '#a855f7' },
    Fix: { color: 'bg-orange-500', borderColor: 'border-orange-500', hex: '#f97316' },
    Flow: { color: 'bg-green-500', borderColor: 'border-green-500', hex: '#22c55e' },
  };

  // Create nodes for F-categories (top row) - now 4 F's with wider spacing
  const fCategoryNodes = [
    { id: 'find', type: 'fCategory', position: { x: 120, y: 30 }, data: { label: 'Find', bgColor: 'bg-blue-500', borderColor: 'border-blue-400', delay: 0 } },
    { id: 'frame', type: 'fCategory', position: { x: 520, y: 30 }, data: { label: 'Frame', bgColor: 'bg-purple-500', borderColor: 'border-purple-400', delay: 0.1 } },
    { id: 'fix', type: 'fCategory', position: { x: 920, y: 30 }, data: { label: 'Fix', bgColor: 'bg-orange-500', borderColor: 'border-orange-400', delay: 0.2 } },
    { id: 'flow', type: 'fCategory', position: { x: 1320, y: 30 }, data: { label: 'Flow', bgColor: 'bg-green-500', borderColor: 'border-green-400', delay: 0.3 } },
  ];

  // Create nodes for feature cards with generous spacing for better readability
  // Cards are positioned in columns under their F-category hubs with wider gaps
  const featureNodes = features.map((feature, index) => {
    // Features: 0=Process Mining(Find), 1=COE(Flow), 2=Training(Flow), 3=AI(Fix), 4=Task Mining(Find), 5=RPA(Fix), 6=Strategy(Frame), 7=Roadmap(Frame)
    // Card width ~288px (w-72), Increased spacing: 80px horizontal, 80px vertical minimum
    const positions = [
      { x: 20, y: 180 },        // 0: Process Mining (Find) - top left
      { x: 1220, y: 180 },      // 1: COE as a Service (Flow) - top right
      { x: 1400, y: 480 },      // 2: Training (Flow) - bottom far right
      { x: 820, y: 180 },       // 3: AI-Powered (Fix) - top center-right
      { x: 180, y: 480 },       // 4: Task Mining (Find) - bottom left
      { x: 1000, y: 480 },      // 5: RPA Automation (Fix) - bottom center-right
      { x: 420, y: 180 },       // 6: Process Strategy (Frame) - top center-left
      { x: 580, y: 480 },       // 7: Transformation Roadmap (Frame) - bottom center-left
    ];

    return {
      id: `feature-${index}`,
      type: 'featureCard',
      position: positions[index] || { x: 100 + (index * 300), y: 250 },
      data: {
        title: feature.title,
        description: feature.description,
        icon: feature.icon,
        iconGradient: feature.color,
        category: feature.fCategory,
        categoryColor: fCategories[feature.fCategory]?.color || 'bg-gray-500',
        delay: 0.3 + (index * 0.1),
      },
    };
  });

  // Create edges connecting F-nodes to their respective cards
  // Features: 0=Process Mining(Find), 1=COE(Flow), 2=Training(Flow), 3=AI(Fix), 4=Task Mining(Find), 5=RPA(Fix), 6=Strategy(Frame), 7=Roadmap(Frame)
  const initialEdges = [
    // Find connections (Process Mining, Task Mining)
    { id: 'e-find-0', source: 'find', target: 'feature-0', type: 'animated', data: { color: '#3b82f6' } },
    { id: 'e-find-4', source: 'find', target: 'feature-4', type: 'animated', data: { color: '#3b82f6' } },
    // Frame connections (Process Strategy, Transformation Roadmap)
    { id: 'e-frame-6', source: 'frame', target: 'feature-6', type: 'animated', data: { color: '#a855f7' } },
    { id: 'e-frame-7', source: 'frame', target: 'feature-7', type: 'animated', data: { color: '#a855f7' } },
    // Fix connections (AI-Powered, RPA)
    { id: 'e-fix-3', source: 'fix', target: 'feature-3', type: 'animated', data: { color: '#f97316' } },
    { id: 'e-fix-5', source: 'fix', target: 'feature-5', type: 'animated', data: { color: '#f97316' } },
    // Flow connections (COE, Training)
    { id: 'e-flow-1', source: 'flow', target: 'feature-1', type: 'animated', data: { color: '#22c55e' } },
    { id: 'e-flow-2', source: 'flow', target: 'feature-2', type: 'animated', data: { color: '#22c55e' } },
  ];

  const initialNodes = [...fCategoryNodes, ...featureNodes];

  const [nodes] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  // Responsive viewport - zoomed out for better overview while maintaining readability
  const defaultViewport = { x: 30, y: 20, zoom: 0.6 };

  return (
    <div className="w-full h-[750px] sm:h-[850px] lg:h-[950px] bg-black-950 rounded-3xl border border-gray-800 overflow-hidden relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultViewport={defaultViewport}
        colorMode="dark"
        fitView
        fitViewOptions={{ padding: 0.1, maxZoom: 1, minZoom: 1 }}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={true}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        elementsSelectable={false}
        panOnScrollMode="free"
        proOptions={{ hideAttribution: true }}
      >
        {/* Background grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default FeaturesFlowLayout;
