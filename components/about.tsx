"use client";

import { ScrollPortrait } from "./three/scroll-portrait";
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
          <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-white/8 to-white/2 p-1 shadow-xl transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
            <div className="absolute left-4 top-4 z-10 font-mono text-[9px] font-semibold tracking-widest text-white/30">
              // Profile
            </div>
            <div className="absolute bottom-4 right-4 z-10 font-mono text-[9px] font-semibold tracking-widest text-primary/60">
              ACTIVE
            </div>
            <div className="aspect-square overflow-hidden bg-surface-1 rounded-lg">
              <ScrollPortrait src="/avatar1.png" alt="Aklilu Tamirat" />
            </div>
          </div>

          {/* Right: intro */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="mb-4 font-mono text-[9px] font-semibold uppercase tracking-widest text-primary/60">
                ✦ Who am I
              </p>
              <h2 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                Full-Stack{" "}
                <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Engineer
                </span>
                <br />
                <span className="text-white/50">&amp; AI Systems Builder</span>
              </h2>
            </div>

            <p className="max-w-xl border-l-2 border-primary/30 pl-5 text-base leading-relaxed text-white/60">
              4+ years shipping production systems used by 100K+ users. Specializing in full-stack development
              with React, Next.js, Node.js, and modern AI/LLM integration. Currently architecting fintech
              solutions at Safaricom Ethiopia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-lg border border-white/10 bg-white/5 p-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
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
        <div className="mt-20 space-y-12 border-t border-white/10 pt-16 sm:mt-24 sm:pt-20">
          <div>
            <h3 className="mb-8 font-display text-3xl font-bold text-white">
              My Philosophy & Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <div className="space-y-4 border-l-2 border-primary/30 pl-6 text-base leading-relaxed text-white/60">
              <p>
                I build across the full stack — React, Next.js, Node.js, TypeScript, FastAPI — and actively
                engineer AI systems using LangChain, LangGraph, RAG pipelines, and autonomous agents.
              </p>
              <p>
                I understand JavaScript internals deeply (async/await, closures, event loop, prototypes) and
                bring the same rigor to AI evaluation: reasoning validation, hallucination detection, and
                prompt engineering.
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-primary/30 pl-6 text-base leading-relaxed text-white/60">
              <p>
                I'm currently a software developer at{" "}
                <LinkPreview
                  url="https://m-pesa.safaricom.et/"
                  imageSrc="/safari.png"
                  isStatic
                  className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary/60"
                >
                  Safaricom Ethiopia
                </LinkPreview>
                , where I architect scalable fintech products, integrating LLM-powered features and
                robust backend services for millions of users.
              </p>
              <p>
                I believe great engineering means shipping fast, iterating based on real feedback, and
                never compromising on quality or user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
