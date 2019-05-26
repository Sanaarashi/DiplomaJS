export const accordeon = () => {
    let aHeadings = document.querySelectorAll('.accordion-heading'),
        aBlocks = document.querySelectorAll('.accordion-block'),
        target;

    aBlocks.forEach(elem => {
        elem.style.display = 'none';
    });

    const showAnswer = (target) => {
        aHeadings.forEach(elem => {
            elem.classList.remove('ui-accordion-header-active');
        });
        aBlocks.forEach(elem => {
            elem.style.display = 'none';
        });

        target.classList.add('ui-accordion-header-active');
        target.nextElementSibling.style.display = 'block';
        target.nextElementSibling.classList.add('animated');
        target.nextElementSibling.classList.add('fadeInDown');
    };

    document.body.addEventListener('click', (event) => {
        target = event.target;

        if (target.classList.contains('accordion-heading')) {
            showAnswer(target);
        }

        if (target.parentElement.classList.contains('accordion-heading')) {
            showAnswer(target.parentElement);
        }
    });

};