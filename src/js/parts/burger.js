export const hamburger = () => {
    let burgerMenu = document.querySelector('.burger-menu');

    document.body.addEventListener('touchend', (event) => {
        event.preventDefault();
        let target = event.target;

        if (target.classList.contains('burger') || target.parentElement.classList.contains('burger')) {
            burgerMenu.style.display = "block";
            burgerMenu.classList.add('animated');
            burgerMenu.classList.remove('slideOutLeft');
            burgerMenu.classList.add('slideInLeft');
        }
    });

    window.addEventListener('resize', () => {
        if (document.documentElement.scrollWidth > 768) {
            burgerMenu.classList.remove('slideInLeft');
            burgerMenu.classList.add('slideOutLeft');
        }
    });
};