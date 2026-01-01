"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface MarketCardProps {
  market: {
    id: string;
    eventId: string;
    outcome: string;
    odds: number;
    volume: number;
    participants: number;
    timeRemaining: string;
    isFeatured?: boolean;
    isTrending?: boolean;
    event?: {
      title: string;
      category: string;
      endDate: string;
    };
    image?: string;
    tag?: string;
  };
  otherOutcomes?: Array<{
    id: string;
    outcome: string;
    odds: number;
  }>;
}

export function MarketCard({ market, otherOutcomes = [] }: MarketCardProps) {
  const totalOdds = market.odds + otherOutcomes.reduce((sum, o) => sum + o.odds, 0);
  const marketPercentage = (market.odds / totalOdds) * 100;

  // Default image based on category
  const getDefaultImage = () => {
    switch (market.event?.category) {
      case "crypto":
        return "https://via.placeholder.com/400x200/FF006E/FFFFFF?text=Crypto";
      case "sports":
        return "https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=Sports";
      case "politics":
        return "https://via.placeholder.com/400x200/F7931E/FFFFFF?text=Politics";
      default:
        return "https://via.placeholder.com/400x200/1A0A1A/FFFFFF?text=Market";
    }
  };

  const imageUrl = market.image || getDefaultImage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl overflow-hidden hover:border-[#FF006E]/50 transition-all group"
    >
      {/* Event Image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-[#FF006E]/20 to-[#FF6B35]/20 overflow-hidden">
        <Image
          src={imageUrl}
          alt={market.event?.title || "Market"}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
        {/* Tag Overlay */}
        {market.tag && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-[#FF006E]/90 backdrop-blur-sm rounded-lg">
            <span className="text-white text-xs font-mono font-semibold">{market.tag}</span>
          </div>
        )}
        {market.isFeatured && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-[#FF6B35]/90 backdrop-blur-sm rounded-lg">
            <span className="text-white text-xs font-mono font-semibold">FEATURED</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Question Title */}
        <h3 className="text-lg font-heading font-bold text-white mb-4 group-hover:text-[#FF006E] transition-colors line-clamp-2 min-h-[3.5rem]">
          {market.event?.title || "Unknown Event"}
        </h3>

        {/* Outcome Percentages */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold text-sm">{market.outcome}</span>
              <span className="text-[#FF006E] font-mono font-black text-2xl">
                {marketPercentage.toFixed(0)}%
              </span>
            </div>
            {otherOutcomes[0] && (
              <div className="flex items-center gap-2">
                <span className="text-[#FF6B35] font-mono font-black text-2xl">
                  {((otherOutcomes[0].odds / totalOdds) * 100).toFixed(0)}%
                </span>
                <span className="text-white font-semibold text-sm">{otherOutcomes[0].outcome}</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-[#0A0A0A] rounded-full overflow-hidden">
            <div className="h-full flex">
              <div
                className="bg-gradient-to-r from-[#FF006E] to-[#FF6B35]"
                style={{ width: `${marketPercentage}%` }}
              />
              {otherOutcomes.map((outcome, index) => {
                const percentage = (outcome.odds / totalOdds) * 100;
                return (
                  <div
                    key={outcome.id}
                    className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E]"
                    style={{ width: `${percentage}%` }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-4">
          <Link
            href={`/markets/${market.id}`}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-lg hover:opacity-90 transition-opacity text-center font-heading font-bold text-sm"
          >
            {market.outcome}
          </Link>
          {otherOutcomes.map((outcome) => (
            <Link
              key={outcome.id}
              href={`/markets/${market.id}`}
              className="flex-1 px-4 py-2.5 border-2 border-[#2A1A2A] text-white rounded-lg hover:bg-[#1A0A1A] hover:border-[#FF6B35]/30 transition-all text-center font-heading font-bold text-sm"
            >
              {outcome.outcome}
            </Link>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between text-xs text-[#E0E0E0]/60 font-sans pt-4 border-t-2 border-[#2A1A2A]">
          <span className="text-[#FF006E] font-semibold">+{market.participants}</span>
          <span className="text-white font-mono font-semibold">${(market.volume / 1000).toFixed(0)}K</span>
          <span className="text-[#E0E0E0]/60">{market.timeRemaining}</span>
        </div>
      </div>
    </motion.div>
  );
}

