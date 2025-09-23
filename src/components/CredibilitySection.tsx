import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface CredibilitySectionProps {
  onCTAClick: () => void;
}

export const CredibilitySection = ({ onCTAClick }: CredibilitySectionProps) => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gradient-bg overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 w-full">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 break-words px-2">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Who Are We to
          </span>
          <br />
          Make Such Claims?
        </h2>

        {/* Credibility Content */}
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-foreground px-2">
          <p>
            We've spent years testing, refining, and perfecting a high-ROI acquisition system across hundreds of industries—transforming traffic into predictable, scalable revenue.
          </p>
          
          <p>
            In that time, we've invested over <span className="font-bold text-primary">$30 million</span> in online traffic, conducted thousands of split tests, and uncovered the most powerful strategies for maximizing conversions, generating high-quality leads, and turning clicks into customers.
          </p>
          
          <p>
            The results? <span className="font-bold underline">This proven framework has helped real estate agents generate millions in sales—Billions, if we're talking outside of our own company as well.</span>
          </p>
          
          <p>
            Unlike generic marketing advice, these aren't theories. Every strategy inside this guide has been battle-tested in the real world, across countless industries and business models.
          </p>
          
          <p className="font-semibold">
            And for a limited time, we're giving you exclusive access to these high-impact, revenue-boosting secrets.
          </p>
          
          <p className="text-lg sm:text-xl font-bold">
            Click the button below to get instant access to these powerful strategies—and start building funnels that convert better, scale faster, and drive unstoppable growth.
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8 flex flex-col items-center w-full max-w-md mx-auto px-4">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCTAClick}
            className="text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 rounded-2xl min-h-[70px] sm:min-h-[80px] flex flex-col items-center justify-center w-full"
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