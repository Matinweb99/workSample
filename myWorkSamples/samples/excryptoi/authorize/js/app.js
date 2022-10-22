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
  let myBody = $('.container');
  myBody.classList.toggle('container--dark')
  let myDarkEl = $(".form-wrapper");
  myDarkEl.classList.toggle('form-wrapper--dark');
  let details = $All('.details')
  details.forEach(e => {
    e.classList.toggle('details--dark')
  });
  let detailsP = $All('.details-p')
  detailsP.forEach(e => {
    e.classList.toggle('details-p--dark')
  });
  let detailsPS = $All('.details-p-span')
  detailsPS.forEach(e => {
    e.classList.toggle('details-p-span--dark')
  });
  let noteP = $All('.note-p')
  noteP.forEach(e => {
    e.classList.toggle('note-p--dark')
  });
  let introductionP = $All('.introduction-p');
  introductionP.forEach((e)=>{
    e.classList.toggle('introduction-p--dark')
  })
  let notePS = $All('.note-p-span');
  notePS.forEach((e)=>{
    e.classList.toggle('note-p-span--dark')
  })
  let ruleT = $All('.rule-txt');
  ruleT.forEach((e)=>{
    e.classList.toggle('rule-txt--dark')
  })
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
})