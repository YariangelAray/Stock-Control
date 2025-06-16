document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector('.form--signin');

    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const rol = document.querySelector("#rol").value;
        const documento = document.querySelector("#documento").value;
        const contrasena = document.querySelector("#contrasena").value;
        
        console.log(`Rol: ${rol}, Documento: ${documento}, Contraseña: ${contrasena}`);        

        try {    
        
            const respuesta = await fetch(`http://localhost:8080/StockControl_API/api/usuarios/documento/${documento}`);

            if (respuesta.ok) {

                const usuario = await respuesta.json();
                console.log(usuario);
                
                if (usuario.contrasena === contrasena && usuario.rol_id == rol && usuario.documento === documento) {
                    localStorage.setItem("usuario", JSON.stringify(usuario));
                    window.location.href = `./Inventarios.html`;

                } else {
                    alert("Datos incorrectos o error al iniciar sesión.");
                }
            } else {
                alert("El usuario no existe.");
            }
        } catch (error) {
            console.error("Error al conectarse con la API:", error);
        }
    });
});
