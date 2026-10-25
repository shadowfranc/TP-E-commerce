const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

function setMenu(open) {
    menu.classList.toggle('open', open);
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
    hamburger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}

hamburger.addEventListener('click', () => {
    setMenu(!menu.classList.contains('open'));
});

// Ferme le menu quand on clique sur un lien
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
});

// Ferme le menu quand on clique en dehors
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        setMenu(false);
    }
});

// Ferme le menu avec la touche Echap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
});

// Ferme le menu si on repasse en affichage ordinateur
window.addEventListener('resize', () => {
    if (window.innerWidth > 940) setMenu(false);
});

// Année du footer
document.getElementById('year').textContent = new Date().getFullYear();
