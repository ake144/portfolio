"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PortraitCanvas = dynamic(() => import("./portrait-canvas"), { ssr: false });

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

interface ScrollPortraitProps {
  src: string;
  alt: string;
  /** Shown on the reverse of the card mid-flip. Defaults to `alt`. */
  name?: string;
  role?: string;
  className?: string;
}

/** Wraps the WebGL portrait scene with progressive enhancement: a static
 * <Image> renders immediately, and the animated 3D canvas only mounts once
 * the section nears the viewport (IntersectionObserver) and the visitor
 * hasn't asked for reduced motion. Scroll progress comes from GSAP
 * ScrollTrigger — the same library already driving section reveals — scrubbed
 * so the portrait slides into place as the section scrolls into view and
 * reverses cleanly on scroll-up. */
export function ScrollPortrait({ src, alt, name, role = "Full-Stack & AI Engineer", className }: ScrollPortraitProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!ready || reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

    // A generous range: the first slice plays the drop-in entrance, the rest
    // is scroll distance for the 3D card to complete its flip — tied 1:1 to
    // scroll position so it reverses cleanly on scroll-up.
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      end: "bottom 10%",
      scrub: 0.8,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      pointerRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      };
    };
    const handlePointerLeave = () => {
      pointerRef.current = { x: 0, y: 0 };
    };

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      trigger.kill();
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [ready, reducedMotion]);

  return (
    <div ref={containerRef} className={cn("relative h-full w-full", className)}>
      {ready && !reducedMotion ? (
        <PortraitCanvas
          src={src}
          name={name ?? alt}
          role={role}
          progressRef={progressRef}
          pointerRef={pointerRef}
        />
      ) : (
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover" priority />
      )}
    </div>
  );
}
