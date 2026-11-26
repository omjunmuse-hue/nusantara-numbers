// charts.js — dependency-free SVG charts drawn from the data module:
// a line for long series (population, poverty) and bars for growth,
// which swings around zero.

/** A line chart with end labels: points = [{year, value}]. */
export function lineChart(points, { color = '#a6192e', unit = '', height = 190 } = {}) {
  const w = 560, pad = 34;
  const min = Math.min(...points.map((p) => p.value));
  const max = Math.max(...points.map((p) => p.value));
  const lo = min - (max - min) * 0.15, hi = max + (max - min) * 0.1;
  const x = (i) => pad + (i / (points.length - 1)) * (w - pad * 2);
  const y = (v) => height - 26 - ((v - lo) / (hi - lo)) * (height - 48);
  const path = points.map((p, i) => `${i ? 'L' : 'M'} ${x(i).toFixed(1)} ${y(p.value).toFixed(1)}`).join(' ');
  const dots = points.map((p, i) => `<circle cx="${x(i)}" cy="${y(p.value)}" r="3.4" fill="${color}"/>`).join('');
  const labels = points.map((p, i) => `<text x="${x(i)}" y="${height - 8}" text-anchor="middle" font-size="11.5" fill="#5a6579">${p.year}</text>`).join('');
  const first = points[0], last = points[points.length - 1];
  return `<svg viewBox="0 0 ${w} ${height}" width="100%" role="img" aria-label="Line chart from ${first.year} to ${last.year}">
    <path d="${path}" fill="none" stroke="${color}" stroke-width="2.6"/>${dots}${labels}
    <text x="${x(0)}" y="${y(first.value) - 10}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#22304a">${first.value}${unit}</text>
    <text x="${x(points.length - 1)}" y="${y(last.value) - 10}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#22304a">${last.value}${unit}</text>
  </svg>`;
}

/** Vertical bars around a zero line, for growth rates. */
export function growthBars(points, height = 190) {
  const w = 560, pad = 30;
  const max = Math.max(...points.map((p) => Math.abs(p.value))) * 1.15;
  const zeroY = height / 2 + 8;
  const bw = 44, gap = (w - pad * 2 - bw * points.length) / Math.max(1, points.length - 1);
  const bars = points.map((p, i) => {
    const x = pad + i * (bw + gap);
    const bh = (Math.abs(p.value) / max) * (height / 2 - 26);
    const y = p.value >= 0 ? zeroY - bh : zeroY;
    const color = p.value >= 0 ? '#2e7d4f' : '#a6192e';
    return `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="3" fill="${color}"/>
      <text x="${x + bw / 2}" y="${p.value >= 0 ? y - 6 : y + bh + 15}" text-anchor="middle" font-size="12" font-weight="700" fill="#22304a">${p.value}%</text>
      <text x="${x + bw / 2}" y="${height - 4}" text-anchor="middle" font-size="11.5" fill="#5a6579">${p.year}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${w} ${height}" width="100%" role="img" aria-label="Bar chart of yearly growth">
    <line x1="${pad - 8}" y1="${zeroY}" x2="${w - pad + 8}" y2="${zeroY}" stroke="#98a2b3" stroke-width="1.4"/>${bars}</svg>`;
}
