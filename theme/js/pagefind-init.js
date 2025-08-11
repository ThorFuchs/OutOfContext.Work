function ensurePagefindAssets() {
  return new Promise((resolve) => {
    const head = document.head;
    if (!document.getElementById('pagefind-ui-css')) {
      const l = document.createElement('link');
      l.id = 'pagefind-ui-css';
      l.rel = 'stylesheet';
      l.href = '/_pagefind/pagefind-ui.css';
      head.appendChild(l);
    }
    if (!document.getElementById('pagefind-js')) {
      const s1 = document.createElement('script');
      s1.id = 'pagefind-js';
      s1.src = '/_pagefind/pagefind.js';
      head.appendChild(s1);
    }
    if (!document.getElementById('pagefind-ui-js')) {
      const s2 = document.createElement('script');
      s2.id = 'pagefind-ui-js';
      s2.src = '/_pagefind/pagefind-ui.js';
      head.appendChild(s2);
    }
    let tries = 0;
    const maxTries = 60; // ~6s
    const iv = setInterval(() => {
      if (typeof window.PagefindUI === 'function') {
        clearInterval(iv);
        resolve();
      } else if (++tries >= maxTries) {
        clearInterval(iv);
        resolve();
      }
    }, 100);
  });
}

function initSearchAt(selector, options) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (typeof window.PagefindUI !== 'function') return;
  new window.PagefindUI(Object.assign({
    element: selector,
    showSubResults: true,
    showImages: false,
    resetStyles: false
  }, options || {}));
}

function injectNavSearch() {
  const barRight = document.querySelector('#menu-bar .right-buttons');
  if (!barRight || document.getElementById('nav-search')) return;
  const container = document.createElement('div');
  container.id = 'nav-search';
  container.className = 'nav-search';
  // Insert before the repo icon
  const repo = barRight.querySelector('#git-repository-button');
  if (repo && repo.parentElement) {
    barRight.insertBefore(container, repo.parentElement);
  } else {
    barRight.appendChild(container);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Always try to inject a nav search box
  injectNavSearch();
  ensurePagefindAssets().then(() => {
    initSearchAt('#nav-search', { showSubResults: false, autofocus: false, translations: { placeholder: 'Search' } });
    // Initialize page-level search if present
    initSearchAt('#search', { autofocus: true, translations: { placeholder: 'Search' } });
  });
});
