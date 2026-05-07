import AboutMe from "./about";

const HeroSection = () => {
  return (
    <section className="w-full py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AboutMe />
      </div>
    </section>
  );
};

export default HeroSection;