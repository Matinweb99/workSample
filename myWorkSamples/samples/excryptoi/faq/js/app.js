//scroll

let lastScrollTop = 0;
navbar = document.getElementById('nav');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top='-8rem';
    } else {
        navbar.style.top='0';
    }
    lastScrollTop = scrollTop;
});