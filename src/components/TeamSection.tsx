import teamImage from "@/assets/team-grid.png";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

export const TeamSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Team of Experts
            </span>
            <span className="text-foreground">.....</span>
          </h2>
        </ScrollAnimation>

        {/* Team Grid Image */}
        <ScrollAnimation animation="scale-in" delay={200}>
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img 
              src={teamImage} 
              alt="Our team of experts organized by departments including Account Managers, Design, Sales, Operations, Tech, HR, Social Media, and Media Buyers"
              className="w-full h-auto transform hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </ScrollAnimation>

        {/* Team Description */}
        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our diverse team of specialists brings decades of combined experience across every aspect of digital marketing, 
              from account management and creative design to technical implementation and media buying. Each department works 
              in perfect harmony to deliver the results that have generated millions in revenue for our clients.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};