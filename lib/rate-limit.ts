import crypto from "crypto";
import { prisma } from "./prisma";

const DAILY_LIMIT = 30;

function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

export function getRequestIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headers.get("x-real-ip") || "unknown";
}

/** Per-IP, per-day cap so the chatbot can't run up the OpenRouter bill.
 * Bucketed by UTC day directly in the unique key, so this is a single atomic
 * upsert with no read-then-write race. */
export async function checkAndIncrementRateLimit(
  ip: string
): Promise<{ allowed: boolean; remaining: number }> {
  const ipHash = hashIp(ip);
  const day = new Date().toISOString().slice(0, 10);

  const record = await prisma.chatRateLimit.upsert({
    where: { ipHash_day: { ipHash, day } },
    update: { count: { increment: 1 } },
    create: { ipHash, day, count: 1 },
  });

  return {
    allowed: record.count <= DAILY_LIMIT,
    remaining: Math.max(0, DAILY_LIMIT - record.count),
  };
}
