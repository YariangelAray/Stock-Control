export const initModalConfigurar = (modal) => {

    const form = modal.querySelector('form');

    // Evita el submit (recarga)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    
    const input = document.querySelector('input[name="horas-acceso"]');
    input.value = ''; // Valor por defecto
    const teclasEspeciales = ["Backspace", "Tab", "Enter", "ArrowLeft", "ArrowRight", "Delete", "Home", "End"]; 
    input.addEventListener('keydown', (e) => {
        const val = e.key;
        if (!teclasEspeciales.includes(val)) {
            e.preventDefault();
            if (/[1-6]/.test(val))
                e.target.value = val;
        }
    });
};
