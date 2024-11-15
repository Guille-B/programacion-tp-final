<<<<<<< HEAD


function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
=======
   // Función para cargar contenido en el div home
   function mostrarContenido(ruta) {
    fetch(ruta)
        .then(res => {
            if (!res.ok) {
                throw new Error('la respuesta no fue exitosa');
>>>>>>> e1949c338adcd67f2af5cf59753ac3672efb5550
            }
            return res.text();
        })
        .then(data => {
            document.getElementById('home').innerHTML = data;
        })
<<<<<<< HEAD
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

=======
}
>>>>>>> e1949c338adcd67f2af5cf59753ac3672efb5550
