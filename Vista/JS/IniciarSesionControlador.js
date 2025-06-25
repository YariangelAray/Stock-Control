import './estilos.js';
import * as validaciones from "./Validaciones.js";

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector('.form--signin');

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validaciones.validarCampos(e)) return;    

    const rol = document.querySelector("#rol").value;
    const documento = document.querySelector("#documento").value;
    const contrasena = document.querySelector("#contrasena").value;

    // console.log(`Rol: ${rol}, Documento: ${documento}, Contraseña: ${contrasena}`);

    try {

      const respuesta = await fetch(`http://localhost:8080/StockControl_API/api/usuarios/documento/${documento}`);

      if (respuesta.ok) {

        const usuario = (await respuesta.json()).data;
        const ingreso = true;
        console.log(usuario);

        if (usuario.contrasena !== contrasena) {
          alert("La contraseña es incorrecta.");
          ingreso = false;
        }
        if (usuario.rol_id != rol) {
          alert("El rol del usuario es incorrecto.");
          ingreso = false;
        }
        if (ingreso) {
          localStorage.setItem("usuario", JSON.stringify(usuario));
          window.location.href = `./Inventarios.html`;
        }

      } else {
        alert("El usuario no existe.");
      }

    } catch (error) {
      console.error("Error al conectarse con la API:", error);
    }
  });
});
