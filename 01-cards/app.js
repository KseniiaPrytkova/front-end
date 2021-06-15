function slidesPlugin(activeSlide = 1) {
    // get each slide in string format
    const slides = document.querySelectorAll('.slide');
    // console.log('SLIDES: ', slides);

    // add class active to element - active element after reload
    slides[activeSlide].classList.add('active');

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
}

slidesPlugin(1);