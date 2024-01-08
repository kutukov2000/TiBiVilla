//Burger menu
$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});