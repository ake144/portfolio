"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/** True when the visitor has asked the OS/browser to minimize motion.
 * useSyncExternalStore (not useState+useEffect) so reading it never trips
 * the "setState synchronously in an effect" rule — see components/three/
 * scroll-portrait.tsx for the original inline version of this pattern. */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
