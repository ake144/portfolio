import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExperienceShowcase } from "@/components/exprience/showCase";

const ExperienceSection = () => {
      return (
        <section className="w-full flex flex-col items-center justify-center py-20">
          <div className="card flex flex-col items-center text-center max-w-3xl mb-12">
            <p className="badge mb-4">EXPERIENCE</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-4 tracking-tight" style={{letterSpacing: '0.04em'}}>
              Teams, Products & Delivery
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mb-4">
              A quick view of the roles and environments that shaped how I approach collaboration, quality, and shipping.
            </p>
            <div className="w-full flex flex-col items-center mt-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45 mb-2">Working style</p>
              <ul className="space-y-2 text-sm leading-[1.8] text-white/65 mb-4">
                <li>Product thinking first.</li>
                <li>Strong systems and clean execution.</li>
                <li>Interfaces that survive real usage.</li>
              </ul>
              <Link href="/contact" className="button flex items-center gap-2">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-4xl">
            <ExperienceShowcase />
          </div>
          </section>
        );
};

export default ExperienceSection;