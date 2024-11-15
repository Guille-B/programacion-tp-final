/*document.addEventListener("click", () => {
   const titulo = document.getElementById('titulo');
   const descripcion = document.getElementById('descripcion');
   const nuevoTitulo = document.getElementById("nuevoTitulo");
   const nuevaDescripcion = document.getElementById('nuevaDescripcion');
   const btnEditar = document.getElementById("editar");
   const btnGuardar = document.getElementById('guardar');

   if(btnEditar){
      btnEditar.addEventListener("click", mostrarForm);
   }
   if(btnGuardar){
      btnGuardar.addEventListener("click", guardarDatos);
   }
 
  

   // Cargar datos desde Local Storage
   function cargarDatos() {
       const guardarTitulo = localStorage.getItem('TituloTargeta');
       const guardarDescripcion = localStorage.getItem('DescripcionTargeta');
       if (guardarTitulo) {
           titulo.textContent = guardarTitulo;
           nuevoTitulo.value = guardarTitulo;
       }
       if (guardarDescripcion) {
           descripcion.textContent = guardarDescripcion;
           nuevaDescripcion.value = guardarDescripcion;
       }
   }

   function mostrarForm() {
       const oculto = document.querySelector(".form-edicion");
       oculto.classList.remove("oculto");
       nuevoTitulo.value = titulo.textContent;
       nuevaDescripcion.value = descripcion.textContent;

       console.log(titulo);
       console.log(descripcion);
   }

   function guardarDatos() {
       const tituloN = nuevoTitulo.value;
       const descripcionN = nuevaDescripcion.value;

       titulo.textContent = tituloN;
       descripcion.textContent = descripcionN;

       localStorage.setItem("TituloTargeta", tituloN);
       localStorage.setItem("DescripcionTargeta", descripcionN);
       const oculto = document.querySelector(".edit-form");
       oculto.classList.add("oculto");
   }
   cargarDatos();
});*/

function init() {
    const titulo = document.getElementById('titulo');
    const descripcion = document.getElementById('descripcion');
    const nuevoTitulo = document.getElementById("nuevoTitulo");
    const nuevaDescripcion = document.getElementById('nuevaDescripcion');
    const btnEditar = document.getElementById("editar");
    const btnGuardar = document.getElementById('guardar');

    if (btnEditar) {
        btnEditar.addEventListener("click", mostrarForm);
    }
    if (btnGuardar) {
        btnGuardar.addEventListener("click", guardarDatos);
    }

    // Cargar datos desde Local Storage
    cargarDatos();

    function cargarDatos() {
        const guardarTitulo = localStorage.getItem('TituloTargeta');
        const guardarDescripcion = localStorage.getItem('DescripcionTargeta');
        if (guardarTitulo) {
            titulo.textContent = guardarTitulo;
            nuevoTitulo.value = guardarTitulo;
        }
        if (guardarDescripcion) {
            descripcion.textContent = guardarDescripcion;
            nuevaDescripcion.value = guardarDescripcion;
        }
    }

    function mostrarForm() {
        const oculto = document.querySelector(".form-edicion");
        oculto.classList.remove("oculto");
        nuevoTitulo.value = titulo.textContent;
        nuevaDescripcion.value = descripcion.textContent;

        console.log(titulo);
        console.log(descripcion);
    }

    function guardarDatos() {
        const tituloN = nuevoTitulo.value;
        const descripcionN = nuevaDescripcion.value;

        titulo.textContent = tituloN;
        descripcion.textContent = descripcionN;

        localStorage.setItem("TituloTargeta", tituloN);
        localStorage.setItem("DescripcionTargeta", descripcionN);
        const oculto = document.querySelector(".form-edicion");
        oculto.classList.add("oculto");
    }
}

// Exportar la función init para que pueda ser llamada desde otro archivo
init();