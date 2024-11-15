import { admin } from "./Cuentas";

const admin = new admin();

// Obtener el modal
var popup = document.getElementById("loginPopup");

// Obtener el botón que abre el modal
var btn = document.getElementById("loginButton");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, se abre el modal
btn.onclick = function () {
    popup.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function () {
    popup.style.display = "none";
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}


admin.agregarUsuarios("admin", "contraseñaSegura123");

const iniciar = document.getElementById("enviar");
iniciar.addEventListener("click", validar);

function validar() {

    console.log("probando");
    
    const usuario = document.getElementById("username").value;
    const contraseña = document.getElementById("password").value;

    const usuariosList = admin.getUsuarios(); // Usa la instancia de banco
    const encontrado = usuariosList.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (encontrado) {

        alert("Bienvenido")
    } else {
        alert("usuario o contraseña incorrectos")
    }

}