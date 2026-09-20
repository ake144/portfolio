import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getMailTransporter } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Runs Monday/Friday via Vercel Cron (see vercel.json). Queries Postgres —
 * which keeps the free-tier Supabase project from auto-pausing on
 * inactivity — and emails a short usage digest so the run isn't silent.
 * Auth is a shared-secret bearer token: Vercel attaches it automatically
 * once CRON_SECRET is set as a project env var. */
export async function GET(req: NextRequest) {
  const expected = process.env.CRON_SECRET;
  const authHeader = req.headers.get("authorization");
  if (!expected || authHeader !== `Bearer ${expected}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setUTCDate(sevenDaysAgo.getUTCDate() - 7);
    const sinceDay = sevenDaysAgo.toISOString().slice(0, 10);

    const [chunkCount, weeklyAgg] = await Promise.all([
      prisma.documentChunk.count(),
      prisma.chatRateLimit.aggregate({
        where: { day: { gte: sinceDay } },
        _sum: { count: true },
      }),
    ]);
    const weeklyMessages = weeklyAgg._sum.count ?? 0;

    const transporter = getMailTransporter();
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio keepalive — ${weeklyMessages} chat message${weeklyMessages === 1 ? "" : "s"} this week`,
      html: `<div>
        <h1>Portfolio site keepalive report</h1>
        <p>Scheduled Monday/Friday check-in — the database was pinged to keep the Supabase project active.</p>
        <p><strong>Chatbot messages (last 7 days):</strong> ${weeklyMessages}</p>
        <p><strong>Résumé chunks indexed:</strong> ${chunkCount}</p>
        <p><strong>Checked at:</strong> ${new Date().toISOString()}</p>
      </div>`,
    });

    return NextResponse.json({
      ok: true,
      chunkCount,
      weeklyMessages,
      checkedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Cron keepalive error:", error);
    return NextResponse.json({ ok: false, error: "Keepalive failed" }, { status: 500 });
  }
}
