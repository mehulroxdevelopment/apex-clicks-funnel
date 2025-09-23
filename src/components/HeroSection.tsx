import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 w-full">
        {/* Header Banner */}
        <div className="bg-gradient-accent text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-card transform hover:scale-105 transition-smooth mx-auto max-w-4xl">
          <h2 className="text-sm sm:text-lg md:text-xl font-bold leading-tight">
            An open letter to every Real Estate Agent owner cold calling and depending on marketplaces like{" "}
            <span className="underline">Zillow & Realtor</span>
          </h2>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 sm:space-y-6 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight break-words">
            <span className="text-foreground">"Steal This Proven </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">'Acquisition System'</span>
            <span className="text-foreground"> to Book </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">50+ Qualified Appointments Monthly</span>
            <span className="text-foreground"> on Autopilot—w/o Cold Calls or Zillow's Outrageous Fees"</span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed px-2">
            Get our FREE Growth Framework to uncover a simple, scalable strategy for getting ready-to-buy leads
            on auto-pilot, without cold calling & paying for marketplaces...
          </p>
        </div>

        {/* CTA Button */}
        <div className="space-y-3 sm:space-y-4 flex flex-col items-center w-full max-w-md mx-auto px-4">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCTAClick}
            className="text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 rounded-2xl min-h-[70px] sm:min-h-[80px] flex flex-col items-center justify-center w-full"
          >
            <span className="text-center">Get the Growth Framework</span>
            <span className="text-sm sm:text-base font-normal opacity-90 text-center leading-tight">
              (Get FREE what costed us millions to find out)
            </span>
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span className="text-xs sm:text-sm">100% Privacy. No games, no spam.</span>
          </div>
        </div>
      </div>
    </section>
  );
};