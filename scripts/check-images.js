const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

function scanFile(file) {
  const data = fs.readFileSync(file, "utf8");
  const refs = new Set();
  // foto: "/images/..." or 'src="/images/..."' or '"/images/..."' literal in arrays
  const re = /["'`](\/images\/[^"'`]+)["'`]/g;
  let m;
  while ((m = re.exec(data)) !== null) refs.add(m[1]);
  return refs;
}

function walk(dir, exts, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, exts, out);
    else if (exts.some((ext) => e.name.endsWith(ext))) out.push(p);
  }
  return out;
}

const files = [
  ...walk(path.join(ROOT, "app"), [".tsx", ".ts"]),
  ...walk(path.join(ROOT, "lib"), [".tsx", ".ts"]),
  ...walk(path.join(ROOT, "components"), [".tsx", ".ts"]),
];

const all = new Set();
const byFile = {};
for (const f of files) {
  const refs = scanFile(f);
  if (refs.size === 0) continue;
  byFile[path.relative(ROOT, f)] = [...refs];
  refs.forEach((r) => all.add(r));
}

const missing = [];
const ok = [];
for (const ref of all) {
  if (fs.existsSync(path.join(PUBLIC, ref))) ok.push(ref);
  else missing.push(ref);
}

console.log(`Total refs: ${all.size}`);
console.log(`OK: ${ok.length}`);
console.log(`MISSING: ${missing.length}`);
if (missing.length) {
  console.log("\nFaltando:");
  for (const m of missing) {
    const sources = Object.entries(byFile)
      .filter(([_, refs]) => refs.includes(m))
      .map(([f]) => f);
    console.log(`  ${m}\n    referenciado em: ${sources.join(", ")}`);
  }
}
