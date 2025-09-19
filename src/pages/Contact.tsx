import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground">
            Get the{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Growth Framework
            </span>{' '}
            Now!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Claim Your FREE Growth Framework. The same proven system we use to help our clients book 50+ qualified appointments monthly.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12 border animate-scale-in [animation-delay:200ms]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;