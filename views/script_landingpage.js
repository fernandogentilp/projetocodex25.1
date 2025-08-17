// ====== Theme handling (shared) ======
(function() {
  const root = document.documentElement;
  const STORAGE_KEY = 'theme';
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
  }

  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function resolveInitialTheme() {
    return getSavedTheme() || (prefersDark ? 'dark' : 'light');
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  // expose globally so onclick and other pages can reuse if needed
  window.toggleTheme = toggleTheme;
  applyTheme(resolveInitialTheme());

  // hook button
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();

// ====== Page-specific behavior (index) ======
const form = document.getElementById('form');
const nome = document.getElementById('nome');

if (sessionStorage.getItem('nome')) {
  nome.value = sessionStorage.getItem('nome');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  sessionStorage.setItem('nome', nome.value);
  window.location.href = 'bemvindo.html';
});