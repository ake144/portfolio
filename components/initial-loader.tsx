"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const STATUS_STEPS = ["Connecting", "Syncing", "Online"];

// A deterministic, hand-tuned scatter (not random — this renders identically
// every load) that reads as a small constellation around the mark, echoing
// the particle network in the hero rather than a generic loading spinner.
const RADIAL_NODES = [
  { angle: 8, radius: 78 },
  { angle: 42, radius: 88 },
  { angle: 78, radius: 74 },
  { angle: 118, radius: 92 },
  { angle: 152, radius: 80 },
  { angle: 188, radius: 86 },
  { angle: 222, radius: 76 },
  { angle: 258, radius: 90 },
  { angle: 298, radius: 82 },
  { angle: 334, radius: 94 },
];

const CENTER = 120;

const NODES = RADIAL_NODES.map(({ angle, radius }) => {
  const rad = (angle * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
});

const RIM_EDGES = NODES.map((_, i) => [i, (i + 1) % NODES.length] as const);

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((i) => (i < STATUS_STEPS.length - 1 ? i + 1 : i));
    }, 380);

    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      gsap.set(".loader-item", { opacity: 0, y: 14 });
      gsap.set(".loader-node", { opacity: 0, scale: 0, transformOrigin: "center" });
      gsap.set(".loader-spoke, .loader-rim", { strokeDashoffset: 1 });
      gsap.set(rootRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });

      tl.to(".loader-item", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.out",
      })
        .to(
          ".loader-node",
          { opacity: 1, scale: 1, duration: 0.35, stagger: 0.025, ease: "back.out(2.2)" },
          "<"
        )
        .to(
          ".loader-spoke",
          { strokeDashoffset: 0, duration: 0.7, stagger: 0.02, ease: "power2.out" },
          "<+=0.05"
        )
        .to(
          ".loader-rim",
          { strokeDashoffset: 0, duration: 0.6, stagger: 0.015, ease: "power1.out" },
          "<+=0.1"
        )
        .to(
          counter,
          {
            value: 100,
            duration: 0.85,
            ease: "power2.out",
            onUpdate: () => {
              if (percentRef.current) {
                percentRef.current.textContent = Math.floor(counter.value).toString();
              }
            },
          },
          "<-=0.15"
        )
        .to(".loader-item", {
          opacity: 0,
          y: -10,
          duration: 0.26,
          stagger: 0.03,
          ease: "power2.in",
        }, "+=0.12")
        .set(rootRef.current, { pointerEvents: "none" })
        .to(
          rootRef.current,
          {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 0.55,
            ease: "power4.inOut",
          },
          "-=0.05"
        );
    }, rootRef);

    return () => {
      ctx.revert();
      clearInterval(statusInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="line-grid absolute inset-0 opacity-[0.025]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Constellation + monogram */}
        <div className="loader-item relative mb-7 h-40 w-40 sm:h-48 sm:w-48">
          <svg viewBox="0 0 240 240" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            {RIM_EDGES.map(([a, b]) => (
              <line
                key={`rim-${a}-${b}`}
                className="loader-rim text-white/10"
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke="currentColor"
                strokeWidth="1"
                pathLength={1}
                strokeDasharray={1}
              />
            ))}
            {NODES.map((n, i) => (
              <line
                key={`spoke-${i}`}
                className="loader-spoke text-primary/35"
                x1={CENTER}
                y1={CENTER}
                x2={n.x}
                y2={n.y}
                stroke="currentColor"
                strokeWidth="1"
                pathLength={1}
                strokeDasharray={1}
              />
            ))}
            {NODES.map((n, i) => (
              <circle
                key={`node-${i}`}
                className="loader-node text-primary"
                cx={n.x}
                cy={n.y}
                r={3.2}
                fill="currentColor"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground shadow-[0_0_30px_color-mix(in_oklch,var(--primary)_35%,transparent)]">
              A
            </span>
          </div>
        </div>

        {/* Counter */}
        <div className="loader-item flex items-baseline gap-1 font-display text-4xl font-semibold tabular-nums text-white sm:text-5xl">
          <span ref={percentRef}>0</span>
          <span className="text-base text-white/25">%</span>
        </div>

        {/* Status cycle */}
        <p className="loader-item mt-5 font-mono text-[10px] uppercase tracking-[0.35em] text-white/35">
          {STATUS_STEPS[statusIndex]}
        </p>
      </div>

      {/* Bottom info */}
      <div className="loader-item absolute bottom-12 font-mono text-[9px] uppercase tracking-[0.3em] text-white/10">
        Portfolio · {new Date().getFullYear()} · v2.1
      </div>
    </div>
  );
}
