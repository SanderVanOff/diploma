export const carousel = ({
    countSlides
}) => {

    const cards = document.querySelectorAll('.carousel-item');
    const servicesArrow = document.querySelector('.services-arrow');
    const buttons = servicesArrow.querySelectorAll('img');

    let firstIdx = 0;
    let lastIdx = countSlides;

    const changeActiveButton = (button, length, buttons) => {
        buttons.forEach(item => {
            item.style.opacity = 1;
        });
        if (firstIdx < 1) {
            button.style.opacity = '0.5';

        } else if (lastIdx >= length) {
            button.style.opacity = '0.5';
        } else {
            button.style.opacity = '1';
        }
    };


    const next = () => {
        if ((lastIdx < cards.length)) {
            cards[firstIdx].classList.add('d-none');
            firstIdx++;
            cards[lastIdx].classList.remove('d-none');
            lastIdx++;
        }
    };

    const prev = () => {
        if ((firstIdx >= 1)) {
            firstIdx--;
            lastIdx--;
            cards[firstIdx].classList.remove('d-none');
            cards[lastIdx].classList.add('d-none');
        }
    };

    const setCountSlides = () => {
        if (document.documentElement.scrollWidth > 768) {
            firstIdx = 0;
            lastIdx = 3;
        } else if (document.documentElement.scrollWidth > 576) {
            firstIdx = 0;
            lastIdx = 2;
        } else {
            firstIdx = 0;
            lastIdx = 1;
        }
        cards.forEach((item, i) => {
            if (i < lastIdx) {
                cards[i].classList.remove('d-none');
            } else {
                item.classList.add('d-none');
            }

        });
    };


    servicesArrow.addEventListener('click', (e) => {
        if (e.target.closest('.arrow-left')) {
            prev(e.target);
            changeActiveButton(e.target, cards.length, buttons);
        } else if (e.target.closest('.arrow-right')) {
            next(e.target);
            changeActiveButton(e.target, cards.length, buttons);
        }
    });

    window.addEventListener('resize', () => {
        setCountSlides();
        changeActiveButton(document.querySelector('.arrow-left'), cards.length, buttons);
    });

    setCountSlides();
    changeActiveButton(document.querySelector('.arrow-left'), cards.length, buttons);

};