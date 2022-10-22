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

function $(query) {
    return document.querySelector(query);
  };
  function $All(query) {
    return document.querySelectorAll(query);
  };
  let myInput = $('.dark-theme');
  myInput.addEventListener('click',()=>{
    let myCircle = $('.circle');
    myCircle.classList.toggle('circle--dark');
    $('.my-container').classList.toggle('my-container--dark');
    let navEl = $All('.nav-element');
    navEl.forEach((e)=>{
      e.classList.toggle('nav-element--dark')
    })
    let myNav = $("nav");
    myNav.classList.toggle('nav--dark');
    let myHeader = $('header');
    myHeader.classList.toggle('header--dark');
    let secNav = $('.sec-nav-element');
    secNav.classList.toggle('sec-nav-element--dark');
    $('.sec-nav-element-login').classList.toggle('sec-nav-element-login--dark');
    $('.title-h1').classList.toggle('title-h1--dark')
    $All('.rule-item').forEach(e => {
        e.classList.toggle('rule-item--dark')
    });
    $All('p').forEach(e => {
      if(e.classList.contains('not--dark')) {
        $('.my-container').classList.toggle('my-container--dark2');
      } else {
        e.classList.toggle('p--dark')
      }
    })
  })