"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { CodeLogTerminal } from "@/components/ui/CodeLogTerminal";
import { LiveMetrics } from "@/components/ui/LiveMetrics";
import { motion } from "framer-motion";
import { predictions, markets, oracleEvents } from "@/lib/mockData";

export default function PredictionsPage() {
  const totalWinnings = predictions
    .filter(p => p.status === 'won')
    .reduce((sum, p) => sum + p.amount * 1.5, 0);
  
  const totalInvested = predictions.reduce((sum, p) => sum + p.amount, 0);
  const pendingPredictions = predictions.filter(p => p.status === 'pending').length;

  const metrics = [
    {
      label: "Total Invested",
      value: totalInvested,
      unit: " USD",
      status: "ACTIVE" as const,
    },
    {
      label: "Total Winnings",
      value: totalWinnings,
      unit: " USD",
      status: "LIVE" as const,
    },
    {
      label: "Pending",
      value: pendingPredictions,
      unit: "",
      status: "SYNCING" as const,
    },
    {
      label: "Win Rate",
      value: predictions.filter(p => p.status === 'won').length / predictions.length * 100,
      unit: "%",
      status: "LIVE" as const,
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-6 tracking-tight">
              My Predictions
            </h1>
            <p className="text-lg sm:text-xl text-[#E0E0E0]/70 font-sans max-w-3xl mx-auto">
              Track your prediction history, winnings, and active bets.
            </p>
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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Predictions List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Your Predictions</h2>
                <div className="space-y-4">
                  {predictions.map((prediction) => {
                    const market = markets.find(m => m.id === prediction.marketId);
                    const event = oracleEvents.find(e => e.id === market?.eventId);
                    return (
                      <div
                        key={prediction.id}
                        className="bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-xl p-6"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-heading font-bold text-white">{event?.title || 'Unknown Event'}</h3>
                          <span className={`px-3 py-1 text-xs font-mono font-semibold rounded-lg ${
                            prediction.status === 'won' 
                              ? 'bg-[#FF6B35]/20 text-[#FF6B35]'
                              : prediction.status === 'lost'
                              ? 'bg-[#E0E0E0]/20 text-[#E0E0E0]'
                              : 'bg-[#FF006E]/20 text-[#FF006E]'
                          }`}>
                            {prediction.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-[#E0E0E0]/60 font-sans">Outcome</span>
                            <span className="text-white font-semibold">{prediction.outcome}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#E0E0E0]/60 font-sans">Amount</span>
                            <span className="text-white font-semibold font-mono">${prediction.amount}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[#E0E0E0]/60 font-sans">TX Hash</span>
                            <span className="text-[#FF006E] font-mono text-xs">{prediction.txHash}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Code Log Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Transaction History</h2>
                <CodeLogTerminal className="h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

