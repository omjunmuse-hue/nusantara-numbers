// data.js — every figure the site shows, each with its source and year,
// from Indonesia's statistics agency (BPS), the World Bank, UNDP and
// APJII. Figures are the published ones, rounded as labelled; the
// Sources page lists each series and where it comes from.

/** Headline indicators for the overview's stat cards. */
export const HEADLINES = [
  { label: 'Population', value: '284.4 million', note: 'Mid-2024 estimate', source: 'BPS, 2024' },
  { label: 'Gross domestic product', value: 'US$1.40 trillion', note: 'Current prices', source: 'World Bank, 2024' },
  { label: 'GDP per person', value: 'US$4,919', note: 'Current prices', source: 'World Bank, 2024' },
  { label: 'Economic growth', value: '5.03%', note: 'GDP, year on year', source: 'BPS, 2024' },
  { label: 'Inflation', value: '1.57%', note: 'December, year on year', source: 'BPS, 2024' },
  { label: 'Unemployment', value: '4.91%', note: 'Open unemployment rate, August', source: 'BPS, 2024' },
  { label: 'Poverty rate', value: '8.57%', note: 'Share of population, September', source: 'BPS, 2024' },
  { label: 'Internet penetration', value: '79.5%', note: 'Share of population online', source: 'APJII, 2024' },
];

/** Population at each census and the latest estimate, millions. */
export const POPULATION_SERIES = [
  { year: 1971, value: 119.2 }, { year: 1980, value: 147.5 }, { year: 1990, value: 179.4 },
  { year: 2000, value: 206.3 }, { year: 2010, value: 237.6 }, { year: 2020, value: 270.2 },
  { year: 2024, value: 284.4 },
];

/** Real GDP growth, percent year on year (BPS). */
export const GROWTH_SERIES = [
  { year: 2019, value: 5.02 }, { year: 2020, value: -2.07 }, { year: 2021, value: 3.70 },
  { year: 2022, value: 5.31 }, { year: 2023, value: 5.05 }, { year: 2024, value: 5.03 },
];

/** Poverty rate, percent of population, September each year (BPS). */
export const POVERTY_SERIES = [
  { year: 2019, value: 9.22 }, { year: 2020, value: 10.19 }, { year: 2021, value: 9.71 },
  { year: 2022, value: 9.57 }, { year: 2023, value: 9.36 }, { year: 2024, value: 8.57 },
];

/** The people page's figures. */
export const PEOPLE = [
  { label: 'Median age', value: '29.9 years', source: 'BPS / UN estimates, 2024' },
  { label: 'Life expectancy at birth', value: '71 years', source: 'World Bank, 2023' },
  { label: 'Living in towns and cities', value: '58.6%', source: 'BPS, 2024' },
  { label: 'Aged 0–14', value: '24.9%', source: 'BPS, 2024' },
  { label: 'Aged 15–64', value: '68.9%', source: 'BPS, 2024' },
  { label: 'Aged 65 and over', value: '6.2%', source: 'BPS, 2024' },
  { label: 'Adult literacy', value: '96%', source: 'BPS, 2023' },
  { label: 'Human Development Index (IPM)', value: '74.4 of 100', source: 'BPS, 2023' },
  { label: 'People per km² of land', value: '149', source: 'BPS, 2024' },
];

/** The economy page's figures beyond the headlines. */
export const ECONOMY = [
  { label: 'Exports of goods', value: 'US$264.7 billion', source: 'BPS, 2024' },
  { label: 'Imports of goods', value: 'US$233.7 billion', source: 'BPS, 2024' },
  { label: 'Largest export', value: 'Coal & palm oil', source: 'BPS, 2024' },
  { label: 'Working-age population in work', value: '144.6 million employed', source: 'BPS, August 2024' },
  { label: 'Government debt', value: '39.2% of GDP', source: 'Ministry of Finance, 2024' },
  { label: 'Exchange rate (year average)', value: 'Rp 15,850 / US$', source: 'Bank Indonesia, 2024' },
];

/** All 38 provinces: capital, population in millions (BPS mid-2024
 * estimates, rounded), land area in km². Density is computed on the page. */
export const PROVINCES = [
  ['Aceh', 'Banda Aceh', 5.6, 57956], ['North Sumatra', 'Medan', 15.6, 72981],
  ['West Sumatra', 'Padang', 5.8, 42012], ['Riau', 'Pekanbaru', 6.7, 87024],
  ['Riau Islands', 'Tanjung Pinang', 2.2, 8202], ['Jambi', 'Jambi', 3.7, 50058],
  ['South Sumatra', 'Palembang', 8.9, 91592], ['Bengkulu', 'Bengkulu', 2.1, 19919],
  ['Lampung', 'Bandar Lampung', 9.4, 34624], ['Bangka Belitung', 'Pangkal Pinang', 1.5, 16424],
  ['Jakarta', 'Jakarta', 10.6, 664], ['West Java', 'Bandung', 49.9, 35378],
  ['Central Java', 'Semarang', 38.2, 32801], ['Yogyakarta', 'Yogyakarta', 3.8, 3133],
  ['East Java', 'Surabaya', 41.8, 47760], ['Banten', 'Serang', 12.4, 9663],
  ['Bali', 'Denpasar', 4.4, 5780], ['West Nusa Tenggara', 'Mataram', 5.6, 18572],
  ['East Nusa Tenggara', 'Kupang', 5.6, 48718], ['West Kalimantan', 'Pontianak', 5.9, 147307],
  ['Central Kalimantan', 'Palangka Raya', 2.8, 153564], ['South Kalimantan', 'Banjarbaru', 4.3, 38744],
  ['East Kalimantan', 'Samarinda', 4.0, 127347], ['North Kalimantan', 'Tanjung Selor', 0.7, 75467],
  ['North Sulawesi', 'Manado', 2.7, 13892], ['Central Sulawesi', 'Palu', 3.1, 61841],
  ['South Sulawesi', 'Makassar', 9.5, 46717], ['Southeast Sulawesi', 'Kendari', 2.8, 38068],
  ['Gorontalo', 'Gorontalo', 1.2, 11257], ['West Sulawesi', 'Mamuju', 1.5, 16787],
  ['Maluku', 'Ambon', 1.9, 46914], ['North Maluku', 'Sofifi', 1.4, 31982],
  ['West Papua', 'Manokwari', 0.6, 64521], ['Papua', 'Jayapura', 1.1, 82871],
  ['Central Papua', 'Nabire', 1.4, 61073], ['Highland Papua', 'Wamena', 1.5, 51153],
  ['South Papua', 'Merauke', 0.6, 117849], ['Southwest Papua', 'Sorong', 0.6, 39167],
].map(([name, capital, pop, area]) => ({ name, capital, pop, area }));

/** The sources page's register. */
export const SOURCES = [
  { name: 'BPS — Statistics Indonesia', what: 'Population estimates and censuses, GDP and growth, inflation, labour force, poverty, provincial figures', years: '1971–2024 series' },
  { name: 'World Bank, World Development Indicators', what: 'GDP in US dollars, GDP per person, life expectancy', years: '2023–2024' },
  { name: 'APJII (Indonesian Internet Service Providers Association)', what: 'Internet penetration survey', years: '2024' },
  { name: 'Bank Indonesia', what: 'Exchange-rate year average', years: '2024' },
  { name: 'Ministry of Finance, Republic of Indonesia', what: 'Government debt to GDP', years: '2024' },
];
