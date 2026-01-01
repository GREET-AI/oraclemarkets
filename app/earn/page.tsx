"use client";

import { useState, useMemo } from "react";
import { SidebarNavigation } from "@/components/layout/SidebarNavigation";
import { EarnCard } from "@/components/earn/EarnCard";
import { earnOpportunities } from "@/lib/mockData";

type FilterOption = "all" | "MYRIAD" | "DECRYPT" | "RUG RADIO" | "DEGENZ LIVE";

export default function EarnPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("all");

  const filteredOpportunities = useMemo(() => {
    if (selectedFilter === "all") {
      return earnOpportunities;
    }
    return earnOpportunities.filter((opp) => opp.category === selectedFilter);
  }, [selectedFilter]);

  const filterOptions: FilterOption[] = [
    "all",
    "MYRIAD",
    "DECRYPT",
    "RUG RADIO",
    "DEGENZ LIVE",
  ];

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
              Earn
            </h1>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-heading font-semibold transition-all ${
                    selectedFilter === filter
                      ? "bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white shadow-lg shadow-[#FF006E]/30"
                      : "bg-[#1A0A1A] border-2 border-[#2A1A2A] text-[#E0E0E0]/70 hover:border-[#FF006E]/30"
                  }`}
                >
                  {filter === "all" ? "All" : filter}
                </button>
              ))}
            </div>
          </div>

          {/* Earn Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredOpportunities.map((opportunity, index) => (
              <EarnCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#E0E0E0]/60 font-sans text-lg">
                No earning opportunities found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

