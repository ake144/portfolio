import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExperienceShowcase } from "@/components/exprience/showCase";

const Experience = () => {
      return (
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
                  <section className="grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
                        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
                              <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
                                    Experience
                              </p>
                              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] text-white sm:text-5xl lg:text-7xl">
                                    A timeline of teams, products, and delivery.
                              </h1>
                              <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
                                    A quick view of the roles and environments that shaped how I approach collaboration, quality, and shipping.
                              </p>
                        </div>

                        <div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 sm:p-8">
                              <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                                    Working style
                              </p>
                              <div className="mt-5 space-y-3 text-sm leading-7 text-white/65">
                                    <p>Product thinking first.</p>
                                    <p>Strong systems and clean execution.</p>
                                    <p>Interfaces that survive real usage.</p>
                              </div>
                              <Link
                                    href="/contact"
                                    className="mt-6 inline-flex items-center gap-2 border border-red-500/70 bg-red-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.35em] text-white transition hover:bg-red-400"
                              >
                                    Get in touch
                                    <ArrowRight className="h-4 w-4" />
                              </Link>
                        </div>
                  </section>

                  <div className="mt-10 sm:mt-14">
                        <ExperienceShowcase />
                  </div>
            </main>
      );
};

export default Experience;