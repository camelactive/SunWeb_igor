import products from "../products/products.js"
startBasket();
startSumm();
ShopingBagRender();

export default basket = {
    quantity: 0,
    summ: 0,
    products: [],
    add(productId) {
        let existProduct = this.products.find(item => item.id == productId);
        let quantityProduct = JSON.parse(localStorage.getItem(`"products${productId}"`));

        if (!existProduct) {
            this.products.push({
                id: productId,
                quantity: quantityProduct ? quantityProduct.quantity + 1 : 1,
            })

        } else {
            existProduct.quantity++;
        }
        this._calculateQuantity();
        // this._calculateSumm();
        this._addInLocalStorage();
        startBasket();
        startSumm();
        ShopingBagRenderClear();
        ShopingBagRender();

        startBasket();
        startSumm();
        let ShopingBagClearButton = document.querySelectorAll(".js-clear-button");
        ShopingBagClearButton.forEach(ClearButton => {
            ClearButton.addEventListener("click", ProductClear)
        });

    },
    _calculateQuantity() {
        this.quantity = 0;
        this.products.forEach(product => {
            this.quantity += product.quantity
        })


    },
    _calculateSumm() {

        totalSumm = 0;
        summProduct = 0;
        this.summ = 0;
        this.products.forEach(product => {
            let databaseProduct = products.find(item => product.id == item.id);
            if (databaseProduct) {
                quantityProduct = JSON.parse(localStorage.getItem(`"products${product.id}"`)) ? JSON.parse(localStorage.getItem(`"products${product.id}"`)).quantity + 1 : 1;
                summProduct = quantityProduct * parseFloat(databaseProduct.price);
                this.summ += parseInt(product.quantity) * parseFloat(databaseProduct.price);
                totalSumm += summProduct;
            }
        })
        document.querySelector(".js-summ").innerHTML = totalSumm;

    },



    _addInLocalStorage() {
        this.products.forEach(product => {
            localStorage.setItem(`"products${product.id}"`, JSON.stringify(product));
        })
    },

}



let basketAddButton = document.querySelectorAll('.grid_card_newprice').forEach(item => {
    item.addEventListener('click', function(e) {
        basket.add(e.target.getAttribute('product_id'));
    })
});

function startBasket() {
    let totalQuantity = 0;
    for (let id = 1; id <= products.length; id++) {
        if (JSON.parse(localStorage.getItem(`"products${id}"`))) {
            totalQuantity += JSON.parse(localStorage.getItem(`"products${id}"`)).quantity;
        }
    }
    document.querySelector('.js-bell_round-count').innerHTML = totalQuantity;
};

function startSumm() {
    totalSumm = 0;
    for (let id = 1; id <= products.length; id++) {
        quantityProduct = JSON.parse(localStorage.getItem(`"products${id}"`)) ? JSON.parse(localStorage.getItem(`"products${id}"`)).quantity : 0;
        if (quantityProduct != 0) {
            let existProduct = products.find(item => item.id == id);
            let summProduct = 0;
            summProduct += existProduct.price * quantityProduct;
            totalSumm += summProduct;
        }
    }
    document.querySelector(".js-summ").innerHTML = totalSumm;
};

//   RENDER
let shoppingBagAndRound = document.querySelector(".shopping_bag_and_round");
let shoppingBagClickList = document.querySelector(".js-shopping_bag_click");
let shoppingBagClickHide = document.querySelector(".shopping_bag_click_hide");
shoppingBagAndRound.addEventListener("click", ShoppingBagClick);

function ShoppingBagClick(event) {
    if (event.target.type != "button") {
        shoppingBagClickHide.classList.toggle("shopping_bag_click_hide");
    }
};

function ShopingBagRender() {
    let shoppingBagClickList = document.querySelector(".js-shopping_bag_click");
    for (let id = 1; id <= products.length; id++) {
        quantityProduct = JSON.parse(localStorage.getItem(`"products${id}"`)) ? JSON.parse(localStorage.getItem(`"products${id}"`)).quantity : 0;
        if (quantityProduct != 0) {
            let existProduct = products.find(item => item.id == id);
            let nameProduct = existProduct.name;
            let idProduct = existProduct.id
            let summProduct = 0;
            summProduct += existProduct.price * quantityProduct;
            let clearButton = `<button type = button class ="clear_button js-clear-button" data-id ="${idProduct}">clear</button>`
            shoppingBagClickList.innerHTML += `<div>${nameProduct} ${quantityProduct}-shtuk ${summProduct}-rubles ${clearButton}</div>`
        }
    }
};

function ShopingBagRenderClear() {
    shoppingBagClickList.innerHTML = ``;
}
let ShopingBagClearButton = document.querySelectorAll(".js-clear-button");

function ProductClear(event) {

    for (let id = 1; id <= products.length; id++) {
        let clearProduct = JSON.parse(localStorage.getItem(`"products${id}"`));
        if (clearProduct) {
            console.log(clearProduct)
            localStorage.removeItem(`"products${event.target.dataset.id}"`);
            basket.products = []
        }
        startBasket();
        startSumm();
    }
    ShopingBagRenderClear();
    ShopingBagRender();
    let ShopingBagClearButton = document.querySelectorAll(".js-clear-button");
    ShopingBagClearButton.forEach(ClearButton => {
        ClearButton.addEventListener("click", ProductClear)
    });

}
ShopingBagClearButton.forEach(ClearButton => {
    ClearButton.addEventListener("click", ProductClear)
});