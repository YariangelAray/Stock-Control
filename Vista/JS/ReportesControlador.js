import { cargarModal, abrirModal, cerrarModal, ocultarModalTemporal } from './modales.js';

document.addEventListener('DOMContentLoaded', async () => {
  const modalReporte = await cargarModal('./Modals/ModalReporte.html');
  const modalElemento = await cargarModal('./Modals/ModalElemento.html');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.table__row'))
      abrirModal(modalReporte);

    if (e.target.closest('.ver-elemento')) {
      ocultarModalTemporal(modalReporte);
      abrirModal(modalElemento);
    }

    if (e.target.closest('.close-modal') || e.target.tagName === 'DIALOG') {
      cerrarModal();
    }
  });
});
