"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RadarScan } from "@/components/ui/RadarScan";
import { LiveMetrics } from "@/components/ui/LiveMetrics";
import { networkStats } from "@/lib/mockData";

export function Hero() {
  const metrics = [
    {
      label: "Active Events",
      value: networkStats.activeEvents,
      unit: "",
      status: "LIVE" as const,
    },
    {
      label: "Total Predictions",
      value: networkStats.totalPredictions,
      unit: "",
      status: "ACTIVE" as const,
    },
    {
      label: "Total Volume",
      value: networkStats.totalVolume,
      unit: " USD",
      status: "LIVE" as const,
    },
    {
      label: "Network Nodes",
      value: networkStats.nodes,
      unit: "",
      status: "ACTIVE" as const,
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/20 via-[#0A0A0A] to-[#FF6B35]/20"></div>
      
      {/* Particle Background */}
      <div className="particle-bg"></div>

      {/* Content */}
      <div className="relative z-10 text-center py-16 w-full max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-display font-black text-white mb-6 tracking-tight"
        >
          <span className="gradient-pink-orange-text">Oracle Network</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl text-[#E0E0E0] mb-4 tracking-wider font-heading font-semibold"
        >
          DECENTRALIZED PREDICTION MARKETS
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-[#E0E0E0]/70 mb-12 font-sans max-w-2xl mx-auto"
        >
          Create, bet, and resolve prediction markets on the world's most advanced decentralized oracle network.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/create-event"
            className="px-10 py-5 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-xl hover:opacity-90 transition-opacity font-heading font-bold text-lg shadow-xl shadow-[#FF006E]/30 border-2 border-[#FF006E]/50 pulse-glow"
          >
            Create Prediction Event →
          </Link>
          <Link
            href="/markets"
            className="px-10 py-5 border-2 border-[#2A1A2A] text-white rounded-xl hover:bg-[#1A0A1A] hover:border-[#FF006E]/30 transition-all font-heading font-bold text-lg"
          >
            Explore Markets
          </Link>
        </motion.div>

        {/* Live Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <LiveMetrics metrics={metrics} />
        </motion.div>

        {/* Radar Scan Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-4xl mx-auto h-96 bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-4 left-4 text-[#FF006E] text-xs font-mono font-semibold">
            NETWORK SCANNING
          </div>
          <RadarScan status="SCANNING" nodeCount={12} className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}

