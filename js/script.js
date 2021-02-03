const topbarEl = document.getElementById('topbar');
const toTopEl = document.getElementById('toTop');
const toggleNavbarEl = document.getElementById('toggle-navbar');
const navbarUlEl = document.querySelector('.navbar-link');
const navbarEl = document.querySelector('.navbar');

const aboutEl = document.getElementById('about');
const servicesEl = document.getElementById('services');
const ourworksEl = document.getElementById('ourworks');
const footerEl = document.getElementById('footer');

window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset;

    scrollY > 500 ? toTopEl.classList.add('active-toTop') : toTopEl.classList.remove('active-toTop');

    toTopEl.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    });

    scrollY > 0 ? topbarEl.classList.add('active-topbar') : topbarEl.classList.remove('active-topbar');

    scrollY > 0 ? navbarEl.classList.add('active-navbar') : navbarEl.classList.remove('active-navbar');

});

$('.page-scroll').on('click', function (e) {
    e.preventDefault();

    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);

    $('body,html').animate({
        scrollTop: elemenTujuan.offset().top - 100
    }, 1250, 'easeInOutExpo')
});

toggleNavbarEl.addEventListener('click', function () {
    navbarUlEl.classList.toggle('active-navbar');
});
