// Navbar Scroll
window.onscroll = function(){
    const headerText = document.querySelector('.header-text')
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav ){
        headerText.classList.add('navbar-scroll')
    } else {
        headerText.classList.remove('navbar-scroll')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})