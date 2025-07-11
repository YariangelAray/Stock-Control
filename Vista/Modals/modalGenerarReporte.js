export const initModalGenerarReporte = (modal) => {
    const inputFile = modal.querySelector('#imagenes');
    const nombreArchivo = modal.querySelector('#nombre-archivos');

    inputFile.addEventListener('change', () => {
        if (inputFile.files.length > 0) {
            const nombres = Array.from(inputFile.files).map(f => f.name).join(', ');
            nombreArchivo.textContent = nombres;
        } else {
            nombreArchivo.textContent = 'Ningún archivo seleccionado.';
        }
    });
}