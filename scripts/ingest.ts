/**
 * One-off / re-run-on-demand ingestion: reads the public resume PDF, splits it
 * into chunks, embeds each chunk via OpenRouter, and stores them in Supabase
 * Postgres (pgvector) through Prisma. Run with `npm run ingest`.
 */
import fs from "fs";
import path from "path";
import { extractText, getDocumentProxy } from "unpdf";
import { chunkText } from "../lib/chunk";
import { embedTexts } from "../lib/openrouter";
import { replaceDocumentChunks } from "../lib/vector-store";
import { prisma } from "../lib/prisma";

const SOURCE = "resume";
const PDF_PATH = path.join(process.cwd(), "public", "aklilu_tamirat_resume.pdf");

async function main() {
  if (!process.env.OPENROUTER_API_KEY) {
    throw new Error("OPENROUTER_API_KEY is not set — add it to .env before running ingestion.");
  }
  if (!fs.existsSync(PDF_PATH)) {
    throw new Error(`Resume PDF not found at ${PDF_PATH}`);
  }

  console.log(`Reading ${PDF_PATH}...`);
  const buffer = fs.readFileSync(PDF_PATH);
  const pdf = await getDocumentProxy(new Uint8Array(buffer));
  const { text } = await extractText(pdf, { mergePages: true });

  const chunks = chunkText(text);
  console.log(`Split resume into ${chunks.length} chunks.`);
  if (chunks.length === 0) {
    throw new Error("No text extracted from the PDF — is it a scanned/image-only PDF?");
  }

  console.log("Requesting embeddings from OpenRouter...");
  const embeddings = await embedTexts(chunks);

  console.log("Writing chunks + embeddings to Supabase...");
  await replaceDocumentChunks(
    SOURCE,
    chunks.map((content, i) => ({ content, embedding: embeddings[i] }))
  );

  console.log(`Done — ${chunks.length} chunks ingested for source "${SOURCE}".`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
