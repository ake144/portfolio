import { Download, ExternalLink } from "lucide-react";
import { WindowChrome } from "@/components/ui/window-chrome";
import { ChatPanel } from "./chat-panel";

const RESUME_PATH = "/aklilu_tamirat_resume.pdf";

const AskMeSection = () => {
  return (
    <section id="ask-me" className="relative w-full border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-5">
              <span>04</span>Ask about me
            </p>
            <h2 className="section-heading">Ask my AI.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/45">
            A résumé-grounded assistant — it answers from the PDF on the left, not from thin air.
            Curious about the stack, the experience, or what I&apos;m working on? Ask it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* PDF panel */}
          <div className="section-card flex flex-col overflow-hidden lg:col-span-2">
            <WindowChrome title="aklilu_tamirat_resume.pdf" />
            <div className="flex-1 bg-white/95">
              <iframe
                src={`${RESUME_PATH}#view=FitH`}
                title="Aklilu Tamirat — Résumé"
                className="h-[420px] w-full lg:h-[540px]"
              />
            </div>
            <div className="flex gap-3 border-t border-border p-4">
              <a href={RESUME_PATH} download className="ghost-btn flex-1 px-4! py-2.5!">
                <Download className="h-3.5 w-3.5" />
                Download
              </a>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn flex-1 px-4! py-2.5!"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Open
              </a>
            </div>
          </div>

          {/* Chat panel */}
          <div className="section-card flex flex-col overflow-hidden lg:col-span-3">
            <WindowChrome title="ask-me.chat" />
            <ChatPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskMeSection;
