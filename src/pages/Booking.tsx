import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const Booking = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-8 sm:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-8 order-1 lg:order-1">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-4 sm:mb-6 break-words">
                What's included in your{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Free Strategy Call
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                A quick 60-minute call to analyze your business and give you a detailed roadmap for applying the Growth Framework
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                    Discover exactly how our framework can{' '}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">scale you</span>{' '}
                    to the next level.
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                    Get a{' '}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">personalized strategy</span>{' '}
                    built specifically for your growth and success.
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                    Leverage{' '}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">proven methods</span>{' '}
                    to consistently outperform industry benchmarks.
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2 leading-tight">
                    Access{' '}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">expert insights</span>{' '}
                    and guidance to optimize your results at every stage.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Calendar */}
          <div className="w-full order-2 lg:order-2">
            <div className="bg-card rounded-xl sm:rounded-2xl shadow-elegant border p-2 sm:p-4">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/mehulroxbusinesss/free-strategy-session" 
                style={{ minWidth: '100%', height: '600px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;