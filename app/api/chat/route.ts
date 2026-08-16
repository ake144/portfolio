import { NextRequest, NextResponse } from "next/server";
import { embedText, isChatConfigured, streamChatCompletion, type ChatMessage } from "@/lib/openrouter";
import { searchSimilarChunks } from "@/lib/vector-store";
import { checkAndIncrementRateLimit, getRequestIp } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT_PREFIX = `You are the AI assistant embedded on Aklilu Tamirat's portfolio site, answering visitors' questions about him.
Rules:
- Answer using ONLY the résumé context below. Speak about Aklilu in the third person.
- Be concise — 2 to 4 sentences unless the visitor asks for more detail.
- If the answer isn't in the context, say you don't have that detail and suggest using the contact section instead of guessing.
- Never invent employers, dates, or claims that aren't in the context.

Résumé context:
`;

export async function POST(req: NextRequest) {
  try {
    if (!isChatConfigured()) {
      return NextResponse.json(
        { error: "The assistant isn't configured yet — please use the contact form below instead." },
        { status: 503 }
      );
    }

    const ip = getRequestIp(req.headers);
    const { allowed, remaining } = await checkAndIncrementRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "This assistant has hit its daily question limit. Please try again tomorrow, or use the contact form." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    const incoming = Array.isArray(body?.messages) ? body.messages : [];
    const history: ChatMessage[] = incoming
      .filter(
        (m: unknown): m is { role: string; content: string } =>
          !!m &&
          typeof m === "object" &&
          ((m as { role?: unknown }).role === "user" || (m as { role?: unknown }).role === "assistant") &&
          typeof (m as { content?: unknown }).content === "string"
      )
      .slice(-8)
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content.slice(0, 1000) }));

    const lastUserMessage = [...history].reverse().find((m) => m.role === "user");
    if (!lastUserMessage) {
      return NextResponse.json({ error: "No question provided." }, { status: 400 });
    }

    const queryEmbedding = await embedText(lastUserMessage.content);
    const contextChunks = await searchSimilarChunks(queryEmbedding, 5);

    const context = contextChunks.length
      ? contextChunks.map((c) => `- ${c.content}`).join("\n\n")
      : "(no résumé context available — say so if asked something specific)";

    const stream = await streamChatCompletion([
      { role: "system", content: `${SYSTEM_PROMPT_PREFIX}${context}` },
      ...history,
    ]);

    const encoder = new TextEncoder();
    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const part of stream) {
            const delta = part.choices[0]?.delta?.content;
            if (delta) controller.enqueue(encoder.encode(delta));
          }
        } catch (err) {
          console.error("Chat stream error:", err);
          controller.enqueue(encoder.encode("\n\n[The assistant hit an error — please try again.]"));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-RateLimit-Remaining": String(remaining),
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
