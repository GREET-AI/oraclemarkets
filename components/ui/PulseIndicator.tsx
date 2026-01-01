"use client";

import { motion } from "framer-motion";

interface PulseIndicatorProps {
  status: "LIVE" | "ACTIVE" | "SYNCING" | "SECURE";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PulseIndicator({ status, size = "md", className = "" }: PulseIndicatorProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const colorClasses = {
    LIVE: "bg-[#FF006E]",
    ACTIVE: "bg-[#FF6B35]",
    SYNCING: "bg-[#F7931E]",
    SECURE: "bg-[#FF006E]",
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[status]} rounded-full`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute inset-0 ${sizeClasses[size]} ${colorClasses[status]} rounded-full`}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

