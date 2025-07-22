const contrasenas = document.querySelectorAll('.contrasena');
const iconosPass = document.querySelectorAll('.input.contrasena + .icon');

iconosPass.forEach((icono, index) => {
  icono.addEventListener('click', () => {
    const input = contrasenas[index];
    if (input.type === 'password') {
      input.type = 'text';
      icono.classList.remove('ri-eye-line');
      icono.classList.add('ri-eye-close-line');
    } else {
      input.type = 'password';
      icono.classList.remove('ri-eye-close-line');
      icono.classList.add('ri-eye-line');
    }
  });
});