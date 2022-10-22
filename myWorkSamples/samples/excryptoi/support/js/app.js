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
    myBody.classList.toggle('my-container--dark');
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
    let myTicket = $All('.ticket-item');
    myTicket.forEach((e)=>{
      e.classList.toggle('ticket-item--dark')
    })
    let myModalHeader = $All('.modal-header');
    myModalHeader.forEach((e)=>{
      e.classList.toggle('modal-header--dark')
    })
    let myModalBody = $All('.modal-body');
    myModalBody.forEach((e)=>{
      e.classList.toggle('modal-body--dark')
    })
    let myTextarea = $('textarea');
    myTextarea.classList.toggle('textarea--dark')
    $All('.p-h2-styled').forEach(e => {
      e.classList.toggle('p-h2--dark')
    })
  })
