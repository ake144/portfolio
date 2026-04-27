"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
        },
      });

      // Initial state
      gsap.set(".loader-item", { opacity: 0, y: 20 });
      gsap.set(progressRef.current, { scaleX: 0 });

      tl.to(".loader-item", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      })
        .to(
          progressRef.current,
          {
            scaleX: 1,
            duration: 2.5,
            ease: "power2.inOut",
            onUpdate: function () {
              if (percentRef.current) {
                percentRef.current.textContent = Math.floor(this.progress() * 100).toString();
              }
            },
          },
          "-=0.5"
        )
        .to(".loader-item, .loader-progress-wrap", {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power3.in",
          stagger: 0.05,
        })
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
        });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808]"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-red-600/5 blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-red-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo mark */}
        <div className="loader-item mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-xl font-bold text-white shadow-[0_0_30px_rgba(220,38,38,0.3)]">
          A
        </div>

        <div className="overflow-hidden">
          <h1
            className="loader-item text-2xl font-bold uppercase tracking-[0.4em] text-white sm:text-3xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Aklilu Tamirat
          </h1>
        </div>

        <div className="overflow-hidden mt-3">
          <p className="loader-item text-[10px] uppercase tracking-[0.35em] text-white/30">
            Engineering Digital Excellence
          </p>
        </div>

        {/* Progress bar */}
        <div className="loader-progress-wrap mt-12 w-48 sm:w-64">
          <div className="flex justify-between mb-2">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">Loading System</span>
            <span className="text-[9px] font-mono text-white/40">
              <span ref={percentRef}>0</span>%
            </span>
          </div>
          <div className="h-[1px] w-full bg-white/5">
            <div
              ref={progressRef}
              className="h-full w-full origin-left bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="loader-item absolute bottom-12 text-[9px] uppercase tracking-[0.3em] text-white/10">
        Portfolio · 2026 · v2.0
      </div>
    </div>
  );
}
