"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 border-[#2A1A2A] bg-[#0A0A0A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-heading font-bold mb-4">PLATFORM</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#E0E0E0]/70 hover:text-white transition-colors text-sm font-sans">Home</Link></li>
              <li><Link href="/markets" className="text-[#E0E0E0]/70 hover:text-white transition-colors text-sm font-sans">Markets</Link></li>
              <li><Link href="/create-event" className="text-[#E0E0E0]/70 hover:text-white transition-colors text-sm font-sans">Create Event</Link></li>
              <li><Link href="/how-it-works" className="text-[#E0E0E0]/70 hover:text-white transition-colors text-sm font-sans">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-heading font-bold mb-4">LEGAL & PRIVACY</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-[#E0E0E0]/70 hover:text-white transition-colors text-sm font-sans">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-[#E0E0E0]/70 hover:text-white transition-colors text-sm font-sans">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-heading font-bold mb-4">COMMUNITY</h3>
            <div className="flex gap-4">
              <a href="#" className="text-[#E0E0E0]/70 hover:text-[#FF006E] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-heading font-bold mb-4">STAY IN THE LOOP</h3>
            <p className="text-[#E0E0E0]/70 text-sm mb-4 font-sans">Join our mailing list for oracle updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-lg text-white placeholder-[#E0E0E0]/40 focus:outline-none focus:border-[#FF006E]/50 text-sm"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-[#FF006E] to-[#FF6B35] text-white rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#2A1A2A] pt-8 flex justify-between items-center">
          <p className="text-[#E0E0E0]/60 text-sm font-sans">© 2025 Oracle Network. All rights reserved. v1.0.0</p>
          <p className="text-[#E0E0E0]/60 text-sm font-mono">support@oraclenetwork.io</p>
        </div>
      </div>
    </footer>
  );
}

