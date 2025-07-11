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

let modalConfirmacion = null;

export const mostrarConfirmacion = async (mensaje = '¿Está seguro de continuar?') => {
    if (!modalConfirmacion) {
        modalConfirmacion = await cargarModal('./Modals/ModalConfirmacion.html');

        document.body.appendChild(modalConfirmacion);
    }

    const mensajeSpan = modalConfirmacion.querySelector('.modal__mensaje');    
    mensajeSpan.textContent = mensaje;

    const btnSi = modalConfirmacion.querySelector('.si');
    const btnNo = modalConfirmacion.querySelector('.no');

    modalConfirmacion.showModal();
    requestAnimationFrame(() => modalConfirmacion.classList.add('visible'));

    return new Promise((resolve) => {
        const resolver = (valor) => {
            modalConfirmacion.classList.remove('visible');
            setTimeout(() => {
                modalConfirmacion.close();
                resolve(valor);
            }, 300);
        }

        modalConfirmacion.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') resolver(true);
        });

        btnSi.onclick = () => resolver(true);
        btnNo.onclick = () => resolver(false);
    });
};

export const cerrarTodo = () => {
  while (modalStack.length > 0) {
    const modal = modalStack.pop();
    modal.classList.remove('visible');
    setTimeout(() => modal.close(), 300);
  }
};