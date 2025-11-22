"use client";
import React, { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";

export default function CopyButton({
  value,
  ariaLabel = "Copy",
  className = "",
}: {
  value: string;
  ariaLabel?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // ignore
    }
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={handleCopy}
      className={`inline-flex items-center justify-center rounded-md p-1 text-sm bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition ${className}`}
    >
      {copied ? (
        <IconCheck className="w-4 h-4 text-green-500" />
      ) : (
        <IconCopy className="w-4 h-4" />
      )}
    </button>
  );
}
