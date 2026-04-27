"use client";

import { motion } from "motion/react";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#080808] text-white">
      {/* Main Grid Layout */}
      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* Left Section (Content) */}
        <div className="relative flex flex-1 flex-col justify-center px-6 pt-24 pb-12 sm:px-12 lg:px-20 lg:pt-0">
          {/* Vertical Scroll Text */}
          <div className="absolute bottom-12 left-6 hidden lg:block">
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-px bg-red-500/50" />
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/30 [writing-mode:vertical-lr] rotate-180">
                Scroll to explore
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-[clamp(3.5rem,11vw,9rem)] font-black uppercase leading-[0.82] tracking-tighter"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Build
                <br />
                Produc
                <br />
                ts
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
                >
                  That
                </span>
                <br />
                Last
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex items-start gap-4"
            >
              <div className="h-12 w-0.5 bg-red-500/60 mt-1" />
              <p className="max-w-xs text-sm leading-relaxed text-white/50 sm:text-base">
                Full-stack developer focused on building scalable products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <button className="glow-btn group !px-10 !py-4">
                View Work
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="ghost-btn !px-10 !py-4">
                Contact
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Section (Visuals) */}
        <div className="relative flex-1 border-l border-white/5 bg-[#0a0a0a] lg:min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/hero-bg.png"
              alt="Tech Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Version Info */}
          <div className="absolute top-8 right-8 text-[10px] font-mono tracking-widest text-white/20">
            v2.0.4
          </div>

          {/* Center Content */}
          <div className="relative flex h-full flex-col items-center justify-center p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10"
            >
              {/* Subtle glow behind text */}
              <div className="absolute inset-0 -z-10 blur-3xl bg-white/5 rounded-full" />

              <h2 className="text-3xl font-bold uppercase tracking-[0.35em] text-white/90 sm:text-5xl">
                Creative
                <br />
                Developer
              </h2>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-red-500/80">
                  System Online
                </span>
              </div>
            </motion.div>

            {/* Pixelated Canvas integrated element */}
            <div className="absolute inset-0 z-0 opacity-30">
              <PixelatedCanvas
                src="/avatar.jpg"
                width={1200}
                height={1200}
                cellSize={5}
                dotScale={0.5}
                shape="square"
                backgroundColor="transparent"
                dropoutStrength={0.85}
                interactive
                distortionStrength={2}
                distortionRadius={150}
                distortionMode="swirl"
                followSpeed={0.08}
                jitterStrength={1}
                jitterSpeed={2}
                sampleAverage
                tintColor="#FFFFFF"
                tintStrength={0.02}
                className="h-full w-full"
              />
            </div>
          </div>

          {/* Bottom Right Info */}
          <div className="absolute bottom-8 right-8 text-[10px] font-mono tracking-widest text-white/20">
            INT_09
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


