export const sizes = () => {
    let size = document.querySelectorAll('[class^=size-]');

    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('size-1')) {
            target.style.backgroundColor = 'red';
        }
    });

};