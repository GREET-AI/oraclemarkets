"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Users, TrendingUp } from "lucide-react";

export function TrustBadges() {
  const partners = [
    { 
      name: "CoinDesk", 
      logo: "https://www.coindesk.com/wp-content/themes/coindesk2/images/logo.svg",
      fallback: "https://via.placeholder.com/120x40/FFFFFF/000000?text=CoinDesk"
    },
    { 
      name: "The Block", 
      logo: "https://www.theblock.co/static/images/theblock-logo.svg",
      fallback: "https://via.placeholder.com/120x40/FFFFFF/000000?text=The+Block"
    },
    { 
      name: "Decrypt", 
      logo: "https://decrypt.co/wp-content/uploads/2020/08/decrypt-logo-white.svg",
      fallback: "https://via.placeholder.com/120x40/FFFFFF/000000?text=Decrypt"
    },
    { 
      name: "CryptoSlate", 
      logo: "https://cryptoslate.com/wp-content/themes/cryptoslate-2020/assets/images/cryptoslate-logo.svg",
      fallback: "https://via.placeholder.com/120x40/FFFFFF/000000?text=CryptoSlate"
    },
    { 
      name: "BeInCrypto", 
      logo: "https://beincrypto.com/wp-content/themes/beincrypto/assets/images/logo.svg",
      fallback: "https://via.placeholder.com/120x40/FFFFFF/000000?text=BeInCrypto"
    },
  ];

  const stats = [
    { label: "Trusted by", value: "50K+", icon: Users },
    { label: "Active Users", value: "12.5K", icon: TrendingUp },
    { label: "Security Score", value: "A+", icon: Shield },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-[#0A0A0A] border-b-2 border-[#2A1A2A]">
      <div className="max-w-7xl mx-auto">
        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1.5 border-2 border-[#FF006E]/30 rounded-lg text-[#FF006E] text-xs font-mono font-semibold mb-4 tracking-wide uppercase">
              FEATURED IN
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
              Trusted by Leading Publications
            </h2>
          </div>
          
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="relative w-24 h-10 md:w-32 md:h-12 mb-2 group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain filter brightness-0 invert"
                    onError={(e) => {
                      // Fallback to placeholder if logo fails to load
                      const target = e.target as HTMLImageElement;
                      if (target.src !== partner.fallback) {
                        target.src = partner.fallback;
                      }
                    }}
                    unoptimized
                  />
                </div>
                <span className="text-[#E0E0E0]/70 text-sm font-sans font-medium">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl p-6 text-center hover:border-[#FF006E]/50 transition-all"
            >
              <stat.icon className="w-8 h-8 text-[#FF006E] mx-auto mb-4" />
              <div className="text-3xl font-display font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-[#E0E0E0]/60 text-sm font-sans">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
        >
          <div className="px-4 py-2 bg-[#FF006E]/20 border-2 border-[#FF006E]/30 rounded-lg">
            <span className="text-[#FF006E] text-xs font-mono font-semibold">🔒 AUDITED</span>
          </div>
          <div className="px-4 py-2 bg-[#FF6B35]/20 border-2 border-[#FF6B35]/30 rounded-lg">
            <span className="text-[#FF6B35] text-xs font-mono font-semibold">✓ VERIFIED</span>
          </div>
          <div className="px-4 py-2 bg-[#F7931E]/20 border-2 border-[#F7931E]/30 rounded-lg">
            <span className="text-[#F7931E] text-xs font-mono font-semibold">🛡️ SECURE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

