import { cargarModal, abrirModal, cerrarModal, mostrarConfirmacion } from './modales.js';

document.addEventListener('DOMContentLoaded', async () => {
  const modalElemento = await cargarModal('./Modals/ModalElemento.html');
  await cargarModal('./Modals/ModalConfirmacion.html');

  document.addEventListener('click', async (e) => {
    if (e.target.closest('.table__row'))
      abrirModal(modalElemento);

    if (e.target.closest('.close-modal') || e.target.tagName === 'DIALOG')
      cerrarModal();

    if (e.target.closest('.dar-baja')) {
      const confirmado = await mostrarConfirmacion();
      if (confirmado) {
        alert('El elemento será dado de baja.');
      } else {
        alert('Acción cancelada.');
      }
    }
  });
});
