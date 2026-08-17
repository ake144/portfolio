"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const STATUS_STEPS = ["Compiling", "Rendering", "Ready"];
const RADIUS = 34;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((i) => (i < STATUS_STEPS.length - 1 ? i + 1 : i));
    }, 400);

    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      gsap.set(".loader-item", { opacity: 0, y: 14 });
      gsap.set(ringRef.current, { strokeDashoffset: CIRCUMFERENCE });
      gsap.set(rootRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });

      tl.to(".loader-item", {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.06,
        ease: "power3.out",
      })
        .to(
          ringRef.current,
          { strokeDashoffset: 0, duration: 0.85, ease: "power2.out" },
          "<"
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
          "<"
        )
        .to(".loader-item", {
          opacity: 0,
          y: -10,
          duration: 0.28,
          stagger: 0.04,
          ease: "power2.in",
        })
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
        {/* Ring-wrapped monogram */}
        <div className="loader-item relative mb-7 flex h-20 w-20 items-center justify-center">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/8"
            />
            <circle
              ref={ringRef}
              cx="40"
              cy="40"
              r={RADIUS}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              className="text-primary"
            />
          </svg>
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground shadow-[0_0_30px_color-mix(in_oklch,var(--primary)_35%,transparent)]">
            A
          </span>
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
