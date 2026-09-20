"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const HeroConstellation = dynamic(() => import("./hero-constellation"), { ssr: false });

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

/** The hero's background particle network — mounted a tick after paint so
 * the WebGL setup never delays the hero's actual (LCP-critical) text and
 * CTAs, transparent and pointer-events-none so it never intercepts clicks,
 * and skipped entirely under prefers-reduced-motion. */
export default function HeroScene() {
  const pointerRef = useRef({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  useEffect(() => {
    if (reducedMotion) return;
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const handlePointerMove = (e: PointerEvent) => {
      pointerRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      {ready && <HeroConstellation pointerRef={pointerRef} />}
    </div>
  );
}
