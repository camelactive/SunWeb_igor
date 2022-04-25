let bellRoundCount = document.querySelector(".js-bell_round-count");
let shoppingBagSumm = document.querySelector(".js-summ");
let gridCardNewPrices = document.querySelectorAll(".grid_card_newprice");
bellRoundCount.textContent = 0;
shoppingBagSumm.textContent = "0 ₽";
bellRoundCount.textContent = localStorage.getItem("count");
shoppingBagSumm.textContent = localStorage.getItem("summ");
let priceSumm = 0;
let countSumm = 0;
function AddProduct(target) {

    priceSumm = Number(shoppingBagSumm.textContent) + Number(target.target.innerText);
    countSumm = Number(bellRoundCount.textContent) + 1;
    bellRoundCount.textContent = `${countSumm}`
    shoppingBagSumm.textContent = `${priceSumm}`
    console.log(`priceSumm = ${priceSumm}`)
    console.log(`countSumm = ${countSumm}`)
    localStorage.setItem("summ", priceSumm);
    localStorage.setItem("count", countSumm)
}
gridCardNewPrices.forEach((element) => {
    element.addEventListener("click", AddProduct);
})





let shoppingBagAndRoundOpen = false;
let shoppingBagAndRound = document.querySelector(".shopping_bag_and_round");
shoppingBagAndRound.addEventListener("click", ShoppingBagAndRoundOpen);
function ShoppingBagAndRoundOpen() {
    if (shoppingBagAndRoundOpen == false) {
        shoppingBagAndRoundOpen = true;
        shoppingBagAndRound.innerHTML += ` 
    <div class ="shopping_bagandround_open">Корзина</div> `}
    else {shoppingBagAndRoundOpen = false; 
        shoppingBagAndRound.innerHTML = `
    <a href="#"> 
    <img class="shopping_bag" src="./src/images/shopping-bag.png" alt="shopping-bag">
    <img class="shopping_bag_green burger_menu_hide" src="./src/images/shopping-bag_green.svg" alt="shopping-bag">
</a>
<a href="#">
    <div class="bell_round js-bell_round-count">${countSumm}</div>
</a>` }
}