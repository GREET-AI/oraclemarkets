"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RadioIcon } from "lucide-react";

interface LiveBarChartProps {
  data?: number[];
  updateInterval?: number;
  label?: string;
  className?: string;
}

export function LiveBarChart({ 
  data: initialData, 
  updateInterval = 2000, 
  label = "LIVE FEED",
  className = "" 
}: LiveBarChartProps) {
  const [data, setData] = useState<number[]>(
    initialData || Array.from({ length: 12 }, () => Math.random() * 100)
  );

  useEffect(() => {
    if (initialData) return;

    const interval = setInterval(() => {
      setData((prev) => 
        prev.map(() => Math.random() * 100)
      );
    }, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval, initialData]);

  const maxValue = Math.max(...data, 100);

  return (
    <div className={`bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <RadioIcon className="w-4 h-4 text-[#FF006E]" />
          <span className="text-[#FF006E] text-xs font-mono font-semibold">{label}</span>
        </div>
        <div className="flex items-center gap-1">
          <motion.div
            className="w-2 h-2 bg-[#FF006E] rounded-full"
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
          <span className="text-[#E0E0E0]/60 text-xs font-mono">LIVE</span>
        </div>
      </div>
      
      <div className="flex items-end justify-between gap-1 h-32">
        {data.map((value, index) => (
          <motion.div
            key={index}
            className="flex-1 bg-gradient-to-t from-[#FF006E] to-[#FF6B35] rounded-t"
            initial={{ height: 0 }}
            animate={{ 
              height: `${(value / maxValue) * 100}%`,
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut",
            }}
            style={{
              minHeight: "4px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

