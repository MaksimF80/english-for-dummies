// Packs the PNGs produced by generate-favicon.mjs into a real
// favicon.ico using the `png-to-ico` library's JS API directly
// (its CLI binary resolution was flaky via `npx to-ico`/`npx
// png-to-ico`, so this sidesteps that entirely).
// Run with: npx --yes -p png-to-ico node scripts/pack-ico.mjs

import pngToIco from "png-to-ico";
import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "app");

const sizes = [16, 32, 48];
const buffers = await Promise.all(sizes.map((s) => readFile(path.join(appDir, `_favicon-${s}.png`))));
const icoBuffer = await pngToIco(buffers);
await writeFile(path.join(appDir, "favicon.ico"), icoBuffer);

console.log(`favicon.ico written (${icoBuffer.length} bytes) from sizes: ${sizes.join(", ")}`);
