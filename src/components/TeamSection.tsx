import teamImage from "@/assets/team-grid.png";

export const TeamSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-background overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center w-full">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-12 sm:mb-16 break-words px-2">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Our Team of Experts
          </span>
          <span className="text-foreground">.....</span>
        </h2>

        {/* Team Grid Image */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-elegant mx-2 sm:mx-0">
          <img 
            src={teamImage} 
            alt="Our team of experts organized by departments including Account Managers, Design, Sales, Operations, Tech, HR, Social Media, and Media Buyers"
            className="w-full h-auto transform hover:scale-105 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Team Description */}
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto px-2">
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Our diverse team of specialists brings decades of combined experience across every aspect of digital marketing, 
            from account management and creative design to technical implementation and media buying. Each department works 
            in perfect harmony to deliver the results that have generated millions in revenue for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};