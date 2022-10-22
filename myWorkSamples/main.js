const $ = document;
let myBtn = $.querySelector('.menu-wrapper');
myBtn.addEventListener('click',(e)=>{
    let myFirstSpan = $.querySelector('.menu_first-arr');
    let mySecondSpan = $.querySelector('.menu_second-arr');
    let myThirdpan = $.querySelector('.menu_third-arr');
    myFirstSpan.classList.toggle('menu_first-arr--open');
    mySecondSpan.classList.toggle('menu_second-arr--open');
    myThirdpan.classList.toggle('menu_third-arr--open');
    let myHamMenu = $.querySelector('.ham-menu');
    myHamMenu.classList.toggle('ham-menu--open')
})