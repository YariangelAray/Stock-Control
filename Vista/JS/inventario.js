const usuario = JSON.parse(sessionStorage.getItem("usuario"));
console.log(usuario);

const nombreusuario = document.querySelector('.nombre-completo-usuario');
const rol = document.querySelector('.rol');

nombreusuario.textContent = usuario.nombres + " " + usuario.apellidos;

rol.textContent = usuario.rol_id == 1 ? "Administrador" : "Aprendiz";