// menu.js - Lógica del menú hamburguesa
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', nav.classList.contains('active') ? 'true' : 'false');
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
// Formulario de contacto
const form = document.querySelector('.formulario');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // evita la recarga

        const data = new FormData(form);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data
            });

            const result = await response.json();

            if (result.success) {
                mostrarMensaje('✅ Mensaje enviado. Te respondo en 24 horas.', 'exito');
                form.reset();
            } else {
                mostrarMensaje('❌ Hubo un error. Intentá de nuevo.', 'error');
            }
        } catch {
            mostrarMensaje('❌ Sin conexión. Intentá más tarde.', 'error');
        }
    });
}

function mostrarMensaje(texto, tipo) {
    const existing = document.querySelector('.form-mensaje');
    if (existing) existing.remove();

    const msg = document.createElement('p');
    msg.className = `form-mensaje ${tipo}`;
    msg.textContent = texto;
    form.insertAdjacentElement('afterend', msg);

    setTimeout(() => msg.remove(), 5000);
}