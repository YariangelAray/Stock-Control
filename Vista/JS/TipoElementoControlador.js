
import { configurarModalTipo } from '../Modals/modalTipo.js';
import { cargarModal, abrirModal, cerrarModal, ocultarModalTemporal, mostrarConfirmacion, cerrarTodo } from './modales.js';

document.addEventListener('DOMContentLoaded', async () => {
  
  const modalTipo = await cargarModal('./Modals/ModalTipoElemento.html');  
      

  document.addEventListener('click', async (e) => {
    // Selección de fila → EDITAR
    if (e.target.closest('.table__row')) {
      e.stopPropagation();
      configurarModalTipo('editar', modalTipo);
      abrirModal(modalTipo);
    }

    // Botón Agregar → AGREGAR
    if (e.target.closest('#agregarTipo')) {
      configurarModalTipo('agregar', modalTipo);
      abrirModal(modalTipo);
    }

    if (e.target.closest('.close-modal')) {
      cerrarModal();
    }
  });
});
