//nav-scroll-opacity

const nav = document.querySelector('nav');

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});