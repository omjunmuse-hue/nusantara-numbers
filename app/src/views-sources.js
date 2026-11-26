// views-sources.js — where every number came from, and how this site
// treats the figures it republishes.

import { SOURCES } from './data.js';

export function sourcesView() {
  return `
  <section class="card wide">
    <h2>Sources</h2>
    <p class="sub">Every figure on this site is republished from an official series, with its source and year
    printed beside it. Nothing here is estimated by the site itself; where a figure is rounded, the card says so.</p>
    <ul class="rows">
      ${SOURCES.map((s) => `<li><span><strong>${s.name}</strong><small>${s.what}</small></span><span class="amt">${s.years}</span></li>`).join('')}
    </ul>
  </section>
  <section class="card wide">
    <h2>How to read these numbers</h2>
    <p class="prose">BPS mid-year population estimates are projections from the 2020 census and differ slightly from
    civil-registration counts; both are official, and this site uses the BPS series throughout so its pages agree with
    each other. GDP in US dollars moves with the rupiah as well as with the economy — the growth rate, measured in
    rupiah at constant prices, is the steadier read. Provincial populations are rounded to the nearest hundred
    thousand, so the table's column sums to about, not exactly, the national estimate. When a series is revised —
    BPS revises GDP for two years after first publication — the revised figure is the one that belongs on a page
    like this.</p>
  </section>`;
}
