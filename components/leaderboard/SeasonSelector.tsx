"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Season {
  id: string;
  name: string;
  totalScore: number;
}

interface SeasonSelectorProps {
  seasons: Season[];
  selectedSeason: string;
  onSeasonChange: (seasonId: string) => void;
}

export function SeasonSelector({
  seasons,
  selectedSeason,
  onSeasonChange,
}: SeasonSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentSeason = seasons.find((s) => s.id === selectedSeason);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-lg hover:border-[#FF006E]/30 transition-all"
      >
        <span className="text-sm font-heading font-semibold text-white">
          {currentSeason?.name || "Select Season"}
        </span>
        <span className="text-xs font-mono text-[#E0E0E0]/60">
          ({currentSeason ? (currentSeason.totalScore / 1000).toFixed(0) + "K" : ""})
        </span>
        <ChevronDown className="w-4 h-4 text-[#E0E0E0]/60" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-64 bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-lg shadow-xl z-20">
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => {
                  onSeasonChange(season.id);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-[#0A0A0A] transition-colors ${
                  selectedSeason === season.id
                    ? "bg-[#FF006E]/10 border-l-2 border-[#FF006E]"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-heading font-semibold text-white">
                    {season.name}
                  </span>
                  <span className="text-xs font-mono text-[#E0E0E0]/60">
                    {(season.totalScore / 1000).toFixed(0)}K
                  </span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

