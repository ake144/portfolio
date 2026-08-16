import OpenAI from "openai";

let client: OpenAI | null = null;

/** Lazily-created OpenAI-compatible client pointed at OpenRouter. Both chat
 * completions and embeddings run through this one client/key — OpenRouter
 * proxies both behind the same OpenAI-shaped API. */
function getClient(): OpenAI {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not set");
  }
  if (!client) {
    client = new OpenAI({
      apiKey,
      baseURL: "https://openrouter.ai/api/v1",
      defaultHeaders: {
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://aklilu-tamirat.com",
        "X-Title": "Aklilu Tamirat Portfolio",
      },
    });
  }
  return client;
}

export function isChatConfigured(): boolean {
  return Boolean(process.env.OPENROUTER_API_KEY);
}

/** Dimension must match the `vector(1536)` column in prisma/schema.prisma —
 * if you swap OPENROUTER_EMBEDDING_MODEL for one with different output
 * dimensions, update the schema and re-run migrations too. */
export async function embedTexts(texts: string[]): Promise<number[][]> {
  const model = process.env.OPENROUTER_EMBEDDING_MODEL || "openai/text-embedding-3-small";
  const res = await getClient().embeddings.create({
    model,
    input: texts,
  });
  return res.data
    .sort((a, b) => a.index - b.index)
    .map((row) => row.embedding as number[]);
}

export async function embedText(text: string): Promise<number[]> {
  const [embedding] = await embedTexts([text]);
  return embedding;
}

export type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export function streamChatCompletion(messages: ChatMessage[]) {
  const model = process.env.OPENROUTER_CHAT_MODEL || "openrouter/free";
  return getClient().chat.completions.create({
    model,
    messages,
    stream: true,
    temperature: 0.4,
    max_tokens: 500,
  });
}
