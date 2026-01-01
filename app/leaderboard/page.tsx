"use client";

import { useState } from "react";
import { SidebarNavigation } from "@/components/layout/SidebarNavigation";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";
import { SeasonSelector } from "@/components/leaderboard/SeasonSelector";
import { leaderboardEntries } from "@/lib/mockData";

interface Season {
  id: string;
  name: string;
  totalScore: number;
}

const seasons: Season[] = [
  { id: "szn1", name: "SZN 1", totalScore: 450000 },
  { id: "szn2", name: "SZN 2", totalScore: 506000 },
  { id: "szn3", name: "SZN 3", totalScore: 320000 },
];

export default function LeaderboardPage() {
  const [selectedSeason, setSelectedSeason] = useState("szn2");

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex">
      {/* Sidebar */}
      <SidebarNavigation />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-6 tracking-tight">
              Leaderboard
            </h1>

            {/* Season Selector */}
            <div className="flex items-center gap-4">
              <SeasonSelector
                seasons={seasons}
                selectedSeason={selectedSeason}
                onSeasonChange={setSelectedSeason}
              />
            </div>
          </div>

          {/* Leaderboard Table */}
          <LeaderboardTable entries={leaderboardEntries} />
        </div>
      </div>
    </main>
  );
}

