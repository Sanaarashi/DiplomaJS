export const calculate = () => {
    let calc = document.querySelector('.calc'),
        size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        calcPrice = document.querySelector('.calc-price');

    let calcValue, sizeVal, matVal, optVal;

    calc.addEventListener('change', () => {
        sizeVal = +size.options[size.selectedIndex].value;
        matVal = +material.options[material.selectedIndex].value;
        optVal = +options.options[options.selectedIndex].value;

        if (sizeVal > 0 && matVal > 0) {
            if (optVal > 0) {
                calcValue = sizeVal + matVal + optVal;
            } else {
                calcValue = sizeVal + matVal;
            }
        }

        calcPrice.innerText = calcValue;

        if (sizeVal == undefined || matVal == undefined || sizeVal == 0 || matVal == 0) {
            calcPrice.innerText = "0";
        }

    });

    promocode.addEventListener('input', () => {
        if (promocode.value == 'IWANTPOPART') {
            let temp = calcValue - (calcValue / 100 * 30);
            calcPrice.innerText = temp;
        } else {
            calcPrice.innerText = calcValue;
        }
    });
};