import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@/components/providers/WalletProvider";

// Using available fonts as fallback - Outfit and Bricolage Grotesque may not be available
const outfit = Poppins({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "700", "900"],
});

const bricolage = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "600", "700"],
});

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Oracle Network - Decentralized Prediction Markets",
  description: "Create, bet, and resolve prediction markets on the decentralized oracle network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${bricolage.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
