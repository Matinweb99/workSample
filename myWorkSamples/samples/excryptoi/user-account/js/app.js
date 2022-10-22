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
    secNavLog.classList.toggle('sec-nav-element-login--dark')
    let myDarkE = $All('.subsets_num,.subsetcode_code,.subset-profit_desc,.card_body');
    myDarkE[0].classList.toggle('subsets_num--dark')
    myDarkE[1].classList.toggle('subsetcode_code--dark')
    myDarkE[2].classList.toggle('subset-profit_desc--dark')
    myDarkE[3].classList.toggle('card_body--dark')
    let subP = $All('.sub-p');
    subP.forEach((e)=>{
      e.classList.toggle('sub-p--dark')
    })
    let doneSub = $All('.trade-done_sub');
    doneSub.forEach((e)=>{
      e.classList.toggle('trade-done_sub--dark')
    })
    let undoneSub = $All('.trade-undone_sub');
    undoneSub.forEach((e)=>{
      e.classList.toggle('trade-undone_sub--dark')
    })
    $All('p').forEach(e => {
      if(e.classList.contains('not--dark')) {
        $('.my-container').classList.toggle('my-container--dark2');
      } else {
        e.classList.toggle('p--dark')
      }
    })
    $All('h3').forEach(e => {
      e.classList.toggle('h3--dark')
    })
    $All('.h2--styled').forEach(e => {
      e.classList.toggle('h2--styled--dark')
    })
  })