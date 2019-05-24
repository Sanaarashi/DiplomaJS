export const consult = () => {
    let consultation = document.querySelector('.popup-consultation');

    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('button-consultation')) {
            consultation.style.display = 'block';
        } else if (target.classList.contains('popup-close') || target.classList.contains('popup-consultation')) {
            consultation.style.display = 'none';
        }
    });

};