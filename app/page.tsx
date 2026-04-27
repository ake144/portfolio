import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import { BlogList } from "@/components/blog/blog-list";
import { getAllPosts } from "@/lib/blog";
import { HeroWheelScene } from "@/components/home/hero-wheel-scene";
import ExperienceSection from "@/components/experience/experience-section";
import ContactSection from "@/components/contact/contact-section";
import GSAPAnimations from "@/components/gsap-animations";

export default function Home() {
  const featuredPosts = getAllPosts().slice(0, 3);

  return (
    <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <GSAPAnimations />
      
      <section id="home" className="relative min-h-[92vh] overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 px-6 pt-8 shadow-[0_35px_120px_rgba(0,0,0,0.58)] sm:px-8 lg:px-10">
        <HeroWheelScene />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(255,255,255,0.1),transparent_34%),radial-gradient(circle_at_84%_8%,rgba(120,130,170,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_22%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:92px_92px] opacity-25" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">Portfolio systems</p>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-white/65 md:flex">
            <Link href="/contact" className="transition hover:text-white">Philosophy</Link>
            <Link href="/contact" className="transition hover:text-white">Craft</Link>
            <Link href="/contact" className="transition hover:text-white">Innovation</Link>
          </div>
        </div>

        <div className="relative z-10 grid gap-10 pb-10 pt-10 lg:grid-cols-[150px_1fr_230px] lg:pt-14">
          <aside className="hidden space-y-24 lg:block">
            <div>
              <p className="text-xs text-white/45">01</p>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/85">Philosophy</p>
            </div>
            <div>
              <p className="text-xs text-white/45">02</p>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/85">Craft</p>
            </div>
            <div>
              <p className="text-xs text-white/45">03</p>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/85">Innovation</p>
            </div>
          </aside>

          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Welcome</p>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold uppercase leading-[0.88] text-white sm:text-6xl lg:text-7xl">
              The Evolution
              <br />
              Of Performance
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-sm uppercase tracking-[0.24em] text-white/55 sm:text-base">
              Three-dimensional storytelling and modern engineering craft for ambitious digital products.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white transition hover:border-white/45"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white/75 transition hover:border-white/30 hover:text-white"
              >
                Start project
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Signal</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Product-first execution.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Range</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Web, mobile, and backend systems.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Outcome</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Interfaces that feel premium and perform.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-8">
        <AboutMe />
      </section>

      <section id="work" className="mt-12 space-y-5 sm:mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
              Featured work
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Selected projects and product builds.
            </h2>
          </div>
        </div>
        <Projects />
      </section>

      <section id="experience" className="mt-12 space-y-5 sm:mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
                Background
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Experience
                </h2>
            </div>
        </div>
        <ExperienceSection />
      </section>

      <section id="blog" className="mt-12 space-y-5 sm:mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
              Latest writing
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Notes on craft, systems, and product thinking.
            </h2>
          </div>
        </div>
        <BlogList posts={featuredPosts} />
      </section>

      <section id="contact" className="mt-12 space-y-5 sm:mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
                Get In Touch
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Contact
                </h2>
            </div>
        </div>
        <ContactSection />
      </section>

    </main>
  );
}
