// Generates favicons from the SKIPPY® logo and print-ready QR codes with the logo in the middle.
// Usage: node scripts/brand-assets.mjs https://your-domain.tld
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import sharp from 'sharp';
import QRCode from 'qrcode';

const SITE = (process.argv[2] || 'https://skippy-dapur.example').replace(/\/$/, '');
if (SITE.endsWith('.example')) console.warn('! Placeholder URL. Rerun with the real domain before printing.');

const NAVY = '#004B87';
const logoPath = 'src/assets/images/logo.png';
const logo = await sharp(logoPath).trim().png().toBuffer();
const { width: lw, height: lh } = await sharp(logo).metadata();

// ---------- Favicons ----------
const square = (size, bg) =>
  sharp(logo)
    .resize(size, size, { fit: 'contain', background: bg ?? { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

await writeFile('public/favicon-32.png', await square(32));
await writeFile('public/icon-512.png', await square(512));
await writeFile('public/apple-touch-icon.png', await sharp(await square(150)).extend({ top: 15, bottom: 15, left: 15, right: 15, background: '#FBF8F3' }).png().toBuffer());

// favicon.ico holding one 48px PNG (valid since Windows Vista; every browser reads it)
const png48 = await square(48);
const ico = Buffer.alloc(22);
ico.writeUInt16LE(1, 2); // type: icon
ico.writeUInt16LE(1, 4); // one image
ico.writeUInt8(48, 6);
ico.writeUInt8(48, 7);
ico.writeUInt16LE(1, 10); // colour planes
ico.writeUInt16LE(32, 12); // bits per pixel
ico.writeUInt32LE(png48.length, 14);
ico.writeUInt32LE(22, 18); // image offset
await writeFile('public/favicon.ico', Buffer.concat([ico, png48]));
await rm('public/favicon.svg', { force: true }); // Astro's default mark

// ---------- QR codes ----------
const logoUri = async (px) => `data:image/png;base64,${(await sharp(logo).resize(px).png().toBuffer()).toString('base64')}`;
const printLogo = await logoUri(1400); // 30% of a 4000px print
const webLogo = await logoUri(360);

async function qrSvg(url, logoUri = printLogo) {
  // Level H survives ~30% damage, so the centre logo stays scannable.
  const svg = await QRCode.toString(url, { type: 'svg', errorCorrectionLevel: 'H', margin: 2, color: { dark: NAVY, light: '#FFFFFF' } });
  const n = Number(svg.match(/viewBox="0 0 (\d+) \d+"/)[1]);
  const w = n * 0.3; // logo width: 30% of side keeps covered area well under the H budget
  const h = (w * lh) / lw;
  // Badge snapped to whole modules so no sliver of a cut module shows around it.
  const x0 = Math.floor((n - w) / 2 - 0.5), y0 = Math.floor((n - h) / 2 - 0.5);
  const x1 = Math.ceil((n + w) / 2 + 0.5), y1 = Math.ceil((n + h) / 2 + 0.5);
  const badge = `<rect x="${x0}" y="${y0}" width="${x1 - x0}" height="${y1 - y0}" rx="0.8" fill="#FFFFFF"/>` +
    `<image href="${logoUri}" x="${(n - w) / 2}" y="${(n - h) / 2}" width="${w}" height="${h}"/>`;
  return svg.replace('</svg>', `${badge}</svg>`);
}

const slugs = [...(await readFile('src/data/recipes.ts', 'utf8')).matchAll(/slug: '([^']+)'/g)].map((m) => m[1]);
const targets = [{ name: 'skippy-dapur', url: `${SITE}/` }, ...slugs.map((s) => ({ name: `resep-${s}`, url: `${SITE}/#${s}` }))];

await mkdir('print/qr', { recursive: true });
for (const t of targets) {
  const svg = await qrSvg(t.url);
  await writeFile(`print/qr/${t.name}.svg`, svg);
  // 4000px ≈ 10 cm at 1000 dpi; the SVG is the vector master for any size.
  await sharp(Buffer.from(svg), { density: 1200 }).resize(4000, 4000).png().toFile(`print/qr/${t.name}.png`);
  console.log(`${t.name}  →  ${t.url}`);
}
await writeFile('public/qr-skippy-dapur.svg', await qrSvg(`${SITE}/`, webLogo));
