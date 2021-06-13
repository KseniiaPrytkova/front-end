// get each slide in string format
const slides = document.querySelectorAll('.slide');
console.log('SLIDES: ', slides);

// add a listener to each slide
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}
