import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, Star } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Success = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Success Message */}
        <ScrollAnimation animation="fade-up">
          <p className="text-lg md:text-xl text-blue-400 font-medium">
            Success! Here is the Battle-Tested Growth Framework we promised...
          </p>
        </ScrollAnimation>

        {/* Main Header */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-foreground">Copy and Paste This Proven </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">'Acquisition System'</span>
              <span className="text-foreground"> to Book </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">50+ Qualified Appointments Monthly</span>
              <span className="text-foreground"> on Autopilot—w/o Cold Calls or Zillow's Outrageous Fees...</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
              Watch this exclusive video to see exactly how we've helped real estate agents scale their business
            </p>
          </div>
        </ScrollAnimation>

        {/* Video Section */}
        <ScrollAnimation animation="scale-in" delay={400}>
          <div className="w-full">
            <div className="relative w-full max-w-5xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant bg-card border transform hover:scale-105 transition-smooth">
                <iframe 
                  src="https://drive.google.com/file/d/10HztjClVddR5HJOJXPIBoUUcfs-yRrHA/preview"
                  width="100%" 
                  height="100%" 
                  allow="autoplay"
                  className="w-full h-full"
                  title="Growth Framework Video"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Star Rating */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg font-semibold text-muted-foreground">
              Trusted by Top Real Estate Agents
            </p>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation animation="scale-in" delay={800}>
          <div className="space-y-4 flex flex-col items-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleBookingClick}
              className="text-xl px-8 py-6 rounded-2xl min-h-[80px] flex flex-col items-center justify-center transform hover:scale-105 transition-smooth"
            >
              <span>Claim your FREE 60-Minute 1:1 Strategy Session</span>
              <span className="text-base font-normal opacity-90">
                (Limited time offer - Book now!)
              </span>
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Be quick! Spots are almost gone for September</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Success;