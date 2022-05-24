import products from "../products/products.js"
startBasket()
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
            this._calculateSumm();
            this._addInLocalStorage();
            startBasket()

        },
        _calculateQuantity() {
            this.quantity = 0;
            this.products.forEach(product => {
                    this.quantity += product.quantity
                })
                // document.querySelector('.js-bell_round-count').innerHTML = this.quantity;

        },
        _calculateSumm() {
            this.summ = 0;
            this.products.forEach(product => {
                let databaseProduct = products.find(item => product.id == item.id);
                if (databaseProduct) {
                    this.summ += parseInt(product.quantity) * parseFloat(databaseProduct.price);
                }
            })
            document.querySelector(".js-summ").innerHTML = this.summ;
        },


        //////////////////////////Добавление в локал сторэдж//////////////////////////
        _addInLocalStorage() {
            this.products.forEach(product => {
                localStorage.setItem(`"products${product.id}"`, JSON.stringify(product));
            })
        },

    }
    //////////////////////////Добавление в локал сторэдж//////////////////////////


let basketAddButton = document.querySelectorAll('.grid_card_newprice').forEach(item => {
    item.addEventListener('click', function(e) {
        basket.add(e.target.getAttribute('product_id'));
    })
});
// Общее колличество товаров
function startBasket() {
    let totalQuantity = 0;
    for (let id = 1; id <= products.length; id++) {
        if (JSON.parse(localStorage.getItem(`"products${id}"`))) {
            totalQuantity += JSON.parse(localStorage.getItem(`"products${id}"`)).quantity;
        }


    }
    document.querySelector('.js-bell_round-count').innerHTML = totalQuantity;
}