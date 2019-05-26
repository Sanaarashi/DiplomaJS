export const feedbackSlider = () => {
    let fSlides = document.body.querySelectorAll('.feedback-slider-item'),
        nextSlBtn = document.body.querySelector('.main-next-btn'),
        prevSlBtn = document.body.querySelector('.main-prev-btn'),
        fSlideIndex = 1,
        isPrev = 1;

    const showFSlide = (n) => {
        fSlides.forEach(elem => {
            elem.style.display = 'none';
        });

        if (n > fSlides.length) {
            fSlideIndex = 1;
        } else if (n < 1) {
            fSlideIndex = fSlides.length;
        }

        fSlides[fSlideIndex - 1].style.display = 'block';
        fSlides[fSlideIndex - 1].classList.add('animated');
        fSlides[fSlideIndex - 1].classList.add('slideInLeft');
    };

    const showNextFSlide = (n, prevOrNext) => {
        showFSlide(fSlideIndex += n);
        isPrev = prevOrNext;
    };

    nextSlBtn.addEventListener('click', () => {
        showNextFSlide(1, 1);
    });

    prevSlBtn.addEventListener('click', () => {
        showNextFSlide(-1, 2);
    });

    showFSlide(fSlideIndex);
};