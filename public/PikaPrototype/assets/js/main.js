// ============================================================
// PIKA HMTI — main.js
// Sistem klik/filter/search mengikuti versi yang sudah terbukti
// bekerja. TIDAK ada intercept pada <a> href.
// ============================================================

/* ── Theme (dark / light) ──────────────────────────────────── */
(function () {
  var t = localStorage.getItem('pika-theme');
  document.documentElement.setAttribute('data-theme', t || 'dark');
})();

function toggleTheme() {
  var html = document.documentElement;
  var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('pika-theme', next);
  _setIcon();
}

function _setIcon() {
  var btn = document.getElementById('btnTheme');
  if (!btn) return;
  var dark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = dark
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="17" height="17"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="17" height="17"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  btn.title = dark ? 'Mode Terang' : 'Mode Gelap';
}

document.addEventListener('DOMContentLoaded', _setIcon);

/* ── Filter Kategori ─────────────────────────────────────── */
var activeCategory = 'all';

function filterCat(category) {
  activeCategory = category;

  // Update filter chips di hero
  document.querySelectorAll('.fchip').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.cat === category);
  });

  applyFilters();
}

/* ── Search real-time ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  var inp = document.getElementById('searchInput');
  if (inp) inp.addEventListener('input', applyFilters);
});

/* ── Gabungkan filter + search ──────────────────────────── */
function applyFilters() {
  var inp     = document.getElementById('searchInput');
  var query   = inp ? inp.value.trim().toLowerCase() : '';
  var cards   = document.querySelectorAll('.card[data-category]');
  var visible = 0;

  cards.forEach(function (card) {
    var matchCat    = activeCategory === 'all' || card.dataset.category === activeCategory;
    var matchSearch = !query || card.innerText.toLowerCase().includes(query);
    var show        = matchCat && matchSearch;
    card.style.display = show ? 'block' : 'none';
    if (show) visible++;
  });

  var counter = document.getElementById('visibleCount');
  if (counter) counter.textContent = visible + ' item';

  var empty = document.getElementById('emptyState');
  if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}

/* ── Floating Narahubung FAB ─────────────────────────────── */
function toggleFab() {
  document.getElementById('fabTooltip').classList.toggle('show');
}

document.addEventListener('click', function (e) {
  var fab = document.getElementById('contactFab');
  var tip = document.getElementById('fabTooltip');
  if (fab && tip && !fab.contains(e.target)) {
    tip.classList.remove('show');
  }
});
