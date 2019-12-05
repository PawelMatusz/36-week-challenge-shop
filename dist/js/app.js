let slideTime = 6000;
let currentSlide = 0;
// const prvButton = document.querySelector('.btnPrev');
// const nextButton = document.querySelector('.btnNext');
const sliderPhoto = document.querySelector('.slide__photo')
const sliderContent = document.querySelector('.slide__description');

const forCount = document.querySelector('.for');
const ofCount = document.querySelector('.of');


const photoContainer = ['/dist/img/plant__111.png', '/dist/img/plant_2.png'];
const contentContainer = ['Check out our products up to 60% promo', 'Check out our products up to 80% promo'];

forCount.textContent = 1
ofCount.textContent = photoContainer.length;
// sliderContent = contentContainer[0]

function setSlider() {
    currentSlide++;
    if (currentSlide === photoContainer.length) {
        currentSlide = 0;
    };
    sliderPhoto.src = photoContainer[currentSlide];
    sliderContent.textContent = contentContainer[currentSlide];
    forCount.textContent = `${currentSlide + 1}`

}



setInterval(setSlider, slideTime);