"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroScene from "./three/hero-scene";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const STACK = [
  { key: "ai", value: "LangChain / RAG / Agents" },
  { key: "frontend", value: "React / Next.js" },
  { key: "backend", value: "Node.js / FastAPI" },
  { key: "mobile", value: "Flutter / React Native / Kotlin" },
  { key: "llm", value: "OpenAI / Anthropic" },
  { key: "db", value: "PostgreSQL / Vector DB" },
  { key: "devops", value: "Docker / AWS / CI-CD" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

// Rotates in the hero heading — prefix/highlight sit on the bold first
// line (highlight carries the gradient), suffix is the muted second line.
// Kept roughly length-matched so swapping between them doesn't jolt the
// layout below.
const ROLES = [
  { prefix: "Full-Stack", highlight: "Developer", suffix: "& AI Engineer" },
  { prefix: "Mobile App", highlight: "Developer", suffix: "Flutter · RN · Kotlin" },
  { prefix: "AI / LLM", highlight: "Engineer", suffix: "RAG · Agents · LangChain" },
  { prefix: "Cloud & DevOps", highlight: "Engineer", suffix: "Docker · AWS · CI/CD" },
];
const ROLE_INTERVAL_MS = 2000;

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const isFirstRoleRender = useRef(true);
  const reducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const role = ROLES[roleIndex];

  // Cycle the role every ROLE_INTERVAL_MS: fade the current one out, swap
  // the text once it's invisible, then the effect below fades the new one
  // back in. Reduced-motion visitors still get the rotation (it's useful
  // information, not just decoration) but as an instant swap, no motion.
  useEffect(() => {
    const interval = setInterval(() => {
      const el = roleRef.current;
      if (!el || reducedMotion) {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        return;
      }
      gsap.to(el, {
        opacity: 0,
        y: -16,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => setRoleIndex((i) => (i + 1) % ROLES.length),
      });
    }, ROLE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  // Fades the new role in — skipped on mount since the page-load entrance
  // animation below already handles the first reveal.
  useEffect(() => {
    if (isFirstRoleRender.current) {
      isFirstRoleRender.current = false;
      return;
    }
    const el = roleRef.current;
    if (!el || reducedMotion) return;
    gsap.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  }, [roleIndex, reducedMotion]);

  useEffect(() => {
    if (!containerRef.current) return;
    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.from(".hero-fade-in", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".hero-heading-word", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.1,
      });

      // Magnetic pull on the primary CTA — a small, contained attraction
      // toward the cursor within its own bounding box, resting back at 0.
      const btn = primaryBtnRef.current;
      if (btn) {
        const xTo = gsap.quickTo(btn, "x", { duration: 0.45, ease: "power3" });
        const yTo = gsap.quickTo(btn, "y", { duration: 0.45, ease: "power3" });
        const handleMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          xTo((e.clientX - (rect.left + rect.width / 2)) * 0.25);
          yTo((e.clientY - (rect.top + rect.height / 2)) * 0.25);
        };
        const handleLeave = () => {
          xTo(0);
          yTo(0);
        };
        btn.addEventListener("mousemove", handleMove);
        btn.addEventListener("mouseleave", handleLeave);
        cleanups.push(() => {
          btn.removeEventListener("mousemove", handleMove);
          btn.removeEventListener("mouseleave", handleLeave);
        });
      }

      // Holographic tilt on the code panel, same interaction language as
      // the About section's portrait card.
      const panel = panelRef.current;
      if (panel) {
        const rotateXTo = gsap.quickTo(panel, "rotateX", { duration: 0.6, ease: "power3" });
        const rotateYTo = gsap.quickTo(panel, "rotateY", { duration: 0.6, ease: "power3" });
        const handlePanelMove = (e: MouseEvent) => {
          const rect = panel.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          rotateYTo(px * 9);
          rotateXTo(-py * 9);
        };
        const handlePanelLeave = () => {
          rotateXTo(0);
          rotateYTo(0);
        };
        panel.addEventListener("mousemove", handlePanelMove);
        panel.addEventListener("mouseleave", handlePanelLeave);
        cleanups.push(() => {
          panel.removeEventListener("mousemove", handlePanelMove);
          panel.removeEventListener("mouseleave", handlePanelLeave);
        });
      }
    }, containerRef);

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-24"
    >
      {/* Soft base tone — the particle network below carries the rest of the atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/6 blur-[150px]" />

      <HeroScene />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — Hero content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Status badge */}
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

            {/* Main heading — role rotates every couple seconds, see ROLES above */}
            <div ref={roleRef} className="space-y-1">
              <div className="hero-heading-word">
                <h1 className="font-display text-6xl font-bold leading-[1.05] text-white sm:text-7xl md:text-8xl">
                  {role.prefix}{" "}
                  <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                    {role.highlight}
                  </span>
                </h1>
              </div>
              <div className="hero-heading-word">
                <h2 className="font-display text-5xl font-bold leading-[1.05] text-white/55 sm:text-6xl md:text-7xl">
                  {role.suffix}
                  <span className="animate-blink ml-1 inline-block h-[0.75em] w-[3px] translate-y-1 bg-primary align-middle" />
                </h2>
              </div>
            </div>

            {/* Description */}
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
                ref={primaryBtnRef}
                href="/#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-shadow duration-300 hover:shadow-[0_0_30px_color-mix(in_oklch,var(--primary)_40%,transparent)]"
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

          {/* Right column — Code window showcase, with a mouse-tracked 3D tilt */}
          <div
            className="hero-fade-in delay-300 hidden items-center justify-end lg:flex"
            style={{ perspective: "1200px" }}
          >
            <div
              ref={panelRef}
              className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition-colors duration-500 will-change-transform hover:border-primary/30 hover:bg-white/7"
            >
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
                  {"// Tech Stack"}
                </p>
                <div className="space-y-4">
                  {STACK.map((row) => (
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
