import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const featuredPosts = getAllPosts().slice(0, 3);

  return (
    <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
            Portfolio network
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.9] text-white sm:text-5xl lg:text-7xl">
            Build. Share. <span className="text-red-400">Inspire.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
            A dark, fast, and highly structured portfolio inspired by editorial grids, high-contrast product cards, and the kind of interfaces that make work feel deliberate.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-red-500/70 bg-red-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition hover:bg-red-400"
            >
              View selected work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/25 hover:text-white"
            >
              Read writing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/25 hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.25rem] border border-white/10 bg-black/40 p-4">
              <p className="text-3xl font-semibold text-white">Web</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Interfaces
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-black/40 p-4">
              <p className="text-3xl font-semibold text-white">Mobile</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Products
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-black/40 p-4">
              <p className="text-3xl font-semibold text-white">Backend</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Systems
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
              Signal
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/68 sm:text-base">
              <p>
                I focus on work that is practical, maintainable, and visually sharp.
              </p>
              <p>
                The current direction leans into dark surfaces, red accents, and card-based layouts that feel closer to a product network than a traditional portfolio.
              </p>
              <p>
                Every section is meant to read quickly and still reward a closer look.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Focus areas
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70 sm:text-base">
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Product engineering</span>
                <span className="text-white/40">01</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-3">
                <span>Design systems</span>
                <span className="text-white/40">02</span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span>Shipping at scale</span>
                <span className="text-white/40">03</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <AboutMe />
      </section>

      <section className="mt-12 space-y-5 sm:mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
              Featured work
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Selected projects and product builds.
            </h2>
          </div>
          <Link href="/projects" className="text-sm uppercase tracking-[0.3em] text-white/50 transition hover:text-white">
            See all projects
          </Link>
        </div>
        <Projects />
      </section>

      <section className="mt-12 space-y-5 sm:mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
              Latest writing
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Notes on craft, systems, and product thinking.
            </h2>
          </div>
          <Link href="/blog" className="text-sm uppercase tracking-[0.3em] text-white/50 transition hover:text-white">
            Browse writing
          </Link>
        </div>
        <BlogList posts={featuredPosts} />
      </section>
    </main>
  );
}
