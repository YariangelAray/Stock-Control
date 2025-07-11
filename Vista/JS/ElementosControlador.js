import { initModalElemento } from '../Modals/modalElemento.js';
import { initModalGenerarReporte } from '../Modals/modalGenerarReporte.js';
import { cargarModal, abrirModal, cerrarModal, ocultarModalTemporal, mostrarConfirmacion, cerrarTodo } from './modales.js';

document.addEventListener('DOMContentLoaded', async () => {

  const modalElemento = await cargarModal('./Modals/ModalElemento.html');
  const modalGenerarReporte = await cargarModal('./Modals/ModalGenerarReporte.html');
  
  initModalElemento(modalElemento);
  initModalGenerarReporte(modalGenerarReporte);

  document.addEventListener('click', async (e) => {
    if (e.target.closest('.table__row')) {
      abrirModal(modalElemento);
    }

    if (e.target.closest('.close-modal') || e.target.closest('.cancelar')) {
      cerrarModal();
    }

    if (e.target.closest('.reportar')) {
      ocultarModalTemporal(modalElemento);
      abrirModal(modalGenerarReporte);
    }
  });

  modalGenerarReporte.addEventListener('click', async (e) => {
    if (e.target.closest('.confirmar')) {
      const confirmado = await mostrarConfirmacion('¿Está seguro de generar el reporte?');
      if (confirmado) {
        alert('Reporte generado exitosamente.');
        cerrarModal();
      }
    }
  });
});
