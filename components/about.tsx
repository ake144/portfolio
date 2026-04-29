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
    <section className="w-full flex flex-col items-center justify-center py-20">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 gap-10 lg:grid-cols-2 items-start px-4">
        {/* Left: Intro card */}
        <div className="card relative overflow-hidden px-8 py-12">
          <Spotlight className="absolute -top-24 left-1/2 -translate-x-1/2" fill="rgba(37,99,235,0.12)" />
          <p className="badge">ABOUT</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold uppercase tracking-tight">Build. <span className="text-[var(--accent)]">Share.</span> Ship.</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            I design and ship software that feels sharp, fast, and useful. My focus sits at the intersection of product thinking, frontend craft, and backend systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="button">View Projects</Link>
            <Link href="/contact" className="button">Contact</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s) => <span key={s} className="badge">{s}</span>)}
          </div>
          <div className="mt-6">
            <div className="space-y-4 text-sm leading-[1.9] text-white/55">
              <p>
                I&apos;ve worked across React, Next.js, Node.js, TypeScript, Flutter, and related backend tooling to create interfaces and systems that hold up in production.
              </p>
              <p>
                I&apos;m currently a software developer at <LinkPreview url="https://m-pesa.safaricom.et/" imageSrc="/safari.png" isStatic className="underline">Safaricom Ethiopia</LinkPreview>, where I work on scalable fintech products, user experience, and reliable integrations.
              </p>
            </div>
            <div className="mt-6">
              <SocialButtons size="lg" className="gap-4" github="https://github.com/ake144" twitter="https://x.com/AkeTamirat94397" linkedin="https://www.linkedin.com/in/akeja/" />
            </div>
          </div>
        </div>

        {/* Right: Portrait & details */}
        <aside className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-black/60 p-3">
            <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-neutral-950">
              <PixelatedCanvas src="/avatar.jpg" width={600} height={600} cellSize={3} dotScale={0.9} shape="square" backgroundColor="#000000" interactive />
            </div>
            <div className="mt-3 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.3em] text-white/35">
              <span>Portrait / signal</span>
              <span className="flex items-center gap-1.5 text-white/60"><span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" /> Live profile</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {SKILLS.map((skill) => (
              <div key={skill} className="tag-pill justify-center py-2.5 text-center">{skill}</div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Based in</p>
            <p className="mt-1 text-sm font-medium text-white/70">Addis Ababa, Ethiopia</p>
            <p className="mt-0.5 text-[10px] text-white/30">Open to remote worldwide</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutMe;
