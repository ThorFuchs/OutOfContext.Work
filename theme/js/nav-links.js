(function () {
  function injectLinks(links) {
    const navLinksContainer = document.querySelector('.navbar-links');
    if (!navLinksContainer || !links.length) return;

    links.forEach(({ text, href }) => {
      const a = document.createElement('a');
      a.textContent = text;
      a.href = href;
      a.className = 'nav-link';
      if (/^https?:\/\//i.test(href)) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      navLinksContainer.appendChild(a);
    });
  }

  function parseMarkdownLinks(md) {
    const lines = md.split(/\r?\n/);
    const out = [];
    const re = /\[([^\]]+)\]\(([^\)]+)\)/; // [text](href)
    for (const line of lines) {
      const m = line.match(re);
      if (m) out.push({ text: m[1].trim(), href: m[2].trim() });
    }
    return out;
  }

  async function loadLinks() {
    try {
      const res = await fetch('/resources/nav-links.html', { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load nav-links.html');
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const anchors = Array.from(doc.querySelectorAll('main a[href]'));
      const links = anchors.map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }));
      if (links.length) return links;

      // Fallback: try markdown source if HTML parsing found none
      const resMd = await fetch('/resources/nav-links.md', { cache: 'no-cache' });
      if (resMd.ok) {
        const md = await resMd.text();
        return parseMarkdownLinks(md);
      }
    } catch (e) {
      console.warn('Custom nav links not loaded:', e);
    }
    return [];
  }

  document.addEventListener('DOMContentLoaded', async () => {
    const links = await loadLinks();
    injectLinks(links);
  });
})();

