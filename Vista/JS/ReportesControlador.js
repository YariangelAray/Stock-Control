import { configurarModalElemento, initModalElemento } from '../Modals/modalElemento.js';
import { cargarModal, abrirModal, cerrarModal, ocultarModalTemporal } from './modales.js';

document.addEventListener('DOMContentLoaded', async () => {
  const modalReporte = await cargarModal('./Modals/ModalReporte.html');
  const modalElemento = await cargarModal('./Modals/ModalElemento.html');  

  const contenedor = document.querySelector('.reporte__imagenes');
  const sinImagenes = contenedor.querySelector('.reporte__sin-imagenes');

  // Simulando imágenes
  const imagenes = [
    'https://picsum.photos/200',
    'https://picsum.photos/300/700',
    'https://picsum.photos/500/400'
  ];

  // Mostrar imágenes si hay
  if (imagenes.length > 0) {
    sinImagenes.remove(); // quitar el mensaje
    imagenes.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      contenedor.appendChild(img);
    });
  }

  const visor = document.getElementById('visor-imagen');
  const visorImg = visor.querySelector('img');

  document.addEventListener('click', (e) => {

    if (e.target.closest('.table__row'))
      abrirModal(modalReporte);

    if (e.target.closest('.ver-elemento')) {
      ocultarModalTemporal(modalReporte);
      initModalElemento(modalElemento);
      configurarModalElemento("editar",modalElemento);
      abrirModal(modalElemento);
    }
    
    if (e.target.closest('.close-modal')) {
      cerrarModal();
    }

    // Mostrar visor
    if (e.target.closest('.reporte__imagenes img')) {
      visorImg.src = e.target.src;
      visor.showModal();
    }
    // Cerrar con clic fuera
    visor.addEventListener('click', (e) => {
      if (e.target === visor) {
        visor.close();
        visorImg.src = '';
      }
    });
  });  

  // Escape
  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'Escape' && visor.open) {
      visor.close();
      visorImg.src = '';
    }
  });
});
