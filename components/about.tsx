"use client";

import { PixelatedCanvas } from "./ui/pixelated-canvas";
import SocialButtons from "./ui/social-buttons";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";
import { ArrowRight } from "lucide-react";

const SKILLS = [
  "TypeScript",
  "React_/_Next.js",
  "Node.js_/_FastAPI",
  "LangChain_/_RAG",
  "LLM_Evaluation",
  "Agentic_Workflows",
  "DevOps_/_Docker",
  "System_Design"
];

const AboutMe = () => {
  return (
    <section id="about" className="relative w-full bg-[#0c0c0c] text-[#e0e0e0] font-mono border-t border-[#222] pt-10">
      {/* Top Profile Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 border-b border-[#222]">
        {/* Left: Image */}
        <div className="border border-[#222] relative group">
          <div className="absolute top-4 left-4 text-[10px] text-gray-500 z-10 font-bold tracking-widest">COORD // X:1.00 Y:0.00</div>
          <div className="absolute bottom-4 right-4 text-[10px] text-gray-500 z-10 font-bold tracking-widest">[IMG_SYS_RDY]</div>
          <div className="aspect-square bg-[#0a0a0a] overflow-hidden p-[1px]">
            <PixelatedCanvas src="/avatar1.png" width={600} height={600} cellSize={3} dotScale={0.9} shape="square" backgroundColor="#000000" interactive />
          </div>
        </div>

        {/* Right: Intro */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-[10px] text-gray-500 tracking-[0.2em] font-bold uppercase pb-1 border-b border-[#333]">
              INITIATING PROFILE SEQUENCE
            </div>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-[7rem] font-serif text-white tracking-tight leading-[0.85] mb-8 uppercase">
            BUILDER<br />
            <span className="italic text-gray-500 text-5xl sm:text-6xl lg:text-[6rem] font-serif">&amp;</span> MAKER.
          </h2>
          <div className="pl-4 border-l-2 border-[#333]">
            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-md">
              Results-driven AI Engineer &amp; Full-Stack Developer with 4+ years of experience building scalable, production-grade web apps and LLM-powered systems. Proven track record shipping products used by 100,000+ users in fintech, EdTech &amp; e-commerce.
            </p>
          </div>
          <div className="mt-10">
            <SocialButtons size="md" className="gap-4 grayscale hover:grayscale-0 transition duration-300" github="https://github.com/ake144" twitter="https://x.com/AkeTamirat94397" linkedin="https://www.linkedin.com/in/akeja/" />
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#222]">
        <div className="md:col-span-1 border-b md:border-b-0 border-[#222] pb-8 md:pb-0">
          <h3 className="text-3xl font-serif text-white mb-6">The Philosophy</h3>
          <div className="border border-[#222] bg-[#111] p-3 text-[10px] text-[#a8e036] font-bold tracking-widest mt-8">
            &gt; EXECUTING PARADIGM_SHIFT.sh
          </div>
        </div>
        <div className="md:col-span-3 space-y-6 text-sm text-gray-400 leading-relaxed font-mono pl-0 md:pl-8">
          <p>
            I build across the full stack — React, Next.js, Node.js, TypeScript, FastAPI — and actively engineer AI systems using LangChain, LangGraph, RAG pipelines, and autonomous agents. I understand JavaScript internals deeply (async/await, closures, event loop, prototypes) and bring the same rigor to AI evaluation: reasoning validation, hallucination detection, and prompt engineering.
          </p>
          <p>
            I&apos;m currently a software developer at <LinkPreview url="https://m-pesa.safaricom.et/" imageSrc="/safari.png" isStatic className="text-white font-bold underline decoration-[#444] hover:decoration-white transition-colors">Safaricom Ethiopia</LinkPreview>, where I work on scalable fintech products, integrating LLM-powered features and robust backend services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
