export const accordeon = () => {
    const accordeonBlock = document.querySelector('.accordeon');
    const elemBlocks = accordeonBlock.querySelectorAll('.element');

    accordeonBlock.addEventListener('click', e => {
        if(e.target.closest('.element')){
            elemBlocks.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.element-content').style.display = 'none';
            });
            e.target.closest('.element').classList.add('active');
            e.target.closest('.element').querySelector('.element-content').style.display = 'block';

        }
    });
};