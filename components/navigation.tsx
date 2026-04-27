"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "HOME", link: "/#home" },
  { name: "WORK", link: "/#work" },
  { name: "EXPERIENCE", link: "/#experience" },
  { name: "BLOG", link: "/#blog" },
  { name: "CONTACT", link: "/#contact" },
];

export function NavbarItems() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8,8,8,0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 sm:px-10 lg:px-16">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-black tracking-tighter text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          DEV_PORTFOLIO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-white"
            >
              {item.name}
              {item.name === "HOME" && (
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red-500" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <button
            onClick={() => window.open("/aklilu_tamirat_resume.pdf", "_blank")}
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-500 transition hover:text-red-400"
          >
            RESUME
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="overflow-hidden transition-all duration-400 md:hidden"
        style={{
          maxHeight: open ? "480px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div
          className="mx-4 mb-4 space-y-1 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="flex items-center rounded-xl px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-3 border-t border-white/10 pt-3">
            <button
              onClick={() => {
                setOpen(false);
                window.open("/aklilu_tamirat_resume.pdf", "_blank");
              }}
              className="w-full py-3 text-[11px] font-bold uppercase tracking-[0.28em] text-red-500"
            >
              RESUME
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

