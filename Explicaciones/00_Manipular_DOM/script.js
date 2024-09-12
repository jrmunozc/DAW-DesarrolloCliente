// Obtener el botón y el párrafo del DOM
const boton = document.getElementById('mi-boton');
const parrafo = document.getElementById('mi-parrafo');

// Añadir un evento de clic al botón
boton.addEventListener('click', () => {
  // Cambiar el contenido del párrafo
  parrafo.textContent = 'El texto del párrafo ha sido cambiado con JavaScript!';
});
