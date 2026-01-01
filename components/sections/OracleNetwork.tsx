"use client";

import { motion } from "framer-motion";
import { NetworkGraph } from "@/components/ui/NetworkGraph";
import { RadarScan } from "@/components/ui/RadarScan";
import { LiveMetrics } from "@/components/ui/LiveMetrics";
import { networkStats, networkNodes } from "@/lib/mockData";

export function OracleNetwork() {
  const metrics = [
    {
      label: "Active Nodes",
      value: networkNodes.filter(n => n.status === 'active').length,
      unit: "",
      status: "ACTIVE" as const,
    },
    {
      label: "Syncing Nodes",
      value: networkNodes.filter(n => n.status === 'syncing').length,
      unit: "",
      status: "SYNCING" as const,
    },
    {
      label: "Total Connections",
      value: networkNodes.reduce((sum, n) => sum + n.connections, 0),
      unit: "",
      status: "LIVE" as const,
    },
    {
      label: "Avg Latency",
      value: networkStats.avgLatency,
      unit: "s",
      status: "LIVE" as const,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 border-2 border-[#FF006E]/30 rounded-lg text-[#FF006E] text-xs font-mono font-semibold mb-6 tracking-wide uppercase">
            NETWORK STATUS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight">
            Decentralized Oracle Network
          </h2>
          <p className="text-lg sm:text-xl text-[#E0E0E0]/70 font-sans max-w-3xl mx-auto">
            A distributed network of nodes ensuring accurate, tamper-proof event resolution for prediction markets worldwide.
          </p>
        </motion.div>

        {/* Network Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8 h-96 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-[#FF006E] text-xs font-mono font-semibold">
              NODE TOPOLOGY
            </div>
            <NetworkGraph animated={true} className="w-full h-full" />
          </div>
        </motion.div>

        {/* Live Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <LiveMetrics metrics={metrics} />
        </motion.div>

        {/* Radar Scan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8 h-96 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-[#FF006E] text-xs font-mono font-semibold">
              ACTIVE NODES SCANNING
            </div>
            <RadarScan status="SCANNING" nodeCount={networkNodes.length} className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

