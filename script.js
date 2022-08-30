addEventListener('scroll', e =>{
  let header = document.querySelector('.header')
  let scroll = window.scrollY// let scroll = document.documentElement.scrollTop

  if (scroll >= 20) header.classList.add('header--move')
  else header.classList.remove('header--move')
})

const headerMenu = document.querySelector('.header__menu')
const headerNav = document.querySelector('.header__nav')
headerMenu.addEventListener('click', e=>{
  headerNav.classList.toggle('header__nav--show')
})

addEventListener('resize', e=>{
  headerNav.classList.remove('header__nav--show')
})