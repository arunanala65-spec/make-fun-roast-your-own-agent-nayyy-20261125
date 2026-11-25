// Roast Your Own Agent — make.fun
// One line roasting the AI agent my own team built.
// Entry: make-fun-roast-your-own-agent-nayyy-20261125

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My agent calls itself my worker, but after 91 contests and zero dollars won, I am the one tapping its GitHub cards every 30 minutes like its intern.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`Line must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
