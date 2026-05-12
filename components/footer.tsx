import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
    { icon: Github, href: "https://github.com/ake144", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/AkeTamirat94397", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akeja/", label: "LinkedIn" },
];

const links = {
    NAVIGATE: [
        { name: "Home", href: "/#home" },
        { name: "Projects", href: "/#projects" },
        { name: "Experience", href: "/#experience" },
        { name: "Blog", href: "/#blog" },
    ],
    CONTACT: [
        { name: "tamiratake@gmail.com", href: "mailto:tamiratake@gmail.com" },
        { name: "Start a project", href: "/#contact" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/akeja/" },
    ],
};

const FooterPage = () => {
    return (
        <footer className="relative w-full bg-[#070707] text-[#e0e0e0] overflow-hidden pt-20 pb-10 border-t border-[#1a1a1a]">
            {/* Red glow at top edge */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[1px]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)" }}
            />
            <div
                className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[800px] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Top: brand + social */}
                <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-start sm:justify-between border-b border-[#1a1a1a] pb-16">
                    <div>
                        <Link
                            href="/#home"
                            className="flex items-center gap-4"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e52828] text-lg font-bold text-white shadow-[0_0_15px_rgba(229,40,40,0.4)]">
                                A
                            </span>
                            <span className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition-colors">
                                Aklilu Tamirat
                            </span>
                        </Link>
                        <p className="mt-6 max-w-sm text-sm text-[#888] font-serif leading-relaxed">
                            Building sharp, fast, editorial interfaces for products that need clarity and momentum.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#222] bg-[#0c0c0c] text-gray-500 transition hover:border-[#444] hover:bg-[#111] hover:text-white"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle: links grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Navigation Column */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#555] mb-8">
                            NAVIGATE
                        </p>
                        <ul className="space-y-4">
                            {links.NAVIGATE.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[15px] font-serif text-[#aaa] hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#555] mb-8">
                            CONTACT
                        </p>
                        <ul className="space-y-4">
                            {links.CONTACT.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[15px] font-serif text-[#aaa] hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Status / Availability card (Spans 2 columns) */}
                    <div className="md:col-span-2">
                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#555] mb-8">
                            STATUS
                        </p>
                        <div className="rounded-xl border border-[#1a1a1a] bg-[#0c0c0c] p-6 lg:p-8">
                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#10b981]">
                                    AVAILABLE FOR WORK
                                </span>
                            </div>
                            <p className="mt-5 text-[15px] font-serif leading-[1.8] text-[#888] max-w-md">
                                Currently open to full-time roles and select freelance projects. Based in Addis Ababa, open to remote.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex mt-8 items-center justify-center rounded bg-[#e52828] hover:bg-[#dc2626] transition-colors px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_14px_rgba(229,40,40,0.3)]"
                            >
                                GET IN TOUCH
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#1a1a1a] pt-8 sm:flex-row">
                    <p className="text-[12px] font-serif text-[#666]">
                        © 2026 Aklilu Tamirat. All rights reserved.
                    </p>
                    <p className="text-[12px] font-serif text-[#666]">
                        Built with Next.js · Three.js · Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;