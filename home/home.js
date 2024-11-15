 // Obtener elementos del DOM
 const editButton = document.getElementById("editar");
 const editForm = document.getElementById('edit-form');
 const cardTitle = document.getElementById('card-title');
 const cardDescription = document.getElementById('card-description');
 const editTitle = document.getElementById('edit-title');
 const editDescription = document.getElementById('edit-description');
 const saveButton = document.getElementById('save-button');

 // Cargar datos desde Local Storage
 function loadData() {
     const savedTitle = localStorage.getItem('cardTitle');
     const savedDescription = localStorage.getItem('cardDescription');
     if (savedTitle) {
         cardTitle.textContent = savedTitle;
         editTitle.value = savedTitle;
     }
     if (savedDescription) {
         cardDescription.textContent = savedDescription;
         editDescription.value = savedDescription;
     }
 }

 // Mostrar el formulario de edición
    editButton.addEventListener('click', () => {
     editForm.style.display = editForm.style.display === 'none' || editForm.style.display === '' ? 'block' : 'none';
     editTitle.value = cardTitle.textContent;
     editDescription.value = cardDescription.textContent;
 });

 // Guardar los cambios
 saveButton.addEventListener('click', () => {
     const newTitle = editTitle.value;
     const newDescription = editDescription.value;

     cardTitle.textContent = new Título;
     cardDescription.textContent = newDescription;

     localStorage.setItem('cardTitle', newTitle);
     localStorage.setItem('cardDescription', newDescription);

     editForm.style.display = 'none';
 });

 // Cargar datos al iniciar
 loadData();