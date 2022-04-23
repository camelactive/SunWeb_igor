// // Отрисовка из локал стореджа
// // if (JSON.parse(localStorage.getItem("productsList"))) {
// //     productsList = JSON.parse(localStorage.getItem("productsList"))
// //     for (let i = 0; i < productsList.length; i++) {
// //         shoppingBagClickList.innerHTML +=
// //             `<div>Price - ${productsList[i]}</div>`
// //     }
// // }

// function AddProduct(product) {

//     priceSumm = Number(shoppingBagSumm.textContent) + Number(product.target.innerText);
//     countSumm = Number(bellRoundCount.textContent) + 1;
//     bellRoundCount.textContent = `${countSumm}`
//     shoppingBagSumm.textContent = `${priceSumm}`
//     localStorage.setItem("summ", priceSumm);
//     localStorage.setItem("count", countSumm);
//     // let countity = 1;
//     //let products = [product.path[0].innerText, product.path[0].dataset.name, countity];
//     // productsList.push(products)
//     // localStorage.setItem("productsList", JSON.stringify(productsList));

//     // Отрисвока по клику 
//     // shoppingBagClickList.innerHTML +=
//     //     `<div>Price - ${product.path[0].innerText},${product.path[0].dataset.name},${countity}</div>`

// }

// // gridCardNewPrices.forEach((element) => {
// //     element.addEventListener("click", AddProduct);
// // })

// shoppingBagAndRound.addEventListener("click", ShoppingBagClick);

// function ShoppingBagClick() {
//     shoppingBagClickHide.classList.toggle("shopping_bag_click_hide");
// }



// gridCardNewPrices.forEach((element) => {
//     element.addEventListener("click", AddProduct2);
// })
// let items = 0
//     // добавление продуктов в локал сторедж
// function AddProduct2() {
//     localStorage.setItem(`"productsList${[items]}"`, JSON.stringify(productsList[items]));
//     items = items + 1;
// }

// function ImageProducts2() {
//     for (let i = 0; i < bellRoundCount.textContent; i++) {
//         let product = JSON.parse(localStorage.getItem(`"productsList${[i]}"`))
//         shoppingBagClickList.innerHTML +=
//             `<div>Price - ${product}</div>`
//     }

// }
// ImageProducts2()

let gridCardNewPrices = document.querySelectorAll(".grid_card_newprice");
let shoppingBagClickList = document.querySelector(".js-shopping_bag_click");
let productsList = []
gridCardNewPrices.forEach((element) => {
    element.addEventListener("click", AddProduct2);
})
let items = 0;
if (localStorage.length == 0) {
    items = localStorage.length
} else if (localStorage.length != 0) {
    items = localStorage.length - 2
}

// добавление продуктов в локал сторедж
function AddProduct2(product) {
    let products = [product.path[0].innerText, product.path[0].dataset.name];
    console.log(product.path[0].innerText)
    console.log(product.path[0].dataset.name)
    localStorage.setItem(`"productsList${[items]}"`, JSON.stringify(products));
    // отрисовка в корзине по клику
    shoppingBagClickList.innerHTML += `
    <div>${products}</div>`
    items = items + 1;
}
for (let i = 0; i < localStorage.length - 2; i++) {
    shoppingBagClickList.innerHTML += `
    <div>${JSON.parse(localStorage.getItem(`"productsList${[i]}"`))}</div>`
}