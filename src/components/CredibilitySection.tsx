import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface CredibilitySectionProps {
  onCTAClick: () => void;
}

export const CredibilitySection = ({ onCTAClick }: CredibilitySectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-bg">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-black mb-8">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Who Are We to
          </span>
          <br />
          Make Such Claims?
        </h2>

        {/* Credibility Content */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground">
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
          
          <p className="text-xl font-bold">
            Click the button below to get instant access to these powerful strategies—and start building funnels that convert better, scale faster, and drive unstoppable growth.
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-4 pt-8">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCTAClick}
            className="text-xl md:text-2xl px-12 py-8 rounded-2xl"
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