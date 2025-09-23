import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      email: "",
      phone: ""
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter a valid email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return !newErrors.firstName && !newErrors.email;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "Redirecting you to your Growth Framework...",
      duration: 3000,
    });
    
    setIsSubmitting(false);
    
    // Navigate to success page after a brief delay
    setTimeout(() => {
      navigate('/success');
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8 w-full">
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
        <div className="bg-card p-8 rounded-3xl shadow-elegant max-w-2xl mx-auto">
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
                className={`h-12 text-lg border-2 rounded-xl ${errors.firstName ? 'border-destructive' : 'border-border focus:border-primary'}`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-xs text-destructive">{errors.firstName}</p>
              )}
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
                className={`h-12 text-lg border-2 rounded-xl ${errors.email ? 'border-destructive' : 'border-border focus:border-primary'}`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
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
              className="w-full text-xl py-6 rounded-2xl mt-8 min-h-[80px] flex flex-col items-center justify-center"
            >
              {isSubmitting ? "Submitting..." : (
                <>
                  <span>Get the Growth Framework</span>
                  <span className="text-base font-normal opacity-90">
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