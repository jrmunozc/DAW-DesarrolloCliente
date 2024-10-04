// Lista para almacenar los elementos que han sido ocultados
const hiddenElements = [];

// Función para ocultar un elemento cuando se hace clic
function hideElement(event) {
  const element = event.target;
  element.classList.add("hidden"); // Ocultar el elemento
  hiddenElements.push(element); // Añadirlo a la lista de ocultados
}

// Función para eliminar un elemento del DOM al hacer doble clic
function removeElement(event) {
  const element = event.target;
  element.remove(); // Eliminar el elemento del DOM
}

// Función para reaparecer todos los elementos ocultos (no eliminados)
function reaparecer() {
  hiddenElements.forEach((element) => {
    element.classList.remove("hidden"); // Mostrar el elemento
  });
  hiddenElements.length = 0; // Vaciar la lista de ocultados
}

// Añadir eventos de clic y doble clic a cada párrafo
document.querySelectorAll(".hideable").forEach((p) => {
  p.addEventListener("click", hideElement); // Ocultar al hacer clic
  p.addEventListener("dblclick", removeElement); // Eliminar al hacer doble clic
});

// Añadir el evento al botón "Reaparecer" para mostrar los elementos ocultos
document.getElementById("reaparecer-btn").addEventListener("click", reaparecer);
