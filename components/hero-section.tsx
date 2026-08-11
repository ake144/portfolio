import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

const STACK = [
  { key: "ai", value: "LangChain / RAG / Agents" },
  { key: "frontend", value: "React / Next.js" },
  { key: "backend", value: "Node.js / FastAPI" },
  { key: "llm", value: "OpenAI / Anthropic" },
  { key: "db", value: "PostgreSQL / Vector DB" },
  { key: "devops", value: "Docker / AWS / CI-CD" },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-24">
      {/* Backdrop: soft glow (the grid layer comes from the page background) */}
      <div className="pointer-events-none absolute left-1/2 top-[-10%] z-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-primary/14 blur-[140px]" />

      {/* Ghost background word */}
      <div className="pointer-events-none absolute inset-x-0 top-[18%] z-0 flex justify-center opacity-[0.05] select-none">
        <h1 className="whitespace-nowrap text-center font-display text-[16vw] font-bold uppercase leading-none tracking-tighter">
          SYSTEMS
        </h1>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left column */}
        <div className="animate-fade-up flex flex-col justify-center lg:col-span-8">
          <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/7 px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/90">
                Available for new projects
              </span>
            </span>
            <span className="font-mono text-[11px] text-white/35">Addis Ababa · Remote</span>
          </div>

          <h2 className="font-display text-[13vw] font-semibold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Building
          </h2>
          <h2 className="font-display text-[13vw] font-semibold uppercase italic leading-[0.92] tracking-tight text-white/40 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Scalable
          </h2>
          <h2 className="mb-6 font-display text-[13vw] font-semibold uppercase leading-[0.92] tracking-tight text-white sm:mb-8 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Systems.
          </h2>

          <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/50 sm:mb-10 sm:text-base">
            Full-stack developer &amp; AI engineer with 4+ years shipping production-grade web apps and
            LLM-powered systems — React, Next.js, Node.js, FastAPI, LangChain, and RAG pipelines. Products
            used by 100,000+ users across fintech, EdTech &amp; e-commerce.
          </p>

          <div className="flex max-w-xl flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-8">
            <Link href="/#projects" className="glow-btn">
              View Projects
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/#contact" className="ghost-btn">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right column — code window */}
        <div className="animate-fade-up delay-200 hidden items-center justify-end lg:col-span-4 lg:flex">
          <div className="w-full max-w-sm rounded-lg border border-border bg-surface-1/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm">
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-[10px] text-white/25">stack.json</span>
            </div>
            {/* Window content */}
            <div className="p-6">
              <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Core_Stack
              </p>
              <div className="space-y-3 font-mono text-[13px]">
                {STACK.map((row, i) => (
                  <div key={row.key}>
                    <span className="text-primary/85">&quot;{row.key}&quot;</span>
                    <span className="text-white/70">: &quot;{row.value}&quot;{i < STACK.length - 1 ? "," : ""}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        href="/#about"
        aria-label="Scroll to about section"
        className="pointer-events-auto absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/25 transition-colors hover:text-white/60 sm:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-float" />
      </Link>
    </section>
  );
};

export default HeroSection;
