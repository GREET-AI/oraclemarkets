"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { oracleEvents } from "@/lib/mockData";

export function FeaturedEvents() {
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
            ACTIVE MARKETS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight">
            Featured Prediction Events
          </h2>
          <p className="text-lg sm:text-xl text-[#E0E0E0]/70 font-sans max-w-3xl mx-auto">
            Participate in the most popular prediction markets and test your forecasting skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {oracleEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8 hover:border-[#FF006E]/50 transition-all glow-border"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] text-xs font-mono font-semibold rounded-lg uppercase">
                  {event.category}
                </span>
                <span className={`px-3 py-1 text-xs font-mono font-semibold rounded-lg ${
                  event.status === 'active' 
                    ? 'bg-[#FF6B35]/20 text-[#FF6B35]' 
                    : 'bg-[#E0E0E0]/20 text-[#E0E0E0]'
                }`}>
                  {event.status.toUpperCase()}
                </span>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-white mb-4">{event.title}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#E0E0E0]/60 font-sans">Total Volume</span>
                  <span className="text-white font-semibold font-mono">${event.volume.toLocaleString('en-US')}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#E0E0E0]/60 font-sans">Predictions</span>
                  <span className="text-white font-semibold font-mono">{event.totalPredictions}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#E0E0E0]/60 font-sans">End Date</span>
                  <span className="text-white font-semibold font-mono">{new Date(event.endDate).toLocaleDateString()}</span>
                </div>
              </div>

              <Link
                href={`/markets?event=${event.id}`}
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-xl hover:opacity-90 transition-opacity text-center font-heading font-bold text-sm"
              >
                View Market →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/markets"
            className="inline-block px-8 py-4 border-2 border-[#2A1A2A] text-white rounded-xl hover:bg-[#1A0A1A] hover:border-[#FF006E]/30 transition-all font-heading font-bold"
          >
            View All Markets →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

