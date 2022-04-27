let btnMenu = document.querySelector(".btn_menu");
let gridSection = document.querySelectorAll(".menu");
let neonSection = document.querySelectorAll(".neon");
let sliderSection = document.querySelector(".slider");
let menuImg = document.querySelector(".menu_img");
let headerTop = document.querySelector(".header__top");
let shimishimi = document.querySelector(".shimishimi");
let shimishimiGreen = document.querySelector(".shimishimi_green");
let adressAdd = document.querySelector(".adress_add");
let shimmingi = document.querySelector(".shimmingi");
let shoppingBag = document.querySelector(".shopping_bag");
let shoppingBagGreen = document.querySelector(".shopping_bag_green");
let summ = document.querySelector(".summ");
let headerNavTop = document.querySelector(".header__nav_top");
let footerMenu = document.querySelector(".footer");
let footerInfo = document.querySelector(".footer__info");
let headerTopLeftHide = document.querySelector(".header__top_left_hide");
let headerTopLeftHideGreen = document.querySelector(".header__top_left_hide_green");
let header = document.querySelector(".header");




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

    let headerNavTopTitle = document.querySelector(".header__nav_top_title");

    headerNavTopTitle.classList.toggle("header__nav_top_title_hide");
    let footerMenu = document.querySelector(".footer");
    footerMenu.classList.toggle("footer__hide");


    footerInfo.classList.toggle("burger_menu_hide");
    let footerBottom = document.querySelector(".footer__bottom");
    footerBottom.classList.toggle("footer__hide");


    headerTopLeftHide.classList.toggle("header__top_left_hide_green");
    headerTopLeftHideGreen.classList.toggle("header__top_left_hide_green");

    header.classList.toggle("box_shadow_none");
    let headerTopRightBurger = document.querySelector(".header__top_right");
    headerTopRightBurger.classList.toggle("header__top_right_burger");


    let headerMiddleContainerItem = document.querySelectorAll(".header__middle_container_item");
    headerMiddleContainerItem.forEach(element => {
        element.classList.toggle("header__middle_container_item_burger")
    });
    let bellRound = document.querySelector(".bell_round");
    bellRound.classList.toggle("bell_round_burger");

    let headerTopLeftMenu = document.querySelector(".header__top_left_menu");
    headerTopLeftMenu.classList.toggle("header__top_left_menu_burger")




}
