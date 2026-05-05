const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const IMAGES = path.join(PUBLIC, "images");

function walk(dir, exts, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, exts, out);
    else if (exts.some((ext) => e.name.endsWith(ext))) out.push(p);
  }
  return out;
}

// Scan source files for any image path references
const sourceFiles = [
  ...walk(path.join(ROOT, "app"), [".tsx", ".ts", ".css"]),
  ...walk(path.join(ROOT, "lib"), [".tsx", ".ts"]),
  ...walk(path.join(ROOT, "components"), [".tsx", ".ts"]),
];

const referenced = new Set();
for (const f of sourceFiles) {
  const data = fs.readFileSync(f, "utf8");
  // /images/...
  const re1 = /["'`(]\/(images\/[^"'`)\s]+)/g;
  let m;
  while ((m = re1.exec(data)) !== null) referenced.add("/" + m[1]);
  // Also catch /logo-ladylaura.svg etc directly under /public root
  const re2 = /["'`(]\/(logo[^"'`)\s]+)/g;
  while ((m = re2.exec(data)) !== null) referenced.add("/" + m[1]);
  const re3 = /["'`(]\/(favicon[^"'`)\s]+)/g;
  while ((m = re3.exec(data)) !== null) referenced.add("/" + m[1]);
}

// All actual files in public/images and public root logos/favicons
const allImages = walk(IMAGES, [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"]).map(
  (p) => "/" + path.relative(PUBLIC, p).replace(/\\/g, "/")
);
const rootAssets = fs
  .readdirSync(PUBLIC)
  .filter((f) => /\.(svg|png|webp|ico|jpg)$/.test(f))
  .map((f) => "/" + f);

const allFiles = [...allImages, ...rootAssets];
const unreferenced = allFiles.filter((f) => !referenced.has(f));

console.log(`Total image files: ${allFiles.length}`);
console.log(`Referenced: ${allFiles.length - unreferenced.length}`);
console.log(`UNREFERENCED: ${unreferenced.length}`);
console.log("\n--- Files NOT referenced anywhere in code ---");
const grouped = {};
for (const f of unreferenced) {
  const dir = path.posix.dirname(f);
  (grouped[dir] = grouped[dir] || []).push(f);
}
for (const dir of Object.keys(grouped).sort()) {
  console.log(`\n${dir}/`);
  for (const f of grouped[dir]) {
    const p = path.join(PUBLIC, f);
    const size = fs.statSync(p).size;
    console.log(`  ${path.posix.basename(f).padEnd(40)} ${(size / 1024).toFixed(0)}KB`);
  }
}

const totalSize = unreferenced.reduce((s, f) => s + fs.statSync(path.join(PUBLIC, f)).size, 0);
console.log(`\nTotal size of unreferenced files: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
