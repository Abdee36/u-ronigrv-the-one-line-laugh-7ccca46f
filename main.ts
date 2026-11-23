// The One-Line Laugh (make.fun).
// Writes a single funny sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I meal-prepped for the whole week on Sunday, and by Tuesday I was eating dry cereal straight from the box like a raccoon with a credit card.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(LINE);
