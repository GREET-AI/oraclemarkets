"use client";

import { motion } from "framer-motion";
import { Twitter, MessageCircle, TrendingUp } from "lucide-react";

interface SocialPost {
  platform: "twitter" | "reddit" | "news";
  author: string;
  handle: string;
  content: string;
  likes?: number;
  comments?: number;
  date: string;
  verified?: boolean;
}

// Format number consistently to avoid hydration mismatches
const formatNumber = (num: number): string => {
  // Use explicit locale to ensure server and client render the same
  return num.toLocaleString('en-US');
};

export function SocialProof() {

  const posts: SocialPost[] = [
    {
      platform: "twitter",
      author: "Crypto Analyst",
      handle: "@cryptoanalyst",
      content: "Prediction markets are revolutionizing how we forecast events. Oracle Network makes it accessible to everyone. The future of decentralized forecasting is here! 🚀",
      likes: 1247,
      comments: 89,
      date: "2h ago",
      verified: true,
    },
    {
      platform: "reddit",
      author: "r/cryptocurrency",
      handle: "u/market_trader",
      content: "Just made my first prediction on Oracle Network. The UI is clean, the odds are transparent, and payouts are instant. This is what DeFi should be.",
      likes: 342,
      comments: 45,
      date: "5h ago",
    },
    {
      platform: "news",
      author: "DeFi Pulse",
      handle: "@defipulse",
      content: "Oracle Network launches with $2M+ in prediction volume in first week. Decentralized prediction markets are gaining serious traction.",
      likes: 892,
      date: "1d ago",
    },
    {
      platform: "twitter",
      author: "Blockchain Dev",
      handle: "@blockchaindev",
      content: "Why prediction markets matter: They aggregate information better than any single expert. Oracle Network's decentralized approach ensures no manipulation. This is huge.",
      likes: 2156,
      comments: 156,
      date: "3h ago",
      verified: true,
    },
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "reddit":
        return <MessageCircle className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "twitter":
        return "border-[#1DA1F2]/30 hover:border-[#1DA1F2]/50";
      case "reddit":
        return "border-[#FF4500]/30 hover:border-[#FF4500]/50";
      default:
        return "border-[#FF006E]/30 hover:border-[#FF006E]/50";
    }
  };

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
            SOCIAL PROOF
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight">
            What the Community Says
          </h2>
          <p className="text-lg sm:text-xl text-[#E0E0E0]/70 font-sans max-w-3xl mx-auto">
            Join thousands of users who are already using Oracle Network to predict the future and earn rewards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#1A0A1A] border-2 ${getPlatformColor(post.platform)} rounded-xl p-6 transition-all`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#FF006E]">
                  {getPlatformIcon(post.platform)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-heading font-bold text-sm">
                      {post.author}
                    </span>
                    {post.verified && (
                      <span className="text-[#1DA1F2] text-xs">✓</span>
                    )}
                  </div>
                  <div className="text-[#E0E0E0]/60 text-xs font-sans">
                    {post.handle} · {post.date}
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-[#E0E0E0]/90 font-sans text-sm leading-relaxed mb-4">
                {post.content}
              </p>

              {/* Engagement */}
              <div className="flex items-center gap-6 text-[#E0E0E0]/60 text-xs">
                {post.likes && (
                  <div className="flex items-center gap-1">
                    <span>❤️</span>
                    <span>{formatNumber(post.likes)}</span>
                  </div>
                )}
                {post.comments && (
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              quote: "Prediction markets changed how I think about forecasting. Oracle Network makes it accessible.",
              author: "Sarah Chen",
              role: "Crypto Trader",
            },
            {
              quote: "The transparency and instant payouts are game-changers. This is the future of DeFi.",
              author: "Marcus Rodriguez",
              role: "DeFi Enthusiast",
            },
            {
              quote: "I've made more accurate predictions using the wisdom of the crowd than I ever did alone.",
              author: "Alex Thompson",
              role: "Market Analyst",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-6"
            >
              <p className="text-[#E0E0E0]/80 font-sans text-sm mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-white font-heading font-bold text-sm">
                  {testimonial.author}
                </div>
                <div className="text-[#E0E0E0]/60 text-xs font-sans">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

