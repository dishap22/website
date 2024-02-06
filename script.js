const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

function toggleNavMenu() {
    navMenu.classList.toggle('show-menu');
}

if (navToggle) {
    navToggle.addEventListener('click', toggleNavMenu);
}

if (navClose) {
    navClose.addEventListener('click', toggleNavMenu);
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const themeButton = document.getElementById('theme-change')
const darkTheme = 'dark-theme'

const selectedTheme = localStorage.getItem('selected-theme')

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
})

function incrementLikeCounter1() {
    let likeCounter1 = parseInt(localStorage.getItem('likeCounter1') || 0);
    likeCounter1++;
    localStorage.setItem('likeCounter1', likeCounter1);
    document.querySelector('.like-counter1').textContent = likeCounter1;
}

document.addEventListener('DOMContentLoaded', function() {
    let likeCounter1 = parseInt(localStorage.getItem('likeCounter1') || 0);
    document.querySelector('.like-counter1').textContent = likeCounter1;
});

document.querySelector('.blog-page__like').addEventListener('click', function() {
    incrementLikeCounter1();
});

function incrementLikeCounter2() {
    let likeCounter2 = parseInt(localStorage.getItem('likeCounter2') || 0);
    likeCounter2++;
    localStorage.setItem('likeCounter2', likeCounter2);
    document.querySelector('.like-counter2').textContent = likeCounter2;
}

document.addEventListener('DOMContentLoaded', function() {
    let likeCounter2 = parseInt(localStorage.getItem('likeCounter2') || 0);
    document.querySelector('.like-counter2').textContent = likeCounter2;
});

document.querySelector('.blog-page__like2').addEventListener('click', function() {
    incrementLikeCounter2();
});