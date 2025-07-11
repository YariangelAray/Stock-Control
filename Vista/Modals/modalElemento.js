import { mostrarConfirmacion } from '../JS/modales.js';

export const initModalElemento = (modal) => {

  const form = modal.querySelector('form');

  // Evita el submit (recarga)
  form.addEventListener('submit', (e) => {
      e.preventDefault();
  });
  
  modal.addEventListener('click', async (e) => {
    if (e.target.closest('.dar-baja')) {
      const confirmado = await mostrarConfirmacion();
      if (confirmado) {
        alert('El elemento será dado de baja.');
      } else {
        alert('Acción cancelada.');
      }
    }
  });
};
