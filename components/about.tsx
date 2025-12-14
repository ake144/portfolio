"use client";

import { PixelatedCanvas } from "./ui/pixelated-canvas";
import SocialButtons from "./ui/social-buttons";
import Link from "next/link";
import { MorphingText } from "@/components/ui/morphing-text"

const AboutMe = () => {
   const texts = [
  "Hello",
  "Aklilu Tamirat",
  "Software Developer",
  "Full-Stack",
  "Web",
  "Mobile",
  "Backend",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
]

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Header */}
      <div className="text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          About Me
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
          {/* Hello, I&apos;m Aklilu Tamirat */}
               Hello, I&apos;m 
          <MorphingText texts={texts} />
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-22 items-center lg:items-start">
        {/* Avatar */}
        <div className="mt-12 justify-center items-center shrink-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px]">
          <PixelatedCanvas
            src="/avatar.jpg"
            width={450}
            height={500}
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
            className="rounded-xl border border-neutral-800 shadow-lg w-full aspect-square"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <p className="text-base sm:text-lg leading-7 text-slate-300">
            I&apos;m a passionate and versatile software developer who loves building
            real-world solutions that solve meaningful problems. Over the past
            few years, I&apos;ve worked across Web, Mobile, and Backend development —
            crafting user-friendly interfaces, scalable systems, and tools that
            make everyday tasks simpler and more efficient.
          </p>

          <p className="text-base sm:text-lg leading-7 text-slate-300 mt-4">
            My core expertise includes modern JavaScript and its ecosystem —
            React, Next.js, Node.js, Express — alongside TypeScript, Python,
            Flutter, and Native Android/iOS development. I also enjoy working
            with databases, cloud services, and DevOps tooling, and I frequently
            explore new technologies such as Redis, Prisma, Supabase, Firebase,
            Docker, CI/CD pipelines, FastAPI, and system design patterns.
          </p>

          <p className="text-base sm:text-lg leading-7 text-slate-300 mt-4">
            Beyond app and web development, I&apos;m genuinely interested in building
            AI-powered tools that help students, job seekers, and everyday users
            be more productive. I&apos; ve worked on projects involving AI essay
            generation, job search platforms, note-taking apps, CMS automation,
            and intelligent frontend solutions using APIs, caching, modular
            architecture, and clean code principles.
          </p>

          <p className="text-base sm:text-lg leading-7 text-slate-300 mt-4">
            I&apos;m currently a software developer at{" "}
            <Link
              href="https://www.linkedin.com/company/african-fintech-hub/"
              className="underline text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Safaricom Ethiopia
            </Link>
            , where I work on building scalable fintech applications, improving
            user experiences, integrating secure systems, and contributing to
            high-impact digital solutions across the organization. It&apos;s been an
            exciting journey, and I&apos;m constantly growing in areas like mobile
            development, system architecture, testing, and DevOps.
          </p>

          <p className="text-base sm:text-lg leading-7 text-slate-300 mt-4">
            When I&apos;m not coding, you&apos;ll probably find me exploring new
            frameworks, researching innovative app ideas, hiking, reading, or
            diving into tech topics like offline-first systems, modular
            architecture, clean code patterns, and real-world problem solving.
          </p>

          {/* Social buttons */}
          <div className="flex justify-end lg:justify-end mt-4">
            <div className="rounded-2xl  p-3">
              <SocialButtons
                size="lg"
                className="gap-6"
                github="https://github.com/ake144"
                twitter="https://x.com/AkeTamirat94397"
                linkedin="https://www.linkedin.com/in/akeja/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
