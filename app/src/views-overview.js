// views-overview.js — the front page: the eight headline numbers with
// their sources, the two charts a first-time visitor looks for, and the
// shape of the country in one short read.

import { HEADLINES, POPULATION_SERIES, GROWTH_SERIES } from './data.js';
import { lineChart, growthBars } from './charts.js';

export function overviewView() {
  return `
  <section class="stats">
    ${HEADLINES.map((h) => `<article class="stat">
      <p class="stat-label">${h.label}</p>
      <p class="stat-value">${h.value}</p>
      <p class="stat-note">${h.note} · <span>${h.source}</span></p>
    </article>`).join('')}
  </section>
  <section class="cards">
    <article class="card">
      <h2>A nation still growing</h2>
      ${lineChart(POPULATION_SERIES, { unit: 'M' })}
      <p class="sub">Population at each census and the 2024 estimate, in millions. Indonesia passed 200 million in 2000
      and adds roughly three million people a year — a city the size of Surabaya, annually. Source: BPS censuses and mid-year estimates.</p>
    </article>
    <article class="card">
      <h2>Growth, interrupted once</h2>
      ${growthBars(GROWTH_SERIES)}
      <p class="sub">Real GDP growth, percent a year. Two decades of five-percent growth broke only in 2020,
      when the pandemic shrank the economy by 2.07%; it has run at five percent again since. Source: BPS, 2019–2024.</p>
    </article>
  </section>
  <section class="card wide">
    <h2>The country in one paragraph</h2>
    <p class="prose">Indonesia is the world's fourth most populous country and its largest archipelago: some 17,000 islands
    across 1.9 million km² of land between the Indian and Pacific oceans, organised into 38 provinces and 514 regencies and cities.
    Nearly three in five Indonesians live in towns and cities, the median age is just under thirty, and the economy — Southeast Asia's
    largest — rests on coal, palm oil, manufacturing and a fast-growing digital sector. Every figure on this site carries its source
    and year; the <a href="#/sources">Sources page</a> lists each series and where it was published.</p>
  </section>`;
}
