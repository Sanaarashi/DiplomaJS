export const present = () => {

    let giftBtn = document.querySelector('.fixed-gift'),
        giftModal = document.querySelector('.popup-gift'),
        btns = document.querySelectorAll('button'),
        isABtnPressed = false;

    giftBtn.addEventListener('click', () => {
        giftModal.style.display = 'block';
        giftBtn.style.display = 'none';
    });

    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-gift') || target.classList.contains('popup-close')) {
            giftModal.style.display = 'none';
        }
    });

    btns.forEach((elem) => {
        elem.addEventListener('click', () => {
            isABtnPressed = true;
        });
    });

    window.addEventListener('scroll', () => {
        if ((!isABtnPressed) && document.documentElement.scrollTop > 14000) {
            giftModal.style.display = 'block';
            giftBtn.style.display = 'none';
        }
    });
};