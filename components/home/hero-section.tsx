"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   Pixel-dot portrait canvas
───────────────────────────────────────── */
const PixelPortrait = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 220, cell = 4, dot = 0.72;
    canvas.width = W;
    canvas.height = H;

    const cols = Math.floor(W / cell);
    const rows = Math.floor(H / cell);

    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(0, 0, W, H);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cx = c * cell + cell / 2;
        const cy = r * cell + cell / 2;
        const nx = (c / cols) * 2 - 1;
        const ny = (r / rows) * 2 - 1;
        const dist = Math.sqrt(nx * nx + ny * ny);

        let density = 0;
        if (dist < 0.88) {
          const fy = ny + 0.05;
          if (Math.abs(nx) < 0.55 && fy > -0.7 && fy < 0.7) density = 0.42;
          if (Math.abs(nx) < 0.42 && fy > -0.55 && fy < 0.55) density = 0.62;

          const eyeL = Math.sqrt((nx + 0.22) ** 2 * 4 + (fy + 0.12) ** 2 * 9);
          const eyeR = Math.sqrt((nx - 0.22) ** 2 * 4 + (fy + 0.12) ** 2 * 9);
          if (eyeL < 0.55 || eyeR < 0.55) density = 0.88;
          if (eyeL < 0.28 || eyeR < 0.28) density = 1.0;

          const nose = Math.sqrt(nx * nx * 6 + (fy - 0.14) ** 2 * 10);
          if (nose < 0.38) density = Math.max(density, 0.72);

          const mouth = Math.sqrt(nx * nx * 3 + (fy - 0.36) ** 2 * 14);
          if (mouth < 0.42 && Math.abs(nx) < 0.28) density = Math.max(density, 0.78);

          if (ny < -0.38 && Math.abs(nx) < 0.62) density = 0.92;
          if (ny < -0.25 && Math.abs(nx) < 0.55) density = 0.82;

          if (fy > 0.42 && Math.abs(nx) < 0.28) density = Math.max(density, 0.48);
        }

        density *= Math.max(0, 1 - dist * 0.65);
        density = Math.min(1, density + (Math.random() - 0.5) * 0.06);

        if (Math.random() < density) {
          const alpha = 0.35 + density * 0.65;
          ctx.fillStyle = `rgba(240,237,232,${alpha.toFixed(2)})`;
          ctx.beginPath();
          ctx.arc(cx, cy, (cell * dot) / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="block w-full"
      style={{ imageRendering: "pixelated", aspectRatio: "1" }}
    />
  );
};

/* ─────────────────────────────────────────
   Schedule card (floating, like reference)
───────────────────────────────────────── */
const ScheduleCard = () => {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="w-[220px] border border-white/[0.13] rounded-[10px] bg-[#111] p-4"
    >
      <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white mb-2">
        ✨ Schedule a Call ✨
      </p>
      <p className="text-[11px] leading-[1.6] text-white/40 mb-3">
        Let&apos;s talk about your project and how I can help build something great.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setOpen(false)}
          className="flex-1 text-[11px] font-medium text-center py-[7px] rounded-[5px] border border-white/[0.08] text-white/40 bg-transparent cursor-pointer hover:bg-white/[0.04] transition-colors"
        >
          Cancel
        </button>
        <Link
          href="#contact"
          className="flex-1 text-[11px] font-bold text-center py-[7px] rounded-[5px] bg-white text-[#080808] cursor-pointer hover:bg-white/90 transition-colors"
        >
          Schedule
        </Link>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   Social icon components
───────────────────────────────────────── */
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 012.87-.39c.97 0 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z" />
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ─────────────────────────────────────────
   Main HeroSection
───────────────────────────────────────── */
const HeroSection = () => {
  return (
    <section className="relative w-full mt-10 bg-[#080808] text-white overflow-x-hidden">

      {/* ── Decorative column grid lines ── */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:grid grid-cols-[260px_1fr_260px]">
        <div className="border-r border-white/[0.05]" />
        <div />
        <div className="border-l border-white/[0.05]" />
      </div>

      {/* ── Crosshair markers (like reference) ── */}
      <div className="pointer-events-none absolute z-0 hidden lg:block" style={{ top: 72, left: 260 }}>
        <span className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-3.5 bg-white/20" />
        <span className="absolute top-1/2 -translate-y-1/2 left-0 h-px w-3.5 bg-white/20" />
      </div>
      <div className="pointer-events-none absolute z-0 hidden lg:block" style={{ top: 72, right: 260 }}>
        <span className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-3.5 bg-white/20" />
        <span className="absolute top-1/2 -translate-y-1/2 left-0 h-px w-3.5 bg-white/20" />
      </div>

      {/* ── NAV ── */}
      {/* <nav className="relative z-20 grid grid-cols-[1fr] lg:grid-cols-[260px_1fr_260px] items-center border-b border-white/[0.07] bg-[#080808]/95 backdrop-blur-sm sticky top-0">
       
        <div className="flex items-center px-5 py-4 lg:px-6">
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-white/[0.13] flex items-center justify-center text-[13px] font-black text-[#e03b2d] tracking-[-0.04em] no-underline"
          >
            AK
          </a>
        </div>

               <div className="hidden lg:flex justify-center py-4">
          <div className="inline-flex gap-0.5 bg-[#111] border border-white/[0.07] rounded-lg p-1">
            {["About", "Projects", "Articles", "Contact"].map((item, i) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-[12px] px-4 py-1.5 rounded-md transition-all no-underline ${
                  i === 0
                    ? "bg-white/[0.06] text-white"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex justify-end px-6 py-4">
          <button className="w-8 h-8 rounded-full border border-white/[0.08] bg-transparent flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all cursor-pointer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </nav> */}

      {/* ── Spacer row with column lines ── */}
      <div className="relative z-0 hidden lg:grid grid-cols-[260px_1fr_260px] border-b border-white/[0.07] h-16">
        <div className="border-r border-white/[0.05]" />
        <div />
        <div className="border-l border-white/[0.05]" />
      </div>

      {/* ── Main content row ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] border-b border-white/[0.07] min-h-[520px]">

        {/* LEFT sidebar — stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:flex flex-col gap-0 px-6 py-9 border-r border-white/[0.05]"
        >
          {/* Section tag */}
          <div className="inline-flex items-center border border-white/[0.07] rounded-md overflow-hidden w-fit mb-8">
            <span className="text-[11px] font-semibold text-white/40 px-2.5 py-[5px] border-r border-white/[0.07] font-mono">01</span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-white/40 px-3 py-[5px]">Hero</span>
          </div>

          {/* Stats */}
          <div className="flex flex-col divide-y divide-white/[0.06] mb-auto">
            {[
              { n: "4+", label: "Years shipping" },
              { n: "20+", label: "Projects built" },
              { n: "6", label: "Core technologies" },
            ].map(({ n, label }) => (
              <div key={label} className="py-4">
                <p className="text-[26px] font-black tracking-[-0.04em] leading-none">
                  {n.replace("+", "")}
                  {n.includes("+") && <span className="text-[#e03b2d]">+</span>}
                </p>
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/35 mt-1.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="mt-6 pt-5 border-t border-white/[0.06]">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/30 mb-2">Based in</p>
            <div className="flex items-center gap-1.5 text-[11px] text-white/40">
              <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e] flex-shrink-0 animate-[pulse_2.2s_ease-in-out_infinite]" />
              Addis Ababa, Ethiopia
            </div>
            <p className="text-[11px] text-white/20 mt-1 pl-[13px]">Open to remote worldwide</p>
          </div>
        </motion.div>

        {/* CENTER — headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="flex flex-col justify-center px-6 py-14 lg:px-12"
        >
          <h1
            className="font-black uppercase leading-[0.87] tracking-[-0.045em] mb-6"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(52px, 7vw, 82px)",
            }}
          >
            Build
            <br />
            <span
              className="not-italic font-normal text-[#e03b2d] normal-case"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
            >
              Products
            </span>
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(240,237,232,0.14)" }}
            >
              That
            </span>
            <br />
            Last.
          </h1>

          <p className="max-w-[360px] text-[14px] leading-[1.75] text-white/38 font-light mb-8 pl-[14px] border-l-2 border-[#e03b2d]">
            Full-stack engineer crafting scalable, fast software at the intersection of product thinking, frontend craft, and backend systems.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-10">
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 bg-[#e03b2d] text-white text-[12.5px] font-semibold tracking-[0.02em] px-5 py-[10px] rounded-[6px] no-underline hover:opacity-85 hover:-translate-y-px transition-all"
            >
              View Work →
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-transparent text-white text-[12.5px] tracking-[0.02em] px-5 py-[10px] rounded-[6px] border border-white/[0.13] no-underline hover:bg-white/[0.05] hover:border-white/[0.22] transition-all"
            >
              Get in Touch
            </Link>
          </div>

          {/* Identity strip */}
          <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
            <div className="w-9 h-9 rounded-[8px] bg-[#141414] border border-white/[0.12] flex items-center justify-center text-[11px] font-black text-[#e03b2d] flex-shrink-0">
              AK
            </div>
            <div>
              <p className="text-[13px] font-bold tracking-[-0.02em]">Ake Tamirat</p>
              <p className="text-[10px] text-white/35 uppercase tracking-[0.04em] mt-0.5">
                Software Developer · Safaricom Ethiopia
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT sidebar — portrait + socials */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hidden lg:flex flex-col gap-3 px-5 py-7 border-l border-white/[0.05]"
        >
          {/* Pixelated portrait */}
          <div className="rounded-[10px] border border-white/[0.07] overflow-hidden bg-[#0a0a0a]">
            <PixelPortrait />
            <div className="flex items-center justify-between px-3 py-2 border-t border-white/[0.06]">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">Portrait / signal</span>
              <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-[#22c55e]/70">
                <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e] animate-[pulse_2.2s_ease-in-out_infinite]" />
                Live
              </span>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-[#22c55e]/18 bg-[#22c55e]/[0.04] text-[11px] text-[#22c55e]/75">
            <span className="w-[5px] h-[5px] rounded-full bg-[#22c55e] flex-shrink-0 animate-[pulse_2.2s_ease-in-out_infinite]" />
            Available — open to opportunities
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-1.5 mt-1">
            {[
              { href: "https://github.com/ake144", label: "GitHub", Icon: GithubIcon },
              { href: "https://x.com/AkeTamirat94397", label: "Twitter", Icon: XIcon },
              { href: "https://www.linkedin.com/in/akeja/", label: "LinkedIn", Icon: LinkedinIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2.5 rounded-[7px] border border-white/[0.07] bg-white/[0.025] text-white/40 no-underline hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Icon />
                  <span className="text-[12px] text-white group-hover:text-white transition-colors">{label}</span>
                </div>
                <span className="text-[11px]">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Marquee ── */}
      <div className="relative z-10 overflow-hidden border-b border-white/[0.07] py-[10px]">
        <div
          className="flex whitespace-nowrap w-max"
          style={{ animation: "marqueeScroll 24s linear infinite" }}
        >
          {[
            "React", "Next.js", "TypeScript", "Flutter", "Node.js",
            "DevOps", "PostgreSQL", "Fintech", "Docker", "REST APIs",
            "React", "Next.js", "TypeScript", "Flutter", "Node.js",
            "DevOps", "PostgreSQL", "Fintech", "Docker", "REST APIs",
          ].map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 text-[10px] uppercase tracking-[0.18em] text-white/30"
            >
              <span className="w-[3px] h-[3px] rounded-full bg-[#e03b2d] opacity-60 flex-shrink-0" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Schedule card (floating bottom-right, like reference) ── */}
      <div className="relative z-20 flex justify-end px-6 -mt-1 pb-10 hidden lg:flex">
        <ScheduleCard />
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;