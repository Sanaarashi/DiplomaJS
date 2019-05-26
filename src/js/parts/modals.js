export const showAllModals = () => {

    let consultation = document.querySelector('.popup-consultation'),
        design = document.querySelector('.popup-design'),
        giftBtn = document.querySelector('.fixed-gift'),
        giftModal = document.querySelector('.popup-gift'),
        isABtnPressed = false,
        isModalActive = false;

    let showModal = (target, modalOnOff, display='block', overflow='hidden', giftButton) => {
        if (giftButton) giftBtn.style.display = giftButton;
        target.style.display = display;
        document.body.style.overflow = overflow;
        isModalActive = modalOnOff;
    };

    let timer = () => {
        if (isModalActive == false) {
            showModal(consultation, true, 'block', 'hidden');
        }
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.classList.contains('button-consultation')) {
            showModal(consultation, true, 'block', 'hidden');
        } else if (target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) {
            showModal(consultation, false, 'none', '');
        }

        if (target.classList.contains('button-design')) {
            showModal(design, true, 'block', 'hidden');
        } else if (target.classList.contains('popup-design') || target.classList.contains('popup-close')) {
            showModal(design, false, 'none', '');
        }

        if (target.classList.contains('fixed-gift')) {
            showModal(giftModal, true, 'block', 'hidden', 'none');
        } else if (target.classList.contains('popup-gift') || target.classList.contains('popup-close')) {
            showModal(giftModal, false, 'none', '');
        }

        if (target.tagName == 'BUTTON') {
            isABtnPressed = true;
        } 

    });

    window.addEventListener('scroll', () => {
        if ((!isABtnPressed) && document.documentElement.scrollTop > 12000) {
            showModal(giftModal, true, 'block', 'hidden', 'none');
        }
    });

    setTimeout(timer, 60000);

};