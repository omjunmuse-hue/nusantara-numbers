// views-economy.js — the economy beyond the headlines: trade, work and
// the public books, with a short read on what kind of economy it is.

import { ECONOMY, GROWTH_SERIES } from './data.js';
import { growthBars } from './charts.js';

export function economyView() {
  return `
  <section class="stats">
    ${ECONOMY.map((e) => `<article class="stat">
      <p class="stat-label">${e.label}</p>
      <p class="stat-value sm">${e.value}</p>
      <p class="stat-note"><span>${e.source}</span></p>
    </article>`).join('')}
  </section>
  <section class="card wide">
    <h2>Five percent, most years</h2>
    ${growthBars(GROWTH_SERIES)}
    <p class="sub">Real GDP growth (BPS). The economy grew 5.03% in 2024 on household consumption, investment and
    a strong harvest of export prices earlier in the decade; inflation, at 1.57% in December 2024, sat at the
    low end of Bank Indonesia's target band.</p>
  </section>
  <section class="card wide">
    <h2>What kind of economy</h2>
    <p class="prose">Indonesia sells the world coal, palm oil, nickel and increasingly the batteries and stainless steel
    made from that nickel; it buys machinery, fuel and food ingredients. Trade ran a surplus of about US$31 billion in 2024
    (exports US$264.7 billion, imports US$233.7 billion, BPS). At home, 144.6 million people were in work in August 2024 —
    though BPS counts roughly six in ten of them in informal work, the single most important fact about Indonesian labour.
    Government debt, at 39.2% of GDP, is low by the standards of economies its size.</p>
  </section>`;
}
