"use client";



import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
export function NavbarItems() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/projects",
    },
    {
      name: "Experience",
      link: "/experience",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <a
              href="/blog"
              className="hidden rounded-none border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60 transition hover:border-red-500/60 hover:text-white lg:inline-flex"
            >
              Explore
            </a>
            <NavbarButton
              as="button"
              onClick={() => {
                window.open("/aklilu_tamirat_resume.pdf", "_blank");
              }}
              variant="primary"
            >
              View CV
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                as="button"
                onClick={() => {
                  window.open("/aklilu_tamirat_resume.pdf", "_blank");
                }}
                variant="primary"
                className="w-full"
              >
                View CV
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

    </div>
  );
}
