"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PulseIndicator } from "./PulseIndicator";

interface Metric {
  label: string;
  value: number | string;
  unit: string;
  status: "LIVE" | "ACTIVE" | "SYNCING" | "SECURE";
}

interface LiveMetricsProps {
  metrics: Metric[];
  className?: string;
}

// Helper function to format numbers consistently (avoiding hydration mismatch)
function formatNumber(value: number): string {
  // Use a consistent format that works on both server and client
  if (value >= 1000) {
    return value.toLocaleString('en-US');
  }
  return value.toString();
}

export function LiveMetrics({ metrics, className = "" }: LiveMetricsProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-4 relative"
        >
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <PulseIndicator status={metric.status} size="sm" />
            <span className="text-[#FF006E] text-xs font-mono font-semibold">{metric.status}</span>
          </div>
          <div className="mt-6">
            <div className="text-[#E0E0E0]/60 text-xs font-sans mb-1">{metric.label}</div>
            <div className="text-2xl font-bold text-white font-display">
              {typeof metric.value === 'number' 
                ? (isMounted ? formatNumber(metric.value) : metric.value.toString())
                : metric.value}
              {metric.unit && <span className="text-lg text-[#FF6B35] ml-1">{metric.unit}</span>}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

