const button = document.getElementsByClassName('hamburger')
const navbarItems = document.getElementsByClassName('navbar-items')

button[0].addEventListener('click', () => {
    navbarItems[0].classList.toggle('active')
})