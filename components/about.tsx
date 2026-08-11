"use client";

import { PixelatedCanvas } from "./ui/pixelated-canvas";
import SocialButtons from "./ui/social-buttons";
import { LinkPreview } from "./ui/link-preview";

const STATS = [
  { value: "4+", label: "Years experience" },
  { value: "100K+", label: "Users reached" },
  { value: "7", label: "Projects shipped" },
];

const AboutMe = () => {
  return (
    <section id="about" className="relative w-full border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow mb-14 sm:mb-16">
          <span>01</span>About
        </p>

        {/* Top: portrait + intro */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: image */}
          <div className="group relative border border-border">
            <div className="absolute left-4 top-4 z-10 font-mono text-[10px] font-bold tracking-widest text-white/35">
              COORD // X:1.00 Y:0.00
            </div>
            <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] font-bold tracking-widest text-primary/70">
              [IMG_SYS_RDY]
            </div>
            <div className="aspect-square overflow-hidden bg-surface-1 p-px">
              <PixelatedCanvas
                src="/avatar1.png"
                width={600}
                height={600}
                cellSize={3}
                dotScale={0.9}
                shape="square"
                backgroundColor="#000000"
                interactive
              />
            </div>
          </div>

          {/* Right: intro */}
          <div className="flex flex-col justify-center">
            <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
              Initiating profile sequence
            </p>
            <h2 className="mb-7 font-display text-6xl font-semibold uppercase leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Builder
              <br />
              <span className="text-white/35">&amp; maker.</span>
            </h2>
            <p className="max-w-md border-l-2 border-border pl-4 text-sm leading-relaxed text-white/50">
              Results-driven AI Engineer &amp; Full-Stack Developer with 4+ years of experience building
              scalable, production-grade web apps and LLM-powered systems. Proven track record shipping
              products used by 100,000+ users in fintech, EdTech &amp; e-commerce.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-7">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="stat-num">{stat.value}</p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <SocialButtons
                size="md"
                github="https://github.com/ake144"
                twitter="https://x.com/AkeTamirat94397"
                linkedin="https://www.linkedin.com/in/akeja/"
              />
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-border pt-16 sm:mt-24 sm:pt-20 md:grid-cols-4 md:gap-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold text-white">The Philosophy</h3>
            <div className="mt-7 border border-border bg-surface-1 p-3 font-mono text-[10px] font-bold tracking-widest text-primary/80">
              &gt; executing paradigm_shift.sh
            </div>
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-white/50 md:col-span-3 md:pl-8">
            <p>
              I build across the full stack — React, Next.js, Node.js, TypeScript, FastAPI — and actively
              engineer AI systems using LangChain, LangGraph, RAG pipelines, and autonomous agents. I
              understand JavaScript internals deeply (async/await, closures, event loop, prototypes) and
              bring the same rigor to AI evaluation: reasoning validation, hallucination detection, and
              prompt engineering.
            </p>
            <p>
              I&apos;m currently a software developer at{" "}
              <LinkPreview
                url="https://m-pesa.safaricom.et/"
                imageSrc="/safari.png"
                isStatic
                className="font-bold text-white underline decoration-white/25 underline-offset-4 transition-colors hover:decoration-primary"
              >
                Safaricom Ethiopia
              </LinkPreview>
              , where I work on scalable fintech products, integrating LLM-powered features and robust
              backend services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
