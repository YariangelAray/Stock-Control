import { initModalElemento, configurarModalElemento } from '../Modals/modalElemento.js';
import { initModalGenerarReporte } from '../Modals/modalGenerarReporte.js';
import { cargarModal, abrirModal, cerrarModal, ocultarModalTemporal, mostrarConfirmacion, cerrarTodo } from './modales.js';

document.addEventListener('DOMContentLoaded', async () => {
  const modalElemento = await cargarModal('./Modals/ModalElemento.html');
  const modalGenerarReporte = await cargarModal('./Modals/ModalGenerarReporte.html');
  const modalTipo = await cargarModal('./Modals/ModalTipoElemento.html');

  initModalElemento(modalElemento, modalTipo);
  initModalGenerarReporte(modalGenerarReporte);

  document.addEventListener('click', async (e) => {
    // Botón Agregar → AGREGAR
    if (e.target.closest('#agregarElemento')) {
      configurarModalElemento('agregar', modalElemento);
      abrirModal(modalElemento);
    }


    // Selección de fila → EDITAR
    if (e.target.closest('.table__row')) {
      e.stopPropagation();
      configurarModalElemento('editar', modalElemento);
      abrirModal(modalElemento);
    }

    // if (e.target.closest('#agregarTipo')) {
    //   configurarModalTipo('agregar', modalTipo);
    //   abrirModal(modalTipo);
    // }

    // Cerrar
    if (e.target.closest('.close-modal')) {
      cerrarModal();
    }

    // Reportar
    if (e.target.closest('.reportar')) {
      ocultarModalTemporal(modalElemento);
      abrirModal(modalGenerarReporte);
    }
  });

  // Confirmación desde el modal de reporte
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