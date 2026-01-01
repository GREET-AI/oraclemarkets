"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Oracle Network?",
    answer: "Oracle Network is a decentralized prediction market platform that allows users to create, bet on, and resolve prediction events. The platform uses a distributed network of oracle nodes to ensure accurate, tamper-proof event resolution. Users can participate in markets covering sports, politics, crypto, and general events, with dynamic odds that adjust based on market activity.",
  },
  {
    question: "How do prediction markets work?",
    answer: "Prediction markets allow users to bet on the outcome of future events. Each event has multiple possible outcomes, and users can place predictions (bets) on which outcome they believe will occur. The odds for each outcome adjust dynamically based on the amount of money placed on each option. When the event is resolved, users who predicted correctly receive payouts proportional to the odds at the time they placed their prediction.",
  },
  {
    question: "How are events resolved?",
    answer: "Events are resolved by the decentralized oracle network, which consists of multiple independent nodes that verify and report event outcomes. The network uses consensus mechanisms to ensure accurate resolution. For objective events (like sports scores), the oracle nodes query reliable data sources. For subjective events, the network may use voting mechanisms or trusted data providers. Once consensus is reached, the event is automatically resolved and payouts are distributed.",
  },
  {
    question: "What happens if I win a prediction?",
    answer: "If your prediction is correct, you receive a payout based on the odds at the time you placed your bet. The payout is calculated as: (your bet amount) × (odds multiplier). For example, if you bet $100 on an outcome with 2.0 odds, you would receive $200 total (your $100 bet back plus $100 profit). Winnings are automatically credited to your account and can be withdrawn immediately after resolution.",
  },
  {
    question: "Can I cancel a prediction?",
    answer: "Once a prediction is placed, it cannot be cancelled. This ensures market integrity and prevents manipulation. However, some markets may allow you to sell your position to other users before the event is resolved, depending on market liquidity and platform features. Always review the market rules before placing a prediction.",
  },
  {
    question: "How secure is the platform?",
    answer: "Oracle Network uses blockchain technology and smart contracts to ensure security and transparency. All predictions and payouts are recorded on-chain, making them immutable and verifiable. The oracle network uses cryptographic proofs and consensus mechanisms to prevent tampering. Additionally, the platform employs non-custodial wallets, meaning you maintain control of your funds at all times.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-12 tracking-tight text-center">
            Frequently Asked Questions
          </h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#0A0A0A] transition-colors"
                >
                  <span className="text-lg font-heading font-bold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF006E] flex-shrink-0 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-[#E0E0E0]/80 font-sans leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

