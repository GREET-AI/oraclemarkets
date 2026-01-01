"use client";

import { motion } from "framer-motion";
import { LeaderboardEntry } from "@/lib/mockData";

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
}

export function LeaderboardTable({ entries }: LeaderboardTableProps) {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-[#2A1A2A]">
              <th className="px-6 py-4 text-left text-xs font-mono font-semibold text-[#E0E0E0]/60 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-xs font-mono font-semibold text-[#E0E0E0]/60 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-4 text-right text-xs font-mono font-semibold text-[#E0E0E0]/60 uppercase tracking-wider">
                $ SCORE
              </th>
              <th className="px-6 py-4 text-right text-xs font-mono font-semibold text-[#E0E0E0]/60 uppercase tracking-wider">
                REF SCORE
              </th>
              <th className="px-6 py-4 text-right text-xs font-mono font-semibold text-[#E0E0E0]/60 uppercase tracking-wider">
                PTS SCORE
              </th>
              <th className="px-6 py-4 text-right text-xs font-mono font-semibold text-[#E0E0E0]/60 uppercase tracking-wider">
                MULTIPLIER
              </th>
              <th className="px-6 py-4 text-right text-xs font-mono font-semibold text-[#E0E0E0]/60 uppercase tracking-wider">
                TOTAL SCORE
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A1A2A]">
            {entries.map((entry, index) => {
              const isTopThree = entry.rank <= 3;
              return (
                <motion.tr
                  key={entry.rank}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`hover:bg-[#0A0A0A] transition-colors ${
                    isTopThree ? "bg-gradient-to-r from-[#FF006E]/10 to-[#FF6B35]/10" : ""
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm font-mono font-bold ${
                        isTopThree
                          ? "text-[#FF006E]"
                          : "text-[#E0E0E0]/80"
                      }`}
                    >
                      {entry.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF006E] to-[#FF6B35] flex items-center justify-center text-white font-bold text-xs">
                        {entry.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-sans font-semibold text-white">
                        {entry.username.length > 20
                          ? `${entry.username.slice(0, 10)}...${entry.username.slice(-6)}`
                          : entry.username}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-mono font-semibold text-white">
                      {formatNumber(entry.dollarScore)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-mono font-semibold text-[#E0E0E0]/80">
                      {formatNumber(entry.refScore)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-mono font-semibold text-[#E0E0E0]/80">
                      {formatNumber(entry.ptsScore)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-mono font-semibold text-[#FF6B35]">
                      {entry.multiplier}x
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm font-mono font-bold text-[#FF006E]">
                      {formatNumber(entry.totalScore)}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

