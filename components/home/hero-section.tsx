"use client";

import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

const HeroSection = () => {
  return (
    <section className="relative h-[100dvh] w-full bg-black overflow-hidden flex items-center">
      
      {/* Background Pattern/Canvas */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none md:opacity-100 opacity-60">
        <div className="h-[80%] w-full max-w-4xl opacity-80 pointer-events-auto translate-y-12">
          <PixelatedCanvas
            src="/avatar.jpg"
            width={800}
            height={800}
            cellSize={3}
            dotScale={0.8}
            shape="square"
            backgroundColor="#000000"
            dropoutStrength={0.6}
            interactive
            distortionStrength={3}
            distortionRadius={100}
            distortionMode="swirl"
            followSpeed={0.15}
            jitterStrength={3}
            jitterSpeed={4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.0}
            className="h-full w-full object-contain mix-blend-lighten"
          />
        </div>
      </div>

      {/* Main typographic content */}
      <div className="relative z-10 w-full mx-auto max-w-screen-2xl px-6 sm:px-12 xl:px-24 flex flex-col md:flex-row items-center md:items-start justify-between h-full pointer-events-none">
        
        <div className="flex w-full md:pt-48 pt-32 justify-between flex-col md:flex-row gap-8 md:gap-0 h-full pb-32">
          
          {/* Left Column Text */}
          <div className="flex flex-col pointer-events-auto">
            <h1 
              className="text-white uppercase leading-[0.85] tracking-tighter"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 800 }}
            >
              Build<br/>
              Products<br/>
              That Last
            </h1>
            <p className="text-white/60 mt-8 text-sm sm:text-base leading-relaxed max-w-[280px]">
              Full-stack developer focused on building scalable products.
            </p>
          </div>

          {/* Right Column Text */}
          <div className="flex flex-col text-left md:text-right pointer-events-auto mt-auto md:mt-0 lg:mt-32">
            <h2 
              className="text-white uppercase leading-[0.85] tracking-tighter mix-blend-difference"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(3.5rem, 8vw, 7.5rem)", fontWeight: 800 }}
            >
              Creative<br/>
              Developer
            </h2>
          </div>

        </div>

      </div>

      {/* Bottom Left ID Badge */}
      <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 z-20 pointer-events-auto">
        <div className="rounded-[1.5rem] border border-white/20 bg-black/50 backdrop-blur-xl px-8 py-5 flex flex-col transition-all hover:bg-white/[0.05] hover:border-white/30 cursor-pointer">
          <span 
            className="text-white tracking-[0.15em] uppercase text-sm sm:text-[17px] font-bold" 
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Aklilu Tamirat
          </span>
          <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.25em] mt-2">
            Full Stack Developer
          </span>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
