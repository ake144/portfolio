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
import { HyperText } from "./ui/hyper-text";

export function NavbarItems() {
  const navItems = [

    {
      name: "About Me",
      link: "/",
    },
    {
      name: "Projects",
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
    <div className="sticky top-0  z-50 w-full">
      <Navbar>
        
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
            <NavbarButton
             onClick={() => {
              window.open('/aklilu_tamirat_resume.pdf', '_blank');
             }}
            variant="primary">
             
              <HyperText>View CV</HyperText>
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
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <HyperText>{item.name}</HyperText>
                {/* <span className="block">{item.name}</span> */}
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
              <NavbarButton
                onClick={() => {
                   window.open('/aklilu_tamirat_resume.pdf', '_blank');
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
