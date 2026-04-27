import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExperienceShowcase } from "@/components/exprience/showCase";

const ExperienceSection = () => {
      return (
            <div className="space-y-6">
                  {/* Top info cards */}
                  <div className="grid gap-5 lg:grid-cols-[1fr_0.60fr]">
                        <div className="section-card px-8 py-10">
                              <p className="accent-line">Timeline</p>
                              <h3
                                    className="mt-5 max-w-4xl text-balance text-white"
                                    style={{
                                          fontFamily: "'Space Grotesk', sans-serif",
                                          fontSize: "clamp(1.8rem, 4vw, 3rem)",
                                          fontWeight: 700,
                                          lineHeight: 0.95,
                                          letterSpacing: "-0.015em",
                                    }}
                              >
                                    Teams, products,
                                    <br />
                                    and delivery.
                              </h3>
                              <p className="mt-5 max-w-2xl text-base leading-[1.8] text-white/55 sm:text-lg">
                                    A quick view of the roles and environments that shaped how I
                                    approach collaboration, quality, and shipping.
                              </p>
                        </div>

                        <div className="section-card flex flex-col justify-between px-8 py-10">
                              <div>
                                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
                                          Working style
                                    </p>
                                    <ul className="mt-5 space-y-3 text-sm leading-[1.8] text-white/55">
                                          <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500/70" />
                                                Product thinking first.
                                          </li>
                                          <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500/70" />
                                                Strong systems and clean execution.
                                          </li>
                                          <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-500/70" />
                                                Interfaces that survive real usage.
                                          </li>
                                    </ul>
                              </div>
                              <Link
                                    href="/contact"
                                    className="glow-btn mt-8 self-start"
                              >
                                    Get in touch
                                    <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                        </div>
                  </div>

                  {/* Timeline showcase */}
                  <ExperienceShowcase />
            </div>
      );
};

export default ExperienceSection;