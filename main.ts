// Nusantara in Numbers — the hand-in program. The site is the static app/
// folder (open app/index.html in a browser; it loads nothing from the
// network and keeps its books in local storage). This program copies
// app/ and screenshots/ to the output directory and writes the dossier
// the judge reads, with the kit's vendored library, unchanged.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate wants 3 or 4 screenshots of the site itself; refuse to hand
// in a dossier the scorer would mark invalid for want of them.
const shotDir = join(here, 'screenshots');
const shots = existsSync(shotDir) ? readdirSync(shotDir).filter((f) => /\.(png|jpe?g)$/i.test(f)) : [];
if (shots.length < 3 || shots.length > 4) {
  throw new Error(`screenshots/ holds ${shots.length} images; the gate wants 3 or 4`);
}

mkdirSync(out, { recursive: true });
cpSync(join(here, 'app'), join(out, 'app'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
cpSync(shotDir, join(out, 'screenshots'), { recursive: true });

// The gate's own caps, so the program refuses anything the scorer would:
// at most 4 screenshots of 256 KiB, at most 993 files and 16 MiB in app/.
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 16777216,
  }),
);
console.log('Nusantara in Numbers handed in: app/, screenshots/, dossier.json');
