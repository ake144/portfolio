import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";

const FooterPage = () => {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black text-slate-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.14),transparent_30%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div className="space-y-6">
                        <p className="text-xs uppercase tracking-[0.35em] text-red-400/80">
                            Build with intent
                        </p>
                        <div className="h-[9rem] sm:h-[11rem]">
                            <TextHoverEffect text="Aklilu" />
                        </div>
                        <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                            Dark, fast, editorial interfaces for products that need clarity and momentum.
                        </p>
                    </div>

                    <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2">
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-white/40">Navigate</p>
                            <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
                                <Link href="/projects" className="transition hover:text-white">Projects</Link>
                                <Link href="/blog" className="transition hover:text-white">Writing</Link>
                                <Link href="/experience" className="transition hover:text-white">Experience</Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-white/40">Contact</p>
                            <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
                                <a href="mailto:tamiratake@gmail.com" className="transition hover:text-white">tamiratake@gmail.com</a>
                                <a href="/contact" className="transition hover:text-white">Start a project</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Aklilu Tamirat. All rights reserved.</p>
                    <p>Made with Next.js, Tailwind, and a dark grid system.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;