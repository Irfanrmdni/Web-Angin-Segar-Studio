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

    let wscroll = $(this).scrollTop();

    if (wscroll > $('.option').offset().top - 400) {
        $('.option').addClass('active-option');
    } else {
        $('.option').removeClass('active-option');
    }

    if (wscroll > $('.about').offset().top - 400) {
        $('.about').addClass('active-about');
    } else {
        $('.about').removeClass('active-about');
    }

    if (wscroll > $('.services').offset().top - 400) {
        $('.services').addClass('active-services');
    } else {
        $('.services').removeClass('active-services');
    }

    if (wscroll > $('.ourworks').offset().top - 400) {
        $('.ourworks').addClass('active-ourworks');
    } else {
        $('.ourworks').removeClass('active-ourworks');
    }

    if (wscroll > $('.client').offset().top - 400) {
        $('.client').addClass('active-client');
    } else {
        $('.client').removeClass('active-client');
    }

    if (wscroll > $('.testimonial').offset().top - 400) {
        $('.testimonial').addClass('active-testimonial');
    } else {
        $('.testimonial').removeClass('active-testimonial');
    }

    if (wscroll > $('.awards').offset().top - 400) {
        $('.awards').addClass('active-awards');
    } else {
        $('.awards').removeClass('active-awards');
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

