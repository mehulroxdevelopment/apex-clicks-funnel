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
    <section className="py-20 px-4 bg-gradient-bg">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Countdown Timer */}
        <div className="space-y-8">
          <div className="flex justify-center gap-4 md:gap-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-gradient-primary text-white rounded-2xl p-4 md:p-6 shadow-elegant">
                  <div className="text-3xl md:text-5xl font-black">
                    {formatTime(value)}
                  </div>
                </div>
                <div className="text-sm md:text-base text-muted-foreground mt-2 uppercase tracking-wide">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Message */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get The Growth Framework
            </span>
            <br />
            Before This Page Comes Down.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This FREE Framework reveals the most explosively powerful secrets we discovered running literally thousands 
            of campaigns in 100+ different industries and niches and spending millions of dollars in traffic.
          </p>
        </div>

        {/* Final CTA */}
        <div className="space-y-4">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCTAClick}
            className="text-xl md:text-2xl px-12 py-8 rounded-2xl animate-pulse"
          >
            Get the Growth Framework
            <br />
            <span className="text-base font-normal opacity-90">
              (Get Free what costed us millions to find out)
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