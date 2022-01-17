export const carousel = () => {

    const cards = document.querySelectorAll('.carousel-item');
    const servicesArrow = document.querySelector('.services-arrow');
    const buttons = servicesArrow.querySelectorAll('img');

    let firstIdx = 0;
    let lastIdx = 3;

    const changeActiveButton = (button, length, buttons) => {
        buttons.forEach(item => {
            item.style.opacity = 1;
        });
        if(firstIdx < 1){
            button.style.opacity = '0.5';
            
        } else if(lastIdx >= length) {
            button.style.opacity = '0.5';
        } else {
            button.style.opacity = '1';
        }
    };


    const next = () => {
        if((lastIdx < cards.length)){
            cards[firstIdx].classList.add('d-none');
            cards[lastIdx].classList.remove('d-none');
            firstIdx++;
            lastIdx++;
        }
    };

    const prev = () => {
        if((firstIdx >= 1)){
            firstIdx--;
            lastIdx--;
            cards[firstIdx].classList.remove('d-none');
            cards[lastIdx].classList.add('d-none');
        }
    };

    servicesArrow.addEventListener('click', (e) => {
        if(e.target.closest('.arrow-left')) {
            prev(e.target);
            changeActiveButton(e.target, cards.length, buttons);
        } else if(e.target.closest('.arrow-right')){
            next(e.target);
            changeActiveButton(e.target, cards.length, buttons);
        }
    });

};