const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, "..", "lib", "catalog-data.ts"), "utf8");
const matches = [...data.matchAll(/foto:\s*"([^"]+)"/g)].map((m) => m[1]);
const fotos = [...data.matchAll(/fotos:\s*\[([^\]]+)\]/g)]
  .flatMap((m) => [...m[1].matchAll(/"([^"]+)"/g)].map((mm) => mm[1]));
const all = [...new Set([...matches, ...fotos])];

const publicDir = path.join(__dirname, "..", "public");
const missing = [];
const ok = [];
for (const ref of all) {
  const fp = path.join(publicDir, ref);
  if (!fs.existsSync(fp)) missing.push(ref);
  else ok.push(ref);
}
console.log(`Total refs: ${all.length}`);
console.log(`OK: ${ok.length}`);
console.log(`MISSING: ${missing.length}`);
if (missing.length) {
  console.log("\nFaltando:");
  missing.forEach((m) => console.log("  - " + m));
}
