import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import ContactSection from "@/components/contact/contact-section";
import GSAPAnimations from "@/components/gsap-animations";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0c0c0c] selection:bg-[#a882ff] selection:text-black">
      {/* Global abstract grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[0]" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10">
        <GSAPAnimations />
        
        <div id="home">
          <HeroSection />
        </div>
        <AboutMe />

        <Projects />
        
        <ContactSection />
      </div>
    </main>
  );
}
