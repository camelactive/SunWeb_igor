let bellRoundCount = document.querySelector(".js-bell_round-count");
let shoppingBagSumm = document.querySelector(".js-summ");
let gridCardNewPrices = document.querySelectorAll(".grid_card_newprice");
let shoppingBagAndRound = document.querySelector(".shopping_bag_and_round");
let shoppingBagClickList = document.querySelector(".js-shopping_bag_click");
let shoppingBagClickHide = document.querySelector(".shopping_bag_click_hide");

bellRoundCount.textContent = 0;
shoppingBagSumm.textContent = "0 ₽";

bellRoundCount.textContent = localStorage.getItem("count");
shoppingBagSumm.textContent = localStorage.getItem("summ");

let priceSumm = 0;
let countSumm = 0;
let productsList = [];
if (JSON.parse(localStorage.getItem("productsList"))) {
    productsList = JSON.parse(localStorage.getItem("productsList"))
    for (let i = 0; i < productsList.length; i++) {
        shoppingBagClickList.innerHTML +=
            `<div>Price - ${productsList[i]}</div>`
    }
}

function AddProduct(product) {

    priceSumm = Number(shoppingBagSumm.textContent) + Number(product.target.innerText);
    countSumm = Number(bellRoundCount.textContent) + 1;
    bellRoundCount.textContent = `${countSumm}`
    shoppingBagSumm.textContent = `${priceSumm}`
    localStorage.setItem("summ", priceSumm);
    localStorage.setItem("count", countSumm);
    let countity = 1;
    let products = [product.path[0].innerText, product.path[0].dataset.name, countity];
    productsList.push(products)
    localStorage.setItem("productsList", JSON.stringify(productsList));
    shoppingBagClickList.innerHTML +=
        `<div>Price - ${product.path[0].innerText},${product.path[0].dataset.name},${countity}</div>`

}

gridCardNewPrices.forEach((element) => {
    element.addEventListener("click", AddProduct);
})

shoppingBagAndRound.addEventListener("click", ShoppingBagClick);

function ShoppingBagClick() {
    shoppingBagClickHide.classList.toggle("shopping_bag_click_hide");
}