const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

// Brand assets / metadata-referenced files: KEEP even if unreferenced in code
const KEEP = new Set([
  "/favicon.svg",
  "/og-image.jpg",
  "/images/logo-ladylaura-clean.svg",
  "/images/logo-ladylaura-dark.svg",
  "/images/logo-ladylaura.png",
  "/images/logo-ladylaura.svg",
  "/images/logo-ladylaura.webp",
]);

function walk(dir, exts, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, exts, out);
    else if (exts.some((ext) => e.name.endsWith(ext))) out.push(p);
  }
  return out;
}

const sourceFiles = [
  ...walk(path.join(ROOT, "app"), [".tsx", ".ts", ".css"]),
  ...walk(path.join(ROOT, "lib"), [".tsx", ".ts"]),
  ...walk(path.join(ROOT, "components"), [".tsx", ".ts"]),
];

const referenced = new Set();
for (const f of sourceFiles) {
  const data = fs.readFileSync(f, "utf8");
  const re1 = /["'`(]\/(images\/[^"'`)\s]+)/g;
  let m;
  while ((m = re1.exec(data)) !== null) referenced.add("/" + m[1]);
  const re2 = /["'`(]\/(logo[^"'`)\s]+)/g;
  while ((m = re2.exec(data)) !== null) referenced.add("/" + m[1]);
  const re3 = /["'`(]\/(favicon[^"'`)\s]+)/g;
  while ((m = re3.exec(data)) !== null) referenced.add("/" + m[1]);
}

const allImages = walk(path.join(PUBLIC, "images"), [".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"]).map(
  (p) => "/" + path.relative(PUBLIC, p).replace(/\\/g, "/")
);
const rootAssets = fs
  .readdirSync(PUBLIC)
  .filter((f) => /\.(svg|png|webp|ico|jpg)$/.test(f))
  .map((f) => "/" + f);

const allFiles = [...allImages, ...rootAssets];
const toDelete = allFiles.filter((f) => !referenced.has(f) && !KEEP.has(f));

console.log(`Files to delete: ${toDelete.length}`);
const totalSize = toDelete.reduce((s, f) => s + fs.statSync(path.join(PUBLIC, f)).size, 0);
console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)}MB\n`);

const dryRun = process.argv.includes("--dry-run");
if (dryRun) {
  for (const f of toDelete) console.log("would delete:", f);
  console.log("\n(dry run — no files deleted)");
  process.exit(0);
}

for (const f of toDelete) {
  const fsPath = path.join(PUBLIC, f);
  // Use git rm if tracked, else fs.unlink
  try {
    execSync(`git ls-files --error-unmatch "public${f}"`, { cwd: ROOT, stdio: "pipe" });
    execSync(`git rm "public${f}"`, { cwd: ROOT, stdio: "pipe" });
    console.log("git rm:", f);
  } catch {
    fs.unlinkSync(fsPath);
    console.log("rm:    ", f);
  }
}

console.log(`\nDone. Deleted ${toDelete.length} files (${(totalSize / 1024 / 1024).toFixed(2)}MB)`);
