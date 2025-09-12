import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Banner */}
        <div className="bg-warning text-warning-foreground p-4 rounded-2xl shadow-card transform hover:scale-105 transition-smooth">
          <h2 className="text-lg md:text-xl font-bold">
            An open letter to every Real Estate Agent owner cold calling and depending on marketplaces like{" "}
            <span className="underline">Zillow & Realtor</span>
          </h2>
        </div>

        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-foreground">"Steal This Proven </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">'Acquisition System'</span>
            <span className="text-foreground"> to Book </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">50+ Qualified Appointments Monthly</span>
            <span className="text-foreground"> on Autopilot—w/o Cold Calls or Zillow's Outrageous Fees"</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
            Get our FREE Growth Framework to uncover a simple, scalable strategy for getting ready-to-buy leads
            on auto-pilot, without cold calling & paying for marketplaces...
          </p>
        </div>

        {/* CTA Button */}
        <div className="space-y-4">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCTAClick}
            className="text-xl px-12 py-6 rounded-2xl flex flex-col items-center"
          >
            <span>Get the Growth Framework</span>
            <span className="text-sm font-normal opacity-90 mt-1">
              (Get FREE what costed us millions to find out)
            </span>
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span className="text-sm">100% Privacy. No games, no spam.</span>
          </div>
        </div>
      </div>
    </section>
  );
};