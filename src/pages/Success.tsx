import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 w-full">
        {/* Success Message */}
        <p className="text-base sm:text-lg md:text-xl text-blue-400 font-medium px-2">
          Success! Here is the Battle-Tested Growth Framework we promised...
        </p>

        {/* Main Header */}
        <div className="space-y-4 sm:space-y-6 w-full">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight break-words px-2">
            <span className="text-foreground">Copy and Paste This Proven </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">'Acquisition System'</span>
            <span className="text-foreground"> to Book </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">50+ Qualified Appointments Monthly</span>
            <span className="text-foreground"> on Autopilot—w/o Cold Calls or Zillow's Outrageous Fees...</span>
          </h1>
        </div>

        {/* Video Section */}
        <div className="w-full px-2 sm:px-0">
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant bg-card border">
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

        {/* CTA Section */}
        <div className="space-y-3 sm:space-y-4 flex flex-col items-center w-full max-w-md mx-auto px-4">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleBookingClick}
            className="text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 rounded-2xl min-h-[70px] sm:min-h-[80px] flex flex-col items-center justify-center w-full"
          >
            <span className="text-center leading-tight">Claim your FREE 60-Minute 1:1 Strategy Session</span>
          </Button>
          
          <p className="text-sm sm:text-base text-muted-foreground font-medium text-center">
            Be quick! Spots are almost gone for September
          </p>
        </div>
      </div>
    </section>
  );
};

export default Success;