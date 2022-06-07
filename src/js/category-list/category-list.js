const baseUrl = "https://raw.githubusercontent.com/camelactive/SunWeb_igor/master/assets/assets.json";
let categoryList = fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setNavLinks(data);
        return data
    });

function setNavLinks(data) {
    let navBlock = document.querySelector('.header__nav_top');
    if (navBlock) {
        Object.entries(data).forEach(item => {
            if (item[1].status == true) {
                let navElenet = `<span class="header__middle_container_item"> <a href="">${item[1].name}</a></span>`
                navBlock.innerHTML += navElenet;
            }
        })
    }
}