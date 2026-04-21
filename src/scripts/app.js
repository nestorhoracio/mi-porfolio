// menu.js - Lógica del menú hamburguesa
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Tema claro/oscuro
const themeToggle = document.getElementById('theme-toggle');

// Aplicar tema guardado al cargar la página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Cambiar tema al hacer click
themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});