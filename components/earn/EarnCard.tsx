"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EarnOpportunity } from "@/lib/mockData";
import { ExternalLink } from "lucide-react";

interface EarnCardProps {
  opportunity: EarnOpportunity;
}

export function EarnCard({ opportunity }: EarnCardProps) {
  const formatPoints = (points: number): string => {
    if (points >= 10000) {
      return (points / 1000).toFixed(0) + "K+ pts";
    }
    return points.toLocaleString('en-US') + " pts";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl overflow-hidden hover:border-[#FF006E]/50 transition-all group"
    >
      {/* Image/Logo */}
      <div className="relative w-full h-48 bg-gradient-to-br from-[#FF006E]/20 to-[#FF6B35]/20 overflow-hidden">
        <Image
          src={opportunity.image}
          alt={opportunity.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
        {/* Partner Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-[#FF006E]/90 backdrop-blur-sm rounded-lg">
          <span className="text-white text-xs font-mono font-semibold">
            {opportunity.partner}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-[#FF006E] transition-colors line-clamp-2">
          {opportunity.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#E0E0E0]/70 font-sans mb-4 line-clamp-2">
          {opportunity.description}
        </p>

        {/* Action Row */}
        <div className="flex items-center justify-between">
          <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-lg hover:opacity-90 transition-opacity text-center font-heading font-bold text-sm flex items-center justify-center gap-2">
            Engage to Earn
            <ExternalLink className="w-4 h-4" />
          </button>
          <div className="ml-4 px-4 py-2 bg-[#FF006E]/20 border-2 border-[#FF006E]/50 rounded-lg">
            <span className="text-[#FF006E] text-sm font-mono font-bold">
              {formatPoints(opportunity.points)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

