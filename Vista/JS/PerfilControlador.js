
import { configurarModalTipo } from '../Modals/modalTipo.js';
import { cargarModal, abrirModal, cerrarModal, ocultarModalTemporal, mostrarConfirmacion, cerrarTodo } from './modales.js';

document.addEventListener('DOMContentLoaded', async () => {  
  
  const modalEliminar = await cargarModal('./Modals/ModalEliminarCuenta.html');  
      

  document.addEventListener('click', async (e) => {

    // Botón Agregar → AGREGAR
    if (e.target.closest('#eliminarCuenta')) {
    //   configurarModalTipo('agregar', modalTipo);
      abrirModal(modalEliminar);
    }

    if (e.target.closest('.close-modal')) {
      cerrarModal();
    }
  });
});
