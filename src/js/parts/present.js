export const present = () => {

    let giftBtn = document.querySelector('.fixed-gift'),
        giftModal = document.querySelector('.popup-gift'),
        isABtnPressed = false;

    const showGift = (display, overflow, giftButton) => {
        if (giftButton) giftBtn.style.display = giftButton;
        giftModal.style.display = display;
        document.body.style.overflow = overflow;
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('fixed-gift')) {
            showGift('block', 'hidden', 'none');
        }

        if (target.classList.contains('popup-gift') || target.classList.contains('popup-close')) {
            showGift('none', '');
        }

        if (target.tagName == 'BUTTON') {
            isABtnPressed = true;
        }    
    });

    document.body.addEventListener('scroll', () => {
        if ((!isABtnPressed) && document.documentElement.scrollTop > 11000) {
            giftModal.style.display = 'block';
            giftBtn.style.display = 'none';
            document.body.style.overflow = 'hidden';
        }
    });
};