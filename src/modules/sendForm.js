export const sendForm = (idForm) => {
    const form = document.querySelector(idForm);
    const formElements = form.querySelectorAll('input[type="text"]');
    const formBtn = form.querySelector('input[type="submit"]');

    //блок сообщения
    const formMessageBlock = document.createElement('div');
    formMessageBlock.classList.add('message-block');
    const loadText = 'Загрузка...';
    const errorText = 'Oшибка';
    const successText = 'Спасибо. Наш менеджер свяжется с вами!';

    //добавление лэйблов
    formElements.forEach(input => {
        input.id = input.name;
        const errorMessage = document.createElement('label');
        errorMessage.setAttribute('for', `#${input.name}`);
        errorMessage.classList.add('invalid');
        input.after(errorMessage);
    });

    //валидация
    const validateData = ({type,value, elem}) => {
        const label = elem.nextElementSibling;

        if(type === 'name'){
            if ((!/[^а-яА-ЯёЁ0-9 -]/ig.test(value) && value.trim().length > 2 || value.length === 0)) {
                elem.style.marginBottom = '';
                label.style.display = 'none';
                label.textContent = '';
                
            } else if(value.trim().length <= 2){
                console.log(value.trim().length)
                elem.style.marginBottom = '5px';
                label.style.display = 'block';
                label.textContent = 'допустимо не меньше 2 символов';
            }else {
                elem.style.marginBottom = '5px';
                label.style.display = 'block';
                label.textContent = 'допустима только кириллица';
            }
        } else if(type === 'phone'){
            if (!/[^0-9\+ \-\(\)]/ig.test(value) && value.length >= 6 && value.length <= 12){
                elem.style.marginBottom = '';
                elem.classList.add('success');
                label.style.display = 'none';
                label.textContent = '';
            } else if (value.length < 6 || value.length > 12){
                elem.style.marginBottom = '0';
                elem.classList.remove('success');
                label.style.display = 'block';
                label.textContent = 'номер должен быть от 6 до 12 символов';
            }else {
                elem.style.marginBottom = '0';
                elem.classList.remove('success');
                label.style.display = 'block';
                label.textContent = 'разрешены цифры, знак “+”, круглые скобки и дефис';
            }
        }
    };

    //отправка данных
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    //отправка формы
    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        
        if(formElements[1].classList.contains('success')){

            formMessageBlock.textContent = loadText;
            form.append(formMessageBlock);

            formElements.forEach(input => {
                input.disabled = true;
                input.style.background = '#ddd';
                formBtn.disabled = true;
            });

            sendData(formBody)
                .then(() => {
                    formMessageBlock.textContent = successText;
                    form.append(formMessageBlock);
                    formElements.forEach(input => {
                        input.disabled = false;
                        input.style.background = '';
                        input.value = '';
                        input.classList.remove('success');
                    });
                    formBtn.disabled = false;
                }).catch(e => {
                    formMessageBlock.textContent = errorText;
                    form.append(formMessageBlock);
                });

        } else {
            formElements[1].nextElementSibling.style.display = 'block';
            formElements[1].nextElementSibling.textContent = 'Обязательное для заполнения поле';
        }
    };

    form.addEventListener('change', e => {

        if(e.target.name === 'fio') {
            validateData({
                type: 'name',
                elem: e.target,
                value: e.target.value
            });
        } else if(e.target.name === 'tel'){
            validateData({
                type: 'phone',
                elem: e.target,
                value: e.target.value
            });
        }
    });

    try {
        formBtn.addEventListener('click', e => {
            e.preventDefault();
            submitForm();
        });
    }catch(e){
        console.log(e.message);
    }
};