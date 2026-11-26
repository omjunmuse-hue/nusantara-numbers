// Nusantara in Numbers — the hand-in program. The site is the static app/
// folder (open app/index.html in a browser; it loads nothing from the
// network and reads its figures from app/src/data.js, each with its source
// and year). This program copies app/ and screenshots/ to the output
// directory and writes the dossier the judge reads, with the kit's
// vendored library, unchanged.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
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
// The gate also caps each screenshot at 256 KiB; fail here with the file
// named instead of letting the dossier builder reject the whole hand-in.
for (const shot of shots) {
  const size = statSync(join(shotDir, shot)).size;
  if (size > 262144) {
    throw new Error(`screenshots/${shot} is ${size} bytes; the gate caps each at 262144`);
  }
}
// The site must have its entrypoint; without app/index.html there is
// nothing for the judge to open.
if (!existsSync(join(here, 'app', 'index.html'))) {
  throw new Error('app/index.html is missing; the site has no entrypoint');
}
// The provinces table is the site's core claim — all 38 provinces. Count
// the rows in app/src/data.js so a truncated data file fails loudly here
// instead of handing the judge a table that stops halfway through.
const dataPath = join(here, 'app', 'src', 'data.js');
const dataText = existsSync(dataPath) ? readFileSync(dataPath, 'utf8') : '';
const provincesBlock = dataText.split('export const PROVINCES = [')[1]?.split('].map(')[0] ?? '';
const provinceCount = (provincesBlock.match(/\['/g) ?? []).length;
if (provinceCount !== 38) {
  throw new Error(`app/src/data.js lists ${provinceCount} provinces; the table needs all 38`);
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
