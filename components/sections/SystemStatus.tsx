"use client";

import { motion } from "framer-motion";
import { CodeLogTerminal } from "@/components/ui/CodeLogTerminal";
import { LiveBarChart } from "@/components/ui/LiveBarChart";
import { LiveMetrics } from "@/components/ui/LiveMetrics";
import { PulseIndicator } from "@/components/ui/PulseIndicator";
import { systemLogs, networkStats } from "@/lib/mockData";

export function SystemStatus() {
  const metrics = [
    {
      label: "System Uptime",
      value: 99.9,
      unit: "%",
      status: "LIVE" as const,
    },
    {
      label: "Events Processed",
      value: 1247,
      unit: "",
      status: "ACTIVE" as const,
    },
    {
      label: "Avg Resolution Time",
      value: 2.4,
      unit: "s",
      status: "LIVE" as const,
    },
    {
      label: "Network Health",
      value: 98,
      unit: "%",
      status: "SECURE" as const,
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
            SYSTEM MODULES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight">
            Real-Time System Status
          </h2>
          <p className="text-lg sm:text-xl text-[#E0E0E0]/70 font-sans max-w-3xl mx-auto">
            Monitor the oracle network's performance, security, and activity in real-time.
          </p>
        </motion.div>

        {/* Live Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12"
        >
          <LiveMetrics metrics={metrics} />
        </motion.div>

        {/* Code Log Terminal and Live Bar Chart Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CodeLogTerminal logs={systemLogs} className="h-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <LiveBarChart label="TRANSACTION VOLUME" className="h-full" />
          </motion.div>
        </div>

        {/* Status Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8"
        >
          <h3 className="text-xl font-heading font-bold text-white mb-6">Service Status</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <PulseIndicator status="LIVE" size="md" />
              <div>
                <div className="text-white font-semibold">Oracle Core</div>
                <div className="text-[#E0E0E0]/60 text-sm">Operational</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PulseIndicator status="ACTIVE" size="md" />
              <div>
                <div className="text-white font-semibold">Event Resolver</div>
                <div className="text-[#E0E0E0]/60 text-sm">Active</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PulseIndicator status="SYNCING" size="md" />
              <div>
                <div className="text-white font-semibold">Data Sync</div>
                <div className="text-[#E0E0E0]/60 text-sm">Syncing</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PulseIndicator status="SECURE" size="md" />
              <div>
                <div className="text-white font-semibold">Security Layer</div>
                <div className="text-[#E0E0E0]/60 text-sm">Secure</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

