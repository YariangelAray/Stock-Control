const contrasena = document.querySelector('#contrasena');
const iconoPass = document.querySelector('input[name="contrasena"] + .icon');

iconoPass.addEventListener('click', () => {
  if (contrasena.type == 'password') {
    contrasena.type = 'text';
    iconoPass.classList.remove('ri-eye-line');
    iconoPass.classList.add('ri-eye-close-line');
  }
  else {
    contrasena.type = 'password'
    iconoPass.classList.remove('ri-eye-close-line');
    iconoPass.classList.add('ri-eye-line');
  }
})


