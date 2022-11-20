burger = document.querySelector('.burger')
navbar.classList.toggle('navbar')
navList.classList.toggle('navList')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
}