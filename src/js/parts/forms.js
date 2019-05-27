export const allForms = () => {
    document.body.addEventListener('input', (e) => {
        let target = e.target;

        if (target.getAttribute('name') == 'name' || target.getAttribute('name') == 'message') {
            target.value = target.value.replace(/[^\W]/g, '')
        }

        if (target.getAttribute('name') == 'phone') {
            target.value = '+' + target.value.replace(/[^\d]/g, '').slice(0, 11);
            if (target.value.length == 1) target.value = '';
        }
    });



    document.body.addEventListener('submit', (e) => {
        e.preventDefault();
        let target = e.target;
        let someForm = new FormData(target);
        let temp = {};

        someForm.forEach((data, key) => {
            temp[key] = data;
        });

        let json = JSON.stringify(temp);

        fetch('server.php', {
            method: 'post',
            body: json
        }).then((response) => {
            if (response.status == 200) {
                target.innerHTML = 'Спасибо Вам';
                target.style.cssText = 'background-color:pink;font-size:55px;border:2px dashed green;color:white; font-family:Circe Bold';
            } else if (response.status > 400) {
                throw Error;
            }
        }).catch(() => {
                target.innerHTML = 'Что-то пошло не так...';
                target.style.cssText = 'background-color:pink;font-size:55px;border:2px dashed green;color:white; font-family:Circe Bold';
        });
    });
};