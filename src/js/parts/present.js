export const present = () => {

    let giftBtn = document.querySelector('.fixed-gift'),
        giftModal = document.querySelector('.popup-gift');

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
};