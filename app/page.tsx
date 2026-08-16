import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import CareersSkills from "@/components/careers-skills";
import AskMeSection from "@/components/ask-me/ask-me-section";
import ContactSection from "@/components/contact/contact-section";
import GSAPAnimations from "@/components/gsap-animations";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Global grid pattern — one consistent pitch behind every section */}
      <div className="line-grid pointer-events-none fixed inset-0 z-0 opacity-[0.025]" />

      <div className="relative z-10">
        <GSAPAnimations />
        
        <div id="home">
          <HeroSection />
        </div>
        <AboutMe />

        <Projects />

        <CareersSkills />

        <AskMeSection />

        <ContactSection />
      </div>
    </main>
  );
}
