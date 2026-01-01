"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  TrendingUp, 
  Trophy, 
  Coins, 
  Newspaper,
  Bitcoin,
  Activity,
  Building2,
  LineChart,
  Gamepad2,
  Palette,
  TrendingDown,
  Zap,
  HelpCircle,
  Handshake
} from "lucide-react";
import { marketCategories } from "@/lib/mockData";

export function SidebarNavigation() {
  const pathname = usePathname();
  const [showSignInModal, setShowSignInModal] = useState(false);

  const navLinks = [
    { name: "Markets", href: "/markets", icon: TrendingUp },
    { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
    { name: "Earn", href: "/earn", icon: Coins },
    { name: "News", href: "/news", icon: Newspaper },
  ];

  const categoryIcons: Record<string, any> = {
    crypto: Bitcoin,
    sports: Activity,
    politics: Building2,
    economy: LineChart,
    gaming: Gamepad2,
    culture: Palette,
    sentiment: TrendingDown,
  };

  return (
    <>
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#0A0A0A] border-r-2 border-[#2A1A2A] overflow-y-auto z-40 hidden lg:block">
        <div className="p-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="logo-container relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Oracle Network"
                width={32}
                height={32}
                className="w-8 h-8 logo-rotating"
                unoptimized
                priority
              />
              <div className="logo-shine-overlay"></div>
            </div>
            <span className="text-xl font-display font-black text-white tracking-tight">
              Oracle Network
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-2 mb-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#FF006E]/20 to-[#FF6B35]/20 border-2 border-[#FF006E]/50 text-white"
                      : "text-[#E0E0E0]/70 hover:bg-[#1A0A1A] hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-heading font-semibold">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Topics Section */}
          <div className="mb-8">
            <h3 className="text-xs font-mono font-semibold text-[#E0E0E0]/60 uppercase tracking-wider mb-4 px-4">
              Topics
            </h3>
            <div className="space-y-1">
              {marketCategories.map((category) => {
                const Icon = categoryIcons[category.id] || TrendingUp;
                return (
                  <Link
                    key={category.id}
                    href={`/markets?category=${category.id}`}
                    className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-[#1A0A1A] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#FF006E] group-hover:text-[#FF6B35] transition-colors" />
                      <span className="text-[#E0E0E0]/80 font-sans text-sm group-hover:text-white transition-colors">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-[#E0E0E0]/40 text-xs font-mono group-hover:text-[#E0E0E0]/60 transition-colors">
                      {category.count}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Start earning points Box */}
          <div className="bg-gradient-to-br from-[#FF006E]/20 to-[#FF6B35]/20 border-2 border-[#FF006E]/30 rounded-xl p-4 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-[#FF6B35]" />
              <span className="text-white font-heading font-bold text-sm">
                Start earning points!
              </span>
            </div>
            <p className="text-[#E0E0E0]/70 text-xs font-sans mb-3">
              Claim points every 24H.
            </p>
            <button
              onClick={() => setShowSignInModal(true)}
              className="w-full px-4 py-2 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-lg hover:opacity-90 transition-opacity font-heading font-bold text-sm"
            >
              Sign in to Claim
            </button>
          </div>

          {/* Footer Links */}
          <div className="space-y-3 pt-8 border-t-2 border-[#2A1A2A]">
            <Link
              href="/help"
              className="flex items-center gap-2 text-[#E0E0E0]/60 hover:text-white transition-colors text-sm font-sans"
            >
              <HelpCircle className="w-4 h-4" />
              Help & Feedback
            </Link>
            <Link
              href="/partner"
              className="flex items-center gap-2 text-[#E0E0E0]/60 hover:text-white transition-colors text-sm font-sans"
            >
              <Handshake className="w-4 h-4" />
              Partner with us
            </Link>
            <div className="flex items-center gap-2 text-[#E0E0E0]/40 text-xs font-sans">
              <Link href="/terms" className="hover:text-[#E0E0E0]/60 transition-colors">
                Terms of Use
              </Link>
              <span>·</span>
              <Link href="/privacy" className="hover:text-[#E0E0E0]/60 transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-[#E0E0E0]/40 text-xs font-sans">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </aside>

      {/* Sign-in Modal Trigger */}
      {showSignInModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowSignInModal(false)}
        >
          <div
            className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8 max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold text-white">Sign in</h2>
              <button
                onClick={() => setShowSignInModal(false)}
                className="text-[#E0E0E0]/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Wallet Options */}
              <div>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-[#0A0A0A] border-2 border-[#FF006E]/50 rounded-lg hover:border-[#FF6B35] transition-all text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-heading font-semibold">Phantom</span>
                      <span className="text-[#FF006E] text-xs font-mono">Recommended</span>
                    </div>
                  </button>
                  <button className="w-full px-4 py-3 bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-lg hover:border-[#FF006E]/30 transition-all text-left">
                    <span className="text-white font-heading font-semibold">Solflare</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-lg hover:border-[#FF006E]/30 transition-all text-left">
                    <span className="text-white font-heading font-semibold">MetaMask</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-[#0A0A0A] border-2 border-[#2A1A2A] rounded-lg hover:border-[#FF006E]/30 transition-all text-left">
                    <span className="text-white font-heading font-semibold">WalletConnect</span>
                  </button>
                </div>
              </div>

              {/* Right: Info */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF006E] to-[#FF6B35] rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Your gateway to the decentralized world
                </h3>
                <p className="text-[#E0E0E0]/70 font-sans mb-4">
                  Connect a wallet to get started
                </p>
                <Link
                  href="/help"
                  className="text-[#FF006E] hover:text-[#FF6B35] transition-colors font-sans text-sm"
                >
                  New to wallets?
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

