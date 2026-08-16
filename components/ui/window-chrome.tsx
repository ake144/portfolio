import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** The three-dot "browser window" header used across the site (hero stack
 * preview, contact form, project cards, PDF panel) so it stays one consistent
 * chrome instead of being re-implemented per component. */
export function WindowChrome({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("flex items-center justify-between border-b border-border px-4 py-3.5", className)}>
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/30">{title}</span>
      {children}
    </div>
  );
}
