// views-people.js — who Indonesians are: the age shape, where people
// live, and how the poverty line has moved, each figure sourced.

import { PEOPLE, POVERTY_SERIES } from './data.js';
import { lineChart } from './charts.js';

const AGES = [
  { label: '0–14 · children', share: 24.9, color: '#c98a2d' },
  { label: '15–64 · working age', share: 68.9, color: '#a6192e' },
  { label: '65+ · older', share: 6.2, color: '#4a6d8a' },
];

export function peopleView() {
  return `
  <section class="card wide">
    <h2>A young country, ageing slowly</h2>
    <div class="agebar" role="img" aria-label="Age shares: 24.9 percent children, 68.9 percent working age, 6.2 percent older">
      ${AGES.map((a) => `<span style="width:${a.share}%;background:${a.color}" title="${a.label}: ${a.share}%"></span>`).join('')}
    </div>
    <ul class="legend">
      ${AGES.map((a) => `<li><i style="background:${a.color}"></i>${a.label} — <b>${a.share}%</b></li>`).join('')}
    </ul>
    <p class="sub">Age shares of the population, BPS 2024. Seven in ten Indonesians are of working age — the demographic
    dividend the country's plans are built on — while the 65-and-over share, 6.2% today, is the one certain to grow.</p>
  </section>
  <section class="stats">
    ${PEOPLE.map((p) => `<article class="stat">
      <p class="stat-label">${p.label}</p>
      <p class="stat-value sm">${p.value}</p>
      <p class="stat-note"><span>${p.source}</span></p>
    </article>`).join('')}
  </section>
  <section class="card wide">
    <h2>Poverty: a long fall, one interruption</h2>
    ${lineChart(POVERTY_SERIES, { color: '#2e7d4f', unit: '%' })}
    <p class="sub">Share of the population below the national poverty line each September (BPS). The line rose in 2020
    as the pandemic bit, then resumed its fall; at 8.57% in 2024 it stands at its lowest in the series shown —
    roughly 24 million people still below the line.</p>
  </section>`;
}
