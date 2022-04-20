let bellRoundCount = document.querySelector(".js-bell_round-count");
let shoppingBagSumm = document.querySelector(".js-summ");
let gridCardNewPrices = document.querySelectorAll(".grid_card_newprice");

bellRoundCount.textContent = 0;
shoppingBagSumm.textContent = "0 ₽";



bellRoundCount.textContent = localStorage.getItem("count");
shoppingBagSumm.textContent = localStorage.getItem("summ");
// console.log(gridCardNewPrices)
let priceSumm = 0;
let countSumm = 0;
function Test(target) {
    
    priceSumm = Number(shoppingBagSumm.textContent) + Number(target.target.innerText);
    countSumm = Number(bellRoundCount.textContent) + 1;
    // console.log(target.target.innerText);
    bellRoundCount.textContent = `${countSumm}`
    shoppingBagSumm.textContent = `${priceSumm}`
    console.log(`priceSumm = ${priceSumm}`)
    console.log(`countSumm = ${countSumm}`)
    localStorage.setItem("summ",priceSumm);
    localStorage.setItem("count",countSumm)
}

gridCardNewPrices.forEach((element) => {
    element.addEventListener("click",Test);
})