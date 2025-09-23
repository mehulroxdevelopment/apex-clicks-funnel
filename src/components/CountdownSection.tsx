import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface CountdownSectionProps {
  onCTAClick: () => void;
}

export const CountdownSection = ({ onCTAClick }: CountdownSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 24 hours from now
    const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-bg overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 w-full">
        {/* Countdown Timer */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 px-2">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-gradient-primary text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-elegant">
                  <div className="text-xl sm:text-3xl md:text-5xl font-black">
                    {formatTime(value)}
                  </div>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-muted-foreground mt-2 uppercase tracking-wide">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Message */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black break-words px-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get The Growth Framework
            </span>
            <br />
            Before This Page Comes Down.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            This FREE Framework reveals the most explosively powerful secrets we discovered running literally thousands 
            of campaigns in 100+ different industries and niches and spending millions of dollars in traffic.
          </p>
        </div>

        {/* Final CTA */}
        <div className="space-y-3 sm:space-y-4 flex flex-col items-center w-full max-w-md mx-auto px-4">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCTAClick}
            className="text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 rounded-2xl min-h-[70px] sm:min-h-[80px] animate-pulse flex flex-col items-center justify-center w-full"
          >
            <span className="text-center">Get the Growth Framework</span>
            <span className="text-sm sm:text-base font-normal opacity-90 text-center leading-tight">
              (Get Free what costed us millions to find out)
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