"use client";

import { PixelatedCanvas } from "./ui/pixelated-canvas";
import SocialButtons from "./ui/social-buttons";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";
import { Spotlight } from "./ui/spotlight";
import { ArrowRight } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10 lg:px-10">
      <Spotlight
        className="-top-24 left-6 font-mono md:-top-16 md:left-24"
        fill="rgba(239,68,68,0.45)"
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-red-400/90">
              About Me
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.9] text-white sm:text-5xl lg:text-7xl">
              Build. Share. Ship.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              I design and ship software that feels sharp, fast, and useful. My focus sits at the intersection of product thinking, frontend craft, and backend systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-red-500/70 bg-red-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition hover:bg-red-400"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <LinkPreview
              url="/aklilu_tamirat_resume.pdf"
              imageSrc="/resume.png"
              isStatic
              className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white/80 transition hover:border-white/25 hover:text-white"
            >
              View resume
            </LinkPreview>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
              <p className="text-3xl font-semibold text-white">5+</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Years building products
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
              <p className="text-3xl font-semibold text-white">Web</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Mobile and backend
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
              <p className="text-3xl font-semibold text-white">Fintech</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Shipping at scale
              </p>
            </div>
          </div>

          <div className="space-y-5 text-sm leading-7 text-white/70 sm:text-base">
            <p>
              I&apos;ve worked across React, Next.js, Node.js, TypeScript, Flutter, and related backend tooling to create interfaces and systems that hold up in production.
            </p>
            <p>
              I&apos;m currently a software developer at{" "}
              <LinkPreview
                url="https://m-pesa.safaricom.et/"
                imageSrc="/safari.png"
                isStatic
                className="border-b border-red-400/70 text-red-300 transition hover:text-red-200"
              >
                Safaricom Ethiopia
              </LinkPreview>
              , where I work on scalable fintech products, user experience, and reliable integrations.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m usually exploring new systems, reading, hiking, or refining the details that make interfaces feel intentional.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <SocialButtons
              size="lg"
              className="gap-4"
              github="https://github.com/ake144"
              twitter="https://x.com/AkeTamirat94397"
              linkedin="https://www.linkedin.com/in/akeja/"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/60 p-4">
            <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-neutral-950">
              <PixelatedCanvas
                src="/avatar.jpg"
                width={450}
                height={450}
                cellSize={3}
                dotScale={0.9}
                shape="square"
                backgroundColor="#000000"
                dropoutStrength={0.4}
                interactive
                distortionStrength={3}
                distortionRadius={80}
                distortionMode="swirl"
                followSpeed={0.2}
                jitterStrength={4}
                jitterSpeed={4}
                sampleAverage
                tintColor="#FFFFFF"
                tintStrength={0.2}
                className="aspect-square h-full w-full"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-white/45">
              <span>Portrait / signal</span>
              <span className="text-white/80">Live profile</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Flutter",
              "Node.js",
              "DevOps",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
