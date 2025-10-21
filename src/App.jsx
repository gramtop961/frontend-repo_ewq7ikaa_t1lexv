import HeroSection from "./components/HeroSection";
import CodeShowcase from "./components/CodeShowcase";
import SocialProof from "./components/SocialProof";
import FooterCTA from "./components/FooterCTA";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] font-sans text-white">
      <HeroSection />
      <CodeShowcase />
      <SocialProof />
      <FooterCTA />
    </div>
  );
}

export default App;
