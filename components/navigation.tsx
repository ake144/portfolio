"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", link: "/#about" },
  { name: "Services", link: "/#services" },
  { name: "Tech", link: "/#tech" },
  { name: "Projects", link: "/#projects" },
  { name: "Experience", link: "/#experience" },
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
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(1.2)" : "none",
        borderBottom: scrolled ? "1px solid #222" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight text-white"
          style={{ fontFamily: "var(--font-main)" }}
        >
          PORTFOLIO
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="relative text-[13px] font-extrabold uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors px-2 py-1"
              style={{ fontFamily: "var(--font-main)" }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => window.open("/aklilu_tamirat_resume.pdf", "_blank")}
            className="button ml-4 border-2 border-[var(--accent)] text-[var(--accent)] font-bold uppercase tracking-[0.18em] px-6 py-2 bg-transparent hover:bg-[var(--accent)] hover:text-white transition"
            style={{ fontFamily: "var(--font-main)" }}
          >
            Download CV
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
        <div className="mx-4 mb-4 space-y-1 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="flex items-center rounded-xl px-4 py-3 text-[13px] uppercase tracking-[0.18em] text-white/80 hover:bg-white/5 hover:text-white font-extrabold"
              style={{ fontFamily: "var(--font-main)" }}
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
              className="button w-full border-2 border-[var(--accent)] text-[var(--accent)] font-bold uppercase tracking-[0.18em] px-6 py-2 bg-transparent hover:bg-[var(--accent)] hover:text-white transition"
              style={{ fontFamily: "var(--font-main)" }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

