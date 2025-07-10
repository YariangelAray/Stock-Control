const modalStack = [];

export const cargarModal = async (path) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = await (await fetch(path)).text();
    const modal = tempDiv.querySelector('dialog');
    document.body.append(modal);
    return modal;
};

export const abrirModal = (modal) => {
    if (!modalStack.includes(modal)) {
        modalStack.push(modal);
    }
    modal.showModal();
    requestAnimationFrame(() => modal.classList.add('visible'));
};

export const ocultarModalTemporal = (modal) => {
    modal.classList.remove('visible');
    setTimeout(() => modal.close(), 400);
};

export const cerrarModal = () => {
    const modal = modalStack.pop();
    if (!modal) return;

    modal.classList.remove('visible');
    setTimeout(() => modal.close(), 400);
    const anterior = modalStack.at(-1);
    if (anterior) abrirModal(anterior);
}

export const mostrarConfirmacion = async () => {
  let modal = document.querySelector('.modal--confirmacion');
  if (!modal) {
    modal = await cargarModal('./Modals/ModalConfirmacion.html');
  }
  
  const btnSi = modal.querySelector('.confirmar');
  const btnNo = modal.querySelector('.cancelar');

  modal.showModal();
  requestAnimationFrame(() => modal.classList.add('visible'));

  return new Promise((resolve) => {

    const resolver = (valor) => {
        modal.classList.remove('visible');
        setTimeout(() => {
            modal.close();
            resolve(valor);
        }, 300);
    }

    btnSi.onclick = () => resolver(true);
    btnNo.onclick = () => resolver(false);
  });
};
