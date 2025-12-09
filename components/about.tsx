"use client";

import { PixelatedCanvas } from "./ui/pixelated-canvas";
import SocialButtons from "./ui/social-buttons";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      {/* Header */}
      <div className="text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About Me</p>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
          Hello, I&apos;m Aklilu Tamirat
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
        {/* Avatar */}
        <div className="flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
          <PixelatedCanvas
            src="/avatar.jpg"
            width={400}
            height={400}
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

        {/* Bio */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <p className="text-base sm:text-lg leading-7 text-slate-300">
            A passionate developer with a love for creating innovative solutions.
            With expertise in JavaScript and its frameworks like React, Next.js,
            Node.js, Express, Python, and other technologies. I enjoy building
            applications that make a difference and involve day-to-day problem solving.
          </p>

          <p className="text-base sm:text-lg leading-7 text-slate-300">
            When I&apos;m not coding, you can find me exploring new technologies or
            indulging in my hobbies like hiking, reading, exploring nature, and
            trying to do some research.
          </p>

          <p className="text-base sm:text-lg leading-7 text-slate-300">
            I&apos;m currently a software developer at{" "}
            <Link
              href="https://www.linkedin.com/company/african-fintech-hub/"
              className="underline text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Safaricom Ethiopia
            </Link>{" "}
            where I work on building scalable web applications and improving user
            experiences on fintech solutions. It&apos;s been an exciting journey so far,
            and I&apos;m eager to continue growing and contributing to impactful projects
            in the Fintech Industry.
          </p>

          {/* Social buttons */}
          <div className="flex justify-center lg:justify-start mt-4">
            <div className="rounded-2xl bg-white/5 p-3">
              <SocialButtons
                size="lg"
                className="gap-6"
                github="https://github.com/ake144"
                twitter="https://twitter.com/your-handle"
                linkedin="https://www.linkedin.com/in/your-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
