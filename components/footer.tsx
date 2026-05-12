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
        <footer className="relative w-full bg-[#0c0c0c] text-[#e0e0e0] font-mono border-t border-[#222]">
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-5 flex flex-col items-start lg:pr-12">
                        <Link href="/#home" className="flex items-center gap-4 mb-8">
                            <span className="flex h-10 w-10 items-center justify-center bg-[#a882ff] font-serif text-2xl font-bold text-black pb-1">
                                A
                            </span>
                            <span className="text-2xl font-serif font-bold text-white tracking-tight">
                                Aklilu Tamirat
                            </span>
                        </Link>
                        
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                            Building sharp, fast, editorial interfaces for products that need clarity and momentum.
                        </p>
                        
                        <div className="mb-10 text-[11px] font-bold tracking-widest text-[#a882ff] uppercase">
                            [SYS.STATUS: ONLINE]
                        </div>
                        
                        <div className="flex items-center gap-8 mt-auto">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column (Navigate) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase border-b border-[#222] pb-3 mb-6">
                            NAVIGATE
                        </h3>
                        <ul className="space-y-4">
                            {links.NAVIGATE.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white hover:text-[#a882ff] transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column (Contact & Status) */}
                    <div className="lg:col-span-4 flex flex-col gap-10">
                        <div>
                            <h3 className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase border-b border-[#222] pb-3 mb-6">
                                CONTACT
                            </h3>
                            <ul className="space-y-4">
                                {links.CONTACT.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-white hover:text-[#a882ff] transition-colors text-sm">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Status Box */}
                        <div className="border border-[#222] bg-[#111] p-6 lg:p-8 mt-auto w-full">
                            <div className="flex gap-1.5 mb-6">
                                <div className="w-2 h-2 bg-[#a882ff]"></div>
                                <div className="w-2 h-2 bg-[#a882ff]"></div>
                                <div className="w-2 h-2 bg-[#a882ff]"></div>
                            </div>
                            
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 bg-[#a882ff]"></span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#a882ff]">
                                    AVAILABLE FOR WORK
                                </span>
                            </div>
                            
                            <p className="text-sm text-gray-400 leading-relaxed mb-8">
                                Currently open to full-time roles and select freelance projects. Based in Addis Ababa, open to remote.
                            </p>
                            
                            <Link
                                href="/#contact"
                                className="inline-block bg-[#a882ff] hover:bg-[#8f61ff] text-black transition-colors px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em]"
                            >
                                GET IN TOUCH
                            </Link>
                        </div>
                    </div>
                    
                </div>

                {/* Bottom bar */}
                <div className="mt-24 pt-6 border-t border-[#222] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-500">
                    <p className="font-mono">v2.0.4 // SYSTEM_READY</p>
                    <p className="font-mono">© 2026 Aklilu Tamirat. All rights reserved.</p>
                    <p className="font-mono">Built with Next.js · Three.js · Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;