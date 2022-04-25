import products from "./products.js";
let menuGridRollsClassic = document.querySelector(".js-products_rolls_classic");
let menuGridRollsOpal = document.querySelector(".js-products_rolls_opal");
let menuGridSusiClassic = document.querySelector(".js-products_susi_classic");
let menuGridSusiOpal = document.querySelector(".js-products_susi_opal");
let menuGridPokeAndBuleClassic = document.querySelector(".js-products_pokeandbule_classic");
let menuGridPokeAndBuleOpal = document.querySelector(".js-products_pokeandbule_opal");
products.forEach(function productsRender(product) {
    if (product.category =="rolls-classic"){
        menuGridRollsClassic.innerHTML += `
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
            <div class="grid_card_image"><img ${product.image} alt="susiPicture"></div>
        </div>
        <div class="grid_card_info">
            <div class="grid_card_text">
                <div class="grid_card_header">${product.name}</div>
                <div class="grid_card_weight">${product.count}/${product.weight}</div>
            </div>
            <div class="grid_card_price">
                <div class="grid_card_oldprice">${product.oldprice}</div>
                <div class="grid_card_newprice" product_id="${product.id}">${product.price}</div>
            </div>
        </div>
        </div>`
    }
    else if (product.category =="rolls-opal"){
        menuGridRollsOpal.innerHTML += `
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
            <div class="grid_card_image"><img ${product.image} alt="susiPicture"></div>
        </div>
        <div class="grid_card_info">
            <div class="grid_card_text">
                <div class="grid_card_header">${product.name}</div>
                <div class="grid_card_weight">${product.count}/${product.weight}</div>
            </div>
            <div class="grid_card_price">
                <div class="grid_card_oldprice">${product.oldprice}</div>
                <div class="grid_card_newprice" product_id="${product.id}">${product.price}</div>
            </div>
        </div>
        </div>`
    }
    else if (product.category =="susi-classic"){
        menuGridSusiClassic.innerHTML += `
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
        <div class="grid_card_image"><img ${product.image} alt="susiPicture"></div>
    </div>
    <div class="grid_card_info">
        <div class="grid_card_text">
            <div class="grid_card_header">${product.name}</div>
            <div class="grid_card_weight">${product.count}/${product.weight}</div>
        </div>
        <div class="grid_card_price">
            <div class="grid_card_oldprice">${product.oldprice}</div>
            <div class="grid_card_newprice" product_id="${product.id}">${product.price}</div>
        </div>
    </div>
    </div>`}
    else if (product.category =="susi-opal"){ 
        menuGridSusiOpal.innerHTML += `
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
        <div class="grid_card_image"><img ${product.image} alt="susiPicture"></div>
    </div>
    <div class="grid_card_info">
        <div class="grid_card_text">
            <div class="grid_card_header">${product.name}</div>
            <div class="grid_card_weight">${product.count}/${product.weight}</div>
        </div>
        <div class="grid_card_price">
            <div class="grid_card_oldprice">${product.oldprice}</div>
            <div class="grid_card_newprice" product_id="${product.id}">${product.price}</div>
        </div>
    </div>
    </div>`}
    else if (product.category =="bokeAndBule-classic"){ 
        menuGridPokeAndBuleClassic.innerHTML += `
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
        <div class="grid_card_image"><img ${product.image} alt="susiPicture"></div>
    </div>
    <div class="grid_card_info">
        <div class="grid_card_text">
            <div class="grid_card_header">${product.name}</div>
            <div class="grid_card_weight">${product.count}/${product.weight}</div>
        </div>
        <div class="grid_card_price">
            <div class="grid_card_oldprice">${product.oldprice}</div>
            <div class="grid_card_newprice" product_id="${product.id}">${product.price}</div>
        </div>
    </div>
    </div>`}
    else if (product.category =="bokeAndBule-opal"){ 
        menuGridPokeAndBuleOpal.innerHTML += `
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
        <div class="grid_card_image"><img ${product.image} alt="susiPicture"></div>
    </div>
    <div class="grid_card_info">
        <div class="grid_card_text">
            <div class="grid_card_header">${product.name}</div>
            <div class="grid_card_weight">${product.count}/${product.weight}</div>
        </div>
        <div class="grid_card_price">
            <div class="grid_card_oldprice">${product.oldprice}</div>
            <div class="grid_card_newprice" product_id="${product.id}">${product.price}</div>
        </div>
    </div>
    </div>`}
})
    

