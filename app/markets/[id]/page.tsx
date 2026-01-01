"use client";

import { use } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { LiveBarChart } from "@/components/ui/LiveBarChart";
import { LiveMetrics } from "@/components/ui/LiveMetrics";
import { motion } from "framer-motion";
import { oracleEvents, extendedMarkets } from "@/lib/mockData";
import { ArrowLeft, TrendingUp, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function MarketDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const market = extendedMarkets.find((m) => m.id === id);
  const event = market ? oracleEvents.find((e) => e.id === market.eventId) : null;
  const otherMarkets = extendedMarkets.filter(
    (m) => m.eventId === market?.eventId && m.id !== market.id
  );

  if (!market || !event) {
    return (
      <main className="min-h-screen bg-[#0A0A0A]">
        <Navigation />
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-heading font-bold text-white mb-4">Market Not Found</h1>
            <Link
              href="/markets"
              className="text-[#FF006E] hover:text-[#FF6B35] transition-colors"
            >
              ← Back to Markets
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const totalOdds = market.odds + otherMarkets.reduce((sum, m) => sum + m.odds, 0);
  const marketPercentage = (market.odds / totalOdds) * 100;

  const metrics = [
    {
      label: "Total Volume",
      value: market.volume,
      unit: " USD",
      status: "LIVE" as const,
    },
    {
      label: "Participants",
      value: market.participants,
      unit: "",
      status: "ACTIVE" as const,
    },
    {
      label: "Liquidity",
      value: market.liquidity,
      unit: " USD",
      status: "LIVE" as const,
    },
    {
      label: "Current Odds",
      value: marketPercentage,
      unit: "%",
      status: "ACTIVE" as const,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/markets"
            className="inline-flex items-center gap-2 text-[#E0E0E0]/70 hover:text-white transition-colors mb-8 font-sans"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Markets
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] text-xs font-mono font-semibold rounded-lg uppercase">
                {event.category}
              </span>
              <span className="px-3 py-1 bg-[#1A0A1A] border-2 border-[#2A1A2A] text-[#E0E0E0]/60 text-xs font-mono rounded-lg">
                {market.timeRemaining}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight">
              {event.title}
            </h1>
          </motion.div>

          {/* Live Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <LiveMetrics metrics={metrics} />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Outcome Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-8"
              >
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Place Your Prediction</h2>
                
                <div className="space-y-4">
                  {/* Current Market Outcome */}
                  <div className="bg-[#0A0A0A] border-2 border-[#FF006E]/30 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-heading font-bold text-lg">{market.outcome}</span>
                      <span className="text-[#FF006E] font-mono font-black text-2xl">
                        {marketPercentage.toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-[#1A0A1A] rounded-full overflow-hidden mb-4">
                      <div
                        className="h-full bg-gradient-to-r from-[#FF006E] to-[#FF6B35]"
                        style={{ width: `${marketPercentage}%` }}
                      />
                    </div>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-lg hover:opacity-90 transition-opacity font-heading font-bold">
                      Predict {market.outcome}
                    </button>
                  </div>

                  {/* Other Outcomes */}
                  {otherMarkets.map((otherMarket) => {
                    const otherPercentage = (otherMarket.odds / totalOdds) * 100;
                    return (
                      <div
                        key={otherMarket.id}
                        className="bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-lg p-6 hover:border-[#FF6B35]/30 transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-white font-heading font-bold text-lg">
                            {otherMarket.outcome}
                          </span>
                          <span className="text-[#FF6B35] font-mono font-black text-2xl">
                            {otherPercentage.toFixed(0)}%
                          </span>
                        </div>
                        <div className="w-full h-3 bg-[#1A0A1A] rounded-full overflow-hidden mb-4">
                          <div
                            className="h-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E]"
                            style={{ width: `${otherPercentage}%` }}
                          />
                        </div>
                        <button className="w-full px-6 py-3 border-2 border-[#2A1A2A] text-white rounded-lg hover:bg-[#1A0A1A] hover:border-[#FF6B35]/30 transition-all font-heading font-bold">
                          Predict {otherMarket.outcome}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Volume Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <LiveBarChart
                  label="VOLUME OVER TIME"
                  data={market.chartData.map((d) => d.value * 1000)}
                  className="h-64"
                />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Market Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-6"
              >
                <h3 className="text-xl font-heading font-bold text-white mb-4">Market Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#E0E0E0]/60 font-sans text-sm">Status</span>
                    <span className="px-2 py-1 bg-[#FF6B35]/20 text-[#FF6B35] text-xs font-mono font-semibold rounded">
                      {event.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E0E0E0]/60 font-sans text-sm">End Date</span>
                    <span className="text-white font-semibold font-mono text-sm">
                      {new Date(event.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E0E0E0]/60 font-sans text-sm">Total Predictions</span>
                    <span className="text-white font-semibold font-mono text-sm">
                      {event.totalPredictions}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-6"
              >
                <h3 className="text-xl font-heading font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { user: "0xabc...123", amount: 500, outcome: market.outcome, time: "2m ago" },
                    { user: "0xdef...456", amount: 250, outcome: otherMarkets[0]?.outcome || "Other", time: "5m ago" },
                    { user: "0xghi...789", amount: 1000, outcome: market.outcome, time: "10m ago" },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm pb-3 border-b-2 border-[#2A1A2A] last:border-0"
                    >
                      <div>
                        <div className="text-white font-mono text-xs">{activity.user}</div>
                        <div className="text-[#E0E0E0]/60 font-sans text-xs">
                          {activity.outcome} · {activity.time}
                        </div>
                      </div>
                      <div className="text-[#FF006E] font-semibold font-mono">
                        ${activity.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

