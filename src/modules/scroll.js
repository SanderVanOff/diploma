export const scroll = () => {
    const scrollBtn = document.querySelector('.up');
    

    scrollBtn.addEventListener('click', e => {
        document.querySelector('.main-wrapper').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    document.addEventListener('scroll', e => {
        if(e.target.scrollingElement.scrollTop >= document.querySelector('.services-section').offsetTop) {
            scrollBtn.classList.remove('d-none');
        } else {
            scrollBtn.classList.add('d-none');
        }
    });

};