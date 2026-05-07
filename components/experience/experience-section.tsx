import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExperienceShowcase } from "@/components/exprience/showCase";

const ExperienceSection = () => {
  return (
    <section className="w-full py-10 sm:py-14">
      <div className="mb-8 flex flex-col gap-4 border-l-2 border-l-blue-500/40 bg-linear-to-r from-blue-500/8 to-transparent px-6 py-6 sm:mb-10 sm:px-8">
        <p className="accent-line">SYS://XP</p>
        <h2
          className="text-balance text-white"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 0.96,
          }}
        >
          Experience — teams, products & delivery
        </h2>
        <div className="text-[10px] uppercase tracking-[0.4em] text-white/35">3 entries</div>
      </div>

      <div className="space-y-4">
        <div className="section-card overflow-hidden border-l-2 border-l-blue-500/30 shadow-lg shadow-blue-500/10">
          <div className="w-full">
            <ExperienceShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;