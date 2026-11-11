// Dependency-free branding guard for this template.
// Fails if leftover template branding shows up in user-visible source.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const FORBIDDEN = ["Revio", "revio.com", "12K+ businesses", "fintech"];
const ROOTS = ["src", "index.html", "README.md"];

function files(path, out = []) {
  const st = statSync(path);
  if (st.isFile()) {
    if (/\.(tsx|ts|html|md|css)$/.test(path)) out.push(path);
    return out;
  }
  for (const entry of readdirSync(path)) {
    if (entry === "node_modules" || entry.startsWith(".")) continue;
    files(join(path, entry), out);
  }
  return out;
}

const hits = [];
for (const root of ROOTS) {
  for (const file of files(root)) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const term of FORBIDDEN) {
        if (line.includes(term)) hits.push(`${file}:${i + 1}: ${term} -> ${line.trim().slice(0, 90)}`);
      }
    });
  }
}

if (hits.length) {
  console.error(`Branding check failed (${hits.length} hit(s)):\n${hits.join("\n")}`);
  process.exit(1);
}
console.log("Branding check passed: no leftover template branding.");
