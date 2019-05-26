export const mainSlider = () => {
    let mSliderItems = document.body.querySelectorAll('.main-slider-item'),
        mSlideIndex = 1;

    const showNextMSlide = () => {
        mSliderItems.forEach(elem => {elem.style.display = 'none'});

        mSliderItems[mSlideIndex - 1].style.display = 'block';
        mSliderItems[mSlideIndex - 1].classList.add('animated');
        mSliderItems[mSlideIndex - 1].classList.add('slideInDown');
        mSlideIndex++;
        if (mSlideIndex > mSliderItems.length) mSlideIndex = 1;
    };

    showNextMSlide();

    setInterval(showNextMSlide, 6000);
};