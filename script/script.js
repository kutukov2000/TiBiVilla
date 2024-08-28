let burger = document.querySelector('.burger');
let headerMenu = document.querySelector('.header__menu');
let body = document.body;

burger.addEventListener('click', function (event) {
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
});