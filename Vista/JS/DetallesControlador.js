import { initModalConfigurar } from '../Modals/modalConfigurarCodigo.js';
import { cargarModal, abrirModal, cerrarModal, ocultarModalTemporal, cerrarTodo } from './modales.js';

document.addEventListener('DOMContentLoaded', async () => {
    const modalConfigurarCodigo = await cargarModal('./Modals/ModalConfigurarCodigo.html');
    const modalCodigo = await cargarModal('./Modals/ModalCodigoGenerado.html');

    document.addEventListener('click', (e) => {
        if (e.target.closest('.generar-codigo')) {
            initModalConfigurar(modalConfigurarCodigo);
            abrirModal(modalConfigurarCodigo);
        }

        if (e.target.closest('.confirmar')){
            ocultarModalTemporal(modalConfigurarCodigo);
            abrirModal(modalCodigo);
        }

        if (e.target.closest('.close-modal')) {
            cerrarTodo();
        }

        if (e.target.closest('.cancelar')) {
            cerrarModal();
        }
    });

    modalConfigurarCodigo.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') cerrarModal();
    });
});