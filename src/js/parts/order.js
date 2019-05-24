export const order = () => {
    let design = document.querySelector('.popup-design');

    const showOrder = (display, overflow) => {
        design.style.display = display;
        document.body.style.overflow = overflow;
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('button-design')) {
            showOrder('block', 'hidden');
        }

        if (target.classList.contains('popup-design') || target.classList.contains('popup-close')) {
            showOrder('none', '');
        }
    });
};