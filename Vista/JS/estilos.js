const contrasena = document.querySelector("#contrasena");
const iconoPass = document.querySelector(".iconPass");

iconoPass.addEventListener("click", () => {
  if (contrasena.type == "password") {
    contrasena.type = "text";
    iconoPass.classList.remove("ri-eye-line");
    iconoPass.classList.add("ri-eye-close-line");
  }
  else {
    contrasena.type = "password"
    iconoPass.classList.remove("ri-eye-close-line");
    iconoPass.classList.add("ri-eye-line");
  }
})


