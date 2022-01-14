export const modal = () => {
    
    //
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCallback = document.querySelector('.modal-callback');
    const callbackBtn = document.querySelector('.callback-btn');



    callbackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(1);
    });


};