import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

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
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8 lg:sticky lg:top-8">
            <ScrollAnimation animation="fade-up">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
                What's included in your{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Free Strategy Call
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                A quick 60-minute call to analyze your business and give you a detailed roadmap for applying the Growth Framework
              </p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Discover exactly how our framework can{' '}
                      <span className="bg-gradient-primary bg-clip-text text-transparent">scale you</span>{' '}
                      to the next level.
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Get a{' '}
                      <span className="bg-gradient-primary bg-clip-text text-transparent">personalized strategy</span>{' '}
                      built specifically for your growth and success.
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Leverage{' '}
                      <span className="bg-gradient-primary bg-clip-text text-transparent">proven methods</span>{' '}
                      to consistently outperform industry benchmarks.
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Access{' '}
                      <span className="bg-gradient-primary bg-clip-text text-transparent">expert insights</span>{' '}
                      and guidance to optimize your results at every stage.
                    </h3>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Side - Calendar */}
          <ScrollAnimation animation="scale-in" delay={400}>
            <div className="w-full">
              <div className="bg-card rounded-2xl shadow-elegant border p-4">
                <div 
                  className="calendly-inline-widget" 
                  data-url="https://calendly.com/mehulroxbusinesss/free-strategy-session" 
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Booking;