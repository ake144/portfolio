"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ThreeHeroScene } from "./three-hero-scene";

/* ── Tiny animated counter ──────────────────────────────────── */
function Counter({
    end,
    suffix = "",
}: {
    end: number;
    suffix?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        let start = 0;
        const step = end / 48;
        const timer = setInterval(() => {
            start = Math.min(start + step, end);
            if (ref.current) ref.current.textContent = Math.floor(start) + suffix;
            if (start >= end) clearInterval(timer);
        }, 28);
        return () => clearInterval(timer);
    }, [end, suffix]);
    return (
        <span ref={ref} className="tabular-nums">
            0{suffix}
        </span>
    );
}

/* ── Status badge ───────────────────────────────────────────── */
function StatusBadge() {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/60 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
            Open to opportunities
        </div>
    );
}

/* ── Scrolling tech marquee ─────────────────────────────────── */
const TECHS = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Three.js",
    "Flutter",
    "PostgreSQL",
    "Redis",
    "Docker",
    "DevOps",
    "Tailwind",
    "Prisma",
];

function TechMarquee() {
    const items = [...TECHS, ...TECHS]; // duplicate for seamless loop
    return (
        <div className="pointer-events-none mt-12 overflow-hidden border-t border-b border-white/[0.06] py-3">
            <div className="marquee-track">
                {items.map((t, i) => (
                    <span
                        key={i}
                        className="mx-6 text-[10px] uppercase tracking-[0.35em] text-white/30 transition-colors hover:text-white/60"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

/* ── Main Hero ──────────────────────────────────────────────── */
export function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-[100svh] overflow-hidden"
            style={{ isolation: "isolate" }}
        >
            {/* Three.js parallax scrollable avatar background */}
            <ThreeHeroScene />

            {/* Dark overlay gradient so text stays readable */}
            <div
                className="pointer-events-none absolute inset-0 z-[1]"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.40) 45%, rgba(8,8,8,0.88) 100%)",
                }}
            />

            {/* Subtle top-left radial accent */}
            <div
                className="pointer-events-none absolute -left-32 -top-32 z-[1] h-[500px] w-[500px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 70%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/[0.07] py-5">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
                        Portfolio · 2026
                    </span>
                    <StatusBadge />
                    <div className="hidden items-center gap-6 md:flex">
                        {["Work", "Experience", "Blog"].map((l) => (
                            <Link
                                key={l}
                                href={`/#${l.toLowerCase()}`}
                                className="text-[10px] uppercase tracking-[0.3em] text-white/50 transition hover:text-white"
                            >
                                {l}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main centred content */}
                <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
                    {/* Eyebrow */}
                    <p className="accent-line mb-8 animate-fade-up opacity-0">
                        Full-Stack Engineer &amp; Product Builder
                    </p>

                    {/* Heading */}
                    <h1
                        className="animate-fade-up delay-100 mx-auto max-w-5xl text-balance opacity-0"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(3rem, 8vw, 6.5rem)",
                            fontWeight: 700,
                            lineHeight: 0.89,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        <span className="gradient-text block">Engineering</span>
                        <span className="block text-white">Products That</span>
                        <span className="gradient-text block">Actually Ship.</span>
                    </h1>

                    {/* Sub-copy */}
                    <p
                        className="animate-fade-up delay-200 mx-auto mt-8 max-w-2xl text-balance text-sm leading-[1.9] text-white/55 opacity-0 sm:text-base"
                    >
                        I design and build fast, editorial interfaces and robust backend
                        systems — from fintech at scale to open-source design systems.
                        Sharp craft, clear product thinking.
                    </p>

                    {/* CTAs */}
                    <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center justify-center gap-3 opacity-0">
                        <Link href="/#work" className="glow-btn">
                            See my work
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <Link href="/#contact" className="ghost-btn">
                            Start a project
                        </Link>
                    </div>

                    {/* Stats */}
                    <div
                        className="animate-fade-up delay-400 mt-14 grid grid-cols-3 opacity-0 divide-x divide-white/10"
                    >
                        {[
                            { end: 5, suffix: "+", label: "Years experience" },
                            { end: 20, suffix: "+", label: "Projects shipped" },
                            { end: 5, suffix: "K+", label: "Users served" },
                        ].map(({ end, suffix, label }) => (
                            <div key={label} className="px-8 text-center first:pl-0 last:pr-0">
                                <p className="stat-num">
                                    <Counter end={end} suffix={suffix} />
                                </p>
                                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/35">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech marquee */}
                <TechMarquee />

                {/* Scroll hint */}
                <div className="flex justify-center py-6">
                    <a
                        href="/#about"
                        className="group flex flex-col items-center gap-1.5 text-[9px] uppercase tracking-[0.4em] text-white/30 transition hover:text-white/60"
                    >
                        Scroll
                        <ChevronDown className="h-3.5 w-3.5 animate-float" />
                    </a>
                </div>
            </div>
        </section>
    );
}
