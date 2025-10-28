//nav-scroll-opacity

const nav = document.querySelector('nav');

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

//menu

const menuBtn = document.getElementById('menu-btn');
const menuBlur = document.getElementById('menu-blur');
const menuList = document.getElementById('nav-list');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuBlur.classList.toggle('active');
  menuList.classList.toggle('active');
  
});