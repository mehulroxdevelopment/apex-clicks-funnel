import React from 'react';

const Success = () => {
  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="max-w-6xl mx-auto space-y-8 w-full">
        {/* Success Message */}
        <p className="text-lg md:text-xl text-blue-400 font-medium">
          Success! Here is the Battle-Tested Growth Framework we promised...
        </p>

        {/* Main Header */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="text-foreground">Copy and Paste This Proven </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">'Acquisition System'</span>
            <span className="text-foreground"> to Book </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">50+ Qualified Appointments Monthly</span>
            <span className="text-foreground"> on Autopilot—w/o Cold Calls or Zillow's Outrageous Fees...</span>
          </h1>
        </div>

        {/* Video Section */}
        <div className="mt-12 w-full">
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant bg-card border">
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
      </div>
    </section>
  );
};

export default Success;