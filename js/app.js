const header = document.getElementById('header')
const burger = document.getElementById('burger')
const burgerClose = document.getElementsByClassName('x')
burger.addEventListener('click', () => {
    header.classList.add('opened')
})
burgerClose[0].addEventListener('click', () => {
    header.classList.remove('opened')
})
console.log('pidor')