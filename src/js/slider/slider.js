let slider = document.querySelector(".js-slider");

let sliderImages = [
    {
        id: 1,
        image: 'src="./src/images/slider-image1.png"'
    },
    {
        id: 2,
        image: 'src="./src/images/slider-image1.png"'
    },
    {
        id: 3,
        image: 'src="./src/images/slider-image1.png"'
    }, {
        id: 4,
        image: 'src="./src/images/slider-image1.png"'
    }, {
        id: 5,
        image: 'src="./src/images/slider-image1.png"'
    }, {
        id: 6,
        image: 'src="./src/images/slider-image1.png"'
    }, {
        id: 7,
        image: 'src="./src/images/slider-image2.png"'
    }, {
        id: 8,
        image: 'src="./src/images/slider-image3.png"'
    },
]
function sliderContent() {
    for (let i = 0; i < sliderImages.length; i++) {
        slider.innerHTML += `  
        <div class="slider__item"><img ${sliderImages[i].image}"></div>
       `
    }

}
sliderContent()