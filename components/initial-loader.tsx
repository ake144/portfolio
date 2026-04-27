"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          // Optional: Trigger a custom event to start section animations
        }
      });

      tl.to(".loader-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2
      })
      .to(".loader-text", {
        opacity: 0,
        y: -50,
        duration: 0.6,
        ease: "power3.in",
        stagger: 0.1,
        delay: 0.5
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut"
      });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <div className="overflow-hidden">
        <h1 className="loader-text translate-y-[100%] opacity-0 text-4xl font-bold uppercase tracking-widest text-white sm:text-6xl">
          Loading
        </h1>
      </div>
      <div className="overflow-hidden mt-4">
        <p className="loader-text translate-y-[100%] opacity-0 text-sm uppercase tracking-[0.3em] text-white/50">
          Preparing the experience...
        </p>
      </div>
    </div>
  );
}
