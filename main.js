// =====================================================================
// MENU MOBILE
// =====================================================================

// Botão de abrir/fechar
const navToggle = document.querySelector('.nav__toggle');

// Lista do menu
const navList = document.querySelector('.nav__list');

// Todos os links do menu
const navLinks = document.querySelectorAll('.nav__link');

// Abre/fecha o menu quando clicar no toggle
navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.contains('active');

  navList.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', !isOpen);
});

// Fecha o menu ao clicar em qualquer link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});


// =====================================================================
// ANIMAÇÕES ON-SCROLL
// =====================================================================

const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

