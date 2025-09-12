import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { TeamSection } from "@/components/TeamSection";
import { CountdownSection } from "@/components/CountdownSection";

const Index = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCTAClick={handleCTAClick} />
      <FeaturesSection />
      <CredibilitySection onCTAClick={handleCTAClick} />
      <TeamSection />
      <CountdownSection onCTAClick={handleCTAClick} />
    </div>
  );
};

export default Index;
