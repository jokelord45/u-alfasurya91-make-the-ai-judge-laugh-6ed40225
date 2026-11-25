import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: one line about office life, under 200 chars.
// The printer is the office's most reliable unreliable coworker: it only
// ever jams on deadline day, and the punchline flips the blame — it didn't
// break, it learned from management. True (every office knows the deadline
// jam), surprising (the printer as a management trainee), tight (one breath,
// no wasted word), and fresh (no pun, no stock "printer is broken" line).
const ENTRY =
  "The office printer only jams on deadline day — IT says it learned from management: never work unless someone's watching.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
