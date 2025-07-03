import './estilos.js';
import * as api from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
  const formulario = document.querySelector('.form--signin');

  console.log((await (await api.get('usuarios')).json()).data);

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validaciones.validarCampos(e)) return;

    const rol = document.querySelector("#rol").value;
    const documento = document.querySelector("#documento").value;
    const contrasena = document.querySelector("#contrasena").value;

    try {


      const respuesta = await api.post('usuarios/login', {
        rol_id: parseInt(rol),
        documento: documento,
        contrasena: contrasena
      });

      if (!respuesta.ok) alert(`❌ ${respuesta.message || "Error desconocido."}`);

      alert(`✅ ${respuesta.message || "Inicio de sesión exitoso."}`);
      const usuario = (await respuesta.json()).data;
      // console.log(usuario);

      sessionStorage.setItem("usuario", JSON.stringify(usuario));
      window.location.href = `./Inventarios.html`;

    } catch (error) {
      console.error("Error al conectarse con la API:", error);
    }
  });
});
