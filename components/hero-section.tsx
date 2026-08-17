"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const STACK = [
  { key: "ai", value: "LangChain / RAG / Agents" },
  { key: "frontend", value: "React / Next.js" },
  { key: "backend", value: "Node.js / FastAPI" },
  { key: "llm", value: "OpenAI / Anthropic" },
  { key: "db", value: "PostgreSQL / Vector DB" },
  { key: "devops", value: "Docker / AWS / CI-CD" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered entrance for hero elements
      gsap.from(".hero-fade-in", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Subtle text reveal for main heading
      gsap.from(".hero-heading-word", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-24"
    >
      {/* Dynamic gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Ghost background text */}
      <div className="pointer-events-none absolute inset-x-0 top-[15%] z-0 flex justify-center opacity-[0.03] select-none">
        <h1 className="whitespace-nowrap text-center font-display text-[18vw] font-bold uppercase leading-none tracking-tighter">
          EXCELLENCE
        </h1>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — Hero content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Status badge with enhanced design */}
            <div className="hero-fade-in">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/12 to-primary/5 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                  Open to opportunities
                </span>
              </div>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/40">
                Addis Ababa, Ethiopia · Available for contracts &amp; FT roles
              </p>
            </div>

            {/* Main heading with dynamic styling */}
            <div ref={textRef} className="space-y-2">
              <div className="hero-heading-word">
                <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
                  Full-Stack{" "}
                  <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
              </div>
              <div className="hero-heading-word">
                <h2 className="font-display text-4xl font-bold leading-tight text-white/60 sm:text-5xl md:text-6xl">
                  &amp; AI Engineer
                </h2>
              </div>
            </div>

            {/* Enhanced description */}
            <div className="hero-fade-in space-y-4">
              <p className="max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
                Shipping production systems with React, Next.js, Node.js, and LLM integrations. 4+ years building
                performant, scalable apps serving 100,000+ users across fintech, EdTech, and e-commerce.
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
            </div>

            {/* CTA Buttons */}
            <div className="hero-fade-in flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_color-mix(in_oklch,var(--primary)_40%,transparent)] hover:scale-105"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social links */}
            <div className="hero-fade-in flex items-center gap-1 pt-4">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group rounded-lg border border-white/10 p-2.5 text-white/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — Code window showcase */}
          <div className="hero-fade-in delay-300 hidden items-center justify-end lg:flex">
            <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-white/7">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                  <div className="h-3 w-3 rounded-full bg-white/20" />
                </div>
                <span className="font-mono text-xs text-white/30">stack.json</span>
              </div>
              {/* Window content */}
              <div className="p-6">
                <p className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  // Tech Stack
                </p>
                <div className="space-y-4">
                  {STACK.map((row, i) => (
                    <div key={row.key} className="group flex items-start gap-3">
                      <span className="shrink-0 font-mono text-xs text-primary/75 group-hover:text-primary">
                        →
                      </span>
                      <div className="flex-1">
                        <span className="font-mono text-sm font-semibold text-primary">
                          {row.key}
                        </span>
                        <span className="ml-2 font-mono text-xs text-white/50">
                          {row.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="/#about"
        aria-label="Scroll to about section"
        className="pointer-events-auto absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 transition-colors duration-300 hover:text-white/60 sm:flex"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </Link>
    </section>
  );
};

export default HeroSection;
