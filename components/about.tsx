"use client";

import { PixelatedCanvas } from "./ui/pixelated-canvas";
import SocialButtons from "./ui/social-buttons";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";
import { Spotlight } from "./ui/spotlight";
import { ArrowRight } from "lucide-react";

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Node.js",
  "DevOps",
];

const AboutMe = () => {
  return (
    <section className="section-card relative overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      {/* Spotlight glow */}
      <Spotlight
        className="-top-24 left-6 md:-top-16 md:left-24"
        fill="rgba(220,38,38,0.38)"
      />

      {/* Faint dot grid backdrop */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

        {/* ── Left column ───────────────────────────────── */}
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="accent-line">About Me</p>
            <h2
              className="max-w-3xl text-balance"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                color: "white",
              }}
            >
              Build.{" "}
              <span className="gradient-text">Share.</span>{" "}
              Ship.
            </h2>
            <p className="max-w-2xl text-base leading-[1.85] text-white/60 sm:text-lg">
              I design and ship software that feels sharp, fast, and useful.
              My focus sits at the intersection of product thinking, frontend
              craft, and backend systems.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="glow-btn">
              Start a conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <LinkPreview
              url="/aklilu_tamirat_resume.pdf"
              imageSrc="/resume.png"
              isStatic
              className="ghost-btn"
            >
              View resume
            </LinkPreview>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04]">
            {[
              { num: "5+", label: "Years building" },
              { num: "Web", label: "Mobile & Backend" },
              { num: "Fintech", label: "Shipping at scale" },
            ].map(({ num, label }) => (
              <div
                key={num}
                className="bg-black/50 px-4 py-5 transition hover:bg-white/[0.04]"
              >
                <p
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {num}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/35">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="space-y-4 text-sm leading-[1.9] text-white/55 sm:text-base">
            <p>
              I&apos;ve worked across React, Next.js, Node.js, TypeScript,
              Flutter, and related backend tooling to create interfaces and
              systems that hold up in production.
            </p>
            <p>
              I&apos;m currently a software developer at{" "}
              <LinkPreview
                url="https://m-pesa.safaricom.et/"
                imageSrc="/safari.png"
                isStatic
                className="border-b border-red-400/60 text-red-300 transition hover:text-red-200"
              >
                Safaricom Ethiopia
              </LinkPreview>
              , where I work on scalable fintech products, user experience,
              and reliable integrations.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m usually exploring new
              systems, reading, hiking, or refining the details that make
              interfaces feel intentional.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-1">
            <SocialButtons
              size="lg"
              className="gap-4"
              github="https://github.com/ake144"
              twitter="https://x.com/AkeTamirat94397"
              linkedin="https://www.linkedin.com/in/akeja/"
            />
          </div>
        </div>

        {/* ── Right column ──────────────────────────────── */}
        <div className="space-y-5">
          {/* Portrait */}
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-black/60 p-3">
            <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-neutral-950">
              <PixelatedCanvas
                src="/avatar.jpg"
                width={450}
                height={450}
                cellSize={3}
                dotScale={0.9}
                shape="square"
                backgroundColor="#000000"
                dropoutStrength={0.4}
                interactive
                distortionStrength={3}
                distortionRadius={80}
                distortionMode="swirl"
                followSpeed={0.2}
                jitterStrength={4}
                jitterSpeed={4}
                sampleAverage
                tintColor="#FFFFFF"
                tintStrength={0.2}
                className="aspect-square h-full w-full"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.3em] text-white/35">
              <span>Portrait / signal</span>
              <span className="flex items-center gap-1.5 text-white/60">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                Live profile
              </span>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="tag-pill justify-center py-2.5 text-center"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Location chip */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Based in</p>
            <p className="mt-1 text-sm font-medium text-white/70">
              Addis Ababa, Ethiopia
            </p>
            <p className="mt-0.5 text-[10px] text-white/30">Open to remote worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
