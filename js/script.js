const topbar = document.querySelector('.topbar');
const navbarLink = document.querySelector('.navbar-link');
const toTop = document.querySelector('.toTop');
const burgerMenu = document.getElementById('toggle-navbar');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', function () {
    navbarLink.classList.toggle('active-navbar');
});

toTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 300) {
        toTop.classList.add('active-toTop');
    } else {
        toTop.classList.remove('active-toTop');
    }

    if (window.pageYOffset > 0) {
        topbar.classList.add('active-topbar');
        navbar.classList.add('active-navbar');
    } else {
        topbar.classList.remove('active-topbar');
        navbar.classList.remove('active-navbar');
    }



});


$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 100
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

