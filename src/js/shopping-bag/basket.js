import products from "../products/products.js"
export default basket = {
    quantity: 0,
    summ: 0,
    products: [],
    add(productId) {
        let existProduct = this.products.find(item => item.id == productId);
        if (!existProduct) {
            this.products.push({
                id: productId,
                quantity: 1
            })
        } else {
            existProduct.quantity++;

        }
        this._calculateQuantity();
        this._calculateSumm();
        this._addInLocalStorage();

    },
    _calculateQuantity() {
        this.quantity = 0;
        this.products.forEach(product => {
            this.quantity += product.quantity
        })
        document.querySelector('.js-bell_round-count').innerHTML = this.quantity;
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
                localStorage.setItem(`"products${product.id}"` ,JSON.stringify(product));
         })     
    },   
   
}
    //////////////////////////Добавление в локал сторэдж//////////////////////////


let basketAddButton = document.querySelectorAll('.grid_card_newprice').forEach(item => {
    item.addEventListener('click', function (e) {
        basket.add(e.target.getAttribute('product_id'));
      


    })
});



////////////////////////////////////////////////////////////попытка создания добавления в сторедж
 // _addInLocalStorage() {
    //     let StorageProducts = [];
    //     this.products.forEach(product => {
    //         let databaseProduct = products.find(item => product.id == item.id);
    //         StorageProducts.push({ 
    //             name : databaseProduct.name,
    //             price: databaseProduct.price,
    //             id: databaseProduct.id,
    //             quantity : product.quantity,
    //             }
               
    //         )
    //         StorageProducts.forEach(product =>{
    //             document.querySelector(".js-shopping_bag_click").innerHTML +=`<div>${product.name}</div>`})
          
    //     })
        
    //     console.log(StorageProducts)