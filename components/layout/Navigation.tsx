"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  const { publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWalletClick = () => {
    if (publicKey) {
      disconnect();
    } else {
      setVisible(true);
    }
  };

  const navLinks = [
    { name: "Markets", href: "/markets" },
    { name: "Create Event", href: "/create-event" },
    { name: "My Predictions", href: "/predictions" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b-2 border-[#2A1A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="logo-container">
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
            <Link href="/" className="text-lg font-display font-black text-white tracking-tight">
              Oracle Network
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#E0E0E0]/80 hover:text-white transition-colors text-xs font-heading font-semibold uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleWalletClick}
              className="px-5 py-2.5 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-xl hover:opacity-90 transition-opacity text-xs font-heading font-bold shadow-xl shadow-[#FF006E]/30 border-2 border-[#FF006E]/50"
            >
              {publicKey
                ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`
                : "Connect Wallet"}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-[#1A0A1A] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t-2 border-[#2A1A2A]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#E0E0E0]/80 hover:text-white transition-colors font-heading font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleWalletClick();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-xl hover:opacity-90 transition-opacity text-left font-heading font-bold"
              >
                {publicKey
                  ? `${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`
                  : "Connect Wallet"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

