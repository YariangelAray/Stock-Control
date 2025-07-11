import { cargarModal, abrirModal, cerrarModal, ocultarModalTemporal } from './modales.js';

// const usuario = JSON.parse(sessionStorage.getItem("usuario"));
// console.log(usuario);

// const nombreusuario = document.querySelector('.nombre-completo-usuario');
// const rol = document.querySelector('.rol');

// nombreusuario.textContent = usuario.nombres + " " + usuario.apellidos;

// rol.textContent = usuario.rol_id == 1 ? "Administrador" : "Aprendiz";

document.addEventListener('DOMContentLoaded', async () => {

    const modalCodigoAcceso = await cargarModal('./Modals/ModalCodigoAcceso.html');

    const form = modalCodigoAcceso.querySelector('form');

    // Evita el submit (recarga)
    form.addEventListener('submit', (e) => {
        e.preventDefault();

    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.agregar-inventario')) {
            const input = form.querySelector('input[name="codigo-acceso"]');
            input.value = ''; // Valor por defecto
            abrirModal(modalCodigoAcceso);
        }

        if (e.target.closest('.cancelar')) {
            cerrarModal();
        }
    });
});