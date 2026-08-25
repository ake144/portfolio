import * as THREE from "three";

interface CardBackOptions {
  name: string;
  role: string;
  tagline?: string;
  /** width / height, matched to the front photo plane so the texture isn't stretched. */
  aspect: number;
  accent?: string;
}

const FONT_STACK = `"Space Grotesk", ui-sans-serif, system-ui, sans-serif`;
const MONO_STACK = `ui-monospace, "SFMono-Regular", Menlo, monospace`;

/** Draws the "back of the card" revealed mid-flip — an identity card in the
 * same visual language as the rest of the site (dot grid, mono labels,
 * ember accent, square monogram). Pure canvas 2D, drawn once synchronously
 * (the font stack falls back to a system sans until Space Grotesk is ready,
 * same as any web font — no async re-draw, so there's nothing here that can
 * fail after the texture has already been handed to Three.js). Every
 * drawing call is wrapped so a canvas quirk in any one browser degrades to
 * a plainer card instead of taking the whole 3D scene down with it. */
export function createCardBackTexture({
  name,
  role,
  tagline = "// building scalable systems",
  aspect,
  accent = "#ec5b34",
}: CardBackOptions): THREE.CanvasTexture {
  const height = 1024;
  const safeAspect = Number.isFinite(aspect) && aspect > 0 ? aspect : 1;
  const width = Math.max(1, Math.round(height * safeAspect));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  try {
    paint(canvas, { name, role, tagline, accent });
  } catch {
    // Fall back to a flat brand-colored panel — still a valid, visible back
    // face, just without the typography.
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function paint(
  canvas: HTMLCanvasElement,
  { name, role, tagline, accent }: { name: string; role: string; tagline: string; accent: string }
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;

  // Background
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, w, h);

  // Dot grid
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  const spacing = w / 18;
  for (let x = spacing / 2; x < w; x += spacing) {
    for (let y = spacing / 2; y < h; y += spacing) {
      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Soft accent glow, upper area
  const glow = ctx.createRadialGradient(w / 2, h * 0.34, 0, w / 2, h * 0.34, Math.max(1, w * 0.55));
  glow.addColorStop(0, "rgba(236,91,52,0.16)");
  glow.addColorStop(1, "rgba(236,91,52,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  // Border frame
  const inset = w * 0.045;
  ctx.strokeStyle = "rgba(236,91,52,0.35)";
  ctx.lineWidth = w * 0.004;
  ctx.strokeRect(inset, inset, w - inset * 2, h - inset * 2);

  // Corner ticks (top-left, bottom-right) — echoes the COORD// labels used elsewhere
  const tick = w * 0.05;
  const tickInset = inset * 1.9;
  ctx.strokeStyle = "rgba(255,255,255,0.25)";
  ctx.lineWidth = w * 0.003;
  ctx.beginPath();
  ctx.moveTo(tickInset, tickInset + tick);
  ctx.lineTo(tickInset, tickInset);
  ctx.lineTo(tickInset + tick, tickInset);
  ctx.moveTo(w - tickInset, h - tickInset - tick);
  ctx.lineTo(w - tickInset, h - tickInset);
  ctx.lineTo(w - tickInset - tick, h - tickInset);
  ctx.stroke();

  // Status dot + label, top-right
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(w - tickInset - w * 0.018, tickInset + w * 0.02, w * 0.008, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(236,91,52,0.85)";
  ctx.font = `600 ${Math.round(w * 0.022)}px ${FONT_STACK}`;
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.fillText("ACTIVE", w - tickInset - w * 0.035, tickInset + w * 0.02);

  // Monogram badge
  const badge = w * 0.16;
  const badgeX = w / 2 - badge / 2;
  const badgeY = h * 0.3;
  ctx.fillStyle = accent;
  ctx.fillRect(badgeX, badgeY, badge, badge);
  ctx.fillStyle = "#fff8f5";
  ctx.font = `700 ${Math.round(badge * 0.56)}px ${FONT_STACK}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("A", w / 2, badgeY + badge / 2 + badge * 0.02);

  // Name
  ctx.fillStyle = "#f5f5f5";
  ctx.font = `700 ${Math.round(w * 0.082)}px ${FONT_STACK}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  const nameY = badgeY + badge + h * 0.1;
  wrapCenteredText(ctx, name.toUpperCase(), w / 2, nameY, w * 0.8, w * 0.09);

  // Role
  ctx.fillStyle = accent;
  ctx.font = `600 ${Math.round(w * 0.03)}px ${MONO_STACK}`;
  ctx.textAlign = "center";
  ctx.fillText(role.toUpperCase(), w / 2, nameY + w * 0.13);

  // Divider
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = w * 0.0025;
  ctx.beginPath();
  ctx.moveTo(w * 0.32, h * 0.82);
  ctx.lineTo(w * 0.68, h * 0.82);
  ctx.stroke();

  // Footer tagline
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = `500 ${Math.round(w * 0.026)}px ${MONO_STACK}`;
  ctx.textAlign = "center";
  ctx.fillText(tagline, w / 2, h * 0.9);
}

function wrapCenteredText(
  ctx: CanvasRenderingContext2D,
  text: string,
  centerX: number,
  startY: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  const lines: string[] = [];

  for (const word of words) {
    const testLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);

  const totalHeight = (lines.length - 1) * lineHeight;
  const firstY = startY - totalHeight / 2;
  lines.forEach((l, i) => {
    ctx.fillText(l, centerX, firstY + i * lineHeight);
  });
}
