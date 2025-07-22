import { abrirModal, mostrarConfirmacion } from '../JS/modales.js';
import { configurarModalTipo } from './modalTipo.js';

export const configurarModalElemento = (modo, modal) => {
  const botones = {
    editar: modal.querySelector('.editar'),
    guardar: modal.querySelector('.guardar'),
    baja: modal.querySelector('.dar-baja'),
    reportar: modal.querySelector('.reportar'),
    aceptar: modal.querySelector('.aceptar'),
    cancelar: modal.querySelector('.cancelar')
  };

  // Oculta todo
  Object.values(botones).forEach(btn => btn.classList.add('hidden'));

  if (modo === 'agregar') {
    botones.guardar.classList.remove('hidden');
    botones.cancelar.classList.remove('hidden');
    modal.querySelector('.modal__title').textContent = 'Registrar Elemento';
    modal.querySelector('form').reset(); // Limpiar campos
  }

  if (modo === 'editar') {
    botones.editar.classList.remove('hidden');
    botones.baja.classList.remove('hidden');
    botones.reportar.classList.remove('hidden');
    botones.aceptar.classList.remove('hidden');    
    modal.querySelector('.modal__title').textContent = 'Detalles del Elemento';
  }
};


export const initModalElemento = (modal, modalTipo) => {
  const form = modal.querySelector('form');
  const selectTipo = modal.querySelector('#tipo_elemento');
  const btnAgregarTipo = modal.querySelector('#agregarTipo');

  // Ocultar botón por defecto
  btnAgregarTipo.classList.add('hidden');

  // Evento change en el select
  selectTipo.addEventListener('change', () => {
    const valorSeleccionado = selectTipo.value;

    if (valorSeleccionado === 'otro') btnAgregarTipo.classList.remove('hidden');
    else btnAgregarTipo.classList.add('hidden');
    
  });

   btnAgregarTipo.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del botón
    // Importante: Aquí se configura y abre el modalTipo
    configurarModalTipo('agregar', modalTipo);
    abrirModal(modalTipo);
  });

  // Evitar que se recargue la página al enviar el formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // Evento dar de baja
  modal.addEventListener('click', async (e) => {
    if (e.target.closest('.dar-baja')) {
      const confirmado = await mostrarConfirmacion();
      if (confirmado) {
        alert('El elemento será dado de baja.');
      } else {
        alert('Acción cancelada.');
      }
    }

    if (e.target.closest('.guardar')) {
      const confirmado = await mostrarConfirmacion();
      if (confirmado) {
        alert('El elemento será guardado.');
      } else {
        alert('Acción cancelada.');
      }
    }
  });
};

