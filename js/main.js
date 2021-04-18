const hamburger = document.querySelector(".sitenav__toggler");
const navmenu = document.querySelector(".sitenav__list");
const body = document.querySelector(".site-main");


hamburger.addEventListener("click", () => {
 navmenu.classList.toggle("open");
 navmenu.classList.toggle("sitenav__list--open");
})


body.addEventListener("click", () => {
 navmenu.classList.remove("sitenav__list--open")
})