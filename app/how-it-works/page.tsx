import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/sections/Footer";
import { NetworkGraph } from "@/components/ui/NetworkGraph";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-12 tracking-tight text-center">
            How It Works
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8">
              <div className="text-4xl mb-4">1</div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">Create Event</h2>
              <p className="text-[#E0E0E0]/70 font-sans">
                Create a prediction market event with multiple outcomes. The oracle network will track and resolve it.
              </p>
            </div>
            <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8">
              <div className="text-4xl mb-4">2</div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">Place Predictions</h2>
              <p className="text-[#E0E0E0]/70 font-sans">
                Users place predictions on different outcomes. Odds adjust dynamically based on market activity.
              </p>
            </div>
            <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8">
              <div className="text-4xl mb-4">3</div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">Oracle Resolution</h2>
              <p className="text-[#E0E0E0]/70 font-sans">
                When the event ends, the decentralized oracle network resolves the outcome and distributes winnings.
              </p>
            </div>
          </div>

          <div className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-2xl p-8 h-96 mb-12">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Oracle Network Architecture</h2>
            <NetworkGraph animated={true} className="w-full h-full" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

