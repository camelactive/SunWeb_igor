// import "./shopping-bag-countAndSumm"
// let gridCardNewPrices = document.querySelectorAll(".grid_card_newprice");
// let shoppingBagClickList = document.querySelector(".js-shopping_bag_click");
// gridCardNewPrices.forEach((element) => {
//     element.addEventListener("click", AddProduct2);
// })
// let items = 0;
// if (localStorage.length == 0) {
//     items = localStorage.length
// } else if (localStorage.length != 0) {
//     items = localStorage.length - 2
// }
// shoppingBagClickList.innerHTML = `<button type = button class ="clear_button js-clear-button">clear</button>`
// // добавление продуктов в локал сторедж
// function AddProduct2(product) {
//     let products = [product.path[0].innerText, product.path[0].dataset.name];
//     localStorage.setItem(`"productsList${[items]}"`, JSON.stringify(products));
//     // отрисовка в корзине по клику
//     shoppingBagClickList.innerHTML += `
//     <div>${products}<a><img class ="deleteIcon js-delete-icon" src="./src/images/delete.svg" alt="delete"></a></div>`
//     items = items + 1;
// }
// for (let i = 0; i < localStorage.length - 2; i++) {
//     shoppingBagClickList.innerHTML += `
//     <div>${JSON.parse(localStorage.getItem(`"productsList${[i]}"`))} <a><img class ="deleteIcon js-delete-icon" src="./src/images/delete.svg" alt="delete"></a></div>`
// }



// import products from "../products/products.js"
// let basketAddButton = document.querySelectorAll('.grid_card_newprice');

// basketAddButton.forEach((addButton) => {
//     addButton.addEventListener("click", addProductInBasket);
//  })

//  function addProductInBasket(){
//      console.log(products)
//  }