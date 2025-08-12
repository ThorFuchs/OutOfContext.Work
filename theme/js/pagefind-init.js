function ensurePagefindAssets() {
  return new Promise(async (resolve) => {
    const head = document.head;
    const pathToRoot = window.path_to_root || '';
    
    console.log('Pagefind init: Path to root:', pathToRoot);
    
    // Load CSS
    if (!document.getElementById('pagefind-ui-css')) {
      const l = document.createElement('link');
      l.id = 'pagefind-ui-css';
      l.rel = 'stylesheet';
      l.href = pathToRoot + '_pagefind/pagefind-ui.css';
      console.log('Pagefind init: Loading CSS from:', l.href);
      head.appendChild(l);
    }
    
    // Load scripts sequentially with proper error handling
    try {
      // Load pagefind.js first
      if (!document.getElementById('pagefind-js')) {
        await new Promise((scriptResolve, scriptReject) => {
          const s1 = document.createElement('script');
          s1.id = 'pagefind-js';
          s1.src = pathToRoot + '_pagefind/pagefind.js';
          console.log('Pagefind init: Loading pagefind.js from:', s1.src);
          s1.onload = () => {
            console.log('Loaded pagefind.js successfully');
            scriptResolve();
          };
          s1.onerror = () => {
            console.error('Failed to load pagefind.js');
            scriptReject();
          };
          head.appendChild(s1);
        });
      }
      
      // Then load pagefind-ui.js
      if (!document.getElementById('pagefind-ui-js')) {
        await new Promise((scriptResolve, scriptReject) => {
          const s2 = document.createElement('script');
          s2.id = 'pagefind-ui-js';
          s2.src = pathToRoot + '_pagefind/pagefind-ui.js';
          console.log('Pagefind init: Loading pagefind-ui.js from:', s2.src);
          s2.onload = () => {
            console.log('Loaded pagefind-ui.js successfully');
            // Give it a moment to initialize
            setTimeout(() => {
              console.log('PagefindUI type after load:', typeof window.PagefindUI);
              scriptResolve();
            }, 100);
          };
          s2.onerror = () => {
            console.error('Failed to load pagefind-ui.js');
            scriptReject();
          };
          head.appendChild(s2);
        });
      }
      
      resolve();
    } catch (error) {
      console.error('Failed to load Pagefind assets:', error);
      resolve(); // Continue anyway
    }
  });
}

function initSearchAt(selector, options) {
  console.log('Pagefind init: Trying to init search at', selector);
  const el = document.querySelector(selector);
  if (!el) {
    console.log('Pagefind init: Element not found:', selector);
    return;
  }
  if (typeof window.PagefindUI !== 'function') {
    console.log('Pagefind init: PagefindUI not available');
    return;
  }
  console.log('Pagefind init: Creating PagefindUI instance at', selector);
  new window.PagefindUI(Object.assign({
    element: selector,
    showSubResults: true,
    showImages: false,
    resetStyles: false
  }, options || {}));
  console.log('Pagefind init: PagefindUI created successfully');
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
  console.log('Pagefind init: DOMContentLoaded fired');
  const navDiv = document.querySelector('#nav-pagefind');
  console.log('Pagefind init: nav-pagefind div found?', navDiv);
  
  // Check if scripts are already present
  const existingScript = document.querySelector('script[src*="pagefind"]');
  console.log('Existing pagefind scripts:', existingScript);
  
  // First, let's check if the pagefind files are accessible
  fetch('/_pagefind/pagefind.js')
    .then(response => {
      console.log('Pagefind.js fetch response:', response.status, response.ok);
      if (!response.ok) {
        console.error('Pagefind files not found at /_pagefind/');
        // Try alternative path
        return fetch(window.path_to_root + '_pagefind/pagefind.js');
      }
      return response;
    })
    .then(response => {
      console.log('Final pagefind.js status:', response.status);
      // Now try to load the assets
      return ensurePagefindAssets();
    })
    .then(() => {
      console.log('Pagefind init: Assets loaded, PagefindUI available?', typeof window.PagefindUI);
      console.log('Window.PagefindUI:', window.PagefindUI);
      console.log('Window.Pagefind:', window.Pagefind);
      
      // Initialize search in the navbar div we added in the template
      initSearchAt('#nav-pagefind', { showSubResults: false, autofocus: false, translations: { placeholder: 'Search' } });
      // Initialize page-level search if present
      initSearchAt('#search', { autofocus: true, translations: { placeholder: 'Search' } });
    })
    .catch(error => {
      console.error('Failed to ensure Pagefind assets:', error);
    });
});
