//hide menu when display is mobile
const navToggle = document.querySelector('#menu-toggle')
const navi = document.querySelector('nav')

navToggle.addEventListener(
    "click", () => {
        navi.classList.toggle('open')
    }
)