const body = document.querySelector('body');
document.addEventListener('DOMContentLoaded', async () => {

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = await (await fetch('./Modals/ModalElemento.html')).text();

  const modal = tempDiv.querySelector('dialog');
  
  body.append(modal);

  document.addEventListener('click', (e) => {
    if (e.target.closest('.table__row')) {
      modal.showModal();
      requestAnimationFrame( ()=> modal.classList.add('visible'))
    }
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.close-modal')) {
        modal.classList.remove('visible');
        setTimeout(() => modal.close(), 300);
      }
    })
  })
})