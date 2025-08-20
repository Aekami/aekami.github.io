(function initTheme() {
  const stored = localStorage.getItem('theme'); // 'light' | 'dark' | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');

  // Apply before paint
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelector('meta[name="color-scheme"]') ||
    document.head.insertAdjacentHTML('beforeend', '<meta name="color-scheme" content="light dark">');
})();

function swapTheme(btn) {
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  if (btn) btn.setAttribute('aria-pressed', String(next === 'dark'));
}