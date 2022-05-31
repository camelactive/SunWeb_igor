// let bellRoundCount = document.querySelector(".js-bell_round-count");
// let shoppingBagSumm = document.querySelector(".js-summ");
// let gridCardNewPrices = document.querySelectorAll(".grid_card_newprice");
// let shoppingBagAndRound = document.querySelector(".shopping_bag_and_round");
// let shoppingBagClickList = document.querySelector(".js-shopping_bag_click");
// let shoppingBagClickHide = document.querySelector(".shopping_bag_click_hide");
// bellRoundCount.textContent = 0;
// shoppingBagSumm.textContent = "0 ₽";
// bellRoundCount.textContent = localStorage.getItem("count");
// shoppingBagSumm.textContent = localStorage.getItem("summ");
// let priceSumm = 0;
// let countSumm = 0;

// function AddProduct(product) {

//     priceSumm = Number(shoppingBagSumm.textContent) + Number(product.target.innerText);
//     countSumm = Number(bellRoundCount.textContent) + 1;
//     bellRoundCount.textContent = `${countSumm}`
//     shoppingBagSumm.textContent = `${priceSumm}`
//     localStorage.setItem("summ", priceSumm);
//     localStorage.setItem("count", countSumm);

// }
// gridCardNewPrices.forEach((element) => {
//     element.addEventListener("click", AddProduct);
// })


// /////////Клик функция отображения корзины
// shoppingBagAndRound.addEventListener("click", ShoppingBagClick);

// function ShoppingBagClick() {
//     shoppingBagClickHide.classList.toggle("shopping_bag_click_hide");

// }
// shoppingBagClickList.innerHTML = `<button type = button class ="clear_button js-clear-button">clear</button>`
// /////////Клик функция отображения корзины



//     let clearButton = document.querySelector(".js-clear-button");
//     clearButton.addEventListener("click", DeleteProducts)
//     function DeleteProducts() {
//         console.log("click")
//         let bellRoundCount = document.querySelector(".js-bell_round-count");
//         let shoppingBagSumm = document.querySelector(".js-summ");
//         let priceSumm = 0;
//         let countSumm = 0;
//         localStorage.setItem("summ", priceSumm);
//         localStorage.setItem("count", countSumm);
//         bellRoundCount.textContent = localStorage.getItem("count");
//         shoppingBagSumm.textContent = localStorage.getItem("summ");
//         localStorage.clear()
//         shoppingBagClickList.innerHTML = `<button type = button class ="clear_button js-clear-button">clear</button>`
//     }

// }