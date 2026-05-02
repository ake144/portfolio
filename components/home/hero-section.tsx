"use client";

import { motion } from "motion/react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#080808] text-white overflow-hidden">

      {/* ── NAV ── */}
      <nav className="flex items-center justify-between px-8 md:px-10 py-4 border-b border-white/[0.07] bg-[#080808]/90 backdrop-blur-md sticky top-0 z-50">
        <a href="#" className="text-[13px] font-extrabold uppercase tracking-[0.06em] text-white no-underline">
          AK<span className="text-[#e03b2d]">.</span>
        </a>
        <div className="hidden md:flex gap-7">
          {["Work", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.14em] text-white/40 hover:text-white transition-colors no-underline"
            >
              {l}
            </a>
          ))}
        </div>
        <Link
          href="#contact"
          className="text-[11px] font-semibold uppercase tracking-[0.05em] px-4 py-2 rounded-md border border-white/[0.13] text-white hover:bg-white/[0.06] transition-colors"
        >
          Let&apos;s talk &rarr;
        </Link>
      </nav>

      {/* ── HERO SPLIT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] border-b border-white/[0.07]">

        {/* LEFT — Headline */}
        <div className="relative flex flex-col justify-center px-6 py-16 md:px-10 lg:px-12 border-b lg:border-b-0 lg:border-r border-white/[0.07]">

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-10 hidden lg:flex items-center gap-3">
            <span className="block w-7 h-px bg-[#e03b2d] opacity-50" />
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/30">
              Scroll to explore
            </span>
          </div>

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-[#22c55e] animate-pulse-dot flex-shrink-0" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/40">
              Full-Stack Engineer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-black uppercase leading-[0.88] tracking-[-0.045em] text-[clamp(52px,7vw,88px)] mb-7"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Build
            <br />
            <span
              className="italic font-normal text-[#e03b2d]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Products
            </span>
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(240,237,232,0.16)" }}
            >
              That
            </span>
            <br />
            Last.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="max-w-[340px] text-[14.5px] leading-[1.7] text-white/40 font-light mb-9 pl-[14px] border-l-2 border-[#e03b2d]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            Crafting scalable, fast software at the intersection of product
            thinking, frontend craft, and backend systems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 bg-[#e03b2d] text-white text-[12.5px] font-semibold tracking-[0.03em] px-6 py-[11px] rounded-md hover:opacity-85 hover:-translate-y-px transition-all"
            >
              View Work &rarr;
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-transparent text-white text-[12.5px] font-normal tracking-[0.03em] px-[22px] py-[11px] rounded-md border border-white/[0.13] hover:bg-white/[0.06] hover:border-white/[0.22] transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Identity highlights */}
        <motion.div
          className="flex flex-col justify-center px-6 py-16 md:px-10 lg:px-12 gap-7"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >

          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <div className="w-[68px] h-[68px] rounded-[14px] bg-[#141414] border border-white/[0.13] flex items-center justify-center text-[22px] font-black tracking-[-0.03em] text-[#e03b2d] flex-shrink-0">
              AK
            </div>
            <div>
              <p className="text-[17px] font-bold tracking-[-0.02em] mb-0.5">
                Ake Tamirat
              </p>
              <p className="text-[12px] text-white/40 uppercase tracking-[0.04em]">
                Software Developer
              </p>
            </div>
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-2 px-3 py-[6px] rounded-md border border-[#22c55e]/20 bg-[#22c55e]/[0.05] w-fit">
            <span className="w-[6px] h-[6px] rounded-full bg-[#22c55e] animate-pulse-dot flex-shrink-0" />
            <span className="text-[11px] text-[#22c55e]/80">
              Available for opportunities &mdash; remote worldwide
            </span>
          </div>

          {/* Short bio */}
          <p className="text-[13.5px] leading-[1.75] text-white/50 font-light">
            Currently building fintech products at{" "}
            <a
              href="https://m-pesa.safaricom.et/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-[3px] decoration-white/20 hover:decoration-white/50 transition-all"
            >
              Safaricom Ethiopia &nearr;
            </a>
            . Focused on React, Next.js, TypeScript, Flutter &amp; Node.js
            &mdash; shipping things that work in production.
          </p>

          {/* Mini stats */}
          <div className="flex rounded-[10px] border border-white/[0.07] overflow-hidden">
            {[
              { n: "4+", label: "Years shipping" },
              { n: "20+", label: "Projects built" },
              { n: "6", label: "Core skills" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 px-4 py-[14px] ${
                  i < 2 ? "border-r border-white/[0.07]" : ""
                }`}
              >
                <p className="text-[22px] font-black tracking-[-0.03em]">
                  {s.n.replace("+", "")}
                  {s.n.includes("+") && (
                    <span className="text-[#e03b2d]">+</span>
                  )}
                </p>
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/40 mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-[12px] text-white/40">
            <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e] flex-shrink-0" />
            Addis Ababa, Ethiopia &nbsp;&bull;&nbsp; Open to remote worldwide
          </div>

        </motion.div>
      </div>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden border-b border-white/[0.07] py-[9px]">
        <div
          className="flex whitespace-nowrap w-max"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {[
            "React","Next.js","TypeScript","Flutter","Node.js",
            "DevOps","PostgreSQL","Fintech","Docker","REST APIs",
            "React","Next.js","TypeScript","Flutter","Node.js",
            "DevOps","PostgreSQL","Fintech","Docker","REST APIs",
          ].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 text-[10px] uppercase tracking-[0.18em] text-white/35"
            >
              <span className="w-[3px] h-[3px] rounded-full bg-[#e03b2d] opacity-70 flex-shrink-0" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;