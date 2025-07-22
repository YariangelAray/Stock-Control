export const configurarModalTipo = (modo, modal) => {
  const botones = {
    editar: modal.querySelector('.editar'),
    guardar: modal.querySelector('.guardar'),
    aceptar: modal.querySelector('.aceptar'),
    cancelar: modal.querySelector('.cancelar')
  };

  // Oculta todo
  Object.values(botones).forEach(btn => btn.classList.add('hidden'));

  if (modo === 'agregar') {
    botones.guardar.classList.remove('hidden');
    botones.cancelar.classList.remove('hidden');
    modal.querySelector('.modal__title').textContent = 'Registrar Tipo';
    modal.querySelector('form').reset(); // Limpiar campos
  }

  if (modo === 'editar') {
    botones.editar.classList.remove('hidden');
    botones.aceptar.classList.remove('hidden');    
    modal.querySelector('.modal__title').textContent = 'Detalles del Tipo';
  }
};
