function $(query) {
    return document.querySelector(query);
}
function $All(query) {
    return document.querySelectorAll(query);
}
const showProductNum = $All('.show-product-num');
const addProductBtn = $All('.add-product-btn');
const delProductBtn = $All('.del-product-btn');
const cartSvg = $All('.box_img-wrapper_svg');
const prWrapper = $('.product-wrapper');
const bottmNavItem = [...$All('.bottom-nav_item')];
const bottmNavItemImg = $All('.bottom-nav_item-img');
const bottmNavItemTxt = $All('.bottom-nav_item-text');
document.addEventListener('DOMContentLoaded',main);

addProductBtn.forEach((e, idx) => {
    e.addEventListener('click', (el) => {
        calcIt(showProductNum[idx], 1, cartSvg[idx])
    }, false);
})
delProductBtn.forEach((e, idx, i) => {
    e.addEventListener('click', (el) => {
        calcIt(showProductNum[idx], -1, cartSvg[idx])
    }, false);
})
function calcIt(element, value, cartIdx) {
    let num = element.innerHTML;
    element.innerHTML = (+num) + value;
    if (element.innerHTML < 0) {
        element.innerHTML = 0;
    } else if (element.innerHTML > 0) {
        cartIdx.classList.add("box_img-wrapper_svg--styled");
        element.classList.add("show-product-num--styled");
    } else if (element.innerHTML == 0) {
        cartIdx.classList.remove("box_img-wrapper_svg--styled");
        element.classList.remove("show-product-num--styled");
    }
}
//
bottmNavItem.forEach((e,idx) => {
    bottmNavItem[idx].addEventListener('click', (e)=> {
        prWrapper.classList.toggle('product-wrapper--open');
        bottmNavItem[idx].classList.toggle('bottom-nav_item--clicked');
        bottmNavItemImg[idx].classList.toggle('bottom-nav_item-img--rotate');
        bottmNavItemTxt[idx].classList.toggle('translate-text');
    })
})
function main() {

    function checkNav() {
        bottmNavItem.forEach((e, idx) => {
            if (bottmNavItem[idx].classList.contains('bottom-nav_item--clicked')) {
                bottmNavItemImg[idx].style.cursor = 'pointer';
            }
        })
    }
    checkNav();
}