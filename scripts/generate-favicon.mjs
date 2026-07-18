// One-off script: rasterizes the LogoMark SVG (same path data as
// app/icon.tsx / app/apple-icon.tsx) into a real multi-resolution
// favicon.ico, overwriting the create-next-app default placeholder.
// Run with: node scripts/generate-favicon.mjs
//
// Not part of the build — ImageResponse (Satori) can only emit
// PNG/JPEG, not the .ico container format, so this uses `sharp`
// (already a project dependency) to rasterize and `to-ico` (run via
// npx, not added to package.json — used once, not at runtime) to
// pack the sizes into one .ico file.

import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const TEAL_600 = "#2E8B84";
const RASPBERRY_600 = "#B83050";
const AMBER_500 = "#F5A623";
const CREAM = "#FEFDF5";

const svg = `
<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10 5h28a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H22l-9.5 7.6A1.5 1.5 0 0 1 10 47.4V37H10a8 8 0 0 1-8-8V13a8 8 0 0 1 8-8Z"
    fill="${TEAL_600}" />
  <path
    d="M14.5 22c2.6 4.2 6.4 6.4 9.5 6.4s6.9-2.2 9.5-6.4"
    stroke="${CREAM}" stroke-width="3.4" stroke-linecap="round" fill="none" />
  <circle cx="38" cy="11" r="5" fill="${RASPBERRY_600}" />
  <circle cx="38" cy="11" r="1.9" fill="${AMBER_500}" />
</svg>
`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "app");

const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((size) => sharp(Buffer.from(svg), { density: 384 }).resize(size, size).png().toBuffer()),
);

for (const [i, size] of sizes.entries()) {
  await writeFile(path.join(outDir, `_favicon-${size}.png`), pngBuffers[i]);
}

console.log(`Rasterized PNGs written for sizes: ${sizes.join(", ")}`);
console.log("Now run: npx to-ico app/_favicon-16.png app/_favicon-32.png app/_favicon-48.png > app/favicon.ico");
