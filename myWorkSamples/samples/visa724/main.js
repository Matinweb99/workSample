function menu() {
    let myMenu = document.getElementById("menu");
    myMenu.classList.toggle("open-menu");
    let firstSpan = document.querySelector(".ham-menu-1")
    firstSpan.classList.toggle('ham-menu-1-action')
    let secondSpan = document.querySelector(".ham-menu-2")
    secondSpan.classList.toggle('ham-menu-2-action')
    let thirdSpan = document.querySelector(".ham-menu-3")
    thirdSpan.classList.toggle('ham-menu-3-action')
}
function invest() {
    let mySubMenu = document.getElementById("sub-menu");
    mySubMenu.classList.toggle("open-submenu")
}
function phoning() {
    let mySubMenu = document.getElementById("sub-menu-2");
    mySubMenu.classList.toggle("open-submenu")
}
function openSmenu() {
    let mySmenu = document.getElementById("smenu");
    mySmenu.classList.toggle("open-smenu");
}
function openSmenu2() {
    let mySmenu = document.getElementById("smenu-2");
    mySmenu.classList.toggle("open-smenu");
}
function usa() {
    let myEl = document.getElementById("america");
    myEl.classList.remove("d-none");
    let mySecEl = document.getElementById("europe");
    mySecEl.classList.add("d-none")
    let myThEl = document.getElementById("ocean");
    myThEl.classList.add("d-none");
}
function eur() {
    let myEl = document.getElementById("america");
    myEl.classList.add("d-none");
    let mySecEl = document.getElementById("europe");
    mySecEl.classList.remove("d-none")
    let myThEl = document.getElementById("ocean");
    myThEl.classList.add("d-none");
}
function oce() {
    let myEl = document.getElementById("america");
    myEl.classList.add("d-none");
    let mySecEl = document.getElementById("europe");
    mySecEl.classList.add("d-none");
    let myThEl = document.getElementById("ocean");
    myThEl.classList.remove("d-none");
}
