/* ============================================================
   MAIN.JS — Portfolio Template
   DO NOT EDIT unless you know JavaScript.
   ============================================================ */

/* ---- 1. NAVBAR: Shadow on scroll ---- */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});


/* ---- 2. SCROLL REVEAL: Sections fade in when scrolled to ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});


/* ---- 3. SKILL BARS: Animate bar width + counter number ---- */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card   = entry.target;
      const fill   = card.querySelector('.skills-fill');
      const angka  = card.querySelector('.angka');
      const target = parseInt(angka.dataset.target);
      const persen = card.dataset.persen;

      // Animate bar width
      fill.style.setProperty('--persen', persen + '%');

      // Animate counter from 0 to target
      let current = 0;
      const timer = setInterval(() => {
        current++;
        angka.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 20);

      skillObserver.unobserve(card);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-card').forEach(card => {
  skillObserver.observe(card);
});


/* ---- 4. BURGER MENU: Toggle mobile nav ---- */
const burger   = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});
