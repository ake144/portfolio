"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "What's his experience with LLMs and RAG?",
  "What's his day-to-day tech stack?",
  "What's he working on at Safaricom?",
  "How do I get in touch with him?",
];

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        const message = data?.error || "Something went wrong. Please try again.";
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: message };
          return copy;
        });
        toast.error(message);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        const content = accumulated;
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content };
          return copy;
        });
      }
    } catch {
      toast.error("Couldn't reach the assistant. Please try again.");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-5 overflow-y-auto p-6" style={{ maxHeight: 460 }}>
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-5 py-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/25 bg-primary/7 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-white/45">
              Ask anything about my background, skills, or experience — answers are grounded in the résumé PDF.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button key={prompt} type="button" onClick={() => send(prompt)} className="tag-pill">
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, i) => (
          <div
            key={i}
            className={cn("flex flex-col gap-1.5", message.role === "user" ? "items-end" : "items-start")}
          >
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/30">
              {message.role === "user" ? "You" : "Assistant"}
            </span>
            <div
              className={cn(
                "max-w-[85%] whitespace-pre-wrap rounded-lg border px-4 py-3 text-[13px] leading-relaxed",
                message.role === "user"
                  ? "border-primary/25 bg-primary/8 text-white/90"
                  : "border-border bg-white/3 text-white/75"
              )}
            >
              {message.content ||
                (loading && i === messages.length - 1 ? (
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-white/40" />
                    <span className="delay-100 h-1.5 w-1.5 animate-pulse-dot rounded-full bg-white/40" />
                    <span className="delay-200 h-1.5 w-1.5 animate-pulse-dot rounded-full bg-white/40" />
                  </span>
                ) : null)}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-3 border-t border-border p-4"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about my experience, stack, or projects..."
          disabled={loading}
          maxLength={500}
          className="flex-1 bg-transparent text-sm text-white/85 placeholder:text-white/25 focus:outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:scale-105"
          aria-label="Send message"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
