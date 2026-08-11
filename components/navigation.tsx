"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", link: "/#home", id: "home" },
  { name: "About", link: "/#about", id: "about" },
  { name: "Projects", link: "/#projects", id: "projects" },
  { name: "Experience", link: "/#experience", id: "experience" },
  { name: "Contact", link: "/#contact", id: "contact" },
];

export function NavbarItems() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/#home" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground transition-transform duration-300 group-hover:scale-105">
            A
          </span>
          <span className="hidden font-display text-[14px] font-semibold tracking-tight text-white sm:block">
            Aklilu Tamirat
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-white/2 px-1.5 py-1.5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "relative rounded-full px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200",
                active === item.id
                  ? "bg-white/8 text-white"
                  : "text-white/50 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/blog"
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-white"
          >
            Writing
          </Link>
          <button
            onClick={() => window.open("/aklilu_tamirat_resume.pdf", "_blank")}
            className="ghost-btn px-5! py-2.5! cursor-pointer"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/3 text-white/70 transition hover:border-white/25 hover:text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
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
        <div className="mx-4 mb-4 space-y-1 rounded-2xl border border-border bg-black/95 p-3 backdrop-blur-xl">
          {[...NAV_ITEMS, { name: "Writing", link: "/blog", id: "blog" }].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center rounded-xl px-4 py-3 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors",
                active === item.id ? "bg-white/6 text-white" : "text-white/70 hover:bg-white/4 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-2 border-t border-border pt-3">
            <button
              onClick={() => {
                setOpen(false);
                window.open("/aklilu_tamirat_resume.pdf", "_blank");
              }}
              className="glow-btn w-full cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
