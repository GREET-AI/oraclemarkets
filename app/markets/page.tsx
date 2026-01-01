"use client";

import { useState, useMemo } from "react";
import { SidebarNavigation } from "@/components/layout/SidebarNavigation";
import { MarketCard } from "@/components/markets/MarketCard";
import { oracleEvents, extendedMarkets } from "@/lib/mockData";
import { Search, Star, Clock, TrendingUp, Flame, Calendar } from "lucide-react";

type SortOption = "featured" | "newest" | "volume" | "trending" | "ending" | "open";
type CategoryFilter = string | "all";

export default function MarketsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [searchQuery, setSearchQuery] = useState("");

  // Get all markets with event data and group by event
  const marketsByEvent = useMemo(() => {
    const grouped: Record<string, typeof extendedMarkets> = {};
    extendedMarkets.forEach((market) => {
      if (!grouped[market.eventId]) {
        grouped[market.eventId] = [];
      }
      grouped[market.eventId].push(market);
    });
    return grouped;
  }, []);

  // Get unique markets (one per event, the first outcome)
  const uniqueMarkets = useMemo(() => {
    return Object.values(marketsByEvent).map((markets) => {
      const primaryMarket = markets[0];
      const event = oracleEvents.find((e) => e.id === primaryMarket.eventId);
      const otherOutcomes = markets.slice(1).map((m) => ({
        id: m.id,
        outcome: m.outcome,
        odds: m.odds,
      }));
      return {
        ...primaryMarket,
        event,
        otherOutcomes,
      };
    });
  }, [marketsByEvent]);

  // Filter by category
  const filteredMarkets = useMemo(() => {
    let temp = uniqueMarkets;
    if (selectedCategory !== "all") {
      temp = temp.filter((market) => market.event?.category === selectedCategory);
    }
    return temp;
  }, [uniqueMarkets, selectedCategory]);

  // Sort markets
  const sortedMarkets = useMemo(() => {
    const temp = [...filteredMarkets];
    switch (sortBy) {
      case "volume":
        return temp.sort((a, b) => b.volume - a.volume);
      case "trending":
        return temp.sort((a, b) => (b.participants || 0) - (a.participants || 0));
      case "newest":
        return temp.sort(
          (a, b) =>
            new Date(b.event?.endDate || "").getTime() -
            new Date(a.event?.endDate || "").getTime()
        );
      case "ending":
        return temp.sort(
          (a, b) =>
            new Date(a.event?.endDate || "").getTime() -
            new Date(b.event?.endDate || "").getTime()
        );
      case "open":
        return temp.filter((m) => m.event?.status === "active");
      default:
        return temp.sort((a, b) => (a.isFeatured ? -1 : 1) - (b.isFeatured ? -1 : 1));
    }
  }, [filteredMarkets, sortBy]);

  // Search filter
  const searchFilteredMarkets = useMemo(() => {
    if (!searchQuery) return sortedMarkets;
    const query = searchQuery.toLowerCase();
    return sortedMarkets.filter(
      (market) =>
        market.event?.title.toLowerCase().includes(query) ||
        market.outcome.toLowerCase().includes(query)
    );
  }, [sortedMarkets, searchQuery]);

  const sortOptions: Array<{ value: SortOption; label: string; icon: any }> = [
    { value: "featured", label: "Featured", icon: Star },
    { value: "newest", label: "Newest", icon: Clock },
    { value: "volume", label: "Volume", icon: TrendingUp },
    { value: "trending", label: "Trending", icon: Flame },
    { value: "ending", label: "Ending", icon: Calendar },
    { value: "open", label: "Open", icon: Calendar },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex">
      {/* Sidebar */}
      <SidebarNavigation />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8">
          {/* Top Bar: Search and Filters */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#E0E0E0]/60" />
              <input
                type="text"
                placeholder="Search markets"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl text-white placeholder-[#E0E0E0]/40 focus:outline-none focus:border-[#FF006E]/50 font-sans"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {sortOptions.map((option) => {
                const Icon = option.icon;
                const isActive = sortBy === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-heading font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white shadow-lg shadow-[#FF006E]/30"
                        : "bg-[#1A0A1A] border-2 border-[#2A1A2A] text-[#E0E0E0]/70 hover:border-[#FF006E]/30"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {option.label}
                  </button>
                );
              })}
              <div className="px-4 py-2 bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-lg text-sm font-heading font-semibold text-[#E0E0E0]/70">
                All Tokens
              </div>
            </div>
          </div>

          {/* Markets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchFilteredMarkets.map((market) => (
              <MarketCard
                key={market.id}
                market={{
                  id: market.id,
                  eventId: market.eventId,
                  outcome: market.outcome,
                  odds: market.odds,
                  volume: market.volume,
                  participants: market.participants,
                  timeRemaining: market.timeRemaining,
                  isFeatured: market.isFeatured,
                  isTrending: market.isTrending,
                  event: market.event,
                  image: market.image || market.event?.image,
                  tag: market.tag || market.event?.tag,
                }}
                otherOutcomes={market.otherOutcomes}
              />
            ))}
          </div>

          {searchFilteredMarkets.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#E0E0E0]/60 font-sans text-lg">
                No markets found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
