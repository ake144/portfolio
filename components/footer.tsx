import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
    { icon: Github, href: "https://github.com/ake144", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/AkeTamirat94397", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akeja/", label: "LinkedIn" },
];

const links = {
    NAVIGATE: [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Experience", href: "/#experience" },
        { name: "Writing", href: "/blog" },
    ],
    CONNECT: [
        { name: "tamiratake@gmail.com", href: "mailto:tamiratake@gmail.com" },
        { name: "linkedin.com/in/akeja", href: "https://www.linkedin.com/in/akeja/" },
        { name: "github.com/ake144", href: "https://github.com/ake144" },
    ],
};

const FooterPage = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative w-full border-t border-border">
            <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col items-start lg:col-span-5 lg:pr-12">
                        <Link href="/#home" className="mb-8 flex items-center gap-2.5">
                            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-base font-bold text-primary-foreground">
                                A
                            </span>
                            <span className="font-display text-xl font-semibold tracking-tight text-white">
                                Aklilu Tamirat
                            </span>
                        </Link>

                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/45">
                            Building sharp, fast, editorial interfaces for products that need clarity and momentum.
                        </p>

                        <div className="mb-10 font-mono text-[11px] font-bold uppercase tracking-widest text-primary/80">
                            [sys.status: online]
                        </div>

                        <div className="mt-auto flex items-center gap-6">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-white/40 transition-colors hover:text-white"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column (Navigate) */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-6 border-b border-border pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                            Navigate
                        </h3>
                        <ul className="space-y-4">
                            {links.NAVIGATE.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-primary">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column (Contact & Status) */}
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <div>
                            <h3 className="mb-6 border-b border-border pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                                Connect
                            </h3>
                            <ul className="space-y-4">
                                {links.CONNECT.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="text-sm text-white/70 transition-colors hover:text-primary"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Status Box */}
                        <div className="mt-auto w-full border border-border bg-surface-1 p-6 lg:p-7">
                            <div className="mb-5 flex items-center gap-2.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                                </span>
                                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary/90">
                                    Available for work
                                </span>
                            </div>

                            <p className="mb-7 text-sm leading-relaxed text-white/45">
                                Currently open to full-time roles and select freelance projects. Based in Addis Ababa, open to remote.
                            </p>

                            <Link href="/#contact" className="glow-btn px-5! py-2.5!">
                                Get in touch
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 font-mono text-[10px] text-white/30 md:flex-row">
                    <p>v2.1 // system_ready</p>
                    <p>© {year} Aklilu Tamirat. All rights reserved.</p>
                    <p>Built with Next.js · Tailwind CSS · Motion</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
