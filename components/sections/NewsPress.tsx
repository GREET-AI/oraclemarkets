"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";

interface NewsArticle {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  category: string;
  url?: string;
}

export function NewsPress() {
  const articles: NewsArticle[] = [
    {
      title: "Decentralized Prediction Markets See Record Growth in 2024",
      source: "CoinDesk",
      date: "Dec 28, 2024",
      excerpt: "Oracle Network and other prediction market platforms are experiencing unprecedented adoption as users seek alternative forecasting methods.",
      category: "Crypto",
    },
    {
      title: "How Prediction Markets Are Democratizing Information",
      source: "The Block",
      date: "Dec 25, 2024",
      excerpt: "New platforms like Oracle Network are making prediction markets accessible to everyone, not just institutional traders.",
      category: "Technology",
    },
    {
      title: "The Future of Forecasting: Why Prediction Markets Matter",
      source: "Decrypt",
      date: "Dec 22, 2024",
      excerpt: "Prediction markets aggregate information better than any single expert. Oracle Network's decentralized approach ensures transparency and fairness.",
      category: "DeFi",
    },
    {
      title: "Oracle Network Launches with $2M+ in First Week Volume",
      source: "CryptoSlate",
      date: "Dec 20, 2024",
      excerpt: "The new decentralized prediction market platform has seen massive interest from crypto traders and DeFi enthusiasts.",
      category: "News",
    },
  ];

  const pressMentions = [
    "CoinDesk",
    "The Block",
    "Decrypt",
    "CryptoSlate",
    "BeInCrypto",
    "DeFi Pulse",
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#0A0A0A] border-t-2 border-[#2A1A2A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 border-2 border-[#FF006E]/30 rounded-lg text-[#FF006E] text-xs font-mono font-semibold mb-6 tracking-wide uppercase">
            NEWS & PRESS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight">
            As Seen In
          </h2>
          <p className="text-lg sm:text-xl text-[#E0E0E0]/70 font-sans max-w-3xl mx-auto">
            Leading publications are covering the rise of decentralized prediction markets.
          </p>
        </motion.div>

        {/* Press Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {pressMentions.map((mention, index) => (
              <motion.div
                key={mention}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="px-6 py-3 bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-lg hover:border-[#FF006E]/50 transition-all"
              >
                <span className="text-[#E0E0E0]/80 font-heading font-semibold text-sm">
                  {mention}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* News Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-6 hover:border-[#FF006E]/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#FF006E]/20 text-[#FF006E] text-xs font-mono font-semibold rounded-lg uppercase">
                  {article.category}
                </span>
                <div className="flex items-center gap-2 text-[#E0E0E0]/60 text-xs font-sans">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#FF006E] transition-colors">
                {article.title}
              </h3>

              <p className="text-[#E0E0E0]/70 font-sans text-sm leading-relaxed mb-4">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-[#FF6B35] font-heading font-semibold text-sm">
                  {article.source}
                </span>
                {article.url && (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF006E] hover:text-[#FF6B35] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent News Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-8"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-6">
            Recent Press Coverage
          </h3>
          <div className="space-y-4">
            {[
              { date: "Dec 28", title: "Oracle Network featured in CoinDesk's top DeFi projects", source: "CoinDesk" },
              { date: "Dec 25", title: "Prediction markets see 300% growth in Q4 2024", source: "The Block" },
              { date: "Dec 22", title: "How Oracle Network is democratizing forecasting", source: "Decrypt" },
              { date: "Dec 20", title: "Oracle Network launches with record-breaking volume", source: "CryptoSlate" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-4 border-b-2 border-[#2A1A2A] last:border-0"
              >
                <div className="text-[#FF006E] font-mono text-xs font-semibold min-w-[60px]">
                  {item.date}
                </div>
                <div className="flex-1">
                  <div className="text-white font-heading font-semibold text-sm mb-1">
                    {item.title}
                  </div>
                  <div className="text-[#E0E0E0]/60 text-xs font-sans">
                    {item.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

