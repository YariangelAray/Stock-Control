const usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario);

const nombreusuario = document.querySelector('.nombre-usuario');
const rol = document.querySelector('.rol');

nombreusuario.textContent = usuario.nombres + " " + usuario.apellidos;

rol.textContent = usuario.rol_id == 1 ? "Administrador" : "Aprendiz";