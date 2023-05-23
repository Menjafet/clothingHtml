//hide menu when display is mobile
const navToggle = document.querySelector('#menu-toggle')
const navi = document.querySelector('nav')
const navIcon = document.querySelectorAll('.nav-icon')
const hamburger = document.querySelector('#menu-toggle')

navToggle.addEventListener(
    'click', () => {
        navi.classList.toggle('open');
        navIcon.forEach(icon => {
            icon.classList.toggle('hidden')
        })
    })
window.addEventListener('resize', () => {
    if(document.body.clientWidth > 720){
    navi.classList.remove('open');
    navIcon.forEach(icon, () => {
        icon.classList.add('hidden')
    });
    hamburger.classList.remove('hidden')
    }
});    