"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Shield, Zap } from "lucide-react";
import { RadarScan } from "@/components/ui/RadarScan";
import { LiveMetrics } from "@/components/ui/LiveMetrics";

export function PredictionMarketsStory() {
  const stats = [
    { label: "Markets Created", value: 1247, icon: TrendingUp },
    { label: "Active Users", value: 12500, icon: Users },
    { label: "Total Volume", value: 2500000, unit: " USD", icon: Zap },
    { label: "Accuracy Rate", value: 87, unit: "%", icon: Shield },
  ];

  const timeline = [
    {
      year: "2024",
      title: "The Rise of Decentralized Prediction Markets",
      description: "Oracle Network launches, making prediction markets accessible to everyone through blockchain technology.",
    },
    {
      year: "2023",
      title: "Information Aggregation Revolution",
      description: "Studies show prediction markets aggregate information better than any single expert or poll.",
    },
    {
      year: "2022",
      title: "DeFi Meets Forecasting",
      description: "Decentralized finance principles applied to prediction markets, ensuring transparency and fairness.",
    },
    {
      year: "2021",
      title: "Wisdom of the Crowd",
      description: "Research demonstrates that collective intelligence often outperforms individual experts in forecasting.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-[#FF006E]/10 via-[#0A0A0A] to-[#FF6B35]/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 particle-bg opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 border-2 border-[#FF006E]/30 rounded-lg text-[#FF006E] text-xs font-mono font-semibold mb-6 tracking-wide uppercase">
            WHY IT MATTERS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight">
            Why Prediction Markets Matter
          </h2>
          <p className="text-lg sm:text-xl text-[#E0E0E0]/70 font-sans max-w-3xl mx-auto">
            Prediction markets harness the wisdom of the crowd to create more accurate forecasts than any single expert.
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <LiveMetrics
            metrics={stats.map((stat) => ({
              label: stat.label,
              value: stat.value,
              unit: stat.unit || "",
              status: "LIVE" as const,
            }))}
          />
        </motion.div>

        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                The Power of Collective Intelligence
              </h3>
              <p className="text-[#E0E0E0]/80 font-sans leading-relaxed mb-4">
                Prediction markets work by aggregating information from many participants. Each person brings their unique knowledge and perspective, creating a more accurate forecast than any individual could produce alone.
              </p>
              <p className="text-[#E0E0E0]/80 font-sans leading-relaxed mb-4">
                Oracle Network makes this powerful tool accessible to everyone through blockchain technology. No intermediaries, no manipulation—just transparent, decentralized forecasting powered by smart contracts.
              </p>
              <p className="text-[#E0E0E0]/80 font-sans leading-relaxed">
                Whether you're predicting crypto prices, sports outcomes, or political events, Oracle Network provides a fair, transparent platform where your predictions can earn real rewards.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/markets"
                className="px-6 py-3 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-xl hover:opacity-90 transition-opacity font-heading font-bold text-sm flex items-center justify-center gap-2"
              >
                Explore Markets
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="px-6 py-3 border-2 border-[#2A1A2A] text-white rounded-xl hover:bg-[#1A0A1A] hover:border-[#FF006E]/30 transition-all font-heading font-bold text-sm"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-8 h-full">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Evolution Timeline
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-[#FF006E]/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-[#FF006E] rounded-full border-2 border-[#0A0A0A]"></div>
                    <div className="text-[#FF006E] font-mono text-xs font-semibold mb-1">
                      {item.year}
                    </div>
                    <div className="text-white font-heading font-bold text-sm mb-2">
                      {item.title}
                    </div>
                    <div className="text-[#E0E0E0]/70 font-sans text-xs leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Transparent",
              description: "All predictions and outcomes are recorded on-chain, ensuring complete transparency.",
              icon: Shield,
            },
            {
              title: "Decentralized",
              description: "No single point of control. The network is distributed across multiple nodes.",
              icon: TrendingUp,
            },
            {
              title: "Accessible",
              description: "Anyone can participate. No barriers, no gatekeepers—just open forecasting.",
              icon: Users,
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-6 hover:border-[#FF006E]/50 transition-all"
            >
              <benefit.icon className="w-8 h-8 text-[#FF006E] mb-4" />
              <h4 className="text-xl font-heading font-bold text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-[#E0E0E0]/70 font-sans text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

