import * as validaciones from "./Validaciones.js";
import * as api from "./api.js";
import './estilos.js';

const manejarErrores = respuesta => {

  // Verificamos si hay un arreglo de errores
  if (Array.isArray(respuesta.errors) && respuesta.errors.length > 0) {
    // Recorremos cada error y extraemos el respuesta correspondiente
    const errores = respuesta.errors.map(error => `❌ ${error}`);

    // Mostramos todos los errores en un solo alert
    alert(`Errores al crear el usuario:\n${errores.join('\n')}`);

  } else alert(`❌ Error al crear el usuario: ${respuesta.message || "Error desconocido."}`);

  // Mostramos la respuesta completa en la consola
  console.warn("Respuesta del servidor:", respuesta);
}

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector(".form--signup");


  const campos = [...formulario].filter((elemento) => elemento.hasAttribute("required") && (elemento.tagName == "INPUT" || elemento.tagName == "SELECT"));

  campos.forEach((campo) => {
    campo.addEventListener("blur", validaciones.validarCampo);

    if (campo.name == "documento" || campo.name == "telefono") {
      campo.addEventListener("keydown", validaciones.validarNumero);
      if (campo.name == "documento") campo.addEventListener("keydown", event => validaciones.validarLimite(event, 11));
      if (campo.name == "telefono") campo.addEventListener("keydown", event => validaciones.validarLimite(event, 15));
    } else {
      if (campo.name == "nombres" || campo.name == "apellidos") {
        campo.addEventListener("keydown", event => validaciones.validarLimite(event, 100));
        campo.addEventListener("keydown", validaciones.validarTexto);
      }

      if (campo.name == "contrasena") {
        campo.addEventListener("keydown", event => validaciones.validarLimite(event, 30));
        campo.addEventListener("blur", () => validaciones.validarContrasena(campo));
      }

      if (campo.name == "correo") {
        campo.addEventListener("keydown", event => validaciones.validarLimite(event, 100));
        campo.addEventListener("blur", () => validaciones.validarCorreo(campo));
      }
    }
  });

  formulario.addEventListener("submit", async event => {
    event.preventDefault();

    if (!validaciones.validarCampos(event)) return;

    validaciones.datos.tipo_documento_id = parseInt(validaciones.datos.tipo_documento_id);
    validaciones.datos.genero_id = parseInt(validaciones.datos.genero_id);
    validaciones.datos.ficha_id = parseInt(validaciones.datos.ficha_id);
    validaciones.datos.rol_id = 2;
    delete validaciones.datos.programas;

    try {

      const respuesta = await api.post('usuarios', validaciones.datos);

      if (respuesta.ok) {
        alert("Usuario registrado exitosamente.");
        window.location.href = "./index.html";
      } else {
        const resultado = await respuesta.json();
        manejarErrores(resultado);
      }

    } catch (error) {
      console.error("Error inesperado:", error);
      alert("❌ Error al conectar con el servidor.");
    }
  });
});