"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  x: number;
  y: number;
  status: "active" | "syncing" | "inactive";
}

interface Connection {
  from: string;
  to: string;
}

interface NetworkGraphProps {
  nodes?: Node[];
  connections?: Connection[];
  animated?: boolean;
  className?: string;
}

export function NetworkGraph({ 
  nodes: initialNodes, 
  connections: initialConnections, 
  animated = true,
  className = "" 
}: NetworkGraphProps) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes || []);
  const [connections, setConnections] = useState<Connection[]>(initialConnections || []);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialNodes) return;

    // Generate random nodes
    const generatedNodes: Node[] = [];
    const nodeCount = 12;
    const centerX = 200;
    const centerY = 200;
    const radius = 150;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (Math.PI * 2 * i) / nodeCount + Math.random() * 0.3;
      const distance = radius * (0.6 + Math.random() * 0.4);
      generatedNodes.push({
        id: `node-${i}`,
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        status: Math.random() > 0.3 ? "active" : Math.random() > 0.5 ? "syncing" : "inactive",
      });
    }

    // Generate connections
    const generatedConnections: Connection[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const connectionsPerNode = 2 + Math.floor(Math.random() * 2);
      for (let j = 0; j < connectionsPerNode; j++) {
        const targetIndex = (i + 1 + Math.floor(Math.random() * (nodeCount - 1))) % nodeCount;
        generatedConnections.push({
          from: `node-${i}`,
          to: `node-${targetIndex}`,
        });
      }
    }

    setNodes(generatedNodes);
    setConnections(generatedConnections);
  }, [initialNodes]);

  const getNodeColor = (status: string) => {
    switch (status) {
      case "active":
        return "#FF006E";
      case "syncing":
        return "#FF6B35";
      default:
        return "#666";
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 400 400">
        {/* Draw connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <motion.line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(255, 0, 110, 0.3)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={animated ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          );
        })}

        {/* Draw nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={8}
              fill={getNodeColor(node.status)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            {node.status === "active" && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={12}
                fill="none"
                stroke={getNodeColor(node.status)}
                strokeWidth="1"
                opacity="0.5"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

