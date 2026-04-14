"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(18px)" : "blur(12px)",
        boxShadow: visible ? "0 24px 60px rgba(0, 0, 0, 0.28)" : "none",
        width: "100%",
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "100%",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-[1440px] flex-row items-center justify-between self-start border-b border-white/10 bg-black/75 px-4 py-3 lg:flex lg:px-8",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  return (
    <motion.div
      className={cn(
        "hidden flex-1 items-center justify-center gap-1 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onClick={onItemClick}
          className="relative px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60 transition hover:text-white"
          key={`link-${idx}`}
          href={item.link}
        >
          <span>{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(18px)" : "blur(12px)",
        boxShadow: visible ? "0 24px 60px rgba(0, 0, 0, 0.28)" : "none",
        width: "100%",
        paddingRight: "0px",
        paddingLeft: "0px",
        borderRadius: "0px",
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between border-b border-white/10 bg-black/80 px-0 py-2 lg:hidden",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 border-b border-white/10 bg-neutral-950 px-4 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.3)]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center gap-3 px-1 py-1 text-sm font-medium text-white"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center border border-white/15 bg-white text-sm font-bold text-black">
        A
      </span>
      <span className="uppercase tracking-[0.35em] text-white/90">Aklilu</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
    "inline-flex items-center justify-center rounded-none border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.35em] transition duration-200 hover:-translate-y-0.5";
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
      "border-red-500/70 bg-red-500 text-white shadow-[0_18px_40px_rgba(239,68,68,0.2)] hover:bg-red-400",
    secondary: "bg-transparent text-white/80 hover:border-white/30 hover:text-white",
    dark: "bg-white/5 text-white hover:bg-white/10",
    gradient: "bg-gradient-to-r from-red-500 to-orange-500 text-white",
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
