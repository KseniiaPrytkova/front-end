// get buttons
const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
// variable that keeps track of which slide is active
let activeSlideIndex = 0;
const container = document.querySelector('.container');

// make the colors of the left and right pictures match
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
// apply CSS styles to the el; usu=e ``
sidebar.style.top = `-300vh`;
// to pass the value dynamically use ${} - where 3 is x; has to be calculated
// based on pictures amount; we can calc div quantity (slidesCount)
sidebar.style.top = `-${slidesCount - 1 * 100}vh`;

// add logic for buttons
upBtn.addEventListener('click', () => {
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    // animation
    // move the picture with a help of translateY on the screen size, which needs to be calculated dynamically
    // height - screen size
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}