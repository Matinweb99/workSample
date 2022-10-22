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
    let myBody = $('.my-container');
    myBody.classList.toggle('my-container--dark')
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
    let secNavLog = $('.sec-nav-element-login');
    secNavLog.classList.toggle('sec-nav-element-login--dark');
    $('.balance').classList.toggle('balance--dark');
    $('.wallet_deposits').classList.toggle('wallet_deposits--dark');
    $('.wallet_takes').classList.toggle('wallet_takes--dark');
    $All('.modal-body').forEach(e => {
        e.classList.toggle('modal-body--dark');
    });
    $All('.modal-header').forEach(e => {
        e.classList.toggle('modal-header--dark');
    });
    $All('.balance-title-h2').forEach(e => {
      e.classList.toggle('balance-title-h2--dark')
    })
    $All('.p--styled').forEach(e => {
      e.classList.toggle('p--styled--dark')
    })
  })