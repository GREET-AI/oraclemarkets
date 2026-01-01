"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { LiveMetrics } from "@/components/ui/LiveMetrics";
import { CodeLogTerminal } from "@/components/ui/CodeLogTerminal";
import { PulseIndicator } from "@/components/ui/PulseIndicator";
import { motion } from "framer-motion";

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "general",
    endDate: "",
    outcomes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const metrics = [
    {
      label: "Available Liquidity",
      value: 500000,
      unit: " USD",
      status: "LIVE" as const,
    },
    {
      label: "Active Events",
      value: 47,
      unit: "",
      status: "ACTIVE" as const,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Event created successfully!");
    }, 2000);
  };

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
              Create Prediction Event
            </h1>
            <p className="text-lg sm:text-xl text-[#E0E0E0]/70 font-sans max-w-3xl mx-auto">
              Create a new prediction market event and let the oracle network handle resolution.
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Event Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Event Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-lg text-white placeholder-[#E0E0E0]/40 focus:outline-none focus:border-[#FF006E]/50 font-sans"
                      placeholder="e.g., Will Bitcoin reach $100k by Q1 2025?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-lg text-white focus:outline-none focus:border-[#FF006E]/50 font-sans"
                    >
                      <option value="general">General</option>
                      <option value="sports">Sports</option>
                      <option value="politics">Politics</option>
                      <option value="crypto">Crypto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">End Date</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-lg text-white focus:outline-none focus:border-[#FF006E]/50 font-mono"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Outcomes (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.outcomes}
                      onChange={(e) => setFormData({ ...formData, outcomes: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-lg text-white placeholder-[#E0E0E0]/40 focus:outline-none focus:border-[#FF006E]/50 font-sans"
                      placeholder="e.g., Yes, No"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <PulseIndicator status={isSubmitting ? "SYNCING" : "LIVE"} size="md" />
                    <span className="text-[#E0E0E0]/60 text-sm font-sans">
                      {isSubmitting ? "Creating event..." : "Ready to create"}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-xl hover:opacity-90 transition-opacity font-heading font-bold text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Creating..." : "Create Event"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Code Log Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Creation Process</h2>
                <CodeLogTerminal className="h-96" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

