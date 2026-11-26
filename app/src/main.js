// main.js — Nusantara in Numbers boot and routing: five pages, hash
// routes so each is reached by a link and shared by its URL.

import { overviewView } from './views-overview.js';
import { peopleView } from './views-people.js';
import { economyView } from './views-economy.js';
import { provincesView, bindProvinces } from './views-provinces.js';
import { sourcesView } from './views-sources.js';

const view = document.getElementById('view');
const navLinks = document.querySelectorAll('nav a[data-route]');

const ROUTES = {
  '/': overviewView,
  '/people': peopleView,
  '/economy': economyView,
  '/provinces': provincesView,
  '/sources': sourcesView,
};

function currentRoute() {
  const hash = location.hash.replace(/^#/, '');
  return ROUTES[hash] ? hash : '/';
}

function render() {
  const route = currentRoute();
  view.innerHTML = ROUTES[route]();
  navLinks.forEach((a) => a.classList.toggle('on', a.dataset.route === route));
  if (route === '/provinces') bindProvinces(render);
  window.scrollTo(0, 0);
}

addEventListener('hashchange', render);
render();
