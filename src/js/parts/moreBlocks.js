export const moreBlocks = () => {
    let moreBlocks = document.body.querySelectorAll('.hidden-lg');

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('button-styles')) {
            target.style.display = 'none';
            moreBlocks.forEach( (elem) => {
                elem.className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
            });
        }
    });
};