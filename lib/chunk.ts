const CHUNK_SIZE = 900;
const CHUNK_OVERLAP = 150;

/** Splits text into overlapping chunks, preferring to break on paragraph and
 * sentence boundaries so each chunk stays semantically coherent for embedding. */
export function chunkText(text: string, chunkSize = CHUNK_SIZE, overlap = CHUNK_OVERLAP): string[] {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let current = "";

  for (const paragraph of paragraphs) {
    const candidate = current ? `${current}\n\n${paragraph}` : paragraph;

    if (candidate.length <= chunkSize) {
      current = candidate;
      continue;
    }

    if (current) {
      chunks.push(current);
      current = current.slice(Math.max(0, current.length - overlap));
      current = `${current}\n\n${paragraph}`.trim();
    } else {
      current = paragraph;
    }

    while (current.length > chunkSize) {
      let splitAt = current.lastIndexOf(". ", chunkSize);
      if (splitAt < chunkSize * 0.4) splitAt = chunkSize;
      chunks.push(current.slice(0, splitAt + 1).trim());
      current = current.slice(Math.max(0, splitAt + 1 - overlap)).trim();
    }
  }

  if (current.trim()) chunks.push(current.trim());

  return chunks.filter((c) => c.length > 20);
}
