// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));


// ── ACTIVE NAV HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${current}`;
        link.style.color = isActive ? 'var(--ink)' : '';
    });
});