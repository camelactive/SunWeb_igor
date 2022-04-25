let menuGrid = document.querySelector(".js-products_susi_classic")
let products = [{
        id: 17,
        name: "susi octopus",
        weight: "850г",
        count: "5шт",
        price: 1500,
        oldprice: 10000,
        image: 'src="./src/images/frame-true.svg"'
    },
    {
        id: 18,
        name: "susi fish",
        weight: "950г",
        count: "10шт",
        price: 1800,
        oldprice: 10000,
        image: 'src="./src/images/frame-true.svg"'
    }, {
        id: 19,
        name: "susi beef",
        weight: "1000г",
        count: "8шт",
        price: 1200,
        oldprice: 10000,
        image: 'src="./src/images/frame-true.svg"'
    }, {
        id: 20,
        name: "susi vegan",
        weight: "750г",
        count: "1шт",
        price: 1000,
        oldprice: 10000000,
        image: 'src="./src/images/frame-true.svg"'
    },
    {
        id: 21,
        name: "susi octopus",
        weight: "850г",
        count: "5шт",
        price: 1500,
        oldprice: 10000,
        image: 'src="./src/images/frame-true.svg"'
    },
    {
        id: 22,
        name: "susi fish",
        weight: "950г",
        count: "10шт",
        price: 1800,
        oldprice: 10000,
        image: 'src="./src/images/frame-true.svg"'
    }, {
        id: 23,
        name: "susi beef",
        weight: "1000г",
        count: "8шт",
        price: 1200,
        oldprice: 10000,
        image: 'src="./src/images/frame-true.svg"'
    }, {
        id: 24,
        name: "susi vegan",
        weight: "750г",
        count: "1шт",
        price: 1000,
        oldprice: 10000000,
        image: 'src="./src/images/frame-true.svg"'
    }
]

// let shimmingiClick = document.querySelector(".shimmingi");
// shimmingiClick.addEventListener("click", testFunction);

// function testFunction() {
//     // console.log(products);
//     for (let i = 0; i < products.length; i++) {
//         console.log(products[i]) 
//     }
// }

function productsCards() {
    for (let i = 0; i < products.length; i++) {
        menuGrid.innerHTML += `
<div class="grid_card">
<div class="grid_card_images">
    <div class="grid_card_menu">
        <a href="#">
            <div class="grid_card_menu_img papper"><img src="./src/images/paper.svg" alt="">
            </div>
        </a>
        <a href="#">
            <div class="grid_card_menu_img hot"><img src="./src/images/hot.svg" alt=""></div>
        </a>
        <a href="#">
            <div class="grid_card_menu_img green"><img src="./src/images/green.svg" alt="">
            </div>
        </a>
    </div>
    <div class="grid_card_image"><img ${products[i].image} alt="susiPicture"></div>
</div>
<div class="grid_card_info">
    <div class="grid_card_text">
        <div class="grid_card_header">${products[i].name}</div>
        <div class="grid_card_weight">${products[i].count}/${products[i].weight}</div>
    </div>
    <div class="grid_card_price">
        <div class="grid_card_oldprice">${products[i].oldprice}</div>
        <div class="grid_card_newprice" product_id="${products[i].id}">${products[i].price}</div>
    </div>
</div>
</div>`
    }

}
productsCards()