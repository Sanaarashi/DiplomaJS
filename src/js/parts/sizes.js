export const sizes = () => {
    let prevIndex = document.querySelectorAll('[class^=size-]');


    const showSizePic = (target, restInfo, onOrOff) => {
        let temp = target.className.slice(-1);


        if (target.classList.contains(`size-${temp}`)) {
            let infos = target.parentElement.querySelectorAll('p');
            infos.forEach(elem => elem.style.display = restInfo);
            target.setAttribute('src', `./img/sizes-${temp}${onOrOff}.png`);
            //prevIndex = target;
        }
    };

    const clearAllPics = () => {
        for (let i = 0; i < prevIndex.length; i++) {
            let temp = i;
            let infos = prevIndex[i].parentElement.querySelectorAll('p');
            infos.forEach(elem => elem.style.display = 'block');
            prevIndex[i].setAttribute('src', `./img/sizes-${++temp}.png`);
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
        } else {
            clearAllPics();
        }
    });

};