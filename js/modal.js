//modal
const button = document.querySelector('.modal-trigger');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-content h2 span')

button.addEventListener('click', e=>{
    
    modal.classList.add('visible');
})

close.addEventListener('click', e=>{
    modal.classList.remove('visible');
})