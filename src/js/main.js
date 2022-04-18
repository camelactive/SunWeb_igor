import "../styles/style.scss"
const baseUrl = "https://raw.githubusercontent.com/camelactive/SunWeb_igor/master/assets/assets.json";
let categoryList = fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setNavLinks(data);
        return data
    });

function setNavLinks(data) {
    let navBlock = document.querySelector('.header__nav_top');
    if (navBlock) {
        Object.entries(data).forEach(item => {
            if (item[1].status == true) {
                let navElenet = `<span class="header__middle_container_item"> <a href="">${item[1].name}</a></span>`
                navBlock.innerHTML += navElenet;
            }
        })
    }
}
let btnMenu = document.querySelector(".btn_menu");
let gridSection = document.querySelectorAll(".menu");
let neonSection = document.querySelectorAll(".neon");
let sliderSection = document.querySelector(".slider");
let menuImg = document.querySelector(".menu_img");
let cross = document.querySelector(".cross");
let headerTop = document.querySelector(".header__top");
let shimishimi = document.querySelector(".shimishimi");
let shimishimiGreen = document.querySelector(".shimishimi_green");
let adressAdd = document.querySelector(".adress_add");
let shimmingi = document.querySelector(".shimmingi");
let shoppingBag = document.querySelector(".shopping_bag");
let shoppingBagGreen = document.querySelector(".shopping_bag_green");
let summ = document.querySelector(".summ");
let headerNavTop = document.querySelector(".header__nav_top");
let headerNavTopTitle = document.querySelector(".header__nav_top_title");



btnMenu.addEventListener("click", BurgerMenu);
function BurgerMenu() {
    gridSection.forEach(element => {
        element.classList.toggle("burger_menu_hide")
    });
    neonSection.forEach(element => {
        element.classList.toggle("burger_menu_hide")
    });
    sliderSection.classList.toggle("burger_menu_hide");
    headerTop.classList.toggle("header__top_click");

    menuImg.classList.toggle("burger_menu_hide");

    shimishimi.classList.toggle("burger_menu_hide");
    shimishimiGreen.classList.toggle("burger_menu_hide");

    adressAdd.classList.toggle("adress_add_green");

    shimmingi.classList.toggle("shimmingi_green");

    shoppingBag.classList.toggle("burger_menu_hide");
    shoppingBagGreen.classList.toggle("burger_menu_hide");
    summ.classList.toggle("summ_green");

    headerNavTop.classList.toggle("header_nav_top_burger");   

    headerNavTopTitle.classList.toggle("header__nav_top_title_hide");
    

}
