export const consult = () => {
    let consultation = document.querySelector('.popup-consultation');

    let showConsult = (display='block', overflow='hidden') => {
        consultation.style.display = display;
        document.body.style.overflow = overflow;
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.classList.contains('button-consultation')) {
            showConsult('block', 'hidden');
        } else if (target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) {
            showConsult('none', '');
        }
    });

    setTimeout(showConsult, 60000);
};