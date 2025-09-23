import { Target, Users, Bot, Filter, TrendingUp, AlertTriangle, BarChart3, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "The #1 most effective way to capture your ideal prospect's attention",
    description: "and seamlessly guide them into your funnel—turning cold traffic into",
    highlight: "hot, ready-to-buy leads",
    additional: "faster than ever."
  },
  {
    icon: Users,
    title: "The secret formula to acquiring",
    highlight: "qualified leads",
    description: "that convert—without having to",
    highlight2: "cold call",
    additional: "thousands of people, or",
    highlight3: "paying outrageous fees",
    final: "to marketplace platforms like Zillow & Realtor."
  },
  {
    icon: Bot,
    title: "How you can implement",
    highlight: "AI Employees",
    description: "right now to",
    highlight2: "flood your calendar with leads and maximize conversions",
    additional: "(optional, but highly recommended)."
  },
  {
    icon: Filter,
    title: "How to structure a funnel that",
    highlight: "automatically filters out tire-kickers",
    description: "and attracts",
    highlight2: "only serious buyers",
    additional: "—so you stop wasting time on people who will never convert."
  },
  {
    icon: TrendingUp,
    title: "The little-known",
    highlight: "\"conversion amplifier\"",
    description: "technique that instantly",
    highlight2: "boosts your system's ROI",
    additional: "—no need to increase spend or traffic volume."
  },
  {
    icon: AlertTriangle,
    title: "Why most",
    highlight: "fail",
    description: "(and the one simple tweak that can turn your funnel into a high-converting, revenue-generating machine overnight)."
  },
  {
    icon: BarChart3,
    title: "The",
    highlight: "biggest mistakes",
    description: "that",
    highlight2: "crush conversion rates",
    additional: "& the",
    highlight3: "ability to scale",
    final: "—and how to avoid them like the plague."
  },
  {
    icon: CheckCircle,
    title: "The greatest secrets we've ever discovered—backed by",
    highlight: "millions in sales and thousands of real-world tests",
    description: "—so you can",
    highlight2: "scale with confidence."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-background overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight break-words px-2">
            Here's Just a Fraction of What<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>You'll Discover Inside<br className="hidden sm:block" />
            <span className="sm:hidden"> </span><span className="bg-gradient-primary bg-clip-text text-transparent">
              This Growth Framework...
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-6 sm:space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card shadow-card hover:shadow-elegant transition-smooth group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground break-words">
                  <span className="font-semibold">{feature.title}</span>
                  {feature.description && (
                    <>
                      {" "}{feature.description}{" "}
                      {feature.highlight && (
                        <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {feature.highlight}
                        </span>
                      )}
                      {feature.additional && (
                        <>
                          {" "}{feature.additional}
                          {feature.highlight2 && (
                            <>
                              {" "}
                              <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                                {feature.highlight2}
                              </span>
                            </>
                          )}
                          {feature.highlight3 && (
                            <>
                              {" "}{feature.additional}{" "}
                              <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                                {feature.highlight3}
                              </span>
                            </>
                          )}
                          {feature.final && <> {feature.final}</>}
                        </>
                      )}
                    </>
                  )}
                  {feature.highlight && !feature.description && (
                    <span className="font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {feature.highlight}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-accent rounded-xl sm:rounded-2xl text-white text-center mx-2 sm:mx-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">And much, much more!</h3>
        </div>
      </div>
    </section>
  );
};