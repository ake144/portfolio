import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import ContactSection from "@/components/contact/contact-section";
import GSAPAnimations from "@/components/gsap-animations";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="relative bg-[#0c0c0c] min-h-screen">
      <GSAPAnimations />
      
      <div id="home">
        <HeroSection />
      </div>
      <AboutMe />

      <Projects />
      
      <ContactSection />
      
    </main>
  );
}
