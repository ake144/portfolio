"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", link: "/#home" },
  { name: "Work", link: "/#work" },
  { name: "Experience", link: "/#experience" },
  { name: "Blog", link: "/#blog" },
  { name: "Contact", link: "/#contact" },
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md bg-red-600 text-xs font-bold text-white"
          >
            A
          </span>
          <span className="text-sm font-semibold tracking-tight leading-none">
            Aklilu
            <span className="block text-[9px] font-normal uppercase tracking-[0.3em] text-white/40">
              Tamirat
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="relative text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/blog"
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 transition hover:text-white/70"
          >
            Explore
          </Link>
          <button
            onClick={() => window.open("/aklilu_tamirat_resume.pdf", "_blank")}
            className="glow-btn !py-2 !px-5 text-[10px]"
          >
            View CV
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
              className="glow-btn w-full justify-center"
            >
              View CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
