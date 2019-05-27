export const filterBlock = () => {
    let portfolio = document.querySelector('#portfolio'),
        portfolioBlock = document.querySelectorAll('.portfolio-block'),
        btns = portfolio.querySelectorAll('li'),
        noPortfolio = document.querySelector('.portfolio-no');

    const filterSomeBlocks = (target, active) => {
        portfolioBlock.forEach(elem => {
            elem.style.display = 'none';
        });
        noPortfolio.style.display = 'none';

        btns.forEach(elem => {
            if (elem.classList.contains('active')) elem.classList.remove('active');
        });
        target.classList.add('active');

        portfolioBlock.forEach(elem => {
            if (elem.classList.contains(active)) {
            elem.style.display = 'block';
            } if (active == 'grandmother' || active == 'granddad') {
                noPortfolio.style.display = 'block';
            }
        });
    };

    portfolio.addEventListener('click', (event) => {
        let target = event.target;

        if (target.tagName == "LI") {
            filterSomeBlocks(target, target.className);
        }
    });
};