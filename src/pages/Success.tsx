import React from 'react';

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Success Message */}
          <p className="text-muted-foreground text-lg">
            Success! Here is the Battle-Tested Growth Framework we promised...
          </p>

          {/* Main Header */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Copy and Paste This Proven{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              'Acquisition System'
            </span>{' '}
            to Book 50+ Qualified Appointments Monthly on Autopilot—w/o Cold Calls or Zillow's Outrageous Fees...
          </h1>

          {/* Video Section */}
          <div className="mt-12">
            <div className="relative w-full max-w-4xl mx-auto">
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
      </div>
    </div>
  );
};

export default Success;