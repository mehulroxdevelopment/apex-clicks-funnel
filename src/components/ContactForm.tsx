import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "Your information has been submitted. We'll send you the Growth Framework shortly!",
      duration: 5000,
    });
    
    setIsSubmitting(false);
    setFormData({ firstName: "", email: "", phone: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Unlock your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">FREE</span>{" "}
            Growth Framework now before this comes down
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This Growth Framework reveals the most powerful, high-converting strategies we've uncovered after running 
            hundreds of campaigns across Real Estate, other industries, and investing millions in online traffic.
          </p>
        </div>

        {/* Form */}
        <div className="bg-card p-8 rounded-3xl shadow-elegant max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Enter your details below:
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                First name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="h-12 text-lg border-2 border-border focus:border-primary rounded-xl"
                placeholder="Enter your first name"
              />
              <p className="text-xs text-destructive">This field is required</p>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 text-lg border-2 border-border focus:border-primary rounded-xl"
                placeholder="Enter your email address"
              />
              <p className="text-xs text-destructive">Please enter a valid email address</p>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone number
              </Label>
              <div className="flex">
                <div className="flex items-center px-3 bg-muted border-2 border-r-0 border-border rounded-l-xl">
                  <span className="text-2xl">🇮🇳</span>
                </div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="h-12 text-lg border-2 border-l-0 border-border focus:border-primary rounded-l-none rounded-r-xl"
                  placeholder="Phone number"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              variant="cta" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full text-xl py-6 rounded-2xl mt-8 flex flex-col items-center"
            >
              {isSubmitting ? "Submitting..." : (
                <>
                  <span>Get the Growth Framework</span>
                  <span className="text-sm font-normal opacity-90 mt-1">
                    (Get FREE what costed us millions to find out)
                  </span>
                </>
              )}
            </Button>
          </form>
          
          {/* Privacy Notice */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mt-6">
            <Lock className="w-4 h-4" />
            <span className="text-sm">100% Privacy. No games, no spam.</span>
          </div>
        </div>
      </div>
    </section>
  );
};