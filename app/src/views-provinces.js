// views-provinces.js — all 38 provinces in one sortable, searchable
// table. Click a column head to sort by it; density is computed from
// the population and land area on the row itself.

import { PROVINCES } from './data.js';

let sortKey = 'pop';
let sortDir = -1;
let query = '';

export function provincesView() {
  const rows = PROVINCES
    .map((p) => ({ ...p, density: Math.round((p.pop * 1e6) / p.area) }))
    .filter((p) => p.name.toLowerCase().includes(query) || p.capital.toLowerCase().includes(query))
    .sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : a[sortKey] < b[sortKey] ? -1 : 0) * sortDir);
  const head = (key, label) => `<th><button type="button" data-sort="${key}" class="th-btn">${label}${sortKey === key ? (sortDir === 1 ? ' ↑' : ' ↓') : ''}</button></th>`;
  return `
  <section class="card wide">
    <h2>The 38 provinces</h2>
    <p class="sub">Population: BPS mid-2024 estimates, in millions, rounded. Land area in km². Density is people per km²,
    computed from the two. West Java alone holds more people than Canada; Jakarta packs nearly 16,000 people into each km²,
    while much of Papua holds two or three. Click a heading to sort.</p>
    <p><label class="search">Find a province or capital
      <input id="prov-search" type="search" value="${query}" placeholder="e.g. Java, Medan, Papua"></label></p>
    <div class="table-wrap"><table class="prov">
      <thead><tr>${head('name', 'Province')}${head('capital', 'Capital')}${head('pop', 'Population (M)')}${head('area', 'Area (km²)')}${head('density', 'Density (/km²)')}</tr></thead>
      <tbody>
        ${rows.map((p) => `<tr><td><strong>${p.name}</strong></td><td>${p.capital}</td><td>${p.pop.toFixed(1)}</td><td>${p.area.toLocaleString('en-US')}</td><td>${p.density.toLocaleString('en-US')}</td></tr>`).join('') || '<tr><td colspan="5">No province matches that search.</td></tr>'}
      </tbody>
    </table></div>
    <p class="sub">${rows.length} of 38 provinces shown · populations sum to about 284 million, the national estimate.</p>
  </section>`;
}

/** Wire sorting and search after the view renders. */
export function bindProvinces(rerender) {
  document.querySelectorAll('[data-sort]').forEach((btn) => btn.addEventListener('click', () => {
    const key = btn.dataset.sort;
    if (sortKey === key) sortDir *= -1;
    else { sortKey = key; sortDir = key === 'name' || key === 'capital' ? 1 : -1; }
    rerender();
  }));
  const input = document.getElementById('prov-search');
  if (input) input.addEventListener('input', () => {
    query = input.value.trim().toLowerCase();
    rerender();
    const again = document.getElementById('prov-search');
    if (again) { again.focus(); again.setSelectionRange(again.value.length, again.value.length); }
  });
}
