import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { SocialProof } from "@/components/sections/SocialProof";
import { NewsPress } from "@/components/sections/NewsPress";
import { PredictionMarketsStory } from "@/components/sections/PredictionMarketsStory";
import { OracleNetwork } from "@/components/sections/OracleNetwork";
import { SystemStatus } from "@/components/sections/SystemStatus";
import { FeaturedEvents } from "@/components/sections/FeaturedEvents";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] relative">
      <Navigation />
      <Hero />
      <TrustBadges />
      <SocialProof />
      <NewsPress />
      <PredictionMarketsStory />
      <OracleNetwork />
      <SystemStatus />
      <FeaturedEvents />
      <Footer />
    </main>
  );
}
