export const sizes = () => {
    let prevIndex = '';

    const showSizePic = (target, restInfo, onOrOff) => {
        let temp = target.className.slice(-1);


        if (target.classList.contains(`size-${temp}`)) {
            let infos = target.parentElement.querySelectorAll('p');
            infos.forEach(elem => elem.style.display = restInfo);
            target.setAttribute('src', `./img/sizes-${temp}${onOrOff}.png`);
            prevIndex = target;
        }
    };


    document.body.addEventListener('mouseover', (event) => {
        let target = event.target;

        if (target.classList.contains(`size-${target.className.slice(-1)}`)) {
            showSizePic(target, 'none', '-1');
        }
    });

    document.body.addEventListener('mouseout', (event) => {
        let target = event.target;

        if (target.classList.contains(`size-${target.className.slice(-1)}`)) {
            showSizePic(target, 'block', '');
        }
    });

    document.body.addEventListener('touchend', (event) => {
        event.preventDefault();
        let target = event.target;

        if (target.classList.contains(`size-${target.className.slice(-1)}`)) {
            showSizePic(target, 'none', '-1');
        } else if (prevIndex != '') {
            showSizePic(prevIndex, 'block', '');
        }
    });

};