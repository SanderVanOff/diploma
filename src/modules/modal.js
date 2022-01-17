export const modal = () => {
    
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCallback = document.querySelector('.modal-callback');


    document.addEventListener('click', e => {
        
        if(e.target.closest('.callback-btn') || e.target.closest('.button-services') || e.target.closest('.fancyboxModal')) {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';

            modalOverlay.classList.remove('hide'); 
            modalOverlay.classList.add('show');

            modalCallback.classList.remove('hide'); 
            modalCallback.classList.add('show');
        }

        if(e.target.closest('.modal-close') || e.target.closest('.modal-overlay')) {
            modalCallback.classList.remove('show');
            modalCallback.classList.add('hide'); 

            modalOverlay.classList.remove('show');
            modalOverlay.classList.add('hide');
            setTimeout(()=> {
                modalCallback.style.display = 'none';
            }, 200);
            setTimeout(()=> {
                modalOverlay.style.display = 'none';
            }, 400);
        }
    });
};