import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const socials = [
    { icon: Github, href: "https://github.com/ake144", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/AkeTamirat94397", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akeja/", label: "LinkedIn" },
];

const links = {
    Navigate: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Experience", href: "/experience" },
        { name: "Blog", href: "/blog" },
    ],
    Contact: [
        { name: "tamiratake@gmail.com", href: "mailto:tamiratake@gmail.com" },
        { name: "Start a project", href: "/contact" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/akeja/" },
    ],
};

const FooterPage = () => {
    return (
        <footer className="relative overflow-hidden border-t border-white/[0.06]">
            {/* Red glow at top edge */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)" }}
            />
            <div
                className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(220,38,38,0.10) 0%, transparent 70%)" }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

                {/* Top: brand + social */}
                <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Link
                            href="/"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            className="flex items-center gap-2.5"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-bold text-white">
                                A
                            </span>
                            <span className="text-base font-semibold text-white">Aklilu Tamirat</span>
                        </Link>
                        <p className="mt-2 max-w-xs text-[11px] leading-6 text-white/40">
                            Building sharp, fast, editorial interfaces for products that need clarity and momentum.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                            >
                                <Icon className="h-3.5 w-3.5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle: links grid */}
                <div className="mt-12 grid gap-10 border-t border-white/[0.06] pt-10 sm:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(links).map(([group, items]) => (
                        <div key={group}>
                            <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">{group}</p>
                            <ul className="mt-4 space-y-2.5">
                                {items.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="group flex items-center gap-1 text-sm text-white/55 transition hover:text-white"
                                        >
                                            {item.name}
                                            <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition group-hover:opacity-100" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Availability card */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">Status</p>
                        <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                                <span className="text-xs uppercase tracking-[0.25em] text-emerald-400/80">
                                    Available for work
                                </span>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-white/55">
                                Currently open to full-time roles and select freelance projects. Based in Addis Ababa, open to remote.
                            </p>
                            <Link
                                href="/#contact"
                                className="glow-btn mt-4 inline-flex !py-2 !px-4 text-[10px]"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] text-white/30">
                        © 2026 Aklilu Tamirat. All rights reserved.
                    </p>
                    <p className="text-[11px] text-white/25">
                        Built with Next.js · Three.js · Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;